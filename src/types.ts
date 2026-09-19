export type NavigationTab = 
  | 'explore-marketplace' 
  | 'smart-match' 
  | 'requests-sessions' 
  | 'community' 
  | 'skill-bank';

export interface SkillCardItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  verified: boolean;
  proBadge: string;
  rating: number;
  offeringTitle: string;
  offeringCategory: string;
  seekingTitle: string;
  seekingCategory: string;
  hoursPerWeek: string;
  sessions: string;
  timeCommitment: string;
  accentColor?: string;
  location?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  hours: string;
  skills: string;
  avatar: string;
  sessionCode: string;
}

export interface BarterSession {
  id: string;
  partnerName: string;
  partnerAvatar: string;
  partnerRole: string;
  offeringSkill: string;
  receivingSkill: string;
  status: 'requested' | 'scheduled' | 'in_progress' | 'completed';
  escrowHours: number;
  totalSessions: number;
  completedSessions: number;
  nextSessionTime?: string;
  encryptedProofHash: string;
}

export interface SkillBankTransaction {
  id: string;
  type: 'deposit' | 'earned' | 'released' | 'escrow_lock';
  amountHours: number;
  counterparty: string;
  description: string;
  timestamp: string;
  txHash: string;
  status: 'confirmed' | 'pending';
}

export interface SwapProposalFormData {
  peerName: string;
  offeringSkill: string;
  offeringCategory: string;
  seekingSkill: string;
  seekingCategory: string;
  hoursPerWeek: number;
  totalWeeks: number;
  notes: string;
}
