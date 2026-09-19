import { SkillCardItem, TestimonialItem, BarterSession, SkillBankTransaction } from '../types';

export const INITIAL_SKILL_CARDS: SkillCardItem[] = [
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'WebGL & Graphics Lead',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC38hGiZdz09dtEI9IyhKJT-4pmP3-KBfDR3iD2ufR5UOsLf1-m0lI1Z3D-SXyxcFVK9sDcpPa9iDFQfAQtTGwm201enGN9tWuz7Boa6N_8p-lNDoH7mUFP8t9xudbfn7Q6-bY331HS8uOkHjZAvQOMzFCBPAlvbDv84jI2vth7KouTs-X18qC_iUET_-PftHDTnDmjcLNRdJlAhp2WSPE90ytAIRuL4sBgFRGoFdmkCqm7lYMHOZkHrA',
    verified: true,
    proBadge: 'Verified Pro',
    rating: 4.98,
    offeringTitle: 'React & WebGL Engineering',
    offeringCategory: 'Engineering',
    seekingTitle: 'Acoustic & Electric Guitar Lessons',
    seekingCategory: 'Music & Audio',
    hoursPerWeek: '2 hrs/week',
    sessions: '6 Sessions',
    timeCommitment: '2 hrs/week • 6 Sessions',
    accentColor: '#2fd9f4',
    location: 'Berlin, Germany'
  },
  {
    id: 'kenji-sato',
    name: 'Kenji Sato',
    role: 'Principal Brand Architect',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4friJu5YLWji_yx35XXRtwU5MThLK9vNkkfuy-eaxvaYyQEz-3fpwm9DItLrYVj2mxr-7r5URft9WbLzAHFAsyodN62IHNTozu-IKVj7Keqy7io04UPaioMZkQrKiJVkAPjw4QG5Qwtq0T4fqWfiQ_3NTSARlb14crLsvWAMIfsPfnzktb3mmahmGEYVtoSgNfrxqNKqy6Y0unIri0X4jZuQdnSF76YmdMDrfVuMwL3MtXVWBl12PuQ',
    verified: true,
    proBadge: 'Master Designer',
    rating: 5.0,
    offeringTitle: 'Brand Identity & Figma Design',
    offeringCategory: 'Design & 3D',
    seekingTitle: 'Conversational Japanese & Kanji',
    seekingCategory: 'Languages',
    hoursPerWeek: '3 hrs/week',
    sessions: 'Ongoing',
    timeCommitment: '3 hrs/week • Ongoing',
    accentColor: '#d0bcff',
    location: 'Kyoto, Japan'
  },
  {
    id: 'chloe-laurent',
    name: 'Chloe Laurent',
    role: 'Executive Pastry Chef',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-JbqWHlsWKmOQMT5ybgpTsdLMk_1mVvaYbcGW3tGip6CHLd4VR7vme3qJcezd-cRUVGduEkNocn2sLhofx7Vxk_qUNGdEYKiMnmuRPquj2qlQlaOmcg3xYG1_eeCH6xzN7V5j_40JC3wJaYkh0SfHVKlJFCRdUwyzxO87OmqxZTk3ZjkGg5cg54dJ-T1wNccm_T6DFglSPtoxt12c47SCToeMQywRxxVts1NtwF-zZu18gvlHBcqrLg',
    verified: true,
    proBadge: 'Artisan',
    rating: 4.9,
    offeringTitle: 'Specialty French Pastry Baking',
    offeringCategory: 'Culinary',
    seekingTitle: 'SEO & Growth Marketing',
    seekingCategory: 'Marketing & Business',
    hoursPerWeek: '1.5 hrs/week',
    sessions: '4 Sessions',
    timeCommitment: '1.5 hrs/week • 4 Sessions',
    accentColor: '#2fd9f4',
    location: 'Lyon, France'
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Master Calisthenics Trainer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCElsAD_bGEKjdegX5ky_MTGlw2rWq2ZnmHHPj8zIsw-Q3dLcZjpFjFnafvbA65OZrk8RgGjLc0e5fYULr6F7DCp0-6QXuYaIGYHoKCgF9bN5oDMcB1JCO-SHR2KvzuQq4KIrJYTIS4ZDYP5nZSrJq3xaAFroyTvXJzPf3XPCnDDppIzcM3S6BgnVwFUfZw56uJ5BsyZFkDTg5YlaWBDNeG9BvPTDw9Scwrt9W-82mKY3lQT2G4M_nd1A',
    verified: true,
    proBadge: 'Elite Coach',
    rating: 4.95,
    offeringTitle: 'Calisthenics & Strength Training',
    offeringCategory: 'Fitness & Health',
    seekingTitle: 'Python Data Science & AI',
    seekingCategory: 'AI & Data',
    hoursPerWeek: '2.5 hrs/week',
    sessions: '8 Sessions',
    timeCommitment: '2.5 hrs/week • 8 Sessions',
    accentColor: '#d0bcff',
    location: 'Austin, TX'
  },
  {
    id: 'amina-al-mansoor',
    name: 'Amina Al-Mansoor',
    role: 'Rust Core & WASM Developer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa9f3aKfEZDUFrnGkyrwOcVRRb6CCG86ZKiy3jJ8K74DtPwGqsqj8jqXjSqEO08in0DejttzghI5jeQJF8OSSGIwH-EuMW1WrzufT9kKSNk2lrzI6K6jip3zzdeSRxtBBsUGgBfIyKOr5JwPgnRo7Dg0LlCUpr6wcyel_JUGNPjCMMstVvDVmU9W8KL0uLN-0pSa5uLCaJVR4ebopCPqzWQRLm1AeHLbJPxiwqHCId1llgwxRsbH42Cw',
    verified: true,
    proBadge: 'Core Contributor',
    rating: 4.99,
    offeringTitle: 'Fullstack Rust, Tokio & WASM',
    offeringCategory: 'Engineering',
    seekingTitle: 'Sound Synthesis & Ableton Live',
    seekingCategory: 'Music & Audio',
    hoursPerWeek: '2 hrs/week',
    sessions: '10 Sessions',
    timeCommitment: '2 hrs/week • 10 Sessions',
    accentColor: '#4cd7f6',
    location: 'Dubai, UAE'
  },
  {
    id: 'tomas-lindqvist',
    name: 'Tomas Lindqvist',
    role: 'Procedural Shader Specialist',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5hqXfkJ4gsrt80fcG7ahbZV0GYdqCtsodBN_tETexne2Sn6L5FgFTh-Ig6JhqG30md00_oy1KVi_CBQ20bAeSpvn_iakzhzE1Xz0agFyNvLJuL2EjlVIOxg5bpH0h2mYOt1mJj7wtjPWDL9X3LuH1KnctjkAyPsddOK_wPRVnIYUtdIJN_ydRgj3wTJBrZ_dadRHhl4Deuu8_fO-NruQsymlsa1-agrumtNwsU1wVoxPwNUr1h4r5OA',
    verified: true,
    proBadge: 'Shaders Master',
    rating: 4.92,
    offeringTitle: 'GLSL Shaders & Raymarching',
    offeringCategory: 'Design & 3D',
    seekingTitle: 'Sourdough Microbiology & Baking',
    seekingCategory: 'Culinary',
    hoursPerWeek: '1.5 hrs/week',
    sessions: '5 Sessions',
    timeCommitment: '1.5 hrs/week • 5 Sessions',
    accentColor: '#a078ff',
    location: 'Stockholm, Sweden'
  },
  {
    id: 'mei-ling-zhou',
    name: 'Mei-Ling Zhou',
    role: 'Creative Director & Motion Lead',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZb747l7_6Rl4C0SV_EdQBMBwwF9FjDWgjpUVYvy6BYrrw11TWFXfRrVesB0et66Tt56y3hsEDdgZoDu9BiKZY6r0-xd9YIUteRZLxBUdTF8YPRLVxr_xc6OW1qw_hPnEn0hTwzgthUTvRY-z6AXoYsRuoRIhPSPYNnEbXRidb9vn9CQeQkm9NBsaxZ_MCmVbcf26jh1-1WFgRlbdB2njeOlTk1Oyrf1gO8hz4ri4WnLocG7sMk77Jzw',
    verified: true,
    proBadge: 'Creative Fellow',
    rating: 4.97,
    offeringTitle: 'Cinema4D & Generative AI Art',
    offeringCategory: 'Design & 3D',
    seekingTitle: 'Mandarin Calligraphy & Poetry',
    seekingCategory: 'Languages',
    hoursPerWeek: '2 hrs/week',
    sessions: '6 Sessions',
    timeCommitment: '2 hrs/week • 6 Sessions',
    accentColor: '#2fd9f4',
    location: 'Taipei, Taiwan'
  },
  {
    id: 'julian-rivera-card',
    name: 'Julian Rivera',
    role: 'Lead Systems Architect',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-sr3ay3LEf5cQKiD63FhWSpFpkfh5FAjoJllTgMWmcodeQ8yEDkq_LNJZSU-84gFHV9R_53S9vA9GVpriKPA3YaqxumLvjuR1c9NY350viRvVJgg3RcFakf1KFAuRxbNy7X61SyZXZ0NQQphcYdImINr8Q2VcIlu6ZxCxiN9DAyN8nJATghzj3qPuQcITEYT4WyU9lk0iSODcBX3t2aaH178OVmT0FaeapZnH_Vu4qjz3sha3t326gw',
    verified: true,
    proBadge: 'Systems Fellow',
    rating: 4.98,
    offeringTitle: 'Mobile Flutter & Dart Core',
    offeringCategory: 'Engineering',
    seekingTitle: 'Classical Piano & Music Theory',
    seekingCategory: 'Music & Audio',
    hoursPerWeek: '3 hrs/week',
    sessions: '8 Sessions',
    timeCommitment: '3 hrs/week • 8 Sessions',
    accentColor: '#d0bcff',
    location: 'Buenos Aires, Argentina'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'I traded 20 hours of mobile Flutter development for 20 hours of classical piano lessons. No currency conversions, no platform fees. It genuinely reignited my creative balance.',
    author: 'Julian Rivera',
    role: 'Lead Systems Architect • Buenos Aires',
    hours: '32 Hours Bartered',
    skills: 'Flutter ⇄ Classical Piano',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-sr3ay3LEf5cQKiD63FhWSpFpkfh5FAjoJllTgMWmcodeQ8yEDkq_LNJZSU-84gFHV9R_53S9vA9GVpriKPA3YaqxumLvjuR1c9NY350viRvVJgg3RcFakf1KFAuRxbNy7X61SyZXZ0NQQphcYdImINr8Q2VcIlu6ZxCxiN9DAyN8nJATghzj3qPuQcITEYT4WyU9lk0iSODcBX3t2aaH178OVmT0FaeapZnH_Vu4qjz3sha3t326gw',
    sessionCode: 'SESSION #8491 AUTHENTICATED'
  },
  {
    id: 'test-2',
    quote: 'Bartered full-stack Rust mentoring for conversational Japanese sessions. After 8 weeks, I successfully landed a robotics contract in Shibuya. SkillSwap made this possible.',
    author: 'Amina Al-Mansoor',
    role: 'Rust & Embedded Engineer • Dubai',
    hours: '48 Hours Bartered',
    skills: 'Rust/Wasm ⇄ Japanese',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa9f3aKfEZDUFrnGkyrwOcVRRb6CCG86ZKiy3jJ8K74DtPwGqsqj8jqXjSqEO08in0DejttzghI5jeQJF8OSSGIwH-EuMW1WrzufT9kKSNk2lrzI6K6jip3zzdeSRxtBBsUGgBfIyKOr5JwPgnRo7Dg0LlCUpr6wcyel_JUGNPjCMMstVvDVmU9W8KL0uLN-0pSa5uLCaJVR4ebopCPqzWQRLm1AeHLbJPxiwqHCId1llgwxRsbH42Cw',
    sessionCode: 'SESSION #7120 AUTHENTICATED'
  },
  {
    id: 'test-3',
    quote: 'I helped an indie game creator optimize shader math, and she coached me through sourdough baking chemistry. The most humane exchange platform on the web today.',
    author: 'Tomas Lindqvist',
    role: 'Creative Technologist • Stockholm',
    hours: '19 Hours Bartered',
    skills: 'GLSL Shaders ⇄ Baking Science',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5hqXfkJ4gsrt80fcG7ahbZV0GYdqCtsodBN_tETexne2Sn6L5FgFTh-Ig6JhqG30md00_oy1KVi_CBQ20bAeSpvn_iakzhzE1Xz0agFyNvLJuL2EjlVIOxg5bpH0h2mYOt1mJj7wtjPWDL9X3LuH1KnctjkAyPsddOK_wPRVnIYUtdIJN_ydRgj3wTJBrZ_dadRHhl4Deuu8_fO-NruQsymlsa1-agrumtNwsU1wVoxPwNUr1h4r5OA',
    sessionCode: 'SESSION #9244 AUTHENTICATED'
  }
];

