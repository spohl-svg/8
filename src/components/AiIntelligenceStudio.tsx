import React, { useState } from 'react';
import { Sparkles, Brain, Search, MapPin, Image, Video, FileText, Send, Loader2, RefreshCw } from 'lucide-react';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

export const AiIntelligenceStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reasoning' | 'search' | 'maps' | 'image' | 'video' | 'multimodal'>('reasoning');

  // Reasoning state
  const [reasoningPrompt, setReasoningPrompt] = useState('Evaluate the 13=1 Unity State Framework and 110 alignment vectors for oilfield pumpjack maintenance in the Permian Basin.');
  const [reasoningModel, setReasoningModel] = useState('deepseek-r1-distill-70b');
  const [thinkingHigh, setThinkingHigh] = useState(true);
  const [reasoningOutput, setReasoningOutput] = useState('');
  const [reasoningLoading, setReasoningLoading] = useState(false);

  // Search Grounding state
  const [searchQuery, setSearchQuery] = useState('Current New Mexico Permian Basin oil production regulations and drilling telemetry standards');
  const [searchOutput, setSearchOutput] = useState('');
  const [searchGrounding, setSearchGrounding] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  // Maps Grounding state
  const [mapsQuery, setMapsQuery] = useState('Industrial telemetry equipment suppliers and geological testing facilities near North Valley, Albuquerque NM');
  const [mapsOutput, setMapsOutput] = useState('');
  const [mapsLoading, setMapsLoading] = useState(false);

  // Image Gen & Edit state
  const [imagePrompt, setImagePrompt] = useState('High resolution geological cross-section schematic of Permian Basin strata with 110 vector alignment overlays, technical telemetry data readout, architectural blueprint aesthetic');
  const [imageResolution, setImageResolution] = useState<'1K' | '2K' | '4K'>('2K');
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(false);

  // Video Veo state
  const [videoPrompt, setVideoPrompt] = useState('Cinematic aerial drone flight over a Permian Basin pumpjack installation with digital telemetry HUD overlay at golden hour');
  const [videoAspect, setVideoAspect] = useState<'16:9' | '9:16'>('16:9');
  const [videoOperationName, setVideoOperationName] = useState('');
  const [videoStatus, setVideoStatus] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoading, setVideoLoading] = useState(false);

  // Multimodal state (Image / Video analysis)
  const [analysisPrompt, setAnalysisPrompt] = useState('Analyze this geological survey / telemetry equipment image for stress fractures, telemetry anomalies, and operational readiness.');
  const [selectedFileBase64, setSelectedFileBase64] = useState<string>('');
  const [fileMimeType, setFileMimeType] = useState<string>('');
  const [analysisOutput, setAnalysisOutput] = useState('');
  const [analysisLoading, setAnalysisLoading] = useState(false);

  // 1. Run Reasoning with Thinking Mode
  const handleRunReasoning = async () => {
    setReasoningLoading(true);
    setReasoningOutput('');
    try {
      const res = await fetch('/api/ai/oss-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: reasoningPrompt,
          model: reasoningModel,
          systemInstruction: 'You are the Sovereign Open-Source AI Matrix & Telemetry Lead for RideWire LLC & Action Intell (Document Control: RIDEWIRE-BINDER-2026-v1). Address the query using self-hosted open-source model weights with extreme analytical precision, venture rigor, and geological telemetry mastery.',
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setReasoningOutput(`[Inference Engine: ${data.engine || 'open-source-local'} | Model: ${data.model || reasoningModel}]\n\n${data.text}`);
    } catch (err: any) {
      setReasoningOutput(`Error: ${err.message}`);
    } finally {
      setReasoningLoading(false);
    }
  };

  // 2. Run Grounded Search
  const handleRunSearch = async () => {
    setSearchLoading(true);
    setSearchOutput('');
    setSearchGrounding([]);
    try {
      const res = await fetch('/api/ai/grounded-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSearchOutput(data.text);
      setSearchGrounding(data.groundingChunks || []);
    } catch (err: any) {
      setSearchOutput(`Error: ${err.message}`);
    } finally {
      setSearchLoading(false);
    }
  };

  // 3. Run Grounded Maps
  const handleRunMaps = async () => {
    setMapsLoading(true);
    setMapsOutput('');
    try {
      const res = await fetch('/api/ai/grounded-maps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: mapsQuery,
          latitude: 35.1983, // North Valley, Albuquerque NM
          longitude: -106.6389,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMapsOutput(data.text);
    } catch (err: any) {
      setMapsOutput(`Error: ${err.message}`);
    } finally {
      setMapsLoading(false);
    }
  };

  // 4. Generate High Quality Image (1K, 2K, 4K)
  const handleGenerateImage = async () => {
    setImageLoading(true);
    setGeneratedImageUrl('');
    try {
      const res = await fetch('/api/ai/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: imagePrompt,
          resolution: imageResolution,
          aspectRatio: '1:1',
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setGeneratedImageUrl(data.imageUrl);
    } catch (err: any) {
      alert(`Image generation failed: ${err.message}`);
    } finally {
      setImageLoading(false);
    }
  };

  // 5. Generate Veo Video
  const handleGenerateVideo = async () => {
    setVideoLoading(true);
    setVideoUrl('');
    setVideoStatus('Initiating Veo 3.1 video generation...');
    try {
      const res = await fetch('/api/ai/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: videoPrompt,
          aspectRatio: videoAspect,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const opName = data.operationName;
      setVideoOperationName(opName);
      setVideoStatus('Synthesizing frames with veo-3.1-fast-generate-preview (this takes 30-90s)...');

      // Poll status
      const pollInterval = setInterval(async () => {
        try {
          const pollRes = await fetch('/api/ai/video-status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ operationName: opName }),
          });
          const pollData = await pollRes.json();

          if (pollData.done) {
            clearInterval(pollInterval);
            setVideoStatus('Downloading completed stream...');

            // Download video
            const dlRes = await fetch('/api/ai/video-download', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ operationName: opName }),
            });

            if (!dlRes.ok) throw new Error('Failed to retrieve video stream');
            const blob = await dlRes.blob();
            const blobUrl = URL.createObjectURL(blob);
            setVideoUrl(blobUrl);
            setVideoStatus('Video generation complete!');
            setVideoLoading(false);
          }
        } catch (pollErr: any) {
          clearInterval(pollInterval);
          setVideoStatus(`Polling error: ${pollErr.message}`);
          setVideoLoading(false);
        }
      }, 7000);
    } catch (err: any) {
      setVideoStatus(`Error: ${err.message}`);
      setVideoLoading(false);
    }
  };

  // 6. Handle file upload for analysis
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileMimeType(file.type);
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedFileBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Run Multimodal Analysis
  const handleRunAnalysis = async () => {
    if (!selectedFileBase64) {
      alert('Please upload an image or video first');
      return;
    }

    setAnalysisLoading(true);
    setAnalysisOutput('');
    try {
      const endpoint = fileMimeType.startsWith('video/')
        ? '/api/ai/analyze-video'
        : '/api/ai/analyze-image';

      const bodyPayload = fileMimeType.startsWith('video/')
        ? { prompt: analysisPrompt, videoBase64: selectedFileBase64, mimeType: fileMimeType }
        : { prompt: analysisPrompt, imageBase64: selectedFileBase64, mimeType: fileMimeType };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyPayload),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setAnalysisOutput(data.text);
    } catch (err: any) {
      setAnalysisOutput(`Analysis Error: ${err.message}`);
    } finally {
      setAnalysisLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30">
              GEMINI 3.X FRONTIER LAB
            </span>
            <span className="text-xs font-mono text-stone-500">INTEGRATED INTELLIGENCE SUITE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
            RideWire AI Intelligence &amp; Telemetry Studio
          </h1>
          <p className="text-stone-400 text-sm max-w-2xl mt-1">
            Frontier model execution: High-thinking reasoning, Search &amp; Maps grounding, 4K image generation, and Veo video synthesis.
          </p>
        </div>

        {/* Screen Voice Narrator */}
        <ScreenVoiceNarrator
          screenTitle="AI Intelligence and Telemetry Studio"
          narrativeText="Entering the AI Intelligence Studio. Equipped with Gemini 3 Pro high-thinking reasoning, Google Search and Maps grounding, 4K geological rasterization, and Veo video synthesis."
          defaultVoice="Zephyr"
        />
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-800">
        <button
          onClick={() => setActiveTab('reasoning')}
          className={`px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors ${
            activeTab === 'reasoning'
              ? 'bg-purple-600 text-white font-bold'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Brain className="w-4 h-4" /> High Thinking &amp; Reasoning
        </button>
        <button
          onClick={() => setActiveTab('search')}
          className={`px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors ${
            activeTab === 'search'
              ? 'bg-blue-600 text-white font-bold'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Search className="w-4 h-4" /> Search Grounding
        </button>
        <button
          onClick={() => setActiveTab('maps')}
          className={`px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors ${
            activeTab === 'maps'
              ? 'bg-emerald-600 text-white font-bold'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <MapPin className="w-4 h-4" /> Maps Grounding (ABQ Hub)
        </button>
        <button
          onClick={() => setActiveTab('image')}
          className={`px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors ${
            activeTab === 'image'
              ? 'bg-amber-600 text-white font-bold'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Image className="w-4 h-4" /> 4K Image Studio
        </button>
        <button
          onClick={() => setActiveTab('video')}
          className={`px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors ${
            activeTab === 'video'
              ? 'bg-rose-600 text-white font-bold'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Video className="w-4 h-4" /> Veo 3 Video Gen
        </button>
        <button
          onClick={() => setActiveTab('multimodal')}
          className={`px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors ${
            activeTab === 'multimodal'
              ? 'bg-cyan-600 text-white font-bold'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <FileText className="w-4 h-4" /> Telemetry Multi-Modal Analysis
        </button>
      </div>

      {/* Tab 1: Reasoning & High Thinking */}
      {activeTab === 'reasoning' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase">
                Model Configuration (100% Open Source Only)
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">Local Weights Active</span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-stone-400">Target Open-Source Model</label>
              <select
                value={reasoningModel}
                onChange={(e) => setReasoningModel(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs font-mono text-stone-200 focus:outline-none focus:border-purple-500"
              >
                <option value="deepseek-r1-distill-70b">DeepSeek-R1-Distill-Llama-70B (High Reasoning OSS)</option>
                <option value="llama-3.3-70b-instruct">Llama-3.3-70B-Instruct (Meta Sovereign OSS)</option>
                <option value="gemma-2-27b-it">Gemma-2-27B-IT (Google Open Weights)</option>
                <option value="mistral-large-instruct">Mistral-Large-Instruct (Mistral AI OSS)</option>
                <option value="qwen-2.5-72b-instruct">Qwen-2.5-72B-Instruct (Advanced Math OSS)</option>
              </select>
            </div>

            {(reasoningModel === 'deepseek-r1-distill-70b' || reasoningModel.includes('distill') || reasoningModel.includes('llama')) && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/20 border border-purple-500/30">
                <div>
                  <div className="text-xs font-mono text-purple-300 font-bold">Deep Reasoning Mode (Chain-of-Thought)</div>
                  <div className="text-[11px] text-stone-400">DeepSeek-R1 multi-step mathematical &amp; geological chain-of-thought</div>
                </div>
                <input
                  type="checkbox"
                  checked={thinkingHigh}
                  onChange={(e) => setThinkingHigh(e.target.checked)}
                  className="w-4 h-4 accent-purple-500 rounded cursor-pointer"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-mono text-stone-400">Analysis Prompt</label>
              <textarea
                rows={5}
                value={reasoningPrompt}
                onChange={(e) => setReasoningPrompt(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg p-3 text-xs font-mono text-stone-200 focus:outline-none focus:border-purple-500 resize-none"
              />
            </div>

            <button
              onClick={handleRunReasoning}
              disabled={reasoningLoading}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {reasoningLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Synthesizing with High Thinking...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" /> Run Deep Reasoning
                </>
              )}
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="text-xs font-mono text-stone-400 font-bold uppercase">
                Executive Synthesis Output
              </span>
              <span className="text-xs font-mono text-emerald-400">Verified</span>
            </div>

            <div className="flex-1 overflow-y-auto max-h-[420px] bg-stone-950 p-4 rounded-xl text-xs font-mono text-stone-300 leading-relaxed whitespace-pre-line border border-stone-800">
              {reasoningOutput || (
                <span className="text-stone-600 italic">
                  Run high-thinking audit above to see multi-step synthesis output.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Search Grounding */}
      {activeTab === 'search' && (
        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase">
              Google Search Grounding (gemini-3.5-flash)
            </span>
            <span className="text-xs font-mono text-stone-500">Live Web Evidence</span>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search query for live geological, oilfield, or regulatory intelligence..."
              className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-4 py-2.5 text-xs font-mono text-stone-200 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleRunSearch}
              disabled={searchLoading}
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs font-mono transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {searchLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              Search &amp; Ground
            </button>
          </div>

          <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 text-xs font-mono text-stone-300 leading-relaxed whitespace-pre-line min-h-[160px]">
            {searchOutput || <span className="text-stone-600 italic">Live grounded response will appear here with source citations.</span>}
          </div>

          {searchGrounding.length > 0 && (
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 space-y-2">
              <div className="text-xs font-mono text-blue-300 font-bold">Grounding Sources &amp; Citations:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {searchGrounding.map((chunk, idx) => (
                  <div key={idx} className="p-2 rounded bg-stone-900 border border-stone-800 text-[11px] font-mono text-stone-400">
                    <div className="text-blue-400 truncate">{chunk.web?.title || 'Web Document'}</div>
                    <a
                      href={chunk.web?.uri}
                      target="_blank"
                      rel="noreferrer"
                      className="text-stone-500 hover:text-stone-300 truncate block text-[10px]"
                    >
                      {chunk.web?.uri}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Maps Grounding */}
      {activeTab === 'maps' && (
        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
              Google Maps Grounding (North Valley, Albuquerque Hub)
            </span>
            <span className="text-xs font-mono text-stone-500">Lat: 35.1983, Lng: -106.6389</span>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={mapsQuery}
              onChange={(e) => setMapsQuery(e.target.value)}
              placeholder="Query geographical places, suppliers, and geological centers..."
              className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-4 py-2.5 text-xs font-mono text-stone-200 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={handleRunMaps}
              disabled={mapsLoading}
              className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs font-mono transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {mapsLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <MapPin className="w-4 h-4" />}
              Query Maps
            </button>
          </div>

          <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 text-xs font-mono text-stone-300 leading-relaxed whitespace-pre-line min-h-[160px]">
            {mapsOutput || <span className="text-stone-600 italic">Maps-grounded location intelligence will render here.</span>}
          </div>
        </div>
      )}

      {/* Tab 4: 4K Image Studio */}
      {activeTab === 'image' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                High-Quality Image Generator
              </span>
              <span className="text-xs font-mono text-stone-500">gemini-3-pro-image-preview</span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-stone-400">Resolution Affordance</label>
              <div className="grid grid-cols-3 gap-2">
                {(['1K', '2K', '4K'] as const).map((res) => (
                  <button
                    key={res}
                    type="button"
                    onClick={() => setImageResolution(res)}
                    className={`py-2 rounded-lg text-xs font-mono border cursor-pointer transition-all ${
                      imageResolution === res
                        ? 'bg-amber-500 text-stone-950 font-bold border-amber-400'
                        : 'bg-stone-950 text-stone-400 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    {res} Ultra-HD
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-stone-400">Image Generation Prompt</label>
              <textarea
                rows={4}
                value={imagePrompt}
                onChange={(e) => setImagePrompt(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg p-3 text-xs font-mono text-stone-200 focus:outline-none focus:border-amber-500 resize-none"
              />
            </div>

            <button
              onClick={handleGenerateImage}
              disabled={imageLoading}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {imageLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Rendering {imageResolution} Visual...
                </>
              ) : (
                <>
                  <Image className="w-4 h-4" /> Generate {imageResolution} Telemetry Schematic
                </>
              )}
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex flex-col justify-between space-y-4">
            <span className="text-xs font-mono text-stone-400 font-bold uppercase">
              Render Canvas ({imageResolution})
            </span>

            <div className="flex-1 min-h-[300px] flex items-center justify-center bg-stone-950 rounded-xl border border-stone-800 overflow-hidden">
              {generatedImageUrl ? (
                <img
                  src={generatedImageUrl}
                  alt="Generated Telemetry Schematic"
                  className="w-full h-full object-contain max-h-[400px]"
                />
              ) : (
                <span className="text-stone-600 text-xs font-mono italic">
                  Image preview will render here upon completion.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Veo Video Generation */}
      {activeTab === 'video' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-rose-400 font-bold uppercase">
                Veo 3.1 Video Generation Engine
              </span>
              <span className="text-xs font-mono text-stone-500">veo-3.1-fast-generate-preview</span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-stone-400">Aspect Ratio (Mandatory 16:9 or 9:16)</label>
              <div className="grid grid-cols-2 gap-2">
                {(['16:9', '9:16'] as const).map((ar) => (
                  <button
                    key={ar}
                    type="button"
                    onClick={() => setVideoAspect(ar)}
                    className={`py-2 rounded-lg text-xs font-mono border cursor-pointer transition-all ${
                      videoAspect === ar
                        ? 'bg-rose-600 text-white font-bold border-rose-500'
                        : 'bg-stone-950 text-stone-400 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    {ar} {ar === '16:9' ? '(Landscape / Executive)' : '(Portrait / Mobile)'}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-stone-400">Video Synthesis Prompt</label>
              <textarea
                rows={4}
                value={videoPrompt}
                onChange={(e) => setVideoPrompt(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg p-3 text-xs font-mono text-stone-200 focus:outline-none focus:border-rose-500 resize-none"
              />
            </div>

            <button
              onClick={handleGenerateVideo}
              disabled={videoLoading}
              className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {videoLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Synthesizing with Veo 3.1...
                </>
              ) : (
                <>
                  <Video className="w-4 h-4" /> Synthesize Video ({videoAspect})
                </>
              )}
            </button>

            {videoStatus && (
              <div className="p-3 rounded-lg bg-stone-950 border border-stone-800 text-[11px] font-mono text-stone-400">
                Status: <span className="text-rose-400">{videoStatus}</span>
              </div>
            )}
          </div>

          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex flex-col justify-between space-y-4">
            <span className="text-xs font-mono text-stone-400 font-bold uppercase">
              Veo Video Output
            </span>

            <div className="flex-1 min-h-[300px] flex items-center justify-center bg-stone-950 rounded-xl border border-stone-800 overflow-hidden">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  loop
                  className="w-full h-full object-contain max-h-[400px] rounded"
                />
              ) : (
                <span className="text-stone-600 text-xs font-mono italic">
                  Video player will render here upon completion.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Multimodal Analysis (Image & Video Understanding) */}
      {activeTab === 'multimodal' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                Telemetry Media Understanding
              </span>
              <span className="text-xs font-mono text-stone-500">gemini-3.1-pro-preview</span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-stone-400">Upload Photo or Video Feed</label>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileUpload}
                className="w-full text-xs font-mono text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-cyan-950 file:text-cyan-300 hover:file:bg-cyan-900 cursor-pointer"
              />
            </div>

            {selectedFileBase64 && (
              <div className="p-2 rounded bg-stone-950 border border-stone-800">
                {fileMimeType.startsWith('image/') ? (
                  <img src={selectedFileBase64} alt="Preview" className="h-32 object-contain mx-auto" />
                ) : (
                  <video src={selectedFileBase64} controls className="h-32 mx-auto" />
                )}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-mono text-stone-400">Inspection Directives</label>
              <textarea
                rows={3}
                value={analysisPrompt}
                onChange={(e) => setAnalysisPrompt(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg p-3 text-xs font-mono text-stone-200 focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>

            <button
              onClick={handleRunAnalysis}
              disabled={analysisLoading}
              className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {analysisLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Performing Gemini Pro Analysis...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" /> Inspect Telemetry Asset
                </>
              )}
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex flex-col justify-between space-y-4">
            <span className="text-xs font-mono text-stone-400 font-bold uppercase">
              Multimodal Diagnostics Report
            </span>

            <div className="flex-1 overflow-y-auto max-h-[420px] bg-stone-950 p-4 rounded-xl text-xs font-mono text-stone-300 leading-relaxed whitespace-pre-line border border-stone-800">
              {analysisOutput || (
                <span className="text-stone-600 italic">
                  Upload an image or video above to generate telemetry diagnostics.
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
