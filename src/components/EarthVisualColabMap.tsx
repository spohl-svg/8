import React, { useState, useEffect } from 'react';
import { Globe, Compass, Activity, Layers, Eye, RefreshCw, ZoomIn, MapPin, Zap, Flame } from 'lucide-react';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

interface AlignmentVectorPoint {
  id: number;
  name: string;
  lat: number;
  lng: number;
  basin: string;
  harmonicHz: number;
  crustalStrain: string;
  status: 'RESONANT' | 'SYNCHRONIZED' | 'STRESS CRITICAL';
  telemetrySource: string;
}

const VECTOR_POINTS: AlignmentVectorPoint[] = [
  { id: 14, name: 'Permian Lea Fault Pivot', lat: 32.75, lng: -103.35, basin: 'Permian (Delaware)', harmonicHz: 16.4, crustalStrain: '0.042 µε', status: 'RESONANT', telemetrySource: 'USGS #48291 + Scada 04' },
  { id: 27, name: 'Eddy County Carbonate Ridge', lat: 32.42, lng: -104.22, basin: 'Permian (Central Basin)', harmonicHz: 14.8, crustalStrain: '0.018 µε', status: 'SYNCHRONIZED', telemetrySource: 'NM OCD Sensor Array' },
  { id: 33, name: 'San Juan Fruitland Thermal Axis', lat: 36.65, lng: -108.12, basin: 'San Juan Basin', harmonicHz: 19.2, crustalStrain: '0.065 µε', status: 'STRESS CRITICAL', telemetrySource: 'Four Corners Deep Grid' },
  { id: 49, name: 'Rio Grande Rift Continental Pivot', lat: 35.19, lng: -106.63, basin: 'Albuquerque North Valley', harmonicHz: 12.4, crustalStrain: '0.011 µε', status: 'RESONANT', telemetrySource: 'RideWire Hub Transducer' },
  { id: 72, name: 'Midland Sprayberry Corridor', lat: 31.85, lng: -102.05, basin: 'Permian (Midland)', harmonicHz: 15.6, crustalStrain: '0.038 µε', status: 'SYNCHRONIZED', telemetrySource: 'Permian Private SCADA' },
  { id: 88, name: 'Delaware Basin Deep Aquifer Rift', lat: 31.45, lng: -103.85, basin: 'Delaware Basin', harmonicHz: 17.1, crustalStrain: '0.051 µε', status: 'RESONANT', telemetrySource: 'DevilsQC Vanguard Ingest' },
  { id: 104, name: 'Paradox Basin Geothermal Fissure', lat: 38.25, lng: -109.15, basin: 'Paradox Extended Grid', harmonicHz: 21.0, crustalStrain: '0.072 µε', status: 'STRESS CRITICAL', telemetrySource: 'Colab Cloud Run Stream' },
  { id: 110, name: '110th Master Alignment Vector', lat: 34.05, lng: -105.15, basin: 'Capitan Reef Intersect', harmonicHz: 13.0, crustalStrain: '0.009 µε', status: 'RESONANT', telemetrySource: '13=1 Consensus Master Core' },
];

