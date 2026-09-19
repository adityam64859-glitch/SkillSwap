/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ProposeSwapModal } from './components/ProposeSwapModal';
import { MarketplaceScreen } from './components/screens/MarketplaceScreen';
import { SmartMatchScreen } from './components/screens/SmartMatchScreen';
import { RequestsSessionsScreen } from './components/screens/RequestsSessionsScreen';
import { CommunityScreen } from './components/screens/CommunityScreen';
import { SkillBankScreen } from './components/screens/SkillBankScreen';
import { NavigationTab, SkillCardItem, BarterSession } from './types';
import { INITIAL_BARTER_SESSIONS } from './data/mockData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('explore-marketplace');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProposeModalOpen, setIsProposeModalOpen] = useState(false);
  const [selectedPeerForSwap, setSelectedPeerForSwap] = useState<SkillCardItem | null>(null);
  const [sessions, setSessions] = useState<BarterSession[]>(INITIAL_BARTER_SESSIONS);

  const handleOpenProposeSwap = (peer?: SkillCardItem) => {
    setSelectedPeerForSwap(peer || null);
    setIsProposeModalOpen(true);
  };

  const handleSwapCreated = (newSession: BarterSession) => {
    setSessions((prev) => [newSession, ...prev]);
  };

  const handleCompleteSession = (sessionId: string) => {
    setSessions((prev) =>
      prev.map((s) => {
        if (s.id === sessionId) {
          const newCompleted = Math.min(s.completedSessions + 1, s.totalSessions);
          return {
            ...s,
            completedSessions: newCompleted,
            status: newCompleted === s.totalSessions ? 'completed' : 'in_progress'
          };
        }
        return s;
      })
    );
  };

  const handleAcceptRequest = (sessionId: string) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === sessionId ? { ...s, status: 'scheduled' } : s))
    );
  };

  const handleDeclineRequest = (sessionId: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== sessionId));
  };

  const pendingCount = sessions.filter((s) => s.status === 'requested').length;

  return (
    <div className="min-h-screen bg-[#0b0e18] text-[#e1e1f1] flex flex-col relative selection:bg-[#4cd7f6]/30 selection:text-white font-body">
      {/* Ultra-Sharp 3D Ambient Canvas Background */}
      <ThreeBackground />

      {/* Global Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenProposeSwap={() => handleOpenProposeSwap()}
        pendingRequestsCount={pendingCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-20 relative z-10 w-full">
        {currentTab === 'explore-marketplace' && (
          <MarketplaceScreen
            onProposeSwap={handleOpenProposeSwap}
            onNavigateTab={setCurrentTab}
          />
        )}

        {currentTab === 'smart-match' && (
          <SmartMatchScreen onProposeSwap={handleOpenProposeSwap} />
        )}

        {currentTab === 'requests-sessions' && (
          <RequestsSessionsScreen
            sessions={sessions}
            onCompleteSession={handleCompleteSession}
            onAcceptRequest={handleAcceptRequest}
            onDeclineRequest={handleDeclineRequest}
          />
        )}

        {currentTab === 'community' && <CommunityScreen />}

        {currentTab === 'skill-bank' && <SkillBankScreen />}
      </main>

      {/* Global Footer */}
      <Footer onNavigateTab={setCurrentTab} />

      {/* Command Palette / Search Modal (Triggered by button or Cmd+K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPeer={(peer) => {
          handleOpenProposeSwap(peer);
        }}
        onNavigateTab={(tab) => {
          setCurrentTab(tab);
          setIsSearchOpen(false);
        }}
      />

      {/* Barter Swap Proposal Modal */}
      <ProposeSwapModal
        isOpen={isProposeModalOpen}
        onClose={() => setIsProposeModalOpen(false)}
        selectedPeer={selectedPeerForSwap}
        onSuccess={handleSwapCreated}
      />
    </div>
  );
}

