export default function TraderCardSkeleton() {
    return (
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-white/[0.02]" />
            <div className="absolute bottom-8 left-8 right-8 z-10 space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-36 rounded-full bg-white/10" />
                    <div className="h-6 w-6 rounded-full bg-white/10" />
                </div>
            </div>
        </div>
    );
}
