/**
 * Audio helper to play raw PCM 24000Hz 1-channel audio chunks returned by Gemini TTS
 */
let audioCtx: AudioContext | null = null;

export const playPcmAudio = async (base64Audio: string, sampleRate = 24000) => {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }

  if (audioCtx.state === 'suspended') {
    await audioCtx.resume();
  }

  const binaryString = atob(base64Audio);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // 16-bit PCM little endian
  const int16Array = new Int16Array(bytes.buffer);
  const float32Array = new Float32Array(int16Array.length);
  for (let i = 0; i < int16Array.length; i++) {
    float32Array[i] = int16Array[i] / 32768;
  }

  const buffer = audioCtx.createBuffer(1, float32Array.length, sampleRate);
  buffer.getChannelData(0).set(float32Array);

  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start();

  return new Promise<void>((resolve) => {
    source.onended = () => resolve();
  });
};

export const stopPcmAudio = () => {
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
};
