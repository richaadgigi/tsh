"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    PlayIcon,
    CheckmarkCircle02Icon,
    Search01Icon,
    Share01Icon,
    ArrowLeft02Icon
} from "@hugeicons/core-free-icons";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { videos } from "@/lib/media-data";
import dynamic from "next/dynamic";

// Dynamically import Vidstack player with SSR disabled to prevent hydration issues
const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-black animate-pulse" />
});

const categories = ["All", "Analysis", "Webinars", "Tutorials", "Live Trading", "Interviews"];

export default function MediaPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

    const currentVideo = useMemo(() =>
        videos.find(v => v.id === playingVideoId) || null
        , [playingVideoId]);

    const filteredVideos = useMemo(() => {
        return videos.filter(video => {
            const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
            const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                video.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const recommendations = useMemo(() =>
        videos.filter(v => v.id !== playingVideoId)
        , [playingVideoId]);

    const featuredVideo = videos[0];

    const handlePlayVideo = (id: string) => {
        setPlayingVideoId(id);
        // Direct scroll to top for immediate response
        window.scrollTo(0, 0);
    };

    // Prevent body scroll when custom player overlay is active? 
    // Actually, user wants to see navigation to other videos, so it should be scrollable.

    return (
        <main className="min-h-screen flex flex-col bg-background text-white">
            <Navbar />

            <div className="pt-28 container mx-auto px-6 flex-1 flex flex-col">
                {!playingVideoId ? (
                    <>
                        {/* Library Mode */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-4 border-b border-white/10 mb-8 sticky top-[64px] bg-background/95 backdrop-blur-xl z-50">
                            <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${selectedCategory === category
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
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search videos..."
                                        className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-muted-foreground cursor-text"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Featured Video */}
                        {selectedCategory === "All" && !searchQuery && (
                            <ScrollReveal variant="fade-up">
                                <div className="mb-12 group cursor-pointer" onClick={() => handlePlayVideo(featuredVideo.id)}>
                                    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-6 border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                                        <Image
                                            src={featuredVideo.thumbnail}
                                            alt={featuredVideo.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
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
                        )}

                        {(selectedCategory === "All" && !searchQuery) && (
                            <div className="h-px w-full bg-white/10 mb-12" />
                        )}

                        {/* Grid */}
                        <div className="pb-24">
                            <h3 className={`${spaceGrotesk.className} text-2xl font-bold mb-8`}>
                                {selectedCategory === "All" ? "Recommended For You" : `${selectedCategory} Videos`}
                            </h3>

                            {filteredVideos.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 transition-all duration-500">
                                    {filteredVideos.map((video) => (
                                        <div key={video.id} className="group cursor-pointer active:scale-95 transition-transform duration-200" onClick={() => handlePlayVideo(video.id)}>
                                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 border border-white/5 group-hover:border-primary/30 transition-all duration-300 shadow-lg">
                                                <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
                            ) : (
                                <div className="py-20 text-center text-muted-foreground glass-morphism rounded-[2rem] border border-white/5 mx-auto max-w-xl">
                                    <p className="text-lg">No videos found in this category.</p>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    /* Watch Mode / YouTube Layout */
                    <div className="flex flex-col lg:flex-row gap-8 pb-20">
                        {/* Left Column: Video & Info */}
                        <div className="flex-1 min-w-0">
                            <button
                                onClick={() => {
                                    setPlayingVideoId(null);
                                    window.scrollTo(0, 0);
                                }}
                                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-all mb-6 group cursor-pointer active:scale-95"
                            >
                                <HugeiconsIcon icon={ArrowLeft02Icon} size={20} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-bold uppercase tracking-widest">Back to Gallery</span>
                            </button>

                            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-black border border-white/10 mb-8 shadow-2xl">
                                <VideoPlayer
                                    src={currentVideo?.videoUrl || ""}
                                    title={currentVideo?.title || "Trade Signal Hive Video"}
                                    poster={currentVideo?.thumbnail || ""}
                                />
                            </div>

                            <div className="px-2">
                                <h1 className={`${spaceGrotesk.className} text-2xl md:text-3xl font-bold mb-4 leading-tight`}>
                                    {currentVideo?.title}
                                </h1>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 py-4 border-b border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/10">
                                            <Image src={currentVideo?.author.avatar || ""} alt={currentVideo?.author.name || ""} fill className="object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-1.5">
                                                <span className="font-bold text-lg">{currentVideo?.author.name}</span>
                                                {currentVideo?.author.verified && (
                                                    <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} className="text-primary" />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <button className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/5 hover:bg-white/10 transition-all active:scale-95">
                                            <HugeiconsIcon icon={Share01Icon} size={18} />
                                            <span className="text-sm font-bold">Share</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-6 rounded-3xl border border-white/5 mb-8">
                                    <div className="flex gap-4 text-sm font-bold mb-2">
                                        <span>{currentVideo?.views}</span>
                                        <span>{currentVideo?.timestamp}</span>
                                        <span className="text-primary">#TradeSignalHive #Trading #Crypto</span>
                                    </div>
                                    <p className={`${inter.className} text-muted-foreground leading-relaxed whitespace-pre-wrap`}>
                                        {currentVideo?.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Recommendations */}
                        <div className="w-full lg:w-[400px] flex flex-col gap-4">
                            <div className="flex items-center justify-between mb-2 px-2">
                                <h3 className={`${spaceGrotesk.className} font-bold text-lg`}>Up Next</h3>
                                <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">Autoplay</button>
                            </div>
                            <div className="flex flex-col gap-4">
                                {recommendations.map((video) => (
                                    <div
                                        key={video.id}
                                        className="flex gap-3 group cursor-pointer"
                                        onClick={() => handlePlayVideo(video.id)}
                                    >
                                        <div className="relative w-44 aspect-video rounded-xl overflow-hidden flex-shrink-0 border border-white/5 group-hover:border-primary/30 transition-all">
                                            <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute bottom-1.5 right-1.5 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-bold">
                                                {video.duration}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col gap-1">
                                            <h4 className="text-sm font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                                {video.title}
                                            </h4>
                                            <div className="text-[11px] text-muted-foreground flex flex-col group-hover:text-white/60 transition-colors">
                                                <span>{video.author.name}</span>
                                                <div className="flex items-center gap-1">
                                                    <span>{video.views}</span>
                                                    <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
                                                    <span>{video.timestamp}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
