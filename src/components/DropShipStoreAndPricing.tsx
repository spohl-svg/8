import React, { useState } from 'react';
import {
  ShoppingBag,
  Wrench,
  DollarSign,
  Tag,
  Sparkles,
  CheckCircle2,
  Truck,
  Layers,
  ShieldAlert,
  Percent,
  TrendingUp,
  Sliders,
  Copy,
  Check,
  Send,
  Building,
  UserCheck
} from 'lucide-react';
import {
  DROP_SHIP_CATALOG,
  TOOL_FAIR_PRICE_ANALYSIS,
  DropShipProduct,
  ToolPricingTier
} from '../data/merchStore';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

export const DropShipStoreAndPricing: React.FC = () => {
  const [products] = useState<DropShipProduct[]>(DROP_SHIP_CATALOG);
  const [selectedProduct, setSelectedProduct] = useState<DropShipProduct>(products[0]);
  const [customBrandName, setCustomBrandName] = useState<string>('Pohl & McCarty Crew #1');
  const [customerLogoText, setCustomerLogoText] = useState<string>('RIDEWIRE FIELD CREW');
  const [orderQuantity, setOrderQuantity] = useState<number>(1);
  const [isCopiedMockup, setIsCopiedMockup] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'store' | 'pricing-study' | 'customizer'>('store');
  const [orderSuccessMsg, setOrderSuccessMsg] = useState<string | null>(null);

  const calculateSubtotal = () => {
    return (selectedProduct.introductoryRate * orderQuantity).toFixed(2);
  };

  const calculateSavings = () => {
    return ((selectedProduct.fairMarketRetailPrice - selectedProduct.introductoryRate) * orderQuantity).toFixed(2);
  };

  const handlePlaceDropShipOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccessMsg(`ORDER SIMULATED! Shipped directly via Printful/Gelato Drop-Ship API. Custom Brand: "${customBrandName}". Tracking & Invoice sent to s.pohl@ridewires.com.`);
    setTimeout(() => setOrderSuccessMsg(null), 6000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" /> RIDEWIRE ON-DEMAND DROP-SHIP STORE &amp; PRICING STRATEGY
            </span>
            <span className="text-xs font-mono text-stone-500">CUSTOM CO-BRANDING • ZERO INVENTORY RISK</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-100 mt-1">
            Drop-Ship Merch Store &amp; &quot;The Tool to Fix the Fixing&quot; Fair Pricing
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm max-w-3xl mt-1">
            Put our name (and your customers&apos; names) on real tools, canvas workwear, trucker hats, flasks, and fine art lithographs. Plus, the economic breakdown of fair market pricing vs. predatory $400 gimmick tools.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <ScreenVoiceNarrator
            screenTitle="Drop Ship Store and Tool Fair Price Strategy"
            narrativeText="Drop-ship store initialized. We stock tools, rugged canvas jackets, trucker hats, insulated flasks, and archival art with zero upfront inventory. We've established an honest introductory rate of eighty-nine dollars for The Fixer diagnostic tool, rejecting predatory four-hundred-dollar gimmick scams."
            defaultVoice="Fenrir"
          />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-stone-800 pb-2 text-xs font-mono">
        <button
          onClick={() => setActiveTab('store')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'store'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <ShoppingBag className="w-4 h-4" /> Drop-Ship Store Catalog ({products.length} Items)
        </button>

        <button
          onClick={() => setActiveTab('pricing-study')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'pricing-study'
              ? 'bg-emerald-600 text-white font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <DollarSign className="w-4 h-4" /> Fair Price Analysis: &quot;Tool to Fix the Fixing&quot;
        </button>

        <button
          onClick={() => setActiveTab('customizer')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'customizer'
              ? 'bg-rose-600 text-white font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Sliders className="w-4 h-4" /> Customer Co-Branding Studio (Put Any Name On It)
        </button>
      </div>

      {/* SUCCESS BANNER */}
      {orderSuccessMsg && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{orderSuccessMsg}</span>
        </div>
      )}

      {/* TAB 1: DROP SHIP STORE CATALOG */}
      {activeTab === 'store' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Spotlight Item & Quick Order */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-stone-900 border border-amber-500/40 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                {selectedProduct.category}
              </span>
              <span className="text-stone-400">SKU: {selectedProduct.sku}</span>
            </div>

            <div className="relative aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden bg-black border border-stone-800 shadow-2xl">
              <img
                src={selectedProduct.mockupImageUrl}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80" />
              
              {/* Co-Branding Stamp Mockup Overlay */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono text-amber-300 font-bold flex items-center gap-1 shadow-lg">
                <Tag className="w-3 h-3 text-amber-400" /> Co-Brand: &quot;{customBrandName}&quot;
              </div>

              <div className="absolute bottom-3 inset-x-4 text-xs font-mono">
                <div className="text-stone-100 font-bold text-base leading-tight">
                  {selectedProduct.name}
                </div>
                <div className="text-amber-400 text-xs mt-1">
                  {selectedProduct.tagline}
                </div>
              </div>
            </div>

            {/* Price & Savings Pill */}
            <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-stone-400">INTRODUCTORY SUPPORTER RATE</div>
                <div className="text-2xl font-black text-amber-400 flex items-baseline gap-2">
                  ${selectedProduct.introductoryRate.toFixed(2)}
                  <span className="text-xs text-stone-500 line-through font-normal">
                    ${selectedProduct.fairMarketRetailPrice.toFixed(2)} MSRP
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                  SAVE ${(selectedProduct.fairMarketRetailPrice - selectedProduct.introductoryRate).toFixed(2)} ({selectedProduct.grossMarginPercent}% Margin)
                </span>
                <div className="text-[10px] text-stone-400 mt-1 font-mono">
                  Factory Cost: ${selectedProduct.wholesaleCost.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Specs List */}
            <div className="space-y-1.5 text-xs font-mono">
              <div className="text-stone-400 text-[11px] font-bold uppercase tracking-wider">Product Specifications:</div>
              {selectedProduct.specs.map((spec, i) => (
                <div key={i} className="text-stone-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* Quick Order Form */}
            <form onSubmit={handlePlaceDropShipOrder} className="pt-3 border-t border-stone-800 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <label className="text-stone-400 text-[10px]">Order Quantity</label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2 text-stone-200 text-xs"
                  />
                </div>
                <div>
                  <label className="text-stone-400 text-[10px]">Your Custom Brand / Rig Name</label>
                  <input
                    type="text"
                    value={customBrandName}
                    onChange={(e) => setCustomBrandName(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2 text-stone-200 text-xs truncate"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-stone-950 font-bold font-mono text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
              >
                <Truck className="w-4 h-4" /> DISPATCH DROP-SHIP ORDER (${calculateSubtotal()} • SAVE ${calculateSavings()})
              </button>
            </form>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-stone-400 flex items-center justify-between">
              <span>SELECT ITEM TO INSPECT &amp; CO-BRAND:</span>
              <span className="text-emerald-400 font-bold">100% PRINT-ON-DEMAND / DROP-SHIP READY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[640px] overflow-y-auto pr-1">
              {products.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2.5 ${
                    selectedProduct.id === p.id
                      ? 'bg-amber-950/40 border-amber-500/60 ring-2 ring-amber-500/20'
                      : 'bg-stone-900/60 border-stone-800 hover:bg-stone-900 hover:border-stone-700'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-amber-400 font-bold truncate">{p.category}</span>
                      <span className="text-emerald-400 font-bold">${p.introductoryRate.toFixed(2)}</span>
                    </div>

                    <div className="aspect-[16/10] rounded-lg overflow-hidden bg-black border border-stone-800">
                      <img src={p.mockupImageUrl} alt={p.name} className="w-full h-full object-cover" />
                    </div>

                    <h4 className="text-xs font-bold text-stone-100 line-clamp-1">{p.name}</h4>
                    <p className="text-[11px] text-stone-400 font-sans line-clamp-2">{p.description}</p>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 text-[10px] font-mono flex items-center justify-between">
                    <span className="text-stone-400">Custom Co-Brand: <strong className="text-cyan-300">YES</strong></span>
                    <span className="text-amber-400 font-bold">INSPECT &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: FAIR PRICE ANALYSIS ("TOOL TO FIX THE FIXING") */}
      {activeTab === 'pricing-study' && (
        <div className="space-y-6">
          {/* Executive Summary Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-stone-900 to-stone-900 border border-emerald-500/40 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                <DollarSign className="w-4 h-4 text-emerald-400" /> Economic Thesis: What is the Fair Price for &quot;The Tool to Fix the Fixing&quot;?
              </div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                ETHICAL VALUE PRICING
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              In the oilfield, construction, and high-performance mechanical sectors, operators are routinely scammed by predatory gimmicks: plastic diagnostic boxes costing <strong>$350 to $500</strong> that do nothing more than read a free generic OBD2 code. 
              <br /><br />
              <strong>The RideWire Rule:</strong> A real tool must provide immediate physical utility, accurate multi-sensor consensus, and pay for itself on its very first day of deployment. Here is the mathematical breakdown of our pricing structure:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono pt-2 border-t border-stone-800">
              <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-stone-400 text-[10px]">FACTORY BUILD COST</div>
                <div className="text-lg font-bold text-stone-200 mt-0.5">$28.50</div>
                <div className="text-[10px] text-stone-500">Drop-forged alloy + BT transducer</div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-amber-400 text-[10px]">INTRODUCTORY CREW RATE</div>
                <div className="text-lg font-bold text-amber-300 mt-0.5">$89.00</div>
                <div className="text-[10px] text-amber-400/80">3.1x Markup (68% Margin)</div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-stone-400 text-[10px]">FAIR MARKET RETAIL (MSRP)</div>
                <div className="text-lg font-bold text-stone-100 mt-0.5">$189.00</div>
                <div className="text-[10px] text-stone-400">Post-launch permanent price</div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-rose-400 text-[10px]">PREDATORY GIMMICK TOOLS</div>
                <div className="text-lg font-bold text-rose-300 mt-0.5">$399.00+</div>
                <div className="text-[10px] text-rose-400/80">Zero utility / False advertising</div>
              </div>
            </div>
          </div>

          {/* Comparative Table */}
          <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
            <h3 className="text-sm font-bold text-stone-100 font-mono flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-400" /> Direct Market Comparison: Gimmick Tools vs. RideWire &quot;The Fixer&quot;
            </h3>

            <div className="space-y-3">
              {TOOL_FAIR_PRICE_ANALYSIS.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border text-xs font-mono space-y-2 ${
                    tier.tierName.includes('FAIR PRICE')
                      ? 'bg-amber-950/30 border-amber-500/50'
                      : 'bg-stone-950/60 border-stone-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-bold text-stone-100 text-sm flex items-center gap-2">
                      {tier.tierName.includes('FAIR PRICE') && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {tier.tierName}
                    </div>
                    <div className="text-amber-400 font-bold">
                      Retail: {tier.retailPrice} | <span className="text-emerald-400">Intro: {tier.introductorySpecial}</span>
                    </div>
                  </div>

                  <div className="text-stone-300 font-sans text-xs">
                    <strong>Hardware &amp; Capability:</strong> {tier.hardwareOrSoftware}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] pt-2 border-t border-stone-800/80">
                    <div className="text-stone-400">
                      <strong className="text-cyan-300">Target User:</strong> {tier.targetAudience}
                      <p className="mt-1 font-sans">{tier.valueJustification}</p>
                    </div>
                    <div className="text-stone-400">
                      <strong className="text-rose-400">Competitive Verdict:</strong>
                      <p className="mt-1 font-sans">{tier.competitorComparison}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CUSTOMER CO-BRANDING STUDIO */}
      {activeTab === 'customizer' && (
        <div className="p-6 rounded-2xl bg-stone-900 border border-rose-500/40 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-rose-400" /> The Co-Branding Engine: Put Any Customer&apos;s Name On It
              </h2>
              <p className="text-xs font-mono text-stone-400 mt-0.5">
                Every drop-shipped item can be dual-branded: RideWire LLC &amp; Action Intell certification on one side, and the customer&apos;s personal company or crew name on the other.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-rose-500/10 text-rose-400 border border-rose-500/30 font-bold">
              ZERO MINIMUM ORDER QUANTITY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Controls */}
            <div className="space-y-4 text-xs font-mono">
              <div className="space-y-1.5">
                <label className="text-stone-400">Primary Customer / Rig Brand Name</label>
                <input
                  type="text"
                  value={customBrandName}
                  onChange={(e) => setCustomBrandName(e.target.value)}
                  placeholder="e.g. Apache Basin Crew #4"
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-stone-400">Secondary Badge / Hard Hat Slogan</label>
                <input
                  type="text"
                  value={customerLogoText}
                  onChange={(e) => setCustomerLogoText(e.target.value)}
                  placeholder="e.g. THE FIXERS • DELAWARE BASIN"
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-stone-300">
                <div className="text-amber-400 font-bold text-xs uppercase flex items-center gap-1.5">
                  <Truck className="w-4 h-4" /> Drop-Ship Integration Channels
                </div>
                <p className="text-[11px] font-sans leading-relaxed text-stone-400">
                  When a customer orders through your portal, the order automatically routes via API to Printful / Gelato / CustomInk API with the customer&apos;s custom vector SVG badge. The parcel arrives at their doorstep with your custom RideWire packing slip and zero mention of any third-party factory.
                </p>
              </div>
            </div>

            {/* Live Visual Preview Mockup */}
            <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-3 flex flex-col justify-center items-center text-center">
              <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                LIVE LASER ENGRAVING &amp; EMBROIDERY PREVIEW
              </div>

              <div className="w-full max-w-xs p-6 rounded-2xl bg-stone-900 border-2 border-dashed border-amber-500/40 space-y-2 shadow-2xl">
                <div className="text-[10px] font-mono text-stone-500">RIDEWIRE OFFICIAL CERTIFICATION</div>
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-base font-black text-stone-100 uppercase tracking-tight">
                  {customBrandName || 'YOUR BRAND HERE'}
                </div>
                <div className="text-[11px] font-mono text-amber-400 font-bold">
                  {customerLogoText || 'FIELD CREW TELEMETRY'}
                </div>
                <div className="text-[9px] font-mono text-stone-400 pt-2 border-t border-stone-800">
                  DOCUMENT CONTROL: RW-2026-COBRAND • 13=1 VALIDATED
                </div>
              </div>

              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> High-Resolution Laser Vector Generated
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
