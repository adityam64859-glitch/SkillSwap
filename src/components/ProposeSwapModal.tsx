import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, ArrowRightLeft, Clock, Check, HelpCircle } from 'lucide-react';
import { SkillCardItem, BarterSession } from '../types';
import { SKILL_CATEGORIES } from '../data/mockData';

interface ProposeSwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPeer?: SkillCardItem | null;
  onSuccess: (newSession: BarterSession) => void;
}

export const ProposeSwapModal: React.FC<ProposeSwapModalProps> = ({
  isOpen,
  onClose,
  selectedPeer,
  onSuccess
}) => {
  const [targetName, setTargetName] = useState(selectedPeer?.name || 'Elena Rostova');
  const [offeringSkill, setOfferingSkill] = useState('React 19, Three.js & Modern Frontend');
  const [offeringCategory, setOfferingCategory] = useState('Engineering');
  const [seekingSkill, setSeekingSkill] = useState(selectedPeer?.offeringTitle || 'Guitar & Music Production');
  const [seekingCategory, setSeekingCategory] = useState(selectedPeer?.offeringCategory || 'Music & Audio');
  const [hoursPerWeek, setHoursPerWeek] = useState(2);
  const [durationWeeks, setDurationWeeks] = useState(4);
  const [note, setNote] = useState('Hi! Excited to trade skills 1-on-1. I have 6+ years in frontend and love acoustic fingerpicking!');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalEscrowHours = hoursPerWeek * durationWeeks;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const newSession: BarterSession = {
        id: `session-${Date.now()}`,
        partnerName: targetName,
        partnerAvatar:
          selectedPeer?.avatar ||
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC38hGiZdz09dtEI9IyhKJT-4pmP3-KBfDR3iD2ufR5UOsLf1-m0lI1Z3D-SXyxcFVK9sDcpPa9iDFQfAQtTGwm201enGN9tWuz7Boa6N_8p-lNDoH7mUFP8t9xudbfn7Q6-bY331HS8uOkHjZAvQOMzFCBPAlvbDv84jI2vth7KouTs-X18qC_iUET_-PftHDTnDmjcLNRdJlAhp2WSPE90ytAIRuL4sBgFRGoFdmkCqm7lYMHOZkHrA',
        partnerRole: selectedPeer?.role || 'Skill Partner',
        offeringSkill: offeringSkill,
        receivingSkill: seekingSkill,
        status: 'requested',
        escrowHours: totalEscrowHours,
        totalSessions: durationWeeks,
        completedSessions: 0,
        nextSessionTime: 'Awaiting peer confirmation',
        encryptedProofHash: `0x${Math.random().toString(16).substring(2, 10)}...${Math.random().toString(16).substring(2, 6)}`
      };

      setTimeout(() => {
        onSuccess(newSession);
        setSubmitted(false);
        onClose();
      }, 1200);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-[#191b26] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#11131d]/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a078ff] to-[#4cd7f6] flex items-center justify-center text-[#11131d]">
              <ArrowRightLeft className="w-4 h-4 font-bold" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg text-white">Propose Barter Swap</h3>
              <p className="text-xs text-[#958ea0] font-mono">Zero Fiat • Cryptographically Escrowed</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-[#958ea0] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-headline font-bold text-xl text-white mb-2">
              Barter Swap Request Dispatched!
            </h4>
            <p className="text-sm text-[#cbc3d7] max-w-md mb-4">
              Your proposal has been signed with your decentralized identity (DID) and sent to{' '}
              <strong className="text-white">{targetName}</strong>. Escrow time-credits are now provisioned.
            </p>
            <div className="text-xs font-mono text-[#4cd7f6] bg-[#0b0e18] px-3 py-1.5 rounded-lg border border-[#4cd7f6]/20">
              HASH: 0x8a91...f022 • RECIPROCAL PROTOCOL v3.4
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Target Partner */}
            <div>
              <label className="block text-xs font-headline font-semibold text-[#cbc3d7] uppercase tracking-wider mb-1.5">
                Barter Partner
              </label>
              <input
                type="text"
                value={targetName}
                onChange={(e) => setTargetName(e.target.value)}
                required
                className="w-full bg-[#11131d] border border-white/10 focus:border-[#4cd7f6] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                placeholder="Enter creator name or address..."
              />
            </div>

            {/* Two Column Offering vs Seeking */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Offering */}
              <div className="p-3.5 rounded-2xl bg-[#11131d]/60 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-headline font-bold text-[#4cd7f6] uppercase tracking-wider">
                    You Are Offering
                  </span>
                  <span className="text-[10px] font-mono bg-[#4cd7f6]/10 text-[#4cd7f6] px-1.5 py-0.5 rounded">
                    Your Mastery
                  </span>
                </div>
                <input
                  type="text"
                  value={offeringSkill}
                  onChange={(e) => setOfferingSkill(e.target.value)}
                  required
                  placeholder="e.g. React & WebGL..."
                  className="w-full bg-[#1d1f2a] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                />
                <select
                  value={offeringCategory}
                  onChange={(e) => setOfferingCategory(e.target.value)}
                  className="w-full bg-[#1d1f2a] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-[#cbc3d7] focus:outline-none"
                >
                  {SKILL_CATEGORIES.filter((c) => c !== 'All Categories').map((c) => (
                    <option key={c} value={c} className="bg-[#11131d]">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Seeking */}
              <div className="p-3.5 rounded-2xl bg-[#11131d]/60 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-headline font-bold text-[#d0bcff] uppercase tracking-wider">
                    You Wish To Learn
                  </span>
                  <span className="text-[10px] font-mono bg-[#d0bcff]/10 text-[#d0bcff] px-1.5 py-0.5 rounded">
                    Acquisition
                  </span>
                </div>
                <input
                  type="text"
                  value={seekingSkill}
                  onChange={(e) => setSeekingSkill(e.target.value)}
                  required
                  placeholder="e.g. Guitar Lessons..."
                  className="w-full bg-[#1d1f2a] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d0bcff]"
                />
                <select
                  value={seekingCategory}
                  onChange={(e) => setSeekingCategory(e.target.value)}
                  className="w-full bg-[#1d1f2a] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-[#cbc3d7] focus:outline-none"
                >
                  {SKILL_CATEGORIES.filter((c) => c !== 'All Categories').map((c) => (
                    <option key={c} value={c} className="bg-[#11131d]">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Time Commitment Controls */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#958ea0] mb-1">
                  Hours per Week: <span className="text-white font-bold">{hoursPerWeek} hrs</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={6}
                  step={0.5}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
                  className="w-full accent-[#4cd7f6]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#958ea0] mb-1">
                  Total Sessions: <span className="text-white font-bold">{durationWeeks} weeks</span>
                </label>
                <input
                  type="range"
                  min={2}
                  max={12}
                  step={1}
                  value={durationWeeks}
                  onChange={(e) => setDurationWeeks(parseInt(e.target.value))}
                  className="w-full accent-[#a078ff]"
                />
              </div>
            </div>

            {/* Notes / Message */}
            <div>
              <label className="block text-xs font-mono text-[#958ea0] mb-1.5">
                Mutual Goals & Scheduling Note
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
                className="w-full bg-[#11131d] border border-white/10 focus:border-[#4cd7f6] rounded-xl p-3 text-xs text-white focus:outline-none"
                placeholder="Suggest convenient days, project milestones, or specific topics..."
              />
            </div>

            {/* Escrow Settlement Strip */}
            <div className="p-3.5 rounded-xl bg-[#0b0e18] border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#cbc3d7]">
                <ShieldCheck className="w-4 h-4 text-[#2fd9f4]" />
                <span>Time-Banking Escrow Balance:</span>
              </div>
              <div className="font-mono text-[#2fd9f4] font-bold text-sm">
                {totalEscrowHours.toFixed(1)} SST Locked
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#958ea0] hover:text-white hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#11131d] font-headline font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(160,120,255,0.5)] hover:shadow-[0_0_25px_rgba(76,215,246,0.7)] active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#11131d] border-t-transparent rounded-full animate-spin"></span>
                    Hashing Barter Contract...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#11131d]" />
                    Dispatch Swap Proposal
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
