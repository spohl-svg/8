import React, { useState } from 'react';
import { Volume2, VolumeX, Loader2, Sparkles } from 'lucide-react';
import { playPcmAudio, stopPcmAudio } from '../lib/audioPlayer';

interface ScreenVoiceNarratorProps {
  screenTitle: string;
  narrativeText: string;
  defaultVoice?: 'Zephyr' | 'Puck' | 'Charon' | 'Kore' | 'Fenrir';
}

export const ScreenVoiceNarrator: React.FC<ScreenVoiceNarratorProps> = ({
  screenTitle,
  narrativeText,
  defaultVoice = 'Zephyr',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedVoice, setSelectedVoice] = useState<'Zephyr' | 'Puck' | 'Charon' | 'Kore' | 'Fenrir'>(defaultVoice);

  const handleToggleVoice = async () => {
    if (isPlaying) {
      stopPcmAudio();
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/ai/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `Screen Briefing for ${screenTitle}. ${narrativeText}`,
          voiceName: selectedVoice,
          style: 'Executive deep tech captain, steady, confident, authoritative high-desert cadence',
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setIsLoading(false);
      setIsPlaying(true);
      await playPcmAudio(data.base64Audio, data.sampleRate || 24000);
      setIsPlaying(false);
    } catch (err: any) {
      console.error('Speech error:', err);
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 px-3 rounded-xl bg-stone-900/90 border border-amber-500/30 text-xs font-mono shadow-lg">
      <button
        onClick={handleToggleVoice}
        disabled={isLoading}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
          isPlaying
            ? 'bg-rose-500 text-white animate-pulse'
            : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40'
        }`}
        title="Narrate screen intelligence"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" /> Synthesizing Voice...
          </>
        ) : isPlaying ? (
          <>
            <VolumeX className="w-3.5 h-3.5" /> Stop Briefing
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-amber-400" /> Executive Voice Briefing
          </>
        )}
      </button>

      {/* Voice Persona Selector */}
      <select
        value={selectedVoice}
        onChange={(e) => setSelectedVoice(e.target.value as any)}
        className="bg-stone-950 border border-stone-800 rounded-lg px-2 py-1 text-[11px] text-stone-300 focus:outline-none focus:border-amber-500 cursor-pointer"
      >
        <option value="Zephyr">Voice: Zephyr (Chief Strategist)</option>
        <option value="Fenrir">Voice: Fenrir (DevilsQC Auditor)</option>
        <option value="Puck">Voice: Puck (COCO Marketing)</option>
        <option value="Kore">Voice: Kore (Telemetry Anchor)</option>
        <option value="Charon">Voice: Charon (Deep Subsurface)</option>
      </select>
    </div>
  );
};