export const EarthVisualColabMap: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<AlignmentVectorPoint>(VECTOR_POINTS[0]);
  const [layerMode, setLayerMode] = useState<'fractures' | 'harmonics' | 'crustalStrain' | 'telemetryPins'>('harmonics');
  const [pulseTick, setPulseTick] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  // Dynamic animated pulse simulation for vectors
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick((t) => (t + 1) % 100);
      setRotationAngle((a) => (a + 0.3) % 360);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      {/* Top Header with Screen Voice Narrator */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              COLAB / CLOUD RUN VISUAL ENGINE
            </span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 animate-pulse" /> 110 ALIGNMENT VECTORS ACTIVE
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
            Global Earth Crustal Mapping &amp; Alignment Vector Matrix
          </h1>
          <p className="text-stone-400 text-sm max-w-2xl mt-1">
            Visualized in Google Colab / Cloud Run telemetry canvas: Subsurface lithological density, seismic harmonics, aquifer fissures, and Permian basin scada points synthesized into 13=1 ground truth.
          </p>
        </div>

        {/* Global Screen Voice Narrator */}
        <ScreenVoiceNarrator
          screenTitle="Interactive Earth Crustal Mapping & 110 Alignment Vectors"
          narrativeText="Welcome to the planetary visualization canvas of RideWire LLC and Action Intell. Here, 110 ancient alignment vectors intersect with Permian, San Juan, and Rio Grande rift telemetry, delivering real-time geological stress mapping at 1.8-hour execution speed."
          defaultVoice="Zephyr"
        />
      </div>

      {/* Layer Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-stone-900 border border-stone-800">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-stone-400 uppercase">Colab Visual Layers:</span>
          {(['harmonics', 'fractures', 'crustalStrain', 'telemetryPins'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLayerMode(l)}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer capitalize ${
                layerMode === l
                  ? 'bg-cyan-500 text-stone-950 font-bold border-cyan-400'
                  : 'bg-stone-950 text-stone-400 border-stone-800 hover:text-stone-200'
              }`}
            >
              {l === 'harmonics' ? '110 Vector Harmonics' : l === 'fractures' ? 'Subsurface Fractures' : l === 'crustalStrain' ? 'Crustal Strain (µε)' : 'SCADA Sensors'}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Synced with Cloud Run Telemetry Gateway</span>
        </div>
      </div>

      {/* Interactive Visual Map & Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main High-Tech Planetary SVG Visualizer */}
        <div className="lg:col-span-8 p-6 rounded-2xl bg-stone-950 border border-stone-800 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[580px]">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Top Canvas Overlay Stats */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-stone-400">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '24s' }} />
              <span className="text-stone-200 font-bold">13=1 Planar Coordinate Engine</span>
              <span className="text-stone-500">|</span>
              <span className="text-amber-400">Rio Grande Rift Hub (ABQ)</span>
            </div>
            <div className="text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
              Live Resonant Frequency: {(15.2 + Math.sin(pulseTick * 0.1) * 0.8).toFixed(2)} Hz
            </div>
          </div>

          {/* Graphical Map Representation */}
          <div className="relative z-10 flex-1 flex items-center justify-center my-4">
            <svg
              viewBox="0 0 800 500"
              className="w-full h-full max-h-[460px] drop-shadow-[0_0_35px_rgba(6,182,212,0.15)]"
            >
              {/* Planetary Latitude/Longitude Gridlines */}
              <defs>
                <radialGradient id="earthGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#083344" stopOpacity="0.4" />
                  <stop offset="70%" stopColor="#020617" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="1" />
                </radialGradient>
                <linearGradient id="riftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Subsurface Basemap Plate Outline */}
              <rect x="20" y="20" width="760" height="460" rx="16" fill="url(#earthGlow)" stroke="#1e293b" strokeWidth="1.5" />

              {/* Major Geological Fault Corridors (Permian / Rio Grande / San Juan) */}
              <path
                d="M 160 80 Q 280 240 380 410"
                fill="none"
                stroke="url(#riftGradient)"
                strokeWidth="2.5"
                strokeDasharray="6 3"
                className="opacity-70"
              />
              <path
                d="M 280 240 Q 480 300 680 340"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1.5"
                strokeDasharray="4 2"
                className="opacity-60"
              />
              <path
                d="M 120 180 Q 320 160 520 200"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.2"
                className="opacity-40"
              />

              {/* Dynamic Wave Harmonics Rings */}
              {VECTOR_POINTS.map((pt, i) => {
                const cx = 100 + ((pt.lng + 110) / 10) * 600;
                const cy = 450 - ((pt.lat - 30) / 10) * 400;
                const isSelected = selectedPoint.id === pt.id;
                const pulseRadius = 14 + (Math.sin(pulseTick * 0.2 + i) * 6);

                return (
                  <g key={pt.id} className="cursor-pointer" onClick={() => setSelectedPoint(pt)}>
                    {/* Resonant Pulse Halo */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={pulseRadius + (isSelected ? 10 : 0)}
                      fill={pt.status === 'STRESS CRITICAL' ? 'rgba(244,63,94,0.15)' : 'rgba(6,182,212,0.12)'}
                      stroke={pt.status === 'STRESS CRITICAL' ? '#f43f5e' : '#06b6d4'}
                      strokeWidth={isSelected ? 1.5 : 0.8}
                    />

                    {/* Vector Center Node */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 6 : 4}
                      fill={pt.status === 'STRESS CRITICAL' ? '#f43f5e' : isSelected ? '#f59e0b' : '#38bdf8'}
                      stroke="#ffffff"
                      strokeWidth={1.5}
                    />

                    {/* Vector ID Label */}
                    <text
                      x={cx + 10}
                      y={cy + 4}
                      fill={isSelected ? '#f59e0b' : '#94a3b8'}
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      V#{pt.id}
                    </text>
                  </g>
                );
              })}

              {/* Central Rio Grande Rift Hub Pin (Albuquerque) */}
              <circle cx="340" cy="242" r="9" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
              <text x="355" y="246" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">
                ★ ABQ HUB (North Valley)
              </text>
            </svg>
          </div>

          {/* Bottom HUD Legend */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-800 text-[11px] font-mono text-stone-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Resonant Alignment
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Quorum Synced
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" /> Fracture Critical
              </span>
            </div>
            <div className="text-stone-300">
              Selected: <span className="text-amber-400 font-bold">Vector #{selectedPoint.id} ({selectedPoint.name})</span>
            </div>
          </div>
        </div>

        {/* Vector Telemetry Dossier Panel */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">
                  Vector Telemetry Telemetry Spec
                </span>
                <h3 className="text-lg font-bold text-stone-100 mt-0.5">
                  Vector #{selectedPoint.id}: {selectedPoint.name}
                </h3>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                selectedPoint.status === 'STRESS CRITICAL'
                  ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                  : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
              }`}>
                {selectedPoint.status}
              </span>
            </div>

            {/* Geological Metrics */}
            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 flex justify-between items-center">
                <span className="text-stone-400">Target Basin</span>
                <span className="text-stone-200 font-bold">{selectedPoint.basin}</span>
              </div>

              <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 flex justify-between items-center">
                <span className="text-stone-400">Geodetic Coordinates</span>
                <span className="text-amber-400 font-bold">{selectedPoint.lat}° N, {Math.abs(selectedPoint.lng)}° W</span>
              </div>

              <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 flex justify-between items-center">
                <span className="text-stone-400">Acoustic Harmonics</span>
                <span className="text-cyan-400 font-bold">{selectedPoint.harmonicHz} Hz (Sub-surface)</span>
              </div>

              <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 flex justify-between items-center">
                <span className="text-stone-400">Crustal Strain (µε)</span>
                <span className="text-emerald-400 font-bold">{selectedPoint.crustalStrain}</span>
              </div>

              <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 flex justify-between items-center">
                <span className="text-stone-400">Telemetry Ingestion</span>
                <span className="text-stone-300 truncate max-w-[150px]">{selectedPoint.telemetrySource}</span>
              </div>
            </div>

            {/* Tactical Mapping Insight */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs font-mono space-y-1.5">
              <div className="text-cyan-300 font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" /> How We Map Earth Here:
              </div>
              <p className="text-stone-300 font-sans leading-relaxed text-[11px]">
                By overlaying the {selectedPoint.harmonicHz} Hz acoustic harmonic node with real-time Permian pumpjack scada, RideWire constructs high-resolution 3D fracture lineaments in &lt;1.8h velocity, preventing casing shear and optimizing extraction curves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
