import { Friend } from "@/lib/mockData";
import Image from "next/image";
import { Plus } from "lucide-react";

interface FriendsSectionProps {
  friends: Friend[];
}

export default function FriendsSection({ friends }: FriendsSectionProps) {
  return (
    <div className="mt-6 mb-20 w-full animate-in slide-in-from-bottom-4 duration-700">
      <h3 className="text-[15px] text-white font-medium tracking-wide mb-4">
        Friends also on TUM
      </h3>

      <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
        {/* Add Friend Button */}
        <button className="flex items-center gap-2 px-4 py-3 h-[52px] rounded-xl glass border border-white/10 hover:bg-white/10 transition-colors shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          <Plus className="w-4 h-4 text-gray-300" />
          <span className="text-sm font-medium text-gray-200">Add Friend</span>
        </button>

        {/* Friends List */}
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer group shrink-0"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-white/20 transition-all">
              <Image
                src={friend.avatar}
                alt={friend.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[13px] text-gray-300 font-medium group-hover:text-white transition-colors text-center w-full truncate px-1">
              {friend.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
