import React, { useState, useEffect } from 'react';
import { BookOpen, Map, Compass, Clock, ShieldAlert, Sparkles, Plus, Loader2, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { CaptainLogEntry, INITIAL_BLACK_BOOK_LOGS } from '../data/captainLogs';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

export const BlackBookView: React.FC = () => {
  const [logs, setLogs] = useState<CaptainLogEntry[]>(INITIAL_BLACK_BOOK_LOGS);
  const [selectedLog, setSelectedLog] = useState<CaptainLogEntry>(INITIAL_BLACK_BOOK_LOGS[0]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [newLogPrompt, setNewLogPrompt] = useState<string>('Synthesize today\'s geological field telemetry across the Permian Basin and Rio Grande rift. Focus strictly on pure geological, lithological, and aquifer research findings (not system mechanics) and formulate how we map the earth with bullet points.');
  const [activeTab, setActiveTab] = useState<'log' | 'earthMapping'>('log');

  // Sync logs from Firestore
  useEffect(() => {
    try {
      const q = query(collection(db, 'captain_black_book_logs'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          const loaded: CaptainLogEntry[] = snapshot.docs.map((doc) => ({
            id: doc.id,
            reportNumber: doc.data().reportNumber,
            stardate: doc.data().stardate,
            title: doc.data().title,
            basin: doc.data().basin,
            vectorCoordinates: doc.data().vectorCoordinates,
            researchSummary: doc.data().researchSummary,
            earthMappingBullets: doc.data().earthMappingBullets || [],
            findings: doc.data().findings,
            velocityBenchmark: doc.data().velocityBenchmark || '1.8h Velocity (RideWire Speed)',
            quantumVelocityDelta: doc.data().quantumVelocityDelta || '38m (38x faster than 24h standard)',
            classification: doc.data().classification || 'CAPTAIN EYES ONLY',
          }));
          // Merge loaded docs with initial logs ensuring unique ids
          const existingIds = new Set(loaded.map((l) => l.id));
          const merged = [...loaded, ...INITIAL_BLACK_BOOK_LOGS.filter((l) => !existingIds.has(l.id))];
          setLogs(merged);
        }
      }, (err) => console.warn('Firestore subscription fallback:', err));

      return () => unsubscribe();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleGenerateCaptainLog = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are the Lead Geological Field Captain and Earth Mapping Officer for RideWire LLC & Action Intell (13=1 Unity State Framework™, Document Control: RIDEWIRE-BINDER-2026-v1).
Generate an official "Captain's Log" entry for the Black Book of Reports.

Strict Requirements:
- Focus solely on the DAILY SUMMARY OF THE RESEARCH (subsurface stratigraphy, aquifer interactions, fault fractures, crustal resonance) - NOT the system software metrics.
- Provide clear bullet points on "HOW WE MAP EARTH WITH IT".
- Correlate with 110 Alignment Vectors.
- Benchmark the 1.8h RideWire velocity vs legacy 24-hour industry standard.

Respond in strict JSON with fields:
{
  "reportNumber": "RPT-110-VEC-...",
  "stardate": "2026-09-27",
  "title": "...",
  "basin": "Permian" | "San Juan" | "Delaware" | "Global Planetary Grid",
  "vectorCoordinates": "...",
  "researchSummary": "...",
  "earthMappingBullets": ["...", "...", "...", "..."],
  "findings": "...",
  "quantumVelocityDelta": "..."
}`,
          model: 'gemini-3.1-pro-preview',
          systemInstruction: 'Return valid JSON only. No markdown formatting ticks.',
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      // Clean response text to parse json
      const cleanJson = data.text.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);

      const newEntry: CaptainLogEntry = {
        id: `log-${Date.now()}`,
        reportNumber: parsed.reportNumber || `RPT-110-VEC-${Math.floor(Math.random() * 900 + 100)}`,
        stardate: parsed.stardate || new Date().toISOString().split('T')[0],
        title: parsed.title || 'Subterranean Geophysical Synthesis',
        basin: parsed.basin || 'Permian',
        vectorCoordinates: parsed.vectorCoordinates || '32.18° N, 103.54° W (Vector #72)',
        researchSummary: parsed.researchSummary,
        earthMappingBullets: parsed.earthMappingBullets || [],
        findings: parsed.findings,
        velocityBenchmark: '1.8h Velocity (RideWire Speed)',
        quantumVelocityDelta: parsed.quantumVelocityDelta || '34m runtime vs 24h standard',
        classification: 'CAPTAIN EYES ONLY',
      };

      // Save to Firestore
      try {
        await addDoc(collection(db, 'captain_black_book_logs'), {
          ...newEntry,
          createdAt: serverTimestamp(),
        });
      } catch (fErr) {
        console.warn('Firestore write warning:', fErr);
      }

      setLogs((prev) => [newEntry, ...prev]);
      setSelectedLog(newEntry);
    } catch (err: any) {
      alert(`Log generation failed: ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30">
              BLACK BOOK OF REPORTS
            </span>
            <span className="text-xs font-mono text-stone-500">CAPTAIN'S ONGOING LOG</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
            The Black Book: Earth Mapping &amp; Daily Research Synthesis
          </h1>
          <p className="text-stone-400 text-sm max-w-2xl mt-1">
            Ongoing captain's log of every report: daily summary of planetary &amp; basin research, 110 vector coordinates, and bullet points on how we map the earth at 1.8h velocity.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <ScreenVoiceNarrator
            screenTitle="Black Book of Reports - Captain's Research Log"
            narrativeText="Accessing the Captain's Black Book of Reports. Daily research chronicles capturing natural seismic harmonics, subterranean hydrogeology, and 110 alignment vectors for mapping the earth in real time."
            defaultVoice="Charon"
          />

          <button
            onClick={handleGenerateCaptainLog}
            disabled={isGenerating}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 disabled:opacity-50 shrink-0"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Recording Research Log...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" /> Record New Research Log
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Grid: Left log list, Right details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Log Entries Directory */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono text-stone-400 uppercase tracking-wider flex items-center justify-between">
            <span>Log Chronicles ({logs.length})</span>
            <span className="text-amber-400 font-bold">1.8h Cadence</span>
          </div>

          <div className="space-y-2.5 max-h-[680px] overflow-y-auto pr-1">
            {logs.map((log) => (
              <div
                key={log.id}
                onClick={() => setSelectedLog(log)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedLog.id === log.id
                    ? 'bg-amber-950/30 border-amber-500/50 shadow-md'
                    : 'bg-stone-900/60 border-stone-800 hover:border-stone-700 hover:bg-stone-900'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="text-amber-400 font-bold">{log.reportNumber}</span>
                  <span className="text-stone-500">{log.stardate}</span>
                </div>
                <h4 className="text-sm font-bold text-stone-200 line-clamp-1">{log.title}</h4>
                <div className="text-xs text-stone-400 mt-1 flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-stone-800 text-[10px] font-mono text-stone-300">
                    {log.basin}
                  </span>
                  <span className="text-emerald-400 text-[11px] font-mono">{log.quantumVelocityDelta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Log Dossier */}
        <div className="lg:col-span-8 space-y-5">
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl space-y-6">
            {/* Top metadata badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-rose-500/10 text-rose-400 border border-rose-500/30">
                    {selectedLog.classification}
                  </span>
                  <span className="text-xs font-mono text-stone-400">{selectedLog.reportNumber}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-100 mt-2">{selectedLog.title}</h2>
                <div className="text-xs font-mono text-amber-400 mt-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" /> Vector Alignment: {selectedLog.vectorCoordinates}
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-mono text-stone-500 uppercase">Velocity Benchmark</div>
                <div className="text-sm font-bold font-mono text-emerald-400">{selectedLog.velocityBenchmark}</div>
                <div className="text-[11px] font-mono text-stone-400">{selectedLog.quantumVelocityDelta}</div>
              </div>
            </div>

            {/* Daily Research Summary (Pure geological/planetary discovery, not system mechanics) */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-stone-400 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" /> Daily Geological Research Synthesis
              </div>
              <div className="p-5 rounded-xl bg-stone-950/70 border border-stone-800 text-stone-300 text-sm leading-relaxed whitespace-pre-line font-sans">
                {selectedLog.researchSummary}
              </div>
            </div>

            {/* How We Map Earth With It (Key Bullet Points) */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-stone-400 uppercase tracking-wider flex items-center gap-2">
                <Map className="w-4 h-4 text-cyan-400" /> How We Map Earth With It (Tactical Bullets)
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {selectedLog.earthMappingBullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-stone-950/40 border border-stone-800/80 flex items-start gap-3 text-xs sm:text-sm text-stone-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="leading-relaxed font-sans">{bullet}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Findings & 1.8h vs 24h Reality */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs font-mono">
                <div className="font-bold text-amber-300">1.8h Velocity Finding</div>
                <div className="text-stone-300 leading-relaxed font-sans">{selectedLog.findings}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
