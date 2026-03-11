import VideoCardSkeleton from "@/components/VideoCardSkeleton";

function FeaturedVideoSkeleton() {
    return (
        <div className="mb-12 animate-pulse">
            {/* Thumbnail */}
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-6 bg-white/5 border border-white/5" />
            {/* Meta */}
            <div className="flex gap-6 items-start">
                <div className="h-14 w-14 rounded-full bg-white/10 flex-shrink-0" />
                <div className="flex-1 space-y-3">
                    <div className="h-7 w-2/3 rounded-xl bg-white/10" />
                    <div className="h-4 w-48 rounded-full bg-white/5" />
                    <div className="h-4 w-full max-w-xl rounded-full bg-white/5" />
                    <div className="h-4 w-3/4 max-w-lg rounded-full bg-white/5" />
                </div>
            </div>
        </div>
    );
}

export default function MediaLoading() {
    return (
        <main className="min-h-screen bg-background text-white pb-24">
            <div className="pt-28 container mx-auto px-6">
                {/* Category bar skeleton */}
                <div className="flex gap-3 py-4 mb-8 animate-pulse">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-9 w-24 rounded-full bg-white/10 flex-shrink-0" />
                    ))}
                </div>

                <FeaturedVideoSkeleton />

                <div className="h-px w-full bg-white/10 mb-12" />

                {/* Grid skeleton */}
                <div>
                    <div className="h-7 w-48 rounded-xl bg-white/10 mb-8 animate-pulse" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <VideoCardSkeleton key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
