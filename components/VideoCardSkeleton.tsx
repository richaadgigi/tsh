export default function VideoCardSkeleton() {
    return (
        <div className="animate-pulse">
            {/* Thumbnail */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-white/5 border border-white/5" />
            {/* Meta */}
            <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-white/10 flex-shrink-0 mt-1" />
                <div className="flex-1 space-y-2">
                    <div className="h-4 w-full rounded-full bg-white/10" />
                    <div className="h-4 w-3/4 rounded-full bg-white/10" />
                    <div className="h-3 w-1/2 rounded-full bg-white/5 mt-1" />
                </div>
            </div>
        </div>
    );
}
