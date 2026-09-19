import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, UserCheck, ArrowRight, Sparkles, Star, Tag } from 'lucide-react';
import { INITIAL_SKILL_CARDS, SKILL_CATEGORIES } from '../data/mockData';
import { SkillCardItem, NavigationTab } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPeer: (peer: SkillCardItem) => void;
  onNavigateTab: (tab: NavigationTab) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPeer,
  onNavigateTab
}) => {
  const [query, setQuery] = useState('');

  // Handle ESC and keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // Toggle or open
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredPeers = useMemo(() => {
    if (!query.trim()) return INITIAL_SKILL_CARDS.slice(0, 4);
    const q = query.toLowerCase();
    return INITIAL_SKILL_CARDS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.offeringTitle.toLowerCase().includes(q) ||
        item.seekingTitle.toLowerCase().includes(q) ||
        item.offeringCategory.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#191b26] border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#11131d]/60">
          <Search className="w-5 h-5 text-[#4cd7f6] mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by skill (e.g. WebGL, French Pastry, Japanese) or peer name..."
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-[#e1e1f1] placeholder-[#958ea0] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#958ea0] hover:text-white hover:bg-white/10 transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Navigation suggestions */}
        {!query && (
          <div className="p-3 bg-[#11131d]/30 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs font-mono">
            <span className="text-[#958ea0] shrink-0">Quick jump:</span>
            <button
              onClick={() => {
                onNavigateTab('smart-match');
                onClose();
              }}
              className="px-2.5 py-1 rounded-md bg-[#272935] hover:bg-[#a078ff]/20 text-[#d0bcff] hover:border-[#a078ff]/40 border border-transparent transition-all shrink-0"
            >
              ⚡ Smart AI Match
            </button>
            <button
              onClick={() => {
                onNavigateTab('skill-bank');
                onClose();
              }}
              className="px-2.5 py-1 rounded-md bg-[#272935] hover:bg-[#2fd9f4]/20 text-[#2fd9f4] hover:border-[#2fd9f4]/40 border border-transparent transition-all shrink-0"
            >
              🏦 Skill Bank Ledger
            </button>
            <button
              onClick={() => {
                onNavigateTab('requests-sessions');
                onClose();
              }}
              className="px-2.5 py-1 rounded-md bg-[#272935] hover:bg-white/20 text-[#cbc3d7] transition-all shrink-0"
            >
              🔄 Active Sessions
            </button>
          </div>
        )}

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-2">
          <div className="text-[11px] font-mono text-[#958ea0] uppercase tracking-wider px-2 pt-1 pb-1">
            {query ? `Found ${filteredPeers.length} Barter Nodes` : 'Featured Mentors & Swappers'}
          </div>

          {filteredPeers.length === 0 ? (
            <div className="py-12 text-center text-[#958ea0] text-sm">
              No matching skills or peers found. Try searching for "Rust", "Design", or "Piano".
            </div>
          ) : (
            filteredPeers.map((peer) => (
              <div
                key={peer.id}
                onClick={() => {
                  onSelectPeer(peer);
                  onClose();
                }}
                className="group flex items-center justify-between p-3 rounded-xl bg-[#1d1f2a]/70 hover:bg-[#272935] border border-transparent hover:border-[#4cd7f6]/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={peer.avatar}
                    alt={peer.name}
                    className="w-10 h-10 rounded-xl object-cover border border-white/10"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-headline font-bold text-sm text-[#e1e1f1] group-hover:text-white">
                        {peer.name}
                      </span>
                      <UserCheck className="w-3.5 h-3.5 text-[#4cd7f6]" />
                      <span className="text-[10px] font-mono text-[#a078ff] flex items-center">
                        <Star className="w-2.5 h-2.5 fill-current mr-0.5" />
                        {peer.rating}
                      </span>
                    </div>
                    <div className="text-xs text-[#cbc3d7] mt-0.5">
                      <span className="text-[#4cd7f6]">Offers:</span> {peer.offeringTitle}
                    </div>
                    <div className="text-[11px] text-[#958ea0]">
                      <span className="text-[#d0bcff]">Seeks:</span> {peer.seekingTitle}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[11px] font-mono text-[#958ea0] bg-[#11131d] px-2 py-1 rounded">
                    {peer.hoursPerWeek}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#11131d] group-hover:bg-[#4cd7f6] group-hover:text-[#003640] flex items-center justify-center text-[#cbc3d7] transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#11131d]/80 border-t border-white/10 flex items-center justify-between text-xs text-[#958ea0]">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#2fd9f4]" /> Instant P2P Barter Matching Protocol
          </span>
          <kbd className="font-mono text-[10px] bg-black/40 px-2 py-0.5 rounded border border-white/10">
            ESC to close
          </kbd>
        </div>
      </div>
    </div>
  );
};
