import React, { useState } from 'react';
import { PlaybookSection, NodeStatus } from './data/playbook';
import {
  FileText,
  Database,
  PieChart,
  Bot,
  Brain,
  Shield,
  Activity,
  Layers,
  Sparkles,
  Calendar,
  Compass,
  ArrowRight,
  ExternalLink,
  Lock,
  UserCheck,
  CreditCard,
  Video,
  Wrench,
  ShoppingBag,
  Award,
  Image as ImageIcon
} from 'lucide-react';
import { BinderOverview } from './components/BinderOverview';
import { SectionDetail } from './components/SectionDetail';
import { AiMatrixView } from './components/AiMatrixView';
import { CapTableDiligence } from './components/CapTableDiligence';
import { AiIntelligenceStudio } from './components/AiIntelligenceStudio';
import { ExecutiveChat } from './components/ExecutiveChat';
import { BlackBookView } from './components/BlackBookView';
import { CocoMarketingMachine } from './components/CocoMarketingMachine';
import { DeploymentEnvironmentDiligence } from './components/DeploymentEnvironmentDiligence';
import { EarthVisualColabMap } from './components/EarthVisualColabMap';
import { AutonomousSalesMachine } from './components/AutonomousSalesMachine';
import { CocoVideoPopupViewer } from './components/CocoVideoPopupViewer';
import { PinUpPostersGallery } from './components/PinUpPostersGallery';
import { DropShipStoreAndPricing } from './components/DropShipStoreAndPricing';
import { DeveloperGrantsAndProjects } from './components/DeveloperGrantsAndProjects';
import { PLAYBOOK_SECTIONS } from './data/playbook';

