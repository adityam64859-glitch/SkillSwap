import React from 'react';
import { Wallet, ShieldCheck, Lock, Cpu, Globe } from 'lucide-react';
import { NavigationTab } from '../types';

interface FooterProps {
  onNavigateTab?: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="w-full bg-[#0b0e18] text-[#cbc3d7] border-t border-white/8 relative z-10">
      <div className="w-full px-4 sm:px-6 lg:px-12 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12 mb-12">
          {/* Brand & Wallet Balance Widget */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-headline font-bold text-xl text-white">SkillSwap</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#272935] text-[#2fd9f4] font-mono text-xs border border-[#2fd9f4]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4] shadow-[0_0_6px_#2fd9f4]"></span>
                Web3 Mesh
              </span>
            </div>

            <p className="text-sm text-[#958ea0] max-w-sm leading-relaxed">
              Decentralized talent bartering, reciprocal peer mentoring, and time-banking ledger powered by cyber-grade reputation proof.
            </p>

            <div className="flex items-center gap-4 bg-[#191b26] p-4 rounded-xl max-w-sm border border-white/5 shadow-inner">
              <div className="p-2.5 rounded-lg bg-[#272935] text-[#4cd7f6] border border-white/5">
                <Wallet className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#958ea0] uppercase tracking-wider">
                  Network Time-Credit Balance
                </div>
                <div className="font-headline font-bold text-lg text-[#4cd7f6] flex items-center gap-1.5">
                  1,480.50 <span className="text-xs font-mono text-[#cbc3d7]">SST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Categories */}
          <div className="flex flex-col gap-3">
            <div className="font-headline text-xs text-white uppercase tracking-wider font-semibold">
              Skill Categories
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <a href="#marketplace" className="text-[#958ea0] hover:text-[#4cd7f6] transition-colors">
                Smart Contract Engineering
              </a>
              <a href="#marketplace" className="text-[#958ea0] hover:text-[#4cd7f6] transition-colors">
                Creative Direction & 3D
              </a>
              <a href="#marketplace" className="text-[#958ea0] hover:text-[#4cd7f6] transition-colors">
                Zero-Knowledge Math
              </a>
              <a href="#marketplace" className="text-[#958ea0] hover:text-[#4cd7f6] transition-colors">
                AI Agent Orchestration
              </a>
              <a href="#marketplace" className="text-[#958ea0] hover:text-[#4cd7f6] transition-colors">
                Fullstack Rust & WASM
              </a>
            </div>
          </div>

          {/* Trust & Governance */}
          <div className="flex flex-col gap-3">
            <div className="font-headline text-xs text-white uppercase tracking-wider font-semibold">
              Trust & Governance
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={() => onNavigateTab && onNavigateTab('skill-bank')}
                className="text-left text-[#958ea0] hover:text-[#4cd7f6] transition-colors cursor-pointer"
              >
                Decentralized Escrow
              </button>
              <button
                onClick={() => onNavigateTab && onNavigateTab('community')}
                className="text-left text-[#958ea0] hover:text-[#4cd7f6] transition-colors cursor-pointer"
              >
                Peer Rating Protocols
              </button>
              <button
                onClick={() => onNavigateTab && onNavigateTab('community')}
                className="text-left text-[#958ea0] hover:text-[#4cd7f6] transition-colors cursor-pointer"
              >
                Proof of Tutelage
              </button>
              <span className="text-[#958ea0]">Security Bug Bounty</span>
              <span className="text-[#958ea0]">Dispute Arbitration DAO</span>
            </div>
          </div>

          {/* Ecosystem */}
          <div className="flex flex-col gap-3">
            <div className="font-headline text-xs text-white uppercase tracking-wider font-semibold">
              Ecosystem
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={() => onNavigateTab && onNavigateTab('community')}
                className="text-left text-[#958ea0] hover:text-[#4cd7f6] transition-colors cursor-pointer"
              >
                Community Guidelines
              </button>
              <button
                onClick={() => onNavigateTab && onNavigateTab('skill-bank')}
                className="text-left text-[#958ea0] hover:text-[#4cd7f6] transition-colors cursor-pointer"
              >
                Time-Banking Protocol
              </button>
              <span className="text-[#958ea0]">Decentralized Identity (DID)</span>
              <span className="text-[#958ea0]">Developer APIs</span>
              <span className="text-[#958ea0]">Terms of Exchange</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#191b26] px-6 py-4 rounded-xl border border-white/5">
          <div className="text-xs text-[#958ea0]">
            © 2025 SkillSwap Network. All skill exchanges cryptographically authenticated.
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-[#cbc3d7]">
            <span className="flex items-center gap-1.5 text-[#2fd9f4]">
              <ShieldCheck className="w-4 h-4" />
              End-to-End Encrypted
            </span>
            <span className="flex items-center gap-1.5 text-[#d0bcff]">
              <Cpu className="w-4 h-4" />
              Zero Token Extraction
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
