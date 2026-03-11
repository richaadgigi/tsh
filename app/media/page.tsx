import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, CheckmarkCircle02Icon, Search01Icon, FilterIcon } from "@hugeicons/core-free-icons";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const featuredVideo = {
    title: "Mastering Market Psychology & Emotional Discipline",
    description: "In this exclusive webinar, our lead trader discusses the crucial role of emotional discipline in trading. Learn how to identify FOMO, manage risk effectively, and build a winning mindset for long-term success.",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    duration: "45:20",
    views: "124K views",
    timestamp: "2 days ago",
    author: {
        name: "Ronald Kent John",
        avatar: "https://i.pravatar.cc/150?u=Ronald",
        verified: true
    }
};

const videoGrid = [
    {
        title: "Top 5 Altcoins for the Next Bull Run",
        thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600",
        duration: "12:45",
        views: "89K views",
        timestamp: "5 days ago",
        author: { name: "Aura Wright", avatar: "https://i.pravatar.cc/150?u=Aura" }
    },
    {
        title: "How to use Trade Signal Hive Dashboard",
        thumbnail: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=600",
        duration: "08:30",
        views: "21K views",
        timestamp: "1 week ago",
        author: { name: "Platform Updates", avatar: "https://res.cloudinary.com/xnyder/image/upload/v1743325093/crypto-trade-signal-hive/brand/new-ctsh-logo_motwjq.png" }
    },
    {
        title: "Live Trading Session: NFP Release",
        thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600",
        duration: "1:24:10",
        views: "34K views",
        timestamp: "2 weeks ago",
        author: { name: "Jason Pizzino", avatar: "https://i.pravatar.cc/150?u=Jason" }
    },
    {
        title: "Understanding Order Blocks & Liquidity",
        thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
        duration: "22:15",
        views: "56K views",
        timestamp: "3 weeks ago",
        author: { name: "Kathy Lien", avatar: "https://i.pravatar.cc/150?u=Kathy" }
    },
    {
        title: "Crypto Market Weekly Analysis",
        thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600",
        duration: "18:40",
        views: "42K views",
        timestamp: "1 month ago",
        author: { name: "Danielle Shay", avatar: "https://i.pravatar.cc/150?u=Danielle" }
    },
    {
        title: "Beginner's Guide to Risk Management",
        thumbnail: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=600",
        duration: "15:20",
        views: "112K views",
        timestamp: "1 month ago",
        author: { name: "Boris Schlossberg", avatar: "https://i.pravatar.cc/150?u=Boris" }
    }
];

const categories = ["All", "Analysis", "Webinars", "Tutorials", "Live Trading", "Interviews"];

export default function MediaPage() {
    return (
        <main className="min-h-screen bg-background text-white pb-24">
            <Navbar />

            <div className="pt-28 container mx-auto px-6">

                {/* Search and Categories Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-4 border-b border-white/10 mb-8 sticky top-[64px] bg-background/95 backdrop-blur-xl z-50">
                    <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
                        {categories.map((category, idx) => (
                            <button
                                key={idx}
                                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${idx === 0
                                    ? "bg-white text-black"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <HugeiconsIcon icon={Search01Icon} size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search videos..."
                                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-muted-foreground"
                            />
                        </div>
                        <button className="h-10 w-10 flex-shrink-0 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
                            <HugeiconsIcon icon={FilterIcon} size={18} className="text-white" />
                        </button>
                    </div>
                </div>

                {/* Featured Video */}
                <ScrollReveal variant="fade-up">
                    <div className="mb-12 group cursor-pointer">
                        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-6 border border-white/10 group-hover:border-primary/50 transition-all duration-500">
                            <Image
                                src={featuredVideo.thumbnail}
                                alt={featuredVideo.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-20 w-20 rounded-full bg-primary/90 text-black flex items-center justify-center pl-2 shadow-[0_0_40px_rgba(0,242,254,0.4)] group-hover:scale-110 transition-transform duration-300">
                                    <HugeiconsIcon icon={PlayIcon} size={40} />
                                </div>
                            </div>

                            <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-bold tracking-wider">
                                {featuredVideo.duration}
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="relative h-14 w-14 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
                                <Image src={featuredVideo.author.avatar} alt={featuredVideo.author.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1">
                                <h2 className={`${spaceGrotesk.className} text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2`}>
                                    {featuredVideo.title}
                                </h2>
                                <div className="flex items-center gap-2 text-muted-foreground mb-3 text-sm md:text-base">
                                    <span className="font-medium hover:text-white transition-colors">{featuredVideo.author.name}</span>
                                    {featuredVideo.author.verified && (
                                        <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} className="text-primary" />
                                    )}
                                    <span className="w-1 h-1 rounded-full bg-white/20 mx-1" />
                                    <span>{featuredVideo.views}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20 mx-1" />
                                    <span>{featuredVideo.timestamp}</span>
                                </div>
                                <p className={`${inter.className} text-muted-foreground leading-relaxed line-clamp-2 max-w-4xl`}>
                                    {featuredVideo.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>


                <div className="h-px w-full bg-white/10 mb-12" />

                {/* Latest Videos Grid */}
                <div>
                    <h3 className={`${spaceGrotesk.className} text-2xl font-bold mb-8`}>Recommended For You</h3>
                    <ScrollReveal variant="fade-up" stagger={0.1}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                            {videoGrid.map((video, idx) => (
                                <div key={idx} className="group cursor-pointer">

                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 border border-white/5 group-hover:border-primary/30 transition-all duration-300">
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="h-12 w-12 rounded-full bg-primary/90 text-black flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(0,242,254,0.4)]">
                                                <HugeiconsIcon icon={PlayIcon} size={24} />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-xs font-bold tracking-wider">
                                            {video.duration}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10 mt-1">
                                            <Image src={video.author.avatar} alt={video.author.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h4 className={`${spaceGrotesk.className} font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2`}>
                                                {video.title}
                                            </h4>
                                            <div className="text-sm text-muted-foreground flex flex-col gap-0.5">
                                                <span className="hover:text-white transition-colors">{video.author.name}</span>
                                                <div className="flex items-center gap-2">
                                                    <span>{video.views}</span>
                                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                                    <span>{video.timestamp}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

            </div>

            <div className="mt-24">
                <Footer />
            </div>
        </main>
    );
}
