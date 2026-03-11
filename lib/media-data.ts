export interface Video {
    id: string;
    youtubeId: string;
    title: string;
    description: string;
    category: string;
    thumbnail: string;
    duration: string;
    views: string;
    timestamp: string;
    author: {
        name: string;
        avatar: string;
        verified?: boolean;
    };
}

export const videos: Video[] = [
    {
        id: "1",
        youtubeId: "p7HKvqRI_Bo",
        title: "Mastering Market Psychology & Emotional Discipline",
        description: "In this exclusive webinar, our lead trader discusses the crucial role of emotional discipline in trading. Learn how to identify FOMO, manage risk effectively, and build a winning mindset for long-term success.",
        category: "Webinars",
        thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
        duration: "45:20",
        views: "124K views",
        timestamp: "2 days ago",
        author: {
            name: "Ronald Kent John",
            avatar: "https://i.pravatar.cc/150?u=Ronald",
            verified: true
        }
    },
    {
        id: "2",
        youtubeId: "S8v3Iyk2A3I",
        title: "Top 5 Altcoins for the Next Bull Run",
        description: "Analysis of the most promising altcoins with 10x potential in the upcoming market cycle.",
        category: "Analysis",
        thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600",
        duration: "12:45",
        views: "89K views",
        timestamp: "5 days ago",
        author: { name: "Aura Wright", avatar: "https://i.pravatar.cc/150?u=Aura" }
    },
    {
        id: "3",
        youtubeId: "Z-itYQ6qU0k",
        title: "How to use Trade Signal Hive Dashboard",
        description: "A complete walkthrough of the platform features and how to maximize your trading signals.",
        category: "Tutorials",
        thumbnail: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=600",
        duration: "08:30",
        views: "21K views",
        timestamp: "1 week ago",
        author: { name: "Platform Updates", avatar: "https://res.cloudinary.com/xnyder/image/upload/v1743325093/crypto-trade-signal-hive/brand/new-ctsh-logo_motwjq.png" }
    },
    {
        id: "4",
        youtubeId: "XU8_K9u8v7A",
        title: "Live Trading Session: NFP Release",
        description: "Watch as we trade the high-impact NFP news live on the charts.",
        category: "Live Trading",
        thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600",
        duration: "1:24:10",
        views: "34K views",
        timestamp: "2 weeks ago",
        author: { name: "Jason Pizzino", avatar: "https://i.pravatar.cc/150?u=Jason" }
    },
    {
        id: "5",
        youtubeId: "p7HKvqRI_Bo",
        title: "Understanding Order Blocks & Liquidity",
        description: "Advanced institutional trading concepts explained for retail traders.",
        category: "Analysis",
        thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
        duration: "22:15",
        views: "56K views",
        timestamp: "3 weeks ago",
        author: { name: "Kathy Lien", avatar: "https://i.pravatar.cc/150?u=Kathy" }
    },
    {
        id: "6",
        youtubeId: "S8v3Iyk2A3I",
        title: "Crypto Market Weekly Analysis",
        description: "Breaking down the weekly price action for BTC and ETH.",
        category: "Analysis",
        thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600",
        duration: "18:40",
        views: "42K views",
        timestamp: "1 month ago",
        author: { name: "Danielle Shay", avatar: "https://i.pravatar.cc/150?u=Danielle" }
    },
    {
        id: "7",
        youtubeId: "Z-itYQ6qU0k",
        title: "Beginner's Guide to Risk Management",
        description: "The most important skill in trading is not losing money. Learn how to protect your capital.",
        category: "Tutorials",
        thumbnail: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=600",
        duration: "15:20",
        views: "112K views",
        timestamp: "1 month ago",
        author: { name: "Boris Schlossberg", avatar: "https://i.pravatar.cc/150?u=Boris" }
    },
    {
        id: "8",
        youtubeId: "XU8_K9u8v7A",
        title: "Exclusive Interview with Top Analyst",
        description: "Diving deep into macro trends and global economy impacts on crypto.",
        category: "Interviews",
        thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600",
        duration: "35:10",
        views: "45K views",
        timestamp: "2 months ago",
        author: { name: "Kathy Lien", avatar: "https://i.pravatar.cc/150?u=Kathy" }
    }
];