export const INITIAL_BARTER_SESSIONS: BarterSession[] = [
  {
    id: 'session-101',
    partnerName: 'Elena Rostova',
    partnerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC38hGiZdz09dtEI9IyhKJT-4pmP3-KBfDR3iD2ufR5UOsLf1-m0lI1Z3D-SXyxcFVK9sDcpPa9iDFQfAQtTGwm201enGN9tWuz7Boa6N_8p-lNDoH7mUFP8t9xudbfn7Q6-bY331HS8uOkHjZAvQOMzFCBPAlvbDv84jI2vth7KouTs-X18qC_iUET_-PftHDTnDmjcLNRdJlAhp2WSPE90ytAIRuL4sBgFRGoFdmkCqm7lYMHOZkHrA',
    partnerRole: 'WebGL & Graphics Lead',
    offeringSkill: 'React 19 & Next.js Core Architecture',
    receivingSkill: 'Acoustic Guitar Fingerpicking',
    status: 'in_progress',
    escrowHours: 6.0,
    totalSessions: 6,
    completedSessions: 3,
    nextSessionTime: 'Today at 18:00 UTC',
    encryptedProofHash: '0x8f2a...94be'
  },
  {
    id: 'session-102',
    partnerName: 'Kenji Sato',
    partnerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4friJu5YLWji_yx35XXRtwU5MThLK9vNkkfuy-eaxvaYyQEz-3fpwm9DItLrYVj2mxr-7r5URft9WbLzAHFAsyodN62IHNTozu-IKVj7Keqy7io04UPaioMZkQrKiJVkAPjw4QG5Qwtq0T4fqWfiQ_3NTSARlb14crLsvWAMIfsPfnzktb3mmahmGEYVtoSgNfrxqNKqy6Y0unIri0X4jZuQdnSF76YmdMDrfVuMwL3MtXVWBl12PuQ',
    partnerRole: 'Principal Brand Architect',
    offeringSkill: 'Smart Contract Auditing',
    receivingSkill: 'Conversational Japanese (JLPT N2)',
    status: 'scheduled',
    escrowHours: 8.0,
    totalSessions: 8,
    completedSessions: 1,
    nextSessionTime: 'Tomorrow at 14:30 UTC',
    encryptedProofHash: '0x3c7d...e190'
  },
  {
    id: 'session-103',
    partnerName: 'Marcus Vance',
    partnerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCElsAD_bGEKjdegX5ky_MTGlw2rWq2ZnmHHPj8zIsw-Q3dLcZjpFjFnafvbA65OZrk8RgGjLc0e5fYULr6F7DCp0-6QXuYaIGYHoKCgF9bN5oDMcB1JCO-SHR2KvzuQq4KIrJYTIS4ZDYP5nZSrJq3xaAFroyTvXJzPf3XPCnDDppIzcM3S6BgnVwFUfZw56uJ5BsyZFkDTg5YlaWBDNeG9BvPTDw9Scwrt9W-82mKY3lQT2G4M_nd1A',
    partnerRole: 'Master Calisthenics Trainer',
    offeringSkill: 'PyTorch Neural Networks',
    receivingSkill: 'Full Planche & Muscle-Up Progressions',
    status: 'requested',
    escrowHours: 4.0,
    totalSessions: 4,
    completedSessions: 0,
    nextSessionTime: 'Pending confirmation',
    encryptedProofHash: '0xaa41...8892'
  }
];

