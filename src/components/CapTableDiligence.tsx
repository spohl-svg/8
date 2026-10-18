import React, { useState } from 'react';
import { PieChart, Users, DollarSign, ShieldCheck, ArrowRight, Download, FileSpreadsheet } from 'lucide-react';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

export const CapTableDiligence: React.FC = () => {
  const [valuation, setValuation] = useState<number>(20000000); // $20M post-money baseline

  const capItems = [
    { holder: 'S. Pohl (Co-Founder & Managing Partner)', shares: 3000000, pct: 30.0, type: 'Common Stock (Founder Equity Parity 50%)' },
    { holder: 'Steve McCarty (Co-Founder & Managing Partner)', shares: 3000000, pct: 30.0, type: 'Common Stock (Founder Equity Parity 50%)' },
    { holder: 'Employee Stock Option Pool (ESOP)', shares: 1500000, pct: 15.0, type: 'Incentive Options Reserve' },
    { holder: 'Seed / SAFE Convertible Note Reserve', shares: 1000000, pct: 10.0, type: 'Institutional Seed Reserve' },
    { holder: 'Unallocated Treasury Reserve', shares: 1500000, pct: 15.0, type: 'Corporate Treasury Common' },
  ];

  const totalShares = 10000000;
  const sharePrice = valuation / totalShares;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              VENTURE READY
            </span>
            <span className="text-xs font-mono text-stone-500">10,000,000 AUTHORIZED SHARES</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
            Capitalization &amp; Equity Diligence Table
          </h1>
          <p className="text-stone-400 text-sm max-w-2xl mt-1">
            Institutional capitalization schedule for RideWire LLC &amp; Action Intell. Equal 50/50 founder parity with S. Pohl and Steve McCarty, 15% ESOP pool, and 10% SAFE reserves.
          </p>
        </div>

        {/* Screen Voice Narrator */}
        <ScreenVoiceNarrator
          screenTitle="Capitalization and Equity Diligence Schedule"
          narrativeText="Reviewing the institutional capitalization table for RideWire LLC and Action Intell. Ten million authorized shares, fifty-fifty equal founder equity held by S. Pohl and Steve McCarty, with dedicated pools for key talent and venture seed reserves."
          defaultVoice="Zephyr"
        />
      </div>

      {/* Interactive Valuation Modeling Slider */}
      <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs font-mono text-stone-400 uppercase">Interactive Institutional Valuation Model</div>
            <div className="text-2xl font-bold font-mono text-amber-400">
              ${(valuation / 1000000).toFixed(1)}M Post-Money Valuation
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-mono text-stone-400 uppercase">Implied Share Price</div>
            <div className="text-xl font-bold font-mono text-emerald-400">${sharePrice.toFixed(2)} / share</div>
          </div>
        </div>

        <input
          type="range"
          min={5000000}
          max={50000000}
          step={1000000}
          value={valuation}
          onChange={(e) => setValuation(Number(e.target.value))}
          className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-950 rounded-lg"
        />
        <div className="flex justify-between text-[11px] font-mono text-stone-500">
          <span>$5.0M (Pre-Seed)</span>
          <span>$20.0M (Target Seed Round)</span>
          <span>$50.0M (Series A Scale)</span>
        </div>
      </div>

      {/* Cap Table Schedule */}
      <div className="rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden shadow-xl">
        <div className="p-5 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-stone-100">
            <PieChart className="w-4 h-4 text-amber-400" /> Shareholder Ledger (10,000,000 Total Authorized)
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
            Clean Cap Table
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-stone-950 text-stone-400 uppercase border-b border-stone-800">
              <tr>
                <th className="p-4">Stakeholder</th>
                <th className="p-4">Security Class</th>
                <th className="p-4 text-right">Shares Issued</th>
                <th className="p-4 text-right">Ownership %</th>
                <th className="p-4 text-right">Implied Equity Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60 text-stone-300">
              {capItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-stone-800/40 transition-colors">
                  <td className="p-4 font-semibold text-stone-100">{item.holder}</td>
                  <td className="p-4 text-stone-400">{item.type}</td>
                  <td className="p-4 text-right font-mono text-amber-300">{item.shares.toLocaleString()}</td>
                  <td className="p-4 text-right font-mono font-bold text-stone-200">{item.pct.toFixed(1)}%</td>
                  <td className="p-4 text-right font-mono text-emerald-400 font-bold">
                    ${((item.shares * sharePrice)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </td>
                </tr>
              ))}
              <tr className="bg-stone-950/80 font-bold text-stone-100 border-t-2 border-stone-700">
                <td className="p-4">TOTAL AUTHORIZED CAPITAL</td>
                <td className="p-4 text-stone-400">Common Stock</td>
                <td className="p-4 text-right text-amber-400 font-mono">10,000,000</td>
                <td className="p-4 text-right font-mono text-stone-100">100.0%</td>
                <td className="p-4 text-right text-emerald-400 font-mono font-bold">
                  ${valuation.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Venture Covenants & Institutional Readiness Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
            <ShieldCheck className="w-4 h-4" /> 50/50 FOUNDER PARITY SAFEGUARDS
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            Co-founders S. Pohl and Steve McCarty hold reciprocal 3,000,000 share blocks with mutual super-majority requirements for equity dilution, corporate debt incurrence, or IP assignment.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
            <ShieldCheck className="w-4 h-4" /> 50% PROFIT ALLOCATION INTEGRATION
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            Corporate profit distributions are governed by transparent audit bylaws, preserving operating capital reserves while routing institutional profit shares automatically.
          </p>
        </div>
      </div>
    </div>
  );
};
