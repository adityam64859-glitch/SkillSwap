import React, { useState } from 'react';
import { Sparkles, Zap, ArrowRightLeft, CheckCircle2, Star, ShieldCheck, Filter, UserCheck, RefreshCw } from 'lucide-react';
import { SkillCardItem } from '../../types';
import { INITIAL_SKILL_CARDS } from '../../data/mockData';

interface SmartMatchScreenProps {
  onProposeSwap: (peer?: SkillCardItem) => void;
}

export const SmartMatchScreen: React.FC<SmartMatchScreenProps> = ({ onProposeSwap }) => {
  const [mySkill, setMySkill] = useState('React 19 & WebGL Graphics');
  const [seekingSkill, setSeekingSkill] = useState('Classical Piano & Music Theory');
  const [hoursCommitment, setHoursCommitment] = useState(2);
  const [isCalculating, setIsCalculating] = useState(false);
  const [matchGenerated, setMatchGenerated] = useState(true);

  const handleRunMatch = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setMatchGenerated(true);
    }, 700);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-10 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#272935] text-[#d0bcff] font-headline text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
          <Sparkles className="w-4 h-4 text-[#a078ff]" />
          Vector Barter Matching Engine v3.4
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          Smart AI Barter Matching
        </h1>
        <p className="text-sm sm:text-base text-[#cbc3d7] max-w-2xl">
          Our high-dimension embedding engine evaluates mutual want-affinity, reciprocal schedule availability, and pedagogical equity to deliver instant peer pairing with zero fiat friction.
        </p>
      </div>

      {/* Simulator Control Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left: Input parameters */}
        <div className="lg:col-span-5 bg-[#191b26] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-headline font-bold text-sm text-white flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#4cd7f6]" /> Barter Vector Parameters
            </span>
            <span className="text-[11px] font-mono text-[#2fd9f4]">Mesh Node Active</span>
          </div>

          {/* Offering */}
          <div>
            <label className="block text-xs font-headline font-bold text-[#4cd7f6] uppercase tracking-wider mb-2">
              Your Primary Offering (Teaching)
            </label>
            <select
              value={mySkill}
              onChange={(e) => setMySkill(e.target.value)}
              className="w-full bg-[#11131d] border border-white/10 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4cd7f6]"
            >
              <option value="React 19 & WebGL Graphics">React 19 & WebGL Graphics</option>
              <option value="Fullstack Rust & WASM">Fullstack Rust & WASM</option>
              <option value="Brand Identity & Figma Design">Brand Identity & Figma Design</option>
              <option value="Specialty French Pastry Baking">Specialty French Pastry Baking</option>
              <option value="Calisthenics & Strength Training">Calisthenics & Strength Training</option>
              <option value="PyTorch Deep Learning">PyTorch Deep Learning</option>
            </select>
          </div>

          {/* Seeking */}
          <div>
            <label className="block text-xs font-headline font-bold text-[#d0bcff] uppercase tracking-wider mb-2">
              Your Target Acquisition (Learning)
            </label>
            <select
              value={seekingSkill}
              onChange={(e) => setSeekingSkill(e.target.value)}
              className="w-full bg-[#11131d] border border-white/10 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#d0bcff]"
            >
              <option value="Classical Piano & Music Theory">Classical Piano & Music Theory</option>
              <option value="Conversational Japanese & Kanji">Conversational Japanese & Kanji</option>
              <option value="Acoustic & Electric Guitar">Acoustic & Electric Guitar</option>
              <option value="Python Data Science & AI">Python Data Science & AI</option>
              <option value="SEO & Growth Marketing">SEO & Growth Marketing</option>
              <option value="Sourdough Baking Science">Sourdough Baking Science</option>
            </select>
          </div>

          {/* Hours commitment */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#958ea0] mb-2">
              <span>Weekly Commitment:</span>
              <span className="text-white font-bold">{hoursCommitment} Hours/Week</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              step={0.5}
              value={hoursCommitment}
              onChange={(e) => setHoursCommitment(parseFloat(e.target.value))}
              className="w-full accent-[#4cd7f6]"
            />
          </div>

          {/* Action Trigger */}
          <button
            onClick={handleRunMatch}
            disabled={isCalculating}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#11131d] font-headline font-bold text-sm shadow-[0_0_20px_rgba(160,120,255,0.5)] hover:shadow-[0_0_26px_rgba(76,215,246,0.7)] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {isCalculating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Calculating Vector Alignment...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                Execute Vector Barter Match
              </>
            )}
          </button>
        </div>

        {/* Right: Real-time Vector Alignment Telemetry */}
        <div className="lg:col-span-7 bg-[#191b26] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-headline font-bold text-sm text-white">
                Reciprocal Affinity Metrics
              </span>
              <span className="text-xs font-mono text-[#4cd7f6] bg-[#0b0e18] px-2.5 py-1 rounded-lg border border-[#4cd7f6]/20">
                99.4% MAX AFFINITY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-[#11131d] p-4 rounded-2xl border border-white/5">
                <div className="text-[11px] font-mono text-[#958ea0]">Want Parity</div>
                <div className="font-headline font-bold text-2xl text-[#2fd9f4] mt-1">99.8%</div>
                <div className="text-[10px] text-[#cbc3d7] mt-0.5">High direct demand</div>
              </div>
              <div className="bg-[#11131d] p-4 rounded-2xl border border-white/5">
                <div className="text-[11px] font-mono text-[#958ea0]">Schedule Sync</div>
                <div className="font-headline font-bold text-2xl text-[#d0bcff] mt-1">94.2%</div>
                <div className="text-[10px] text-[#cbc3d7] mt-0.5">UTC timezone overlap</div>
              </div>
              <div className="bg-[#11131d] p-4 rounded-2xl border border-white/5">
                <div className="text-[11px] font-mono text-[#958ea0]">Skill Equity</div>
                <div className="font-headline font-bold text-2xl text-emerald-400 mt-1">1:1</div>
                <div className="text-[10px] text-[#cbc3d7] mt-0.5">Balanced hourly value</div>
              </div>
            </div>

            {/* Neural connection simulation visual */}
            <div className="bg-[#11131d] p-4 rounded-2xl border border-white/5">
              <div className="text-xs font-mono text-[#cbc3d7] flex items-center justify-between mb-2">
                <span>Vector Synthesis:</span>
                <span className="text-[#4cd7f6]">Cosine Distance: 0.042</span>
              </div>
              <div className="w-full bg-[#1d1f2a] h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] h-full rounded-full transition-all duration-1000"
                  style={{ width: isCalculating ? '40%' : '98%' }}
                ></div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#958ea0] font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#2fd9f4]" /> Authenticated Tutelage Node
            </span>
            <span>Latency: 14ms</span>
          </div>
        </div>
      </div>

      {/* Top Matching Creators for the Selected Skills */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-white">
            Top Reciprocal Creators Ready to Swap
          </h2>
          <span className="text-xs font-mono text-[#958ea0]">3 Verified Candidates</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_SKILL_CARDS.slice(0, 3).map((peer, idx) => (
            <div
              key={peer.id}
              className="bg-[#191b26] rounded-2xl p-6 border border-white/10 hover:border-[#4cd7f6]/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={peer.avatar}
                    alt={peer.name}
                    className="w-12 h-12 rounded-xl object-cover border border-white/10"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 font-headline font-bold text-white">
                      {peer.name}
                      <UserCheck className="w-4 h-4 text-[#4cd7f6]" />
                    </div>
                    <div className="text-xs text-[#958ea0] font-mono">{peer.location}</div>
                  </div>
                </div>

                <div className="bg-[#11131d] p-3.5 rounded-xl border border-white/5 mb-4 space-y-2 text-xs">
                  <div>
                    <span className="text-[#4cd7f6] font-bold">Teaches:</span> {peer.offeringTitle}
                  </div>
                  <div>
                    <span className="text-[#d0bcff] font-bold">Seeking:</span> {peer.seekingTitle}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs font-mono text-[#2fd9f4] font-bold">
                  {idx === 0 ? '99.4% Match' : idx === 1 ? '98.1% Match' : '96.8% Match'}
                </div>
                <button
                  onClick={() => onProposeSwap(peer)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#11131d] font-headline text-xs font-bold shadow-sm hover:shadow-[0_0_15px_rgba(76,215,246,0.5)] transition-all cursor-pointer"
                >
                  Initiate Barter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
