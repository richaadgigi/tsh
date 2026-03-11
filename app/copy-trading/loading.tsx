import TraderCardSkeleton from "@/components/TraderCardSkeleton";

export default function CopyTradingLoading() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Skeleton */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center animate-pulse">
                    <div className="h-4 w-48 rounded-full bg-primary/20 mx-auto mb-8" />
                    <div className="h-16 md:h-24 w-3/4 rounded-2xl bg-white/5 mx-auto mb-6" />
                    <div className="h-16 w-1/2 rounded-2xl bg-white/5 mx-auto mb-6" />
                    <div className="h-6 w-2/3 rounded-full bg-white/5 mx-auto mb-12" />
                    <div className="h-14 w-56 rounded-full bg-primary/20 mx-auto" />
                </div>
            </section>

            {/* Traders Grid Skeleton */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="animate-pulse mb-16 text-center">
                        <div className="h-4 w-32 rounded-full bg-primary/20 mx-auto mb-4" />
                        <div className="h-10 w-64 rounded-xl bg-white/5 mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <TraderCardSkeleton key={i} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