export default function App() {
  const [currentView, setCurrentView] = useState<'binder' | 'section' | 'matrix' | 'captable' | 'intelligence' | 'chat' | 'blackbook' | 'coco' | 'hosting' | 'earthmap' | 'sales' | 'posters' | 'dropship' | 'grants'>('grants');
  const [selectedSectionId, setSelectedSectionId] = useState<string>('executive-summary');
  const [chatPrefill, setChatPrefill] = useState<string>('');
  const [isGlobalCocoVideoOpen, setIsGlobalCocoVideoOpen] = useState<boolean>(false);

  const selectedSection = PLAYBOOK_SECTIONS.find((s) => s.id === selectedSectionId) || PLAYBOOK_SECTIONS[0];

  const handleSelectSection = (id: string) => {
    setSelectedSectionId(id);
    setCurrentView('section');
  };

  const handleReasonWithGemini = (prompt: string, thinkingHigh: boolean) => {
    setChatPrefill(prompt);
    setCurrentView('chat');
  };

  const handleInspectNode = (node: NodeStatus) => {
    setChatPrefill(`Provide a technical architecture analysis of ${node.name} (${node.id}) in the 17-Node Autonomous AI Matrix:\nRole: ${node.role}\nModel: ${node.model}\nVelocity: ${node.velocity}`);
    setCurrentView('chat');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Institutional Executive Top Bar */}
      <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-mono font-black text-stone-950 text-lg shadow-lg shadow-amber-500/20">
              13=1
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-tight text-stone-100 flex items-center gap-2">
                RideWire LLC &amp; Action Intell
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  RIDEWIRE-BINDER-2026-v1
                </span>
              </div>
              <div className="text-xs text-stone-400 font-mono">
                50/50 Equal Partners: S. Pohl &amp; Steve McCarty • Albuquerque, NM
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setIsGlobalCocoVideoOpen(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 to-rose-500/20 hover:from-amber-500/30 hover:to-rose-500/30 text-amber-300 border border-amber-500/40 shadow-sm"
              title="Open COCO Video Popup Viewer"
            >
              <Video className="w-3.5 h-3.5 text-amber-400" /> COCO Videos (Popup)
            </button>

            <button
              onClick={() => setCurrentView('grants')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentView === 'grants'
                  ? 'bg-gradient-to-r from-amber-500 to-emerald-500 text-stone-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'text-amber-400 hover:text-amber-200 hover:bg-stone-900 border border-amber-500/30'
              }`}
            >
              <Award className="w-3.5 h-3.5" /> $200 Credits &amp; Grants ($400k)
            </button>

            <button
              onClick={() => setCurrentView('dropship')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentView === 'dropship'
                  ? 'bg-gradient-to-r from-emerald-500 to-amber-500 text-stone-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'text-emerald-400 hover:text-emerald-200 hover:bg-stone-900 border border-emerald-500/30'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" /> Drop-Ship Store &amp; Tool Pricing
            </button>

            <button
              onClick={() => setCurrentView('posters')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentView === 'posters'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-stone-950 font-bold shadow-lg shadow-rose-500/20'
                  : 'text-rose-400 hover:text-rose-200 hover:bg-stone-900 border border-rose-500/30'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" /> $1.2M Posters, Wrenchies &amp; Award-Winning AI Art
            </button>

            <button
              onClick={() => setCurrentView('sales')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentView === 'sales'
                  ? 'bg-emerald-500 text-stone-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'text-emerald-400 hover:text-emerald-200 hover:bg-stone-900 border border-emerald-500/30'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" /> Zero-Human Sales (Drive to Receipt)
            </button>

            <button
              onClick={() => setCurrentView('earthmap')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentView === 'earthmap'
                  ? 'bg-cyan-500 text-stone-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'text-cyan-400 hover:text-cyan-200 hover:bg-stone-900 border border-cyan-500/30'
              }`}
            >
              <Compass className="w-3.5 h-3.5" /> Earth Map (Colab)
            </button>

            <button
              onClick={() => setCurrentView('binder')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                currentView === 'binder'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
              }`}
            >
              Binder Master
            </button>

            <button
              onClick={() => setCurrentView('captable')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                currentView === 'captable'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
              }`}
            >
              10M Cap Table
            </button>

            <button
              onClick={() => setCurrentView('matrix')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                currentView === 'matrix'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
              }`}
            >
              17 AI Nodes
            </button>

            <button
              onClick={() => setCurrentView('blackbook')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                currentView === 'blackbook'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
              }`}
            >
              Black Book
            </button>

            <button
              onClick={() => setCurrentView('coco')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                currentView === 'coco'
                  ? 'bg-rose-500 text-white font-bold'
                  : 'text-rose-400 hover:text-rose-200 hover:bg-stone-900'
              }`}
            >
              COCO Machine (1.8h)
            </button>

            <button
              onClick={() => setCurrentView('hosting')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                currentView === 'hosting'
                  ? 'bg-cyan-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
              }`}
            >
              Cloud Run vs Workspace
            </button>

            <button
              onClick={() => setCurrentView('intelligence')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                currentView === 'intelligence'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
              }`}
            >
              AI Studio
            </button>

            <button
              onClick={() => setCurrentView('chat')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                currentView === 'chat'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-900 text-amber-300 border border-amber-500/30 hover:bg-stone-800'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Co-Pilot</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main App Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'grants' && <DeveloperGrantsAndProjects />}

        {currentView === 'dropship' && <DropShipStoreAndPricing />}

        {currentView === 'posters' && <PinUpPostersGallery />}

        {currentView === 'sales' && <AutonomousSalesMachine />}

        {currentView === 'earthmap' && <EarthVisualColabMap />}

        {currentView === 'binder' && (
          <BinderOverview
            onSelectSection={handleSelectSection}
            onOpenChat={() => setCurrentView('chat')}
          />
        )}

        {currentView === 'section' && (
          <SectionDetail
            section={selectedSection}
            onBack={() => setCurrentView('binder')}
            onReasonWithGemini={handleReasonWithGemini}
          />
        )}

        {currentView === 'matrix' && (
          <AiMatrixView onInspectNode={handleInspectNode} />
        )}

        {currentView === 'captable' && <CapTableDiligence />}

        {currentView === 'blackbook' && <BlackBookView />}

        {currentView === 'coco' && <CocoMarketingMachine />}

        {currentView === 'hosting' && <DeploymentEnvironmentDiligence />}

        {currentView === 'intelligence' && <AiIntelligenceStudio />}

        {currentView === 'chat' && <ExecutiveChat prefilledPrompt={chatPrefill} />}
      </main>

      {/* Institutional Legal & Confidentiality Footer */}
      <footer className="mt-auto border-t border-stone-800/80 bg-stone-950 py-6 text-stone-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-stone-600" />
            <span>Document Control: RIDEWIRE-BINDER-2026-v1 • 13=1 Unity State Framework™</span>
          </div>
          <div className="text-center sm:text-right text-stone-400">
            RideWire LLC &amp; Action Intell • North Valley, Albuquerque, NM • Equal 50/50 Managing Partners
          </div>
        </div>
      </footer>
      {/* Global Small Popup Modal Viewer for All COCO Videos */}
      <CocoVideoPopupViewer
        isOpen={isGlobalCocoVideoOpen}
        onClose={() => setIsGlobalCocoVideoOpen(false)}
      />
    </div>
  );
}
