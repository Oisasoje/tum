import { markets } from "@/lib/mockData";
import Image from "next/image";
import ProgressChart from "./ProgressChart";
import { MoreHorizontal, ThumbsUp, ThumbsDown, Users } from "lucide-react";

const FeedCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {markets.map((market) => (
        <section
          key={market.id}
          className="glass relative flex flex-col gap-5 w-full p-6 rounded-[32px] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden group shadow-2xl"
        >
          {/* Market Header - Avatar & Name */}
          <div className="flex justify-between items-start">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-600 border border-white/10">
                <Image
                  fill
                  src={market.creatorAvatar || "/pfp.jpg"}
                  alt="creator"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black tracking-tight">
                  {market.creatorName}
                </span>
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                  Creator
                </span>
              </div>
            </div>
            <button className="p-1 text-white/40 hover:text-white transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>

          {/* Category & Time */}
          <div className="flex gap-2 items-center text-[10px] font-bold uppercase tracking-widest text-white/40 -mt-2">
            <span className="text-blue-400">{market.category}</span>
            <span className="opacity-50">|</span>
            <span>{market.timeLeft}</span>
          </div>

          {/* Question */}
          <h3 className="text-xl font-black leading-tight text-white line-clamp-2 min-h-12">
            {market.question}
          </h3>

          {/* Odds & Stats */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <div className="flex gap-2 items-baseline">
                  <span className="text-green-500 text-lg font-black uppercase">
                    Yes {Math.round(market.stats.yesOdds * 100)}%
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-right">
                <div className="flex gap-2 items-baseline justify-end">
                  <span className="text-red-500 text-lg font-black uppercase">
                    No {Math.round(market.stats.noOdds * 100)}%
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 font-bold uppercase">
                  {market.stats.votes} Votes
                </span>
                <span className="text-[10px] text-white/40 font-bold uppercase">
                  {market.volume} Vol.
                </span>
              </div>
            </div>

            {/* Sparkline Chart */}
            <ProgressChart
              data={market.sparklineData || []}
              color={market.stats.yesOdds > 0.5 ? "#10b981" : "#ef4444"}
            />

            {/* Staked Info Bar */}
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tighter">
              <span className="text-white/60">
                {market.stats.votes &&
                  `$${parseInt(market.stats.votes.replace("k", "")) * 120}k`}{" "}
                staked
              </span>
              <span className="text-white/40">$50,000 Goal</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-green-500 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95">
              <ThumbsUp size={14} />
              Support
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95">
              <ThumbsDown size={14} />
              Challenge
            </button>
          </div>

          {/* Participants */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border border-[#0a0a0b] bg-gray-600 overflow-hidden relative"
                >
                  <Image
                    fill
                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=user${Math.floor(
                      Math.random() * 1000,
                    )}`}
                    alt="user"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-tighter">
              {market.stats.votes || "1.2k"} participants
            </span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default FeedCard;
