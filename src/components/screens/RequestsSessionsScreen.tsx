import React, { useState } from 'react';
import {
  Video,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Lock,
  ArrowRightLeft,
  MessageSquare,
  Play,
  Check,
  X
} from 'lucide-react';
import { BarterSession } from '../../types';

interface RequestsSessionsScreenProps {
  sessions: BarterSession[];
  onCompleteSession: (sessionId: string) => void;
  onAcceptRequest: (sessionId: string) => void;
  onDeclineRequest: (sessionId: string) => void;
}

export const RequestsSessionsScreen: React.FC<RequestsSessionsScreenProps> = ({
  sessions,
  onCompleteSession,
  onAcceptRequest,
  onDeclineRequest
}) => {
  const [filter, setFilter] = useState<'all' | 'in_progress' | 'scheduled' | 'requested'>('all');
  const [activePodSession, setActivePodSession] = useState<BarterSession | null>(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatLogs, setChatLogs] = useState<string[]>([
    'Session connection established via WebRTC mesh.',
    'Elena: Looking forward to the WebGL shader deep dive!'
  ]);

  const filtered = sessions.filter((s) => (filter === 'all' ? true : s.status === filter));

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setChatLogs((prev) => [...prev, `You: ${chatMessage}`]);
    setChatMessage('');
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-10 max-w-7xl mx-auto">
      {/* Top Title & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#272935] text-[#2fd9f4] font-headline text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
            <Lock className="w-3.5 h-3.5" />
            Encrypted P2P Tutelage Pods
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Requests & Barter Sessions
          </h1>
          <p className="text-sm text-[#cbc3d7] mt-1">
            Manage your reciprocal mentoring calendar, join encrypted 1-on-1 rooms, and release locked time-credits.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#191b26] p-1 rounded-xl border border-white/10">
          {(['all', 'in_progress', 'scheduled', 'requested'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-headline font-semibold capitalize transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#11131d] shadow-sm'
                  : 'text-[#cbc3d7] hover:text-white'
              }`}
            >
              {tab.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Session Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((session) => (
          <div
            key={session.id}
            className="bg-[#191b26] rounded-3xl p-6 border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#4cd7f6]/40 transition-all"
          >
            <div>
              {/* Partner Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={session.partnerAvatar}
                    alt={session.partnerName}
                    className="w-12 h-12 rounded-xl object-cover border border-white/10"
                  />
                  <div>
                    <h3 className="font-headline font-bold text-white text-base">
                      {session.partnerName}
                    </h3>
                    <span className="text-xs text-[#958ea0]">{session.partnerRole}</span>
                  </div>
                </div>

                <span
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                    session.status === 'in_progress'
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : session.status === 'scheduled'
                      ? 'bg-[#2fd9f4]/15 text-[#2fd9f4] border border-[#2fd9f4]/30'
                      : 'bg-[#d0bcff]/15 text-[#d0bcff] border border-[#d0bcff]/30'
                  }`}
                >
                  {session.status.replace('_', ' ')}
                </span>
              </div>

              {/* Barter Exchange Details */}
              <div className="bg-[#11131d] p-4 rounded-2xl border border-white/5 space-y-2 mb-4">
                <div className="text-xs">
                  <span className="text-[#4cd7f6] font-bold">You Teach:</span>{' '}
                  <span className="text-white">{session.offeringSkill}</span>
                </div>
                <div className="w-full my-1 flex items-center justify-center text-[#958ea0]">
                  <ArrowRightLeft className="w-3.5 h-3.5 text-[#d0bcff]" />
                </div>
                <div className="text-xs">
                  <span className="text-[#d0bcff] font-bold">You Learn:</span>{' '}
                  <span className="text-[#cbc3d7]">{session.receivingSkill}</span>
                </div>
              </div>

              {/* Progress & Escrow */}
              <div className="space-y-2 mb-4 text-xs font-mono">
                <div className="flex items-center justify-between text-[#cbc3d7]">
                  <span>Session Milestones:</span>
                  <span className="text-white font-bold">
                    {session.completedSessions} / {session.totalSessions} Completed
                  </span>
                </div>
                <div className="w-full bg-[#272935] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] h-full rounded-full"
                    style={{
                      width: `${(session.completedSessions / session.totalSessions) * 100}%`
                    }}
                  ></div>
                </div>

                <div className="flex items-center justify-between pt-2 text-[#958ea0]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2fd9f4]" /> Escrow:
                  </span>
                  <span className="text-[#2fd9f4] font-bold">{session.escrowHours} SST Locked</span>
                </div>
                {session.nextSessionTime && (
                  <div className="flex items-center justify-between text-[#958ea0]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#d0bcff]" /> Schedule:
                    </span>
                    <span className="text-white">{session.nextSessionTime}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-white/5">
              {session.status === 'requested' ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onAcceptRequest(session.id)}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#11131d] font-headline text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Check className="w-4 h-4" /> Accept Barter
                  </button>
                  <button
                    onClick={() => onDeclineRequest(session.id)}
                    className="p-2.5 rounded-xl bg-[#272935] text-[#958ea0] hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setActivePodSession(session)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#2fd9f4] to-[#4cd7f6] text-[#003640] font-headline text-xs font-bold hover:shadow-[0_0_15px_rgba(76,215,246,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Video className="w-4 h-4" /> Enter Encrypted Video Pod
                  </button>
                  <button
                    onClick={() => onCompleteSession(session.id)}
                    className="w-full py-2 rounded-xl bg-[#272935] hover:bg-[#323440] text-xs font-mono text-[#d0bcff] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Complete Hour & Release Escrow
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Encrypted Video Pod Simulator Modal */}
      {activePodSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-4xl bg-[#191b26] border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#11131d] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                <div>
                  <h3 className="font-headline font-bold text-white text-base">
                    Encrypted Pod // {activePodSession.partnerName}
                  </h3>
                  <span className="text-[11px] font-mono text-[#4cd7f6]">
                    E2E AES-256 WebRTC Mesh • 0 Fiat Fees
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActivePodSession(null)}
                className="p-1.5 rounded-xl text-[#958ea0] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Stage & Chat */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-[460px]">
              {/* Main Simulated Screen */}
              <div className="lg:col-span-8 bg-[#0b0e18] p-6 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-mono text-[#2fd9f4] bg-[#191b26]/90 px-3 py-1 rounded-full border border-white/10">
                    Live Tutelage: {activePodSession.offeringSkill}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-[#191b26]/90 px-2.5 py-1 rounded-full">
                    REC 48:12
                  </span>
                </div>

                <div className="text-center my-auto flex flex-col items-center">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-[#2fd9f4] shadow-[0_0_30px_rgba(47,217,244,0.4)] mb-4">
                    <img
                      src={activePodSession.partnerAvatar}
                      alt={activePodSession.partnerName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-headline font-bold text-white text-lg">
                    {activePodSession.partnerName}
                  </h4>
                  <p className="text-xs text-[#958ea0] font-mono mt-1">Audio/Video Synchronized</p>
                </div>

                <div className="flex items-center justify-center gap-3 z-10">
                  <button className="p-3 rounded-full bg-[#272935] text-white hover:bg-[#323440] transition-colors">
                    <Video className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      onCompleteSession(activePodSession.id);
                      setActivePodSession(null);
                    }}
                    className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#003640] font-headline font-bold text-xs shadow-lg transition-all"
                  >
                    Finish Session & Settle 1.0 SST
                  </button>
                </div>
              </div>

              {/* Side Chat / Notes */}
              <div className="lg:col-span-4 bg-[#191b26] flex flex-col justify-between p-4">
                <div className="text-xs font-headline font-bold text-white pb-2 border-b border-white/10 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#a078ff]" /> Pod Scratchpad & Chat
                </div>

                <div className="flex-1 overflow-y-auto py-3 space-y-2 text-xs font-mono">
                  {chatLogs.map((log, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-lg bg-[#11131d] text-[#cbc3d7] border border-white/5"
                    >
                      {log}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="pt-2 flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type code snippet or note..."
                    className="flex-1 bg-[#11131d] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl bg-[#a078ff] text-[#11131d] font-bold text-xs"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
