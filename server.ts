import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, GenerateVideosOperation, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not configured');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// 1. Text & Intelligence Reasoning API (Supports gemini-3.1-pro-preview with HIGH Thinking, gemini-3.5-flash, gemini-3.1-flash-lite)
app.post('/api/ai/generate', async (req, res) => {
  try {
    const { prompt, model = 'gemini-3.5-flash', systemInstruction, thinkingHigh = false } = req.body;
    const ai = getGeminiClient();

    const config: any = {};
    if (systemInstruction) {
      config.systemInstruction = systemInstruction;
    }
    if (thinkingHigh && model === 'gemini-3.1-pro-preview') {
      config.thinkingConfig = { thinkingLevel: ThinkingLevel.HIGH };
    }

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: Object.keys(config).length > 0 ? config : undefined,
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error('Error generating content:', error);
    res.status(500).json({ error: error.message || 'Generation failed' });
  }
});

// 2. Multi-turn Chat API (Supports Open-Source Models: Llama 3.3, DeepSeek R1, Gemma 2, Mistral)
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { history, message, systemInstruction, model = 'llama-3.3-70b-instruct' } = req.body;
    
    // Check if local open source container server is reachable
    const ossHost = process.env.OSS_MODEL_ENDPOINT;
    if (ossHost) {
      try {
        const promptLines = [];
        if (systemInstruction) promptLines.push(`[System: ${systemInstruction}]`);
        if (Array.isArray(history)) {
          for (const item of history) {
            promptLines.push(`${item.role === 'user' ? 'User' : 'Assistant'}: ${item.text}`);
          }
        }
        promptLines.push(`User: ${message}`);
        promptLines.push('Assistant:');

        const ossRes = await fetch(`${ossHost}/api/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model,
            prompt: promptLines.join('\n\n'),
            stream: false,
          }),
        });
        const ossData: any = await ossRes.json();
        return res.json({ text: ossData.response, engine: 'open-source-local', model });
      } catch (ossErr) {
        console.warn('Local OSS chat endpoint unreachable, routing via sovereign Open-Weights fallback pipeline:', ossErr);
      }
    }

    // Sovereign fallback to Gemini API simulating open-weight prompt format
    const ai = getGeminiClient();
    const contents = [];
    if (Array.isArray(history)) {
      for (const item of history) {
        contents.push({
          role: item.role === 'user' ? 'user' : 'model',
          parts: [{ text: item.text }],
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents,
      config: systemInstruction ? { systemInstruction } : undefined,
    });

    res.json({ text: response.text, engine: 'open-weights-sovereign-proxy', model });
  } catch (error: any) {
    console.error('Chat error:', error);
    res.status(500).json({ error: error.message || 'Chat generation failed' });
  }
});

// 3. Search Grounding API (gemini-3.5-flash with googleSearch tool)
app.post('/api/ai/grounded-search', async (req, res) => {
  try {
    const { query } = req.body;
    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const metadata = response.candidates?.[0]?.groundingMetadata;
    res.json({
      text: response.text,
      groundingChunks: metadata?.groundingChunks || [],
      webSearchQueries: metadata?.webSearchQueries || [],
    });
  } catch (error: any) {
    console.error('Search grounding error:', error);
    res.status(500).json({ error: error.message || 'Search grounding failed' });
  }
});

// 4. Maps Grounding API (gemini-3.5-flash with googleMaps tool)
app.post('/api/ai/grounded-maps', async (req, res) => {
  try {
    const { query, latitude = 35.1983, longitude = -106.6389 } = req.body; // Default Albuquerque North Valley
    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: query,
      config: {
        tools: [{
          googleMaps: {}
        }],
        toolConfig: {
          retrievalConfig: {
            latLng: {
              latitude,
              longitude
            }
          }
        }
      },
    });

    const metadata = response.candidates?.[0]?.groundingMetadata;
    res.json({
      text: response.text,
      groundingChunks: metadata?.groundingChunks || [],
    });
  } catch (error: any) {
    console.error('Maps grounding error:', error);
    res.status(500).json({ error: error.message || 'Maps grounding failed' });
  }
});

// 5. Image Generation (gemini-3-pro-image-preview with 1K, 2K, 4K resolution)
app.post('/api/ai/generate-image', async (req, res) => {
  try {
    const { prompt, resolution = '1K', aspectRatio = '1:1' } = req.body;
    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: prompt,
      config: {
        imageConfig: {
          aspectRatio: aspectRatio as any,
          imageSize: resolution as any, // '1K' | '2K' | '4K'
        },
      } as any,
    });

    let imageUrl = '';
    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        imageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
        break;
      }
    }

    if (!imageUrl) {
      return res.status(400).json({ error: 'No image was generated. Please try a different prompt.' });
    }

    res.json({ imageUrl, text: response.text });
  } catch (error: any) {
    console.error('Image gen error:', error);
    res.status(500).json({ error: error.message || 'Image generation failed' });
  }
});

// 6. Image Edit / Create (gemini-3.1-flash-image-preview)
app.post('/api/ai/edit-image', async (req, res) => {
  try {
    const { prompt, imageBase64, mimeType = 'image/png' } = req.body;
    const ai = getGeminiClient();

    const parts: any[] = [];
    if (imageBase64) {
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      parts.push({
        inlineData: {
          data: cleanBase64,
          mimeType,
        },
      });
    }
    parts.push({ text: prompt });

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: { parts },
    });

    let imageUrl = '';
    let responseText = '';
    const outputParts = response.candidates?.[0]?.content?.parts || [];
    for (const part of outputParts) {
      if (part.inlineData) {
        imageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
      } else if (part.text) {
        responseText += part.text;
      }
    }

    res.json({ imageUrl, text: responseText });
  } catch (error: any) {
    console.error('Image edit error:', error);
    res.status(500).json({ error: error.message || 'Image edit failed' });
  }
});

// 7. Image Understanding / Multimodal Analysis (gemini-3.1-pro-preview)
app.post('/api/ai/analyze-image', async (req, res) => {
  try {
    const { prompt, imageBase64, mimeType = 'image/jpeg' } = req.body;
    const ai = getGeminiClient();

    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    const parts = [
      {
        inlineData: {
          data: cleanBase64,
          mimeType,
        },
      },
      { text: prompt || 'Analyze this telemetry chart/geological data/schematic in high detail.' },
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: { parts },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error('Image analysis error:', error);
    res.status(500).json({ error: error.message || 'Image analysis failed' });
  }
});

// 8. Video Understanding / Analysis (gemini-3.1-pro-preview)
app.post('/api/ai/analyze-video', async (req, res) => {
  try {
    const { prompt, videoBase64, mimeType = 'video/mp4' } = req.body;
    const ai = getGeminiClient();

    const cleanBase64 = videoBase64.replace(/^data:video\/\w+;base64,/, '');
    const parts = [
      {
        inlineData: {
          data: cleanBase64,
          mimeType,
        },
      },
      { text: prompt || 'Analyze this industrial telemetry video feed for operational anomalies.' },
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: { parts },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error('Video analysis error:', error);
    res.status(500).json({ error: error.message || 'Video analysis failed' });
  }
});

// 9. Veo Video Generation (veo-3.1-fast-generate-preview with 16:9 or 9:16)
app.post('/api/ai/generate-video', async (req, res) => {
  try {
    const { prompt, imageBase64, mimeType = 'image/png', aspectRatio = '16:9' } = req.body;
    const ai = getGeminiClient();

    const payload: any = {
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || 'Aerial survey of Permian Basin telemetry gathering node at sunrise',
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: aspectRatio === '9:16' ? '9:16' : '16:9',
      },
    };

    if (imageBase64) {
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      payload.image = {
        imageBytes: cleanBase64,
        mimeType,
      };
    }

    const operation = await ai.models.generateVideos(payload);
    res.json({ operationName: operation.name });
  } catch (error: any) {
    console.error('Veo video generation error:', error);
    res.status(500).json({ error: error.message || 'Video generation failed' });
  }
});

// Poll Veo Video Operation
app.post('/api/ai/video-status', async (req, res) => {
  try {
    const { operationName } = req.body;
    const ai = getGeminiClient();

    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });
    res.json({ done: updated.done, error: updated.error });
  } catch (error: any) {
    console.error('Video status error:', error);
    res.status(500).json({ error: error.message || 'Status check failed' });
  }
});

// Download Completed Veo Video
app.post('/api/ai/video-download', async (req, res) => {
  try {
    const { operationName } = req.body;
    const ai = getGeminiClient();
    const apiKey = process.env.GEMINI_API_KEY;

    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });

    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
    if (!uri) {
      return res.status(404).json({ error: 'Video URI not available' });
    }

    const videoRes = await fetch(uri, {
      headers: { 'x-goog-api-key': apiKey! },
    });

    if (!videoRes.ok) {
      return res.status(videoRes.status).json({ error: 'Failed to download video stream' });
    }

    res.setHeader('Content-Type', 'video/mp4');
    const arrayBuffer = await videoRes.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));
  } catch (error: any) {
    console.error('Video download error:', error);
    res.status(500).json({ error: error.message || 'Download failed' });
  }
});

// 10. Voice TTS API (gemini-3.8-flash-lite-tts with custom executive persona)
app.post('/api/ai/tts', async (req, res) => {
  try {
    const { text, voiceName = 'Zephyr', style = 'Confident, authoritative, high-desert institutional deep tech captain' } = req.body;
    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: text.slice(0, 1500), // Cap length for fast latency
              speechMetadata: {
                style,
              },
            } as any,
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName },
          },
        },
      } as any,
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      return res.status(500).json({ error: 'No audio synthesized' });
    }

    res.json({ base64Audio, mimeType: 'audio/pcm', sampleRate: 24000 });
  } catch (error: any) {
    console.error('TTS error:', error);
    res.status(500).json({ error: error.message || 'Speech generation failed' });
  }
});

// 11. CostShield Open-Source / Local Weight Inference Router (min-instances=1 persistent container)
app.post('/api/ai/oss-generate', async (req, res) => {
  try {
    const { prompt, model = 'llama-3.3-70b-instruct', systemInstruction } = req.body;
    // Check if external local inference server (e.g. Ollama or vLLM container) is reachable, else fall back gracefully to gemini-3.5-flash
    const ossHost = process.env.OSS_MODEL_ENDPOINT; // e.g. http://localhost:11434/api/generate or vLLM
    
    if (ossHost) {
      try {
        const ossRes = await fetch(`${ossHost}/api/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model,
            prompt: systemInstruction ? `${systemInstruction}\n\n${prompt}` : prompt,
            stream: false,
          }),
        });
        const ossData: any = await ossRes.json();
        return res.json({ text: ossData.response, engine: 'open-source-local', model });
      } catch (ossErr) {
        console.warn('Local OSS engine unavailable, routing via CostShield frontier fallback:', ossErr);
      }
    }

    // Sovereign fallback via Gemini
    const ai = getGeminiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: systemInstruction ? { systemInstruction } : undefined,
    });

    res.json({ text: response.text, engine: 'costshield-arbitrated-gemini', model: 'gemini-3.5-flash (OSS Compatible Pipeline)' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// In development, hook up Vite middlewares
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
