export interface Market {
  id: string;
  type: "event" | "challenge";
  question?: string;
  challenger?: string;
  target?: string;
  claim?: string;
  creatorAvatar?: string;
  creatorName?: string;
  category?: string;
  categoryIcon?: string;
  tags?: string[];
  volume?: string;
  timeLeft?: string;
  stats: {
    yesAmount: number;
    noAmount: number;
    yesOdds: number;
    noOdds: number;
    votes?: string;
  };
  endDate: string;
  sparklineData?: number[];
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  target?: string;
  time: string;
  amount?: string;
}

export const markets: Market[] = [
  {
    id: "m1",
    type: "event",
    question: "Will Bitcoin (BTC) hit $100,000 by Jan 1, 2026?",
    creatorName: "alex_crypto",
    creatorAvatar: "/pfp.jpg",
    category: "Crypto",
    volume: "$4.2M",
    timeLeft: "15h left",
    tags: ["🪙BTC", "Crypto"],
    stats: {
      yesAmount: 31500,
      noAmount: 18500,
      yesOdds: 0.64,
      noOdds: 0.36,
      votes: "2.8k",
    },
    endDate: "2026-01-01",
    sparklineData: [40, 45, 42, 48, 52, 50, 55, 60, 58, 64],
  },
  {
    id: "m2",
    type: "event",
    question: "Will Neuralink achieve human implantation by 2025?",
    creatorName: "Techwatch",
    creatorAvatar: "/pfp.jpg",
    category: "Tech",
    volume: "$4.2M",
    timeLeft: "15h left",
    tags: ["🧠Neuralink", "Tech"],
    stats: {
      yesAmount: 26000,
      noAmount: 24000,
      yesOdds: 0.52,
      noOdds: 0.48,
      votes: "5.2k",
    },
    endDate: "2025-12-31",
    sparklineData: [30, 32, 35, 33, 38, 42, 40, 45, 48, 52],
  },
  {
    id: "m3",
    type: "event",
    question: "Will Trump win the 2024 US Presidential Election?",
    creatorName: "Techwatch",
    creatorAvatar: "/pfp.jpg",
    category: "Politics",
    volume: "$3.3M",
    timeLeft: "15h left",
    tags: ["Trump", "Politics"],
    stats: {
      yesAmount: 10000,
      noAmount: 70000,
      yesOdds: 0.12,
      noOdds: 0.88,
      votes: "12.1k",
    },
    endDate: "2024-11-05",
    sparklineData: [20, 18, 15, 12, 10, 8, 12, 11, 13, 12],
  },
];

export const activities: Activity[] = [
  {
    id: "a1",
    user: "josh_d",
    action: "support",
    target: "BTC100k",
    time: "2m ago",
    amount: "500 TUM",
  },
  {
    id: "a2",
    user: "sarah_k",
    action: "challenged",
    target: "Trump2024",
    time: "5m ago",
    amount: "1000 TUM",
  },
  {
    id: "a3",
    user: "sarah_k",
    action: "support",
    target: "BTC100k",
    time: "10m ago",
    amount: "500 TUM",
  },
  {
    id: "a4",
    user: "josh_d",
    action: "challenged",
    target: "Trump2024",
    time: "15m ago",
    amount: "500 TUM",
  },
];