export const INITIAL_TRANSACTIONS: SkillBankTransaction[] = [
  {
    id: 'tx-501',
    type: 'released',
    amountHours: 2.0,
    counterparty: 'Elena Rostova',
    description: 'Completed WebGL Shaders session #3 escrow release',
    timestamp: '2 hours ago',
    txHash: '0x49f2...813a',
    status: 'confirmed'
  },
  {
    id: 'tx-502',
    type: 'earned',
    amountHours: 3.5,
    counterparty: 'Julian Rivera',
    description: 'Taught Architecture Scalability masterclass',
    timestamp: 'Yesterday',
    txHash: '0x12bb...3c44',
    status: 'confirmed'
  },
  {
    id: 'tx-503',
    type: 'escrow_lock',
    amountHours: 6.0,
    counterparty: 'Kenji Sato',
    description: 'Locked in barter escrow for Japanese tutoring',
    timestamp: '3 days ago',
    txHash: '0x7e88...a901',
    status: 'confirmed'
  },
  {
    id: 'tx-504',
    type: 'deposit',
    amountHours: 10.0,
    counterparty: 'SkillSwap Protocol',
    description: 'Initial Genesis verified proof of mastery grant',
    timestamp: '1 week ago',
    txHash: '0x0001...dead',
    status: 'confirmed'
  }
];

export const SKILL_CATEGORIES = [
  'All Categories',
  'Engineering',
  'Design & 3D',
  'Music & Audio',
  'Languages',
  'Culinary',
  'Fitness & Health',
  'AI & Data',
  'Marketing & Business'
];
