import React, { useState } from 'react';
import { Users, Star, ShieldCheck, Trophy, Sparkles, MessageCircle, ArrowRightLeft, Globe } from 'lucide-react';
import { INITIAL_SKILL_CARDS } from '../../data/mockData';

export const CommunityScreen: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'engineering' | 'design' | 'audio'>('all');

  const liveActivityFeed = [
    {
      id: 'act-1',
      mentor: 'Elena Rostova',
      mentee: 'Tomas Lindqvist',
      skillExchanged: 'WebGL Shaders ⇄ Sourdough Biology',
      time: '4 mins ago',
      hours: '2.0 hrs',
      status: 'Escrow Settled'
    },
    {
      id: 'act-2',
      mentor: 'Kenji Sato',
      mentee: 'Marcus Vance',
      skillExchanged: 'Brand Strategy ⇄ Calisthenics Core',
      time: '18 mins ago',
      hours: '3.0 hrs',
      status: 'Escrow Settled'
    },
    {
      id: 'act-3',
      mentor: 'Chloe Laurent',
      mentee: 'Amina Al-Mansoor',
      skillExchanged: 'Pastry Chemistry ⇄ Rust WASM',
      time: '42 mins ago',
      hours: '1.5 hrs',
      status: 'Escrow Settled'
    },
    {
      id: 'act-4',
      mentor: 'Julian Rivera',
      mentee: 'Mei-Ling Zhou',
      skillExchanged: 'Flutter Systems ⇄ Generative Motion',
      time: '1 hour ago',
      hours: '2.5 hrs',
      status: 'Escrow Settled'
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#272935] text-[#4cd7f6] font-headline text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
          <Globe className="w-3.5 h-3.5" />
          Global Decentralized Tutelage Mesh
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
          Community & Proof of Tutelage
        </h1>
        <p className="text-sm sm:text-base text-[#cbc3d7] max-w-2xl">
          Connect with vetted creators, review transparent on-chain tutelage logs, and explore how reciprocal learning eliminates monetization barriers.
        </p>
      </div>

      {/* Grid: Feed on left, Leaderboard on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Live Mesh Activity Feed */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#191b26] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2fd9f4] shadow-[0_0_8px_#2fd9f4]"></span>
                <h2 className="font-headline font-bold text-lg text-white">
                  Live Barter Mesh Stream
                </h2>
              </div>
              <span className="text-xs font-mono text-[#958ea0]">Auto-refreshing block telemetry</span>
            </div>

            <div className="space-y-4">
              {liveActivityFeed.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[#11131d] border border-white/5 hover:border-[#4cd7f6]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-white font-headline font-semibold">
                      <span>{item.mentor}</span>
                      <ArrowRightLeft className="w-3.5 h-3.5 text-[#d0bcff]" />
                      <span>{item.mentee}</span>
                    </div>
                    <div className="text-xs text-[#cbc3d7]">
                      {item.skillExchanged}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs font-mono">
                    <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {item.status} ({item.hours})
                    </span>
                    <span className="text-[#958ea0] mt-1">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Barter Etiquette Guidelines Box */}
          <div className="bg-[#191b26] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
            <h3 className="font-headline font-bold text-white text-base mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2fd9f4]" />
              The Reciprocal Barter Manifesto
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#cbc3d7]">
              <li className="flex items-start gap-2">
                <span className="text-[#4cd7f6] font-bold">01.</span>
                <span><strong>Zero Fiat Parity:</strong> All exchanges occur exclusively 1-to-1 in dedicated tutelage hours, never converted to monetary tariffs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4cd7f6] font-bold">02.</span>
                <span><strong>Pedagogical Integrity:</strong> Arrive prepared with concrete milestones, code repos, sheet music, or curriculum roadmaps.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4cd7f6] font-bold">03.</span>
                <span><strong>Mutual Proof of Tutelage:</strong> Both participants authenticate session completion to release locked escrow credits.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Top Peer Mentors Leaderboard */}
        <div className="lg:col-span-5 bg-[#191b26] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl h-fit">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#ffd700]" />
              <h2 className="font-headline font-bold text-lg text-white">
                Tutelage Leaderboard
              </h2>
            </div>
            <span className="text-xs font-mono text-[#d0bcff]">This Month</span>
          </div>

          <div className="space-y-3">
            {INITIAL_SKILL_CARDS.slice(0, 5).map((mentor, index) => (
              <div
                key={mentor.id}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#11131d] border border-white/5 hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 text-center font-headline font-bold text-sm ${
                      index === 0
                        ? 'text-[#ffd700]'
                        : index === 1
                        ? 'text-slate-300'
                        : index === 2
                        ? 'text-amber-600'
                        : 'text-[#958ea0]'
                    }`}
                  >
                    #{index + 1}
                  </span>
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-10 h-10 rounded-xl object-cover border border-white/10"
                  />
                  <div>
                    <div className="font-headline font-bold text-sm text-white">
                      {mentor.name}
                    </div>
                    <div className="text-[11px] text-[#958ea0] font-mono">
                      {mentor.offeringTitle.split('&')[0]}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono text-[#4cd7f6] font-bold">
                    {(48 - index * 6)} hrs taught
                  </div>
                  <div className="text-[10px] text-[#d0bcff] font-mono flex items-center justify-end gap-1">
                    <Star className="w-3 h-3 fill-current" /> {mentor.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
