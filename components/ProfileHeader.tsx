import Image from "next/image";
import { UserProfile } from "@/lib/mockData";
import { Copy } from "lucide-react";

interface ProfileHeaderProps {
  profile: UserProfile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-10 w-full max-w-sm mx-auto">
      {/* Container Card */}
      <div className="relative w-full glass rounded-[2.5rem] p-6 pt-20 flex flex-col items-center border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-linear-to-b from-white/5 to-transparent">
        {/* Avatar overlapping top edge */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <div className="relative w-32 h-32 rounded-full p-[3px] bg-linear-to-tr from-[#3b82f6] to-[#8b5cf6] shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <div className="absolute inset-0 rounded-full bg-[#1e2030] m-[2px]" />
            <Image
              src={profile.avatar}
              alt={profile.username}
              fill
              className="rounded-full object-cover relative z-10 border-[3px] border-transparent"
            />
          </div>
        </div>

        {/* Username */}
        <h1 className="text-[28px] font-bold tracking-tight text-white mb-1.5 mt-2">
          {profile.username}
        </h1>

        {/* Wallet Address */}
        <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-8 font-medium">
          <span>{profile.walletAddress}</span>
          <button className="hover:text-gray-200 transition-colors">
            <Copy className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Balance */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full">
            {/* Custom INJ style logo representing the teal & blue swirl */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 29C8.8203 29 3 23.1797 3 16C3 11.5 4.90625 7.8 8 5.5L12 9.5C10.1562 11.2 9 13.5 9 16C9 19.8672 12.1328 23 16 23V29Z"
                fill="#00E0FF"
              />
              <path
                d="M16 3C23.1797 3 29 8.8203 29 16C29 20.5 27.0938 24.2 24 26.5L20 22.5C21.8438 20.8 23 18.5 23 16C23 12.1328 19.8672 9 16 9V3Z"
                fill="#005BFF"
              />
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[34px] font-extrabold text-white leading-none tracking-tight">
              {profile.balance.toFixed(1)}
            </span>
            <span className="text-xl font-bold text-gray-400">INJ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
