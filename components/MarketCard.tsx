import { UserActiveMarket, UserHistoryMarket } from "@/lib/mockData";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

interface ActiveMarketCardProps {
  market: UserActiveMarket;
}

export function ActiveMarketCard({ market }: ActiveMarketCardProps) {
  const isYes = market.side === "YES";

  return (
    <div className="glass rounded-xl p-4 flex flex-col items-start justify-start border border-white/10 hover:border-white/20 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex w-full justify-between items-start gap-4 mb-4">
        <h3 className="text-gray-200 font-medium text-[15px] leading-snug">
          {market.question}
        </h3>
        <div
          className={`shrink-0 px-2.5 py-1 rounded-md text-xs font-bold tracking-wide border ${
            isYes
              ? "text-green-400 border-green-500/40 bg-green-500/5"
              : "text-red-400 border-red-500/40 bg-red-500/5"
          }`}
        >
          {market.side}
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full text-[13px]">
        <div className="flex items-center">
          <span className="text-gray-500 mr-1.5">Stake:</span>
          <span className="text-white font-semibold">{market.stake} INJ</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 mr-1.5">Time Remaining:</span>
          <span className="text-white font-semibold">{market.timeLeft}</span>
        </div>
      </div>
    </div>
  );
}

interface HistoryMarketCardProps {
  market: UserHistoryMarket;
}

export function HistoryMarketCard({ market }: HistoryMarketCardProps) {
  const isWin = market.result === "WIN";

  return (
    <div className="glass rounded-xl p-4 flex flex-col items-start justify-start border border-white/10 hover:border-white/20 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex w-full justify-between items-start gap-4 mb-4">
        <h3 className="text-gray-200 font-medium text-[15px] leading-snug">
          {market.question}
        </h3>
        <div
          className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold tracking-wide border ${
            isWin
              ? "text-green-400 border-green-500/40 bg-green-500/5"
              : "text-red-400 border-red-500/40 bg-red-500/5"
          }`}
        >
          {market.result}
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full text-[13px]">
        <div className="flex items-center">
          <span className="text-gray-500 mr-1.5">
            Amount {isWin ? "Won" : "Lost"}:
          </span>
          <span
            className={`font-bold ${isWin ? "text-green-400" : "text-red-400"}`}
          >
            {isWin ? "+" : ""}
            {market.amount} INJ
          </span>
        </div>
      </div>
    </div>
  );
}
