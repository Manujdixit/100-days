import { VideoCard } from "./VideoCard";

const videos = [
  {
    title:
      "Best tkl keyboards under 5000 | 60% 65% size factor | Tech knowledge hindi",
    image: "wall.jpg",
    channelImage: "icon.jpg",
    author: "Manuj Dixit",
    views: "6M",
    timestamp: "12 days ago",
  },
  {
    title: "Guide Viper Solo Controller on ALL MAPS - (2024)",
    image: "wall2.jpg",
    channelImage: "icon2.jpg",
    author: "Raion",
    views: "13M",
    timestamp: "19 days ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
  {
    title: "Lessons I Regret not knowing as a Software Engineer in My 20s",
    image: "wall3.jpg",
    channelImage: "icon3.jpg",
    author: "Harkirat Singh",
    views: "3M",
    timestamp: "47 min ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {videos.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            channelImage={video.channelImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
};
