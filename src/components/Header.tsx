import React, { useState } from 'react';
import { Search, Bell, Menu, X, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { NavigationTab } from '../types';

interface HeaderProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenSearch: () => void;
  onOpenProposeSwap: () => void;
  pendingRequestsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  onOpenProposeSwap,
  pendingRequestsCount = 3
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string; badge?: string }[] = [
    { id: 'explore-marketplace', label: 'Explore Marketplace' },
    { id: 'smart-match', label: 'Smart Match', badge: 'AI' },
    { id: 'requests-sessions', label: 'Requests & Sessions', badge: '3' },
    { id: 'community', label: 'Community' },
    { id: 'skill-bank', label: 'Skill Bank', badge: '1,480 SST' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0e18]/85 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand & Desktop Navigation */}
        <div className="flex items-center gap-6 xl:gap-8">
          <button
            onClick={() => onSelectTab('explore-marketplace')}
            className="flex items-center gap-3 focus:outline-none group text-left cursor-pointer"
          >
            <img
              alt="SkillSwap Brand Logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VwXWww_obNCc9rjdYsmbnPE1WUwjdikzyVsMCwLQmYSgKp6lKKs0lL4OnUS9DTIZGUdC4K4wvAPdGzXiQ5robvv2IqLPYukU5YTYE5y5lACM9ktcIQJmS84Mu8cfTW9WzFIhtP8IHtBjz9wa5LVp7YBusFSIoRCS2v_hTiNS-I0Fg7kJUPNM18wRPisJsk-1HKuiH92JwvmbpoPEpLcNFqhHlOixKgHqEG5STgti4YMYf33RDT2NuASynr"
            />
            <div className="flex flex-col">
              <span className="font-headline font-bold text-xl sm:text-2xl text-[#e1e1f1] tracking-tight group-hover:text-white transition-colors">
                SkillSwap
              </span>
              <span className="text-[10px] font-mono text-[#2fd9f4] -mt-1 hidden sm:block tracking-wider">
                DECENTRALIZED BARTER
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-3.5 py-2 font-headline text-[13px] font-semibold tracking-wide rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'text-[#e1e1f1] bg-[#272935] shadow-[0_0_15px_rgba(47,217,244,0.15)] border border-white/10'
                      : 'text-[#cbc3d7] hover:text-[#e1e1f1] hover:bg-[#1d1f2a]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                        item.badge === 'AI'
                          ? 'bg-[#a078ff]/30 text-[#d0bcff] border border-[#a078ff]/40'
                          : item.badge.includes('SST')
                          ? 'bg-[#2fd9f4]/20 text-[#2fd9f4] border border-[#2fd9f4]/30'
                          : 'bg-[#4cd7f6] text-[#003640]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Search trigger with CMD+K */}
          <button
            onClick={onOpenSearch}
            className="hidden md:flex items-center bg-[#191b26] hover:bg-[#272935] border border-white/10 px-3.5 py-2 rounded-xl transition-all group cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#958ea0] group-hover:text-[#4cd7f6] mr-2.5 transition-colors" />
            <span className="text-xs font-normal text-[#958ea0] group-hover:text-[#cbc3d7] pr-6 select-none">
              Search skills or peers...
            </span>
            <kbd className="text-[10px] font-mono font-semibold bg-[#323440] px-1.5 py-0.5 rounded text-[#cbc3d7] border border-white/10 select-none">
              ⌘K
            </kbd>
          </button>

          {/* Notifications button */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              aria-label="Notifications"
              className="relative p-2.5 rounded-xl text-[#cbc3d7] hover:text-[#e1e1f1] hover:bg-[#1d1f2a] border border-transparent hover:border-white/10 transition-all focus:outline-none cursor-pointer"
            >
              <Bell className="w-5 h-5" />
              {pendingRequestsCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full bg-[#4cd7f6] text-[#003640] font-mono text-[10px] font-bold shadow-[0_0_8px_#4cd7f6]">
                  {pendingRequestsCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-[#191b26] border border-white/15 shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-headline font-bold text-sm text-[#e1e1f1]">
                      Barter Notifications
                    </span>
                    <span className="text-[10px] font-mono bg-[#4cd7f6]/20 text-[#4cd7f6] px-1.5 py-0.5 rounded">
                      Live P2P Mesh
                    </span>
                  </div>
                  <button
                    onClick={() => onSelectTab('requests-sessions')}
                    className="text-xs text-[#2fd9f4] hover:underline"
                  >
                    View All
                  </button>
                </div>
                <div className="divide-y divide-white/5 max-h-72 overflow-y-auto mt-2">
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#4cd7f6] mt-1.5 shrink-0"></span>
                    <div>
                      <p className="text-xs text-[#e1e1f1]">
                        <strong className="text-white">Elena Rostova</strong> accepted your WebGL
                        shader barter swap!
                      </p>
                      <span className="text-[10px] text-[#958ea0] font-mono">15m ago • Session scheduled</span>
                    </div>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#d0bcff] mt-1.5 shrink-0"></span>
                    <div>
                      <p className="text-xs text-[#e1e1f1]">
                        New mutual affinity match with <strong className="text-white">Kenji Sato</strong> (98.4%)
                      </p>
                      <span className="text-[10px] text-[#958ea0] font-mono">1h ago • Smart Match</span>
                    </div>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                    <div>
                      <p className="text-xs text-[#e1e1f1]">
                        Escrow released: <strong className="text-emerald-300">+2.0 SST</strong> from Julian Rivera
                      </p>
                      <span className="text-[10px] text-[#958ea0] font-mono">3h ago • Time-Ledger</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Propose Swap Button */}
          <button
            onClick={onOpenProposeSwap}
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#11131d] font-headline text-xs sm:text-sm font-bold shadow-[0_0_20px_-3px_rgba(160,120,255,0.6)] hover:shadow-[0_0_26px_0_rgba(76,215,246,0.8)] active:scale-[0.98] transition-all cursor-pointer focus:outline-none"
          >
            <Sparkles className="w-4 h-4 mr-1.5 text-[#11131d]" />
            Propose Swap
          </button>

          {/* User Profile Avatar with dropdown */}
          <div className="relative pl-1">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2 p-0.5 rounded-full border border-[#2fd9f4]/40 hover:border-[#2fd9f4] transition-all focus:outline-none cursor-pointer"
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover shadow-[0_0_8px_rgba(47,217,244,0.3)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrp2ddWlv0AMY509Ul01G3jznM5qgab_69MY8UdhBO2y71fZWwmumFm8som7n5mEO4YIlNdD5rdfPryhvrB6ikCoSZP2A6ygzWR0dCGKGDsb0i0ZVWWlVf94WOB3XEeyBq22nGRIc9Gckq7dG_GOJj3z0T-EAlGQTSIcMkq21DXYa8xJnQszGCsCOTchjpTEK607x27UpNCI5WZe4LxkAK8wV5WmboJ_RGhLx7C7AwbBJYGZH_Upch_Q"
              />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-[#191b26] border border-white/15 shadow-2xl p-4 z-50 animate-in fade-in duration-150">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <img
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrp2ddWlv0AMY509Ul01G3jznM5qgab_69MY8UdhBO2y71fZWwmumFm8som7n5mEO4YIlNdD5rdfPryhvrB6ikCoSZP2A6ygzWR0dCGKGDsb0i0ZVWWlVf94WOB3XEeyBq22nGRIc9Gckq7dG_GOJj3z0T-EAlGQTSIcMkq21DXYa8xJnQszGCsCOTchjpTEK607x27UpNCI5WZe4LxkAK8wV5WmboJ_RGhLx7C7AwbBJYGZH_Upch_Q"
                  />
                  <div>
                    <div className="font-headline font-bold text-sm text-white">Aditya M.</div>
                    <div className="text-[11px] text-[#4cd7f6] font-mono">DID: 0x89F...4B2</div>
                  </div>
                </div>
                <div className="py-2.5 flex items-center justify-between border-b border-white/5 text-xs">
                  <span className="text-[#958ea0]">Network Time-Credits</span>
                  <span className="text-[#2fd9f4] font-mono font-bold">1,480.50 SST</span>
                </div>
                <div className="pt-2 flex flex-col gap-1 text-xs">
                  <button
                    onClick={() => {
                      onSelectTab('skill-bank');
                      setProfileDropdownOpen(false);
                    }}
                    className="text-left px-2 py-1.5 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#272935]"
                  >
                    Open Skill Bank Ledger
                  </button>
                  <button
                    onClick={() => {
                      onSelectTab('requests-sessions');
                      setProfileDropdownOpen(false);
                    }}
                    className="text-left px-2 py-1.5 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#272935]"
                  >
                    My Barter Sessions (3)
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-[#cbc3d7] hover:text-white hover:bg-[#1d1f2a] border border-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0b0e18]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full px-4 py-3 rounded-xl font-headline text-sm font-semibold flex items-center justify-between ${
                currentTab === item.id
                  ? 'text-white bg-[#272935] border border-white/10'
                  : 'text-[#cbc3d7] hover:bg-[#1d1f2a]'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-xs font-mono bg-[#4cd7f6]/20 text-[#4cd7f6] px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#191b26] text-[#cbc3d7] text-sm"
            >
              <Search className="w-4 h-4 text-[#4cd7f6]" />
              Search Skills & Peers
            </button>
            <button
              onClick={() => {
                onOpenProposeSwap();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#11131d] font-headline font-bold text-sm"
            >
              Propose Barter Swap
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
