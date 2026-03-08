"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";
import StatsSection from "@/components/StatsSection";
import FriendsSection from "@/components/FriendsSection";
import { ActiveMarketCard, HistoryMarketCard } from "@/components/MarketCard";
import {
  userProfile,
  userActiveMarkets,
  userHistory,
  friends,
} from "@/lib/mockData";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"ACTIVE" | "HISTORY">("ACTIVE");

  return (
    <div className="min-h-screen bg-[#0f0f1b] relative selection:bg-blue-500/30">
      {/* Standalone Background Image */}
      <div
        className="fixed inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/backgrounds/crypto_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Decorative Gradients for extra premium feel */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 z-0 animate-pulse" />
      <div
        className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 z-0 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <Navbar />

      <main className="relative z-10 pt-24 pb-12 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center">
        <ProfileHeader profile={userProfile} />

        <StatsSection profile={userProfile} />

        {/* Tabs Section */}
        <div className="w-full mb-6">
          <div className="flex p-1 rounded-2xl glass-blue w-full max-w-md mx-auto relative">
            <button
              onClick={() => setActiveTab("ACTIVE")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 z-10 ${
                activeTab === "ACTIVE"
                  ? "text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab("HISTORY")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 z-10 ${
                activeTab === "HISTORY"
                  ? "text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              History
            </button>

            {/* Sliding Pill Indicator */}
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-blue-600/80 rounded-xl transition-transform duration-300 ease-out z-0 shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-400/50 backdrop-blur-md ${
                activeTab === "ACTIVE" ? "translate-x-0" : "translate-x-full"
              }`}
            />
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="w-full relative min-h-[300px]">
          {/* Active Tab Panel */}
          <div
            className={`transition-all duration-500 absolute inset-0 ${
              activeTab === "ACTIVE"
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 -translate-x-8 pointer-events-none"
            }`}
          >
            <h2 className="text-xl font-bold text-white mb-4 pl-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
              Active Markets
            </h2>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-center">
                {userActiveMarkets.map((market) => (
                  <ActiveMarketCard key={market.id} market={market} />
                ))}
              </div>
            </div>
          </div>

          {/* History Tab Panel */}
          <div
            className={`transition-all duration-500 absolute inset-0 ${
              activeTab === "HISTORY"
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-8 pointer-events-none"
            }`}
          >
            <h2 className="text-xl font-bold text-white mb-4 pl-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
              Resolved Markets
            </h2>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-center">
                {userHistory.map((market) => (
                  <HistoryMarketCard key={market.id} market={market} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <FriendsSection friends={friends} />
      </main>
    </div>
  );
}
