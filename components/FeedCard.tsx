import { markets } from "@/lib/mockData";
import Image from "next/image";

const FeedCard = () => {
  return (
    <>
      {markets.map((market) => (
        <section key={market.id} className="flex flex-col gap-3 w-full">
          <div className="flex gap-2">
            <div className="w-15 h-15 relative rounded-full overflow-hidden bg-gray-500">
              <Image
                fill
                className="object-cover "
                src={`${market.creatorAvatar}`}
                alt="creator"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span> {market.creatorName}</span>
              <span>Creator</span>
            </div>
          </div>
          <div>{market.question}</div>
          <div className="flex gap-2">
            {market.tags &&
              market.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-500 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default FeedCard;
