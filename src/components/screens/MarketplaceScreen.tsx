import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Star,
  CheckCircle2,
  Users,
  Smile,
  Clock,
  ShieldCheck,
  Search,
  Filter,
  ArrowRightLeft,
  Layers
} from 'lucide-react';
import { ConstellationHero3D } from '../ConstellationHero3D';
import { SkillCardItem, TestimonialItem, NavigationTab } from '../../types';
import { INITIAL_SKILL_CARDS, TESTIMONIALS, SKILL_CATEGORIES } from '../../data/mockData';

interface MarketplaceScreenProps {
  onProposeSwap: (peer?: SkillCardItem) => void;
  onNavigateTab: (tab: NavigationTab) => void;
}

export const MarketplaceScreen: React.FC<MarketplaceScreenProps> = ({
  onProposeSwap,
  onNavigateTab
}) => {
  // Testimonial Carousel State
  const [testIdx, setTestIdx] = useState(0);
  const currentTest = TESTIMONIALS[testIdx];

  // Skill Swaps Carousel & Filter State
  const [carouselOffset, setCarouselOffset] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchFilter, setSearchFilter] = useState('');

  // Active Swappers animated counter
  const [swapperCount, setSwapperCount] = useState(24850);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwapperCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNextTestimonial = () => {
    setTestIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setTestIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const filteredCards = INITIAL_SKILL_CARDS.filter((card) => {
    const matchesCategory =
      selectedCategory === 'All Categories' ||
      card.offeringCategory === selectedCategory ||
      card.seekingCategory === selectedCategory;
    const matchesSearch =
      card.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      card.offeringTitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
      card.seekingTitle.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Atmospheric Gradient Canvas */}
      <div className="relative w-full overflow-hidden bg-[#0b0e18]">
        {/* Ambient Radial Glow Spots */}
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#8b5cf6]/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-48 right-1/4 w-[500px] h-[500px] bg-[#2fd9f4]/15 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Hero Section */}
        <div className="w-full px-4 sm:px-6 lg:px-12 pt-8 pb-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Cyber Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#272935] border border-white/10 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#2fd9f4] shadow-[0_0_8px_#2fd9f4]"></span>
                <span className="font-headline text-[11px] uppercase tracking-widest text-[#2fd9f4] font-semibold">
                  Decentralized P2P Barter Node
                </span>
                <span className="text-[#958ea0] text-xs">/</span>
                <span className="font-headline text-[11px] text-[#cbc3d7]">
                  v3.4 Protocol Live
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#e1e1f1] tracking-tight leading-[1.15] mb-5">
                Trade Talent, Not Cash:{' '}
                <span className="bg-gradient-to-r from-[#d0bcff] via-[#4cd7f6] to-[#2fd9f4] bg-clip-text text-transparent">
                  The Global Skill Barter Network
                </span>
              </h1>

              {/* Subheading */}
              <p className="font-body text-base sm:text-lg text-[#cbc3d7] max-w-xl mb-8 leading-relaxed">
                Exchange your mastery in code, music, design, cooking, languages, or fitness directly with ambitious creators worldwide. Zero fiat currency required.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onProposeSwap()}
                  className="relative group px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#a078ff] via-[#8b5cf6] to-[#4cd7f6] text-[#11131d] font-headline text-sm sm:text-base font-bold shadow-[0_0_30px_-4px_rgba(160,120,255,0.7)] hover:shadow-[0_0_35px_0_rgba(76,215,246,0.9)] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Start Swapping Now</span>
                  <ArrowRightLeft className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                <button
                  onClick={() => onNavigateTab('smart-match')}
                  className="px-6 py-3.5 rounded-xl bg-[#272935] hover:bg-[#323440] text-[#e1e1f1] hover:text-[#4cd7f6] border border-white/10 transition-all font-headline text-sm sm:text-base font-semibold flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#2fd9f4]" />
                  <span>Explore Live 3D Matches</span>
                </button>
              </div>

              {/* Micro Proof Strip */}
              <div className="flex items-center gap-4 mt-8 pt-4 bg-gradient-to-r from-[#1d1f2a] to-transparent px-4 py-3 rounded-2xl border border-white/5 w-full max-w-lg">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 rounded-full object-cover border-2 border-[#11131d]"
                    alt="Coder"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa9f3aKfEZDUFrnGkyrwOcVRRb6CCG86ZKiy3jJ8K74DtPwGqsqj8jqXjSqEO08in0DejttzghI5jeQJF8OSSGIwH-EuMW1WrzufT9kKSNk2lrzI6K6jip3zzdeSRxtBBsUGgBfIyKOr5JwPgnRo7Dg0LlCUpr6wcyel_JUGNPjCMMstVvDVmU9W8KL0uLN-0pSa5uLCaJVR4ebopCPqzWQRLm1AeHLbJPxiwqHCId1llgwxRsbH42Cw"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full object-cover border-2 border-[#11131d]"
                    alt="Producer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5hqXfkJ4gsrt80fcG7ahbZV0GYdqCtsodBN_tETexne2Sn6L5FgFTh-Ig6JhqG30md00_oy1KVi_CBQ20bAeSpvn_iakzhzE1Xz0agFyNvLJuL2EjlVIOxg5bpH0h2mYOt1mJj7wtjPWDL9X3LuH1KnctjkAyPsddOK_wPRVnIYUtdIJN_ydRgj3wTJBrZ_dadRHhl4Deuu8_fO-NruQsymlsa1-agrumtNwsU1wVoxPwNUr1h4r5OA"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full object-cover border-2 border-[#11131d]"
                    alt="Director"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZb747l7_6Rl4C0SV_EdQBMBwwF9FjDWgjpUVYvy6BYrrw11TWFXfRrVesB0et66Tt56y3hsEDdgZoDu9BiKZY6r0-xd9YIUteRZLxBUdTF8YPRLVxr_xc6OW1qw_hPnEn0hTwzgthUTvRY-z6AXoYsRuoRIhPSPYNnEbXRidb9vn9CQeQkm9NBsaxZ_MCmVbcf26jh1-1WFgRlbdB2njeOlTk1Oyrf1gO8hz4ri4WnLocG7sMk77Jzw"
                  />
                  <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#03b5d3] text-[#00424e] font-headline text-xs font-bold border-2 border-[#11131d]">
                    +8k
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-[#2fd9f4]">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#2fd9f4]" />
                    ))}
                    <span className="font-headline font-bold text-xs ml-1 text-white">
                      4.98
                    </span>
                  </div>
                  <span className="text-xs text-[#958ea0]">
                    from 18,400+ peer-verified exchanges
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3D Skill Constellation */}
            <div className="lg:col-span-6 relative flex flex-col items-center">
              <ConstellationHero3D
                onSelectSkillNode={(skillName) => {
                  setSearchFilter(skillName.split(' ')[0]);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Live Stats Counter Ticker Strip */}
      <div className="w-full bg-[#191b26] border-y border-white/5 py-6 px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Stat 1 */}
          <div className="flex flex-col p-4 bg-[#1d1f2a] rounded-2xl border border-white/5 hover:border-[#4cd7f6]/30 transition-all">
            <div className="flex items-center justify-between text-[#4cd7f6] mb-1.5">
              <Users className="w-6 h-6" />
              <span className="text-[11px] font-mono bg-[#4cd7f6]/10 px-2 py-0.5 rounded text-[#4cd7f6]">
                +18% this wk
              </span>
            </div>
            <div className="font-headline font-bold text-2xl sm:text-3xl text-white tracking-tight">
              {swapperCount.toLocaleString()}+
            </div>
            <span className="text-xs text-[#958ea0]">Active Swappers</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col p-4 bg-[#1d1f2a] rounded-2xl border border-white/5 hover:border-[#a078ff]/30 transition-all">
            <div className="flex items-center justify-between text-[#d0bcff] mb-1.5">
              <Smile className="w-6 h-6" />
              <span className="text-[11px] font-mono bg-[#a078ff]/10 px-2 py-0.5 rounded text-[#d0bcff]">
                Verified
              </span>
            </div>
            <div className="font-headline font-bold text-2xl sm:text-3xl text-white tracking-tight">
              98.4%
            </div>
            <span className="text-xs text-[#958ea0]">Match Satisfaction</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col p-4 bg-[#1d1f2a] rounded-2xl border border-white/5 hover:border-[#2fd9f4]/30 transition-all">
            <div className="flex items-center justify-between text-[#2fd9f4] mb-1.5">
              <Clock className="w-6 h-6" />
              <span className="text-[11px] font-mono bg-[#2fd9f4]/10 px-2 py-0.5 rounded text-[#2fd9f4]">
                Zero Dollar Fiat
              </span>
            </div>
            <div className="font-headline font-bold text-2xl sm:text-3xl text-white tracking-tight">
              142,000+
            </div>
            <span className="text-xs text-[#958ea0]">Hours Exchanged</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col p-4 bg-[#1d1f2a] rounded-2xl border border-white/5 hover:border-[#4cd7f6]/30 transition-all">
            <div className="flex items-center justify-between text-[#4cd7f6] mb-1.5">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-[11px] font-mono bg-[#4cd7f6]/10 px-2 py-0.5 rounded text-[#4cd7f6]">
                Top Decile
              </span>
            </div>
            <div className="font-headline font-bold text-2xl sm:text-3xl text-white tracking-tight">
              4.9 / 5
            </div>
            <span className="text-xs text-[#958ea0]">Trust Rating</span>
          </div>
        </div>
      </div>

      {/* Featured Skills Barter Carousel Section */}
      <div id="marketplace" className="w-full px-4 sm:px-6 lg:px-12 py-16 bg-[#11131d]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[#2fd9f4] font-headline text-xs uppercase tracking-wider mb-2 font-semibold">
              <Zap className="w-4 h-4" />
              High-Velocity Barter Pairings
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e1e1f1]">
              Curated Skill Swaps Ready Today
            </h2>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#958ea0]" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter pairings..."
                className="bg-[#191b26] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
              />
            </div>
            <button
              onClick={() => setSelectedCategory('All Categories')}
              className="p-2 rounded-xl bg-[#272935] text-[#cbc3d7] hover:bg-[#323440] transition-colors"
              title="Reset Filters"
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-headline font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#11131d] shadow-[0_0_12px_rgba(76,215,246,0.5)]'
                  : 'bg-[#191b26] text-[#cbc3d7] hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Perspective Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="group relative flex flex-col bg-[#1d1f2a] rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[0_12px_32px_rgba(47,217,244,0.15)] hover:border-[#4cd7f6]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Mentor Meta */}
              <div className="flex items-center gap-3.5 mb-5">
                <img
                  className="w-12 h-12 rounded-xl object-cover border border-white/10 shadow-sm"
                  src={card.avatar}
                  alt={card.name}
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-headline font-bold text-[#e1e1f1] text-base group-hover:text-white">
                      {card.name}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#4cd7f6]" />
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-mono text-[#d0bcff] font-bold">
                      {card.rating} ★
                    </span>
                    <span className="text-[10px] font-mono bg-[#272935] text-[#958ea0] px-1.5 py-0.5 rounded border border-white/5">
                      {card.proBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Exchange Details Box */}
              <div className="bg-[#191b26] p-4 rounded-xl mb-4 border border-white/5">
                <span className="text-[11px] font-headline font-bold text-[#4cd7f6] uppercase tracking-wide">
                  Offering
                </span>
                <p className="font-headline font-semibold text-white text-sm mt-0.5">
                  {card.offeringTitle}
                </p>

                <div className="w-full my-3 flex items-center justify-center gap-2 text-[#958ea0]">
                  <div className="h-[1px] bg-[#272935] flex-1"></div>
                  <ArrowRightLeft className="w-4 h-4 text-[#a078ff]" />
                  <div className="h-[1px] bg-[#272935] flex-1"></div>
                </div>

                <span className="text-[11px] font-headline font-bold text-[#d0bcff] uppercase tracking-wide">
                  Seeking
                </span>
                <p className="font-headline font-semibold text-[#cbc3d7] text-sm mt-0.5">
                  {card.seekingTitle}
                </p>
              </div>

              {/* Footer Commitment & Swap Request Button */}
              <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-[#958ea0]">
                  {card.timeCommitment}
                </span>
                <button
                  onClick={() => onProposeSwap(card)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#272935] group-hover:bg-[#a078ff] group-hover:text-[#11131d] text-white font-headline text-xs font-bold transition-all cursor-pointer"
                >
                  Swap Request
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works: 3 Holographic Steps */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-16 bg-[#0b0e18] relative overflow-hidden">
        <div className="max-w-3xl mb-12">
          <span className="font-headline text-xs uppercase tracking-wider text-[#4cd7f6] font-semibold">
            Reciprocal Peer Protocol
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
            How Skill Barter Works
          </h2>
          <p className="text-sm sm:text-base text-[#cbc3d7] mt-2">
            Eliminate transactional friction. Tap into direct bilateral value transfer in three frictionless stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1 */}
          <div className="relative bg-[#191b26] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between overflow-hidden group hover:border-[#2fd9f4]/40 transition-all">
            <div className="absolute -right-4 -top-4 w-28 h-28 bg-[#a078ff]/10 rounded-full blur-2xl group-hover:bg-[#a078ff]/20 transition-all"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#272935] flex items-center justify-center text-[#2fd9f4] mb-6 border border-white/10">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#2fd9f4] tracking-wider uppercase font-bold">
                PHASE 01 // IDENTITY
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                Mint Your Skill Portfolio
              </h3>
              <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
                Define your core offerings, set verifiable proficiency milestones, and specify exact disciplines you wish to acquire.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[#958ea0] text-xs font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#2fd9f4]" />
              Cryptographic Proof of Mastery
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-[#191b26] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between overflow-hidden group hover:border-[#a078ff]/40 transition-all">
            <div className="absolute -right-4 -top-4 w-28 h-28 bg-[#2fd9f4]/10 rounded-full blur-2xl group-hover:bg-[#2fd9f4]/20 transition-all"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#272935] flex items-center justify-center text-[#d0bcff] mb-6 border border-white/10">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#d0bcff] tracking-wider uppercase font-bold">
                PHASE 02 // MATCHING
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                Smart AI Barter Matching
              </h3>
              <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
                Our vector matching engine parses reciprocal alignment, scheduling compatibility, and skill equity to serve instant high-probability pairs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[#958ea0] text-xs font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#d0bcff]" />
              Mutual Want-Affinity Ranking
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-[#191b26] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between overflow-hidden group hover:border-[#4cd7f6]/40 transition-all">
            <div className="absolute -right-4 -top-4 w-28 h-28 bg-[#4cd7f6]/10 rounded-full blur-2xl group-hover:bg-[#4cd7f6]/20 transition-all"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#272935] flex items-center justify-center text-[#4cd7f6] mb-6 border border-white/10">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#4cd7f6] tracking-wider uppercase font-bold">
                PHASE 03 // EXCHANGE
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                Connect, Swap & Earn Time-Credits
              </h3>
              <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
                Complete encrypted 1-on-1 sessions. Release locked time-credits upon completion, or store them in the decentralized bank for future swaps.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[#958ea0] text-xs font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#4cd7f6]" />
              Time-Banking Settlement Ledger
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Testimonials Slider Section */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-16 bg-[#11131d]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8">
          <div>
            <span className="font-headline text-xs uppercase tracking-wider text-[#4cd7f6] font-semibold">
              Verified Stories
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white mt-2">
              Proof of Tutelage in the Wild
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={handlePrevTestimonial}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full bg-[#272935] flex items-center justify-center text-white hover:bg-[#323440] transition-colors border border-white/10 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextTestimonial}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full bg-[#272935] flex items-center justify-center text-white hover:bg-[#323440] transition-colors border border-white/10 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Testimonial Card Display */}
        <div className="w-full bg-[#191b26] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Avatar & Hours Badge */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl relative border border-white/15">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={currentTest.avatar}
                  alt={currentTest.author}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e18]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#323440]/90 backdrop-blur-md border border-white/10">
                  <Zap className="w-3.5 h-3.5 text-[#2fd9f4]" />
                  <span className="text-xs font-mono text-white font-semibold">
                    {currentTest.hours}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote & Author Info */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4 text-[#2fd9f4]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#2fd9f4]" />
                ))}
                <span className="font-mono text-[#958ea0] text-xs ml-2">
                  {currentTest.sessionCode}
                </span>
              </div>

              <blockquote className="font-headline text-lg sm:text-2xl text-white font-medium leading-snug mb-6">
                "{currentTest.quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 bg-[#1d1f2a] px-4 py-3 rounded-2xl border border-white/5">
                <div>
                  <div className="font-headline font-bold text-white text-base">
                    {currentTest.author}
                  </div>
                  <div className="text-xs text-[#958ea0]">
                    {currentTest.role}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#cbc3d7] bg-[#272935] px-3 py-1.5 rounded-lg border border-white/5">
                    {currentTest.skills}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final High-Conversion CTA Banner with Neon Glow */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-16 bg-[#0b0e18]">
        <div className="relative w-full rounded-3xl bg-gradient-to-br from-[#272935] via-[#1d1f2a] to-[#191b26] p-8 sm:p-14 lg:p-20 overflow-hidden border border-white/15 shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)]">
          {/* Luminous Background Orbs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#a078ff]/20 rounded-full blur-[90px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#4cd7f6]/20 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#323440] text-[#2fd9f4] font-headline text-xs uppercase tracking-widest mb-6 border border-white/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2fd9f4] shadow-[0_0_8px_#2fd9f4]"></span>
              Zero Transaction Commission Forever
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Ready to Trade Your Superpower?
            </h2>

            <p className="text-base sm:text-lg text-[#cbc3d7] mb-8 max-w-lg">
              Join thousands of developers, musicians, chefs, and scholars trading skills peer-to-peer. Your next breakthrough skill costs zero dollars.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <button
                onClick={() => onProposeSwap()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#a078ff] via-[#8b5cf6] to-[#4cd7f6] text-[#11131d] font-headline text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(160,120,255,0.7)] hover:shadow-[0_0_40px_rgba(76,215,246,0.9)] active:scale-95 transition-all cursor-pointer"
              >
                Create Your Barter Profile
              </button>

              <button
                onClick={() => onNavigateTab('smart-match')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#272935] hover:bg-[#323440] text-white border border-white/10 font-headline text-sm sm:text-base font-semibold transition-all cursor-pointer shadow-sm"
              >
                Simulate Smart Barter Match
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[#958ea0] text-xs font-mono">
              <span className="flex items-center gap-1.5 text-[#2fd9f4]">
                <ShieldCheck className="w-4 h-4" />
                Identity Vetted
              </span>
              <span className="flex items-center gap-1.5 text-[#d0bcff]">
                <Clock className="w-4 h-4" />
                Escrowed Time-Ledger
              </span>
              <span className="flex items-center gap-1.5 text-[#4cd7f6]">
                <Zap className="w-4 h-4" />
                Instant AI Pairing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
