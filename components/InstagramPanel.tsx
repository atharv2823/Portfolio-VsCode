import React from 'react';
import { X, Heart, MessageCircle, Share, Bookmark, MoreHorizontal, MapPin, Calendar, Users, Eye, TrendingUp, Instagram } from 'lucide-react';

interface InstagramPanelProps {
  onClose?: () => void;
}

const InstagramPanel: React.FC<InstagramPanelProps> = ({ onClose }) => {
  const instagramData = {
    profile: {
      username: "atharv_n28",
      displayName: "Atharva Neware",
      bio: "Living My Life on my own terms 📍 Nagpur, India",
      avatar: "AN",
      verified: true,
      website: "atharvaneware.dev",
      followers: 487,
      following: 473,
      posts: 7
    },
    stats: {
      totalLikes: 45230,
      totalComments: 1234,
      totalShares: 567,
      engagementRate: 4.2,
      reach: 12500,
      impressions: 28900
    },
    posts: [
      {
        id: 1,
        type: "image",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
        caption: "Just deployed my latest React project! 🚀 The power of modern web development never ceases to amaze me. #React #WebDev #JavaScript",
        likes: 234,
        comments: 18,
        shares: 5,
        timestamp: "2 hours ago",
        location: "Mumbai, India"
      },
      {
        id: 2,
        type: "carousel",
        images: [
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400"
        ],
        caption: "My tech stack evolution over the past 3 years! From vanilla JS to modern frameworks. The journey has been incredible! 💪 #TechStack #DeveloperLife #CodingJourney",
        likes: 456,
        comments: 32,
        shares: 12,
        timestamp: "1 day ago",
        location: null
      },
      {
        id: 3,
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400",
        duration: "0:45",
        caption: "Quick tutorial: Building a responsive navigation bar with React and Tailwind CSS! Link in bio for the full code. 🎥 #Tutorial #React #TailwindCSS",
        likes: 678,
        comments: 45,
        shares: 23,
        timestamp: "3 days ago",
        location: null
      },
      {
        id: 4,
        type: "image",
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400",
        caption: "Coffee + Code = Perfect morning! ☕💻 Working on some exciting AI projects today. What's your favorite coding beverage? #Coding #AI #MorningRoutine",
        likes: 189,
        comments: 15,
        shares: 3,
        timestamp: "5 days ago",
        location: "Home Office"
      },
      {
        id: 5,
        type: "image",
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400",
        caption: "Attended an amazing tech conference today! Met so many talented developers and learned about cutting-edge technologies. Networking at its finest! 🤝 #TechConference #Networking #DeveloperCommunity",
        likes: 523,
        comments: 28,
        shares: 8,
        timestamp: "1 week ago",
        location: "Tech Conference Center"
      },
      {
        id: 6,
        type: "carousel",
        images: [
          "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=400",
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400"
        ],
        caption: "Weekend project: Built a personal portfolio website from scratch! Used React, Framer Motion for animations, and deployed on Vercel. Check it out! 🌐 #Portfolio #WebDesign #React",
        likes: 345,
        comments: 22,
        shares: 15,
        timestamp: "2 weeks ago",
        location: null
      }
    ],
    highlights: [
      { id: 1, title: "Me", cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100", count: 12 },
      { id: 2, title: "Nashik", cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100", count: 25 },
      { id: 3, title: "Ujjain", cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100", count: 8 },
      { id: 4, title: "Mumbai", cover: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=100", count: 15 }
    ]
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="w-80 flex-shrink-0 lg:static fixed right-0 z-30 h-full lg:h-auto shadow-2xl lg:shadow-none theme-transition bg-[var(--bg-sidebar)] border-l border-[var(--border)] flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)] flex-shrink-0">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Instagram className="text-pink-500" size={20} />
          Instagram Profile
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 hover:bg-[#3e3e42] rounded transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-500">
        {/* Profile Header */}
        <div className="p-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {instagramData.profile.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-semibold">{instagramData.profile.username}</h3>
                {instagramData.profile.verified && (
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <p className="text-gray-300 text-sm">{instagramData.profile.displayName}</p>
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-3 whitespace-pre-line">{instagramData.profile.bio}</p>

          <div className="flex justify-between text-center mb-4">
            <div>
              <div className="text-white font-bold">{formatNumber(instagramData.profile.posts)}</div>
              <div className="text-gray-400 text-xs">Posts</div>
            </div>
            <div>
              <div className="text-white font-bold">{formatNumber(instagramData.profile.followers)}</div>
              <div className="text-gray-400 text-xs">Followers</div>
            </div>
            <div>
              <div className="text-white font-bold">{formatNumber(instagramData.profile.following)}</div>
              <div className="text-gray-400 text-xs">Following</div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Highlights</h4>
            <div className="flex gap-3 overflow-x-auto">
              {instagramData.highlights.map((highlight) => (
                <div key={highlight.id} className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="text-xs text-white">{highlight.count}</span>
                    </div>
                  </div>
                  <div className="text-center mt-1">
                    <div className="text-gray-400 text-xs">{highlight.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="p-4">
          <h4 className="text-white font-medium mb-4">Recent Posts</h4>
          <div className="space-y-4">
            {instagramData.posts.map((post) => (
              <div key={post.id} className="bg-[#2d2d30] rounded-lg overflow-hidden">
                {/* Post Header */}
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {instagramData.profile.avatar}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{instagramData.profile.username}</div>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <span>{post.timestamp}</span>
                        {post.location && (
                          <>
                            <span>•</span>
                            <MapPin size={10} />
                            <span>{post.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <MoreHorizontal size={16} className="text-gray-400" />
                </div>

                {/* Post Content */}
                <div className="relative">
                  {post.type === 'image' && (
                    <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
                  )}
                  {post.type === 'carousel' && (
                    <div className="relative">
                      <img src={post.images[0]} alt="Post" className="w-full h-48 object-cover" />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                        1/{post.images.length}
                      </div>
                    </div>
                  )}
                  {post.type === 'video' && (
                    <div className="relative">
                      <img src={post.thumbnail} alt="Video thumbnail" className="w-full h-48 object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black bg-opacity-50 rounded-full p-3">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-2 border-l-black ml-0.5"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                        {post.duration}
                      </div>
                    </div>
                  )}
                </div>

                {/* Post Actions */}
                <div className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                      <MessageCircle size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer" />
                      <Share size={20} className="text-gray-400 hover:text-green-500 cursor-pointer" />
                    </div>
                    <Bookmark size={20} className="text-gray-400 hover:text-yellow-500 cursor-pointer" />
                  </div>

                  {/* Likes and Caption */}
                  <div className="mb-2">
                    <div className="text-white font-medium text-sm mb-1">{formatNumber(post.likes)} likes</div>
                    <div className="text-gray-300 text-sm">
                      <span className="font-medium text-white">{instagramData.profile.username}</span> {post.caption}
                    </div>
                  </div>

                  {/* Comments */}
                  {post.comments > 0 && (
                    <div className="text-gray-400 text-sm mb-1 cursor-pointer hover:text-gray-300">
                      View all {post.comments} comments
                    </div>
                  )}

                  {/* Shares */}
                  {post.shares > 0 && (
                    <div className="text-gray-400 text-sm cursor-pointer hover:text-gray-300">
                      {post.shares} shares
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramPanel;