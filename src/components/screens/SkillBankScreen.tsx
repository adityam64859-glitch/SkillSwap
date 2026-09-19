import React, { useState } from 'react';
import { Wallet, ShieldCheck, ArrowUpRight, ArrowDownLeft, Clock, Lock, Sparkles, Key, Check } from 'lucide-react';
import { SkillBankTransaction } from '../../types';
import { INITIAL_TRANSACTIONS } from '../../data/mockData';

export const SkillBankScreen: React.FC = () => {
  const [balance, setBalance] = useState(1480.5);
  const [lockedEscrow, setLockedEscrow] = useState(12.0);
  const [transactions, setTransactions] = useState<SkillBankTransaction[]>(INITIAL_TRANSACTIONS);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [voucherHours, setVoucherHours] = useState(2);
  const [voucherSkill, setVoucherSkill] = useState('React / Three.js 1-on-1');
  const [depositSuccess, setDepositSuccess] = useState(false);

  const handleMintVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    const newTx: SkillBankTransaction = {
      id: `tx-${Date.now()}`,
      type: 'earned',
      amountHours: voucherHours,
      counterparty: 'Self-Minted Time Reserve',
      description: voucherSkill,
      timestamp: 'Just now',
      txHash: `0x${Math.random().toString(16).substring(2, 10)}...`,
      status: 'confirmed'
    };

    setBalance((prev) => prev + voucherHours);
    setTransactions((prev) => [newTx, ...prev]);
    setDepositSuccess(true);
    setTimeout(() => {
      setDepositSuccess(false);
      setShowDepositModal(false);
    }, 1200);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#272935] text-[#2fd9f4] font-headline text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
          <Wallet className="w-3.5 h-3.5" />
          Decentralized Time-Banking Ledger (SST Protocol)
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
          Skill Bank & Escrow Ledger
        </h1>
        <p className="text-sm sm:text-base text-[#cbc3d7] max-w-2xl">
          Skill Swap Tokens (SST) represent pure pedagogical time. 1 SST is mathematically anchored to 1 hour of focused reciprocal mastery exchange.
        </p>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-[#1d1f2a] to-[#191b26] rounded-3xl p-6 sm:p-8 border border-[#2fd9f4]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#2fd9f4]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="text-xs font-mono text-[#958ea0] uppercase tracking-wider mb-1">
            Available Time-Credit Balance
          </div>
          <div className="font-headline font-bold text-3xl sm:text-4xl text-white tracking-tight flex items-baseline gap-2">
            {balance.toFixed(2)} <span className="text-lg text-[#2fd9f4] font-mono">SST</span>
          </div>
          <p className="text-xs text-[#cbc3d7] mt-3">
            Equivalent to ~{Math.floor(balance)} hours of zero-dollar direct mastery exchange.
          </p>

          <div className="mt-6 pt-4 border-t border-white/5 flex gap-3">
            <button
              onClick={() => setShowDepositModal(true)}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#11131d] font-headline text-xs font-bold shadow-md hover:shadow-[0_0_15px_rgba(76,215,246,0.6)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Mint Time-Credit Voucher
            </button>
          </div>
        </div>

        <div className="bg-[#191b26] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[#d0bcff] mb-2">
              <Lock className="w-5 h-5" />
              <span className="text-[11px] font-mono bg-[#a078ff]/15 px-2 py-0.5 rounded text-[#d0bcff]">
                Smart Escrow
              </span>
            </div>
            <div className="text-xs font-mono text-[#958ea0] uppercase tracking-wider mb-1">
              Currently Locked in Escrow
            </div>
            <div className="font-headline font-bold text-3xl text-white tracking-tight">
              {lockedEscrow.toFixed(1)} <span className="text-base text-[#d0bcff] font-mono">SST</span>
            </div>
            <p className="text-xs text-[#958ea0] mt-3">
              Reserved across 3 pending and active barter swap commitments.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 text-xs text-[#cbc3d7] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#2fd9f4]" /> Auto-settles upon mutual completion
          </div>
        </div>

        <div className="bg-[#191b26] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-emerald-400 mb-2">
              <Clock className="w-5 h-5" />
              <span className="text-[11px] font-mono bg-emerald-500/15 px-2 py-0.5 rounded text-emerald-400">
                Lifetime Tutelage
              </span>
            </div>
            <div className="text-xs font-mono text-[#958ea0] uppercase tracking-wider mb-1">
              Total Hours Exchanged
            </div>
            <div className="font-headline font-bold text-3xl text-white tracking-tight">
              84.5 <span className="text-base text-emerald-400 font-mono">Hrs</span>
            </div>
            <p className="text-xs text-[#958ea0] mt-3">
              34 verified 1-on-1 sessions with 100% peer satisfaction score.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 text-xs text-[#cbc3d7] flex items-center gap-1.5">
            <Key className="w-4 h-4 text-[#d0bcff]" /> DID Reputation Proof: 0x89F...4B2
          </div>
        </div>
      </div>

      {/* Transaction History Ledger */}
      <div className="bg-[#191b26] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <h2 className="font-headline font-bold text-lg text-white">
            Time-Banking On-Chain Ledger
          </h2>
          <span className="text-xs font-mono text-[#958ea0]">All entries cryptographically signed</span>
        </div>

        <div className="divide-y divide-white/5">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    tx.type === 'earned' || tx.type === 'released' || tx.type === 'deposit'
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  }`}
                >
                  {tx.type === 'earned' || tx.type === 'released' || tx.type === 'deposit' ? (
                    <ArrowDownLeft className="w-5 h-5" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5" />
                  )}
                </div>

                <div>
                  <div className="font-headline font-bold text-sm text-white flex items-center gap-2">
                    <span>{tx.counterparty}</span>
                    <span className="text-xs font-mono text-[#958ea0] font-normal">
                      • {tx.description}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#958ea0]">{tx.timestamp}</div>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs font-mono">
                <div
                  className={`font-headline font-bold text-sm ${
                    tx.type === 'earned' || tx.type === 'released' || tx.type === 'deposit'
                      ? 'text-emerald-400'
                      : 'text-amber-400'
                  }`}
                >
                  {tx.type === 'earned' || tx.type === 'released' || tx.type === 'deposit' ? '+' : '-'}
                  {tx.amountHours.toFixed(1)} SST
                </div>
                <div className="text-[11px] text-[#958ea0]">{tx.txHash}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mint Voucher Modal */}
      {showDepositModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-[#191b26] border border-white/20 rounded-3xl p-6 shadow-2xl">
            <h3 className="font-headline font-bold text-lg text-white mb-2">
              Mint Tutelage Time-Credit
            </h3>
            <p className="text-xs text-[#cbc3d7] mb-4">
              Commit teaching hours into the decentralized pool to receive spendable SST credits for acquiring new skills.
            </p>

            {depositSuccess ? (
              <div className="py-8 text-center text-emerald-400 flex flex-col items-center gap-2">
                <Check className="w-8 h-8" />
                <span className="font-headline font-bold text-sm text-white">
                  +{voucherHours} SST Credited to Your Ledger!
                </span>
              </div>
            ) : (
              <form onSubmit={handleMintVoucher} className="space-y-4">
                <div>
                  <label className="block text-xs font-headline font-semibold text-[#cbc3d7] mb-1">
                    Skill You Commit to Teach
                  </label>
                  <input
                    type="text"
                    value={voucherSkill}
                    onChange={(e) => setVoucherSkill(e.target.value)}
                    required
                    className="w-full bg-[#11131d] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#958ea0] mb-1">
                    Hours to Commit: <span className="text-white font-bold">{voucherHours} SST</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={voucherHours}
                    onChange={(e) => setVoucherHours(parseInt(e.target.value))}
                    className="w-full accent-[#4cd7f6]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowDepositModal(false)}
                    className="px-4 py-2 rounded-xl text-xs text-[#958ea0] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#11131d] font-headline font-bold text-xs"
                  >
                    Commit & Mint SST
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
