import { UserProfile } from "@/lib/mockData";
import { BarChart3, List, Trophy } from "lucide-react";

interface StatsSectionProps {
  profile: UserProfile;
}

export default function StatsSection({ profile }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl mx-auto mb-8">
      {/* Accuracy Card */}
      <div className="glass rounded-xl p-3 px-3 flex items-center gap-2 transition-all hover:bg-white/5 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
        <div className="w-11 h-11 shrink-0 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
          <BarChart3 className="w-5 h-5 text-blue-400" strokeWidth={2} />
        </div>
        <div className="flex flex-col flex-1 whitespace-nowrap">
          <p className="text-xs text-gray-400 font-medium tracking-wide mb-0.5">
            Prediction Accuracy
          </p>
          <p className="text-[22px] leading-tight font-bold text-white tracking-tight">
            {profile.accuracy}%
          </p>
        </div>
      </div>

      {/* Total Predictions Card */}
      <div className="glass rounded-xl p-3 px-4 flex items-center gap-4 transition-all hover:bg-white/5 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
        <div className="w-11 h-11 shrink-0 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
          <List className="w-5 h-5 text-purple-400" strokeWidth={2} />
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-xs text-gray-400 font-medium tracking-wide mb-0.5">
            Total Predictions
          </p>
          <p className="text-[22px] leading-tight font-bold text-white tracking-tight">
            {profile.totalPredictions}
          </p>
        </div>
      </div>

      {/* Total Winnings Card */}
      <div className="glass rounded-xl p-3 px-4 flex items-center gap-4 transition-all hover:bg-white/5 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
        <div className="w-11 h-11 shrink-0 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
          <Trophy className="w-5 h-5 text-green-400" strokeWidth={2} />
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-xs text-gray-400 font-medium tracking-wide mb-0.5">
            Total Winnings
          </p>
          <p className="text-[22px] leading-tight font-bold text-white tracking-tight">
            {profile.totalWinnings.toLocaleString()} INJ
          </p>
        </div>
      </div>
    </div>
  );
}
