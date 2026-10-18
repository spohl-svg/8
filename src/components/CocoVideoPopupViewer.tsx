import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Video,
  Eye,
  Radio,
  ExternalLink,
  Layers,
  Sparkles,
  RefreshCw,
  Film,
  Zap,
  Activity
} from 'lucide-react';
import { COCO_VIDEOS_DATA, CocoVideoAsset } from '../data/cocoVideos';

interface CocoVideoPopupViewerProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideoIndex?: number;
}

export const CocoVideoPopupViewer: React.FC<CocoVideoPopupViewerProps> = ({
  isOpen,
  onClose,
  initialVideoIndex = 0,
}) => {
  const [videos] = useState<CocoVideoAsset[]>(COCO_VIDEOS_DATA);
  const [currentIndex, setCurrentIndex] = useState<number>(initialVideoIndex);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [playbackEngine, setPlaybackEngine] = useState<'video' | 'hud-motion'>('video');
  const [motionFrame, setMotionFrame] = useState<number>(0);
  const [videoHasError, setVideoHasError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentVideo = videos[currentIndex] || videos[0];

  useEffect(() => {
    setCurrentIndex(initialVideoIndex);
    setVideoHasError(false);
  }, [initialVideoIndex, isOpen]);

  // When changing video, reset error and attempt play
  useEffect(() => {
    setVideoHasError(false);
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Autoplay restriction or error, switching engine preview:', err);
            // Don't crash, let user click or fall back to HUD
          });
      }
    }
  }, [currentIndex]);

  // Telemetry HUD Wave Generator for 100% Guaranteed Motion
  useEffect(() => {
    let animId: number;
    const loop = () => {
      setMotionFrame((prev) => (prev + 1) % 720);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (playbackEngine === 'video' && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
          setVideoHasError(true);
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-6 animate-in fade-in duration-200">
      <div
        className={`bg-stone-900 border border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
          isExpanded
            ? 'w-full h-full max-w-6xl max-h-[94vh]'
            : 'w-full max-w-3xl max-h-[90vh]'
        }`}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-stone-950 border-b border-stone-800 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-amber-300 font-bold flex items-center gap-1.5">
              <Film className="w-4 h-4 text-amber-400" /> COCO MOTION &amp; CINEMATIC PIPELINE
            </span>
            <span className="text-stone-400 text-[11px]">({currentIndex + 1} of {videos.length})</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Engine Selector */}
            <div className="flex items-center bg-stone-900 p-0.5 rounded-lg border border-stone-800 text-[10px]">
              <button
                onClick={() => {
                  setPlaybackEngine('video');
                  setVideoHasError(false);
                }}
                className={`px-2.5 py-1 rounded cursor-pointer font-bold ${
                  playbackEngine === 'video'
                    ? 'bg-amber-500 text-stone-950'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                HTML5 Video
              </button>
              <button
                onClick={() => setPlaybackEngine('hud-motion')}
                className={`px-2.5 py-1 rounded cursor-pointer font-bold ${
                  playbackEngine === 'hud-motion'
                    ? 'bg-cyan-500 text-stone-950'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                HUD Motion Engine
              </button>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors cursor-pointer"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-stone-400 hover:text-rose-400 hover:bg-stone-800 transition-colors cursor-pointer"
              title="Close Viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player Display Area */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden aspect-video max-h-[420px] group select-none">
          {playbackEngine === 'video' && !videoHasError ? (
            <video
              ref={videoRef}
              key={currentVideo.id}
              src={currentVideo.videoSrc}
              poster={currentVideo.thumbnailUrl}
              autoPlay
              playsInline
              controls
              loop
              muted={isMuted}
              onError={() => {
                console.warn('Video failed to load in sandbox, falling back to HUD motion engine');
                setVideoHasError(true);
              }}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-contain cursor-pointer"
            />
          ) : (
            /* Fallback or Selected: 13=1 Planetary Telemetry Motion HUD */
            <div
              onClick={togglePlay}
              className="relative w-full h-full overflow-hidden flex items-center justify-center bg-stone-950 cursor-pointer"
            >
              <img
                src={currentVideo.thumbnailUrl}
                alt={currentVideo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/80" />

              {/* Dynamic Radar & Wave Rings */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="relative w-36 h-36 rounded-full border-2 border-cyan-500/50 flex items-center justify-center shadow-2xl shadow-cyan-500/20 bg-stone-950/40 backdrop-blur-sm">
                  {/* Rotating scanner beam */}
                  <div
                    className="absolute inset-0 rounded-full border-t-4 border-cyan-400"
                    style={{ transform: `rotate(${motionFrame * 2.5}deg)` }}
                  />
                  <div
                    className="absolute inset-4 rounded-full border-b-2 border-amber-400"
                    style={{ transform: `rotate(-${motionFrame * 3}deg)` }}
                  />
                  <div className="text-center font-mono space-y-0.5">
                    <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider block">
                      13=1 CONSENSUS
                    </span>
                    <span className="text-amber-400 text-sm font-black block">
                      {(12.4 + (motionFrame % 86) / 10).toFixed(1)} Hz
                    </span>
                    <span className="text-[9px] text-emerald-400 block font-bold">LAMINAR SCADA</span>
                  </div>
                </div>

                <div className="space-y-1 max-w-lg">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    {currentVideo.cycle}
                  </div>
                  <div className="text-stone-100 font-bold text-base sm:text-lg leading-tight">
                    {currentVideo.title}
                  </div>
                  <div className="text-xs text-stone-400 font-mono">
                    Telemetry Stream Active • Delaware Basin Wellhead 110 Alignment
                  </div>
                </div>

                {videoHasError && (
                  <div className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-400" />
                    Sandbox browser codec policy active — HUD Motion Engine streaming live.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quick HUD Overlays */}
          <div className="absolute top-3 left-3 flex items-center gap-2 text-[10px] font-mono pointer-events-none">
            <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/40 font-bold">
              {currentVideo.cycle}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-stone-900/80 text-stone-300">
              {currentVideo.aspectRatio}
            </span>
          </div>

          {/* Direct MP4 Link to open in browser tab */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-mono">
            <a
              href={currentVideo.videoSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-black/80 hover:bg-stone-800 text-stone-200 border border-amber-500/40 flex items-center gap-1 font-bold shadow-lg"
            >
              Open Direct MP4 <ExternalLink className="w-3 h-3 text-amber-400" />
            </a>
          </div>

          {/* Prev / Next Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/95 text-stone-200 border border-stone-700 cursor-pointer transition-all shadow-xl"
            title="Previous Video"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/95 text-stone-200 border border-stone-700 cursor-pointer transition-all shadow-xl"
            title="Next Video"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Video Info & Campaign Narrative */}
        <div className="p-4 bg-stone-900 text-xs font-mono space-y-3 overflow-y-auto max-h-[180px]">
          <div>
            <div className="text-[11px] text-amber-400 font-bold uppercase">{currentVideo.campaignTheme}</div>
            <h3 className="text-sm sm:text-base font-bold text-stone-100 mt-0.5">{currentVideo.title}</h3>
            <p className="text-[11px] font-sans text-stone-400 mt-1 leading-relaxed">{currentVideo.description}</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[11px] text-stone-400">
            <div>
              Target: <span className="text-stone-200">{currentVideo.targetAudience}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Views: <strong className="text-amber-400">{currentVideo.metrics.views.toLocaleString()}</strong></span>
              <span>Completion: <strong className="text-cyan-400">{currentVideo.metrics.completionRate}</strong></span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                {currentVideo.status}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="px-4 py-2.5 bg-stone-950 border-t border-stone-800 flex items-center gap-2 overflow-x-auto text-[10px] font-mono">
          <span className="text-stone-500 whitespace-nowrap font-bold">PLAYLIST:</span>
          {videos.map((vid, idx) => (
            <button
              key={vid.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsPlaying(true);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                currentIndex === idx
                  ? 'bg-amber-500 text-stone-950 font-bold shadow'
                  : 'bg-stone-900 text-stone-400 hover:text-stone-200 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>#{idx + 1} {vid.campaignTheme}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
