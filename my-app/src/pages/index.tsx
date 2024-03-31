import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <VideoCard
        title={
          "Best tkl keyboards under 5000 | 60% 65% size factor | Tech knowledge hindi"
        }
        image={"wall.jpg"}
        channelImage={"icon.jpg"}
        author={"Manuj Dixit"}
        views={"6M"}
        timestamp={"12 days ago"}
      />
    </>
  );
}
