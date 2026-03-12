import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Shield01Icon,
    CheckmarkBadge02Icon,
    CheckmarkCircle02Icon,
    Cancel01Icon,
    AnalyticsUpIcon,
    Clock01Icon,
    UserGroupIcon,
    ArrowRight01Icon,
    ZapIcon
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import NextImage from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { copyTraderApi, CopyTrader } from "@/lib/api";

const comparison = [
    { feature: "Start Trading with little trading experience", manual: false, copy: true },
    { feature: "Learn from experienced leaders", manual: false, copy: true },
    { feature: "Diversify your portfolio", manual: true, copy: true },
    { feature: "Access to verified data", manual: false, copy: true },
    { feature: "Choose a trading strategy that suits your style", manual: true, copy: true },
];

export default async function CopyTradingPage() {

    let traders: CopyTrader[] = [];
    try {
        const response = await copyTraderApi.getCopyTraders();
        if (response.status && Array.isArray(response.data)) {
            traders = response.data;
        }
    } catch (error) {
        console.error("Failed to fetch copy traders:", error);
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <NextImage
                        src="/images/copy-trading-hero.png"
                        alt="Copy Trading Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
                </div>

                <div className="container mx-auto px-6 text-center text-white relative z-20">
                    <ScrollReveal variant="fade-up" delay={0.2}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-8">
                            Social Intelligence powered trading
                        </div>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.4}>
                        <h1 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-bold mb-8 leading-tight max-w-5xl mx-auto`}>
                            CopyTrading with the <br />
                            <span className="text-primary">Power of Social Intelligence</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.6}>
                        <p className={`${inter.className} text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12`}>
                            Unlock the power of Copy Trading with Trade Signal Hive. Experience an intuitive platform built for growth.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.8}>
                        <Link
                            href="https://app.tradesignalhive.com/auth/signup" target="_blank"
                            className="inline-flex items-center justify-center gap-3 bg-primary text-black px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,242,254,0.3)]"
                        >
                            Get Started <HugeiconsIcon icon={ArrowRight01Icon} size={24} />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            {/* Investing Made Easy Section */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <ScrollReveal variant="fade-right">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                                    <HugeiconsIcon icon={AnalyticsUpIcon} size={24} />
                                </div>
                                <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold leading-tight text-white`}>
                                    Investing Made Easy <br /> With CopyTrading
                                </h2>
                                <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed`}>
                                    Join us and experience copy-trading with a leading traders community.
                                    Discover experienced leaders globally and automatically copy their positions.
                                    Whether you&apos;re a beginner looking to improve your trading skills or an
                                    experienced investor seeking a straightforward solution, Trade Signal Hive is the place for you.
                                </p>
                            </ScrollReveal>
                        </div>
                        <div className="flex-1 relative aspect-square w-full max-w-[500px]">
                            <ScrollReveal variant="scale" delay={0.3}>
                                <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                                    <NextImage
                                        src="/images/investing-feature.png"
                                        alt="Investing Made Easy"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Copy Trading Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <ScrollReveal variant="fade-up">
                        <div className="text-center mb-16">
                            <h2 className={`${spaceGrotesk.className} text-sm font-bold text-primary tracking-widest uppercase mb-4`}>Social Intelligence</h2>
                            <h3 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-white`}>Why copy trading is so popular</h3>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" stagger={0.2} delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Clock01Icon,
                                    title: "Saves Time",
                                    desc: "Copy trading minimizes the time required for extensive market research and analysis. benefit from the skills of Leaders."
                                },
                                {
                                    icon: UserGroupIcon,
                                    title: "Beginner Friendly",
                                    desc: "Even if you don’t know everything about global markets, you can start your journey by choosing Leaders who match your needs."
                                },
                                {
                                    icon: ZapIcon,
                                    title: "Investment Flexibility",
                                    desc: "Adjust the strategies you copy based on your account balance and risk appetite for maximum control."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-morphism p-8 md:p-12 rounded-[2.5rem] border-white/10 hover:border-primary/20 transition-all group">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                                        <HugeiconsIcon icon={item.icon} size={28} className="text-primary" />
                                    </div>
                                    <h4 className={`${spaceGrotesk.className} text-2xl font-bold mb-4 text-white`}>{item.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 bg-white/[0.01]">
                <div className="container mx-auto px-6">
                    <ScrollReveal variant="fade-up">
                        <div className="text-center mb-16">
                            <h2 className={`${spaceGrotesk.className} text-sm font-bold text-primary tracking-widest uppercase mb-4`}>Direct Comparison</h2>
                            <h3 className={`${spaceGrotesk.className} text-4xl font-bold mb-6 text-white`}>Copy Trading vs. Manual Trading</h3>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="scale" delay={0.2}>
                        <div className="max-w-4xl mx-auto">
                            {/* Desktop Table View */}
                            <div className="hidden md:block glass-morphism rounded-[2.5rem] border-white/10 overflow-hidden text-white">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-white/5">
                                            <th className="p-8 text-lg font-bold">Features</th>
                                            <th className="p-8 text-center text-lg font-bold">Manual Trading</th>
                                            <th className="p-8 text-center text-lg font-bold text-primary">Copy Trading</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {comparison.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                                <td className="p-8 text-muted-foreground font-medium">{row.feature}</td>
                                                <td className="p-8">
                                                    <div className="flex justify-center">
                                                        {row.manual ? <HugeiconsIcon icon={CheckmarkCircle02Icon} className="text-white/50" /> : <HugeiconsIcon icon={Cancel01Icon} className="text-white/10" />}
                                                    </div>
                                                </td>
                                                <td className="p-8">
                                                    <div className="flex justify-center">
                                                        <HugeiconsIcon icon={Shield01Icon} size={28} className="text-primary" />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Card View */}
                            <div className="md:hidden space-y-6">
                                {comparison.map((row, idx) => (
                                    <div key={idx} className="glass-morphism rounded-3xl p-6 border-white/10 space-y-4">
                                        <h4 className="text-white font-bold text-lg leading-snug">{row.feature}</h4>
                                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                            <div className="space-y-2">
                                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold font-inter">Manual</span>
                                                <div className="flex items-center gap-2">
                                                    {row.manual ? (
                                                        <>
                                                            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} className="text-white/50" />
                                                            <span className="text-sm text-white/50">Yes</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <HugeiconsIcon icon={Cancel01Icon} size={20} className="text-white/10" />
                                                            <span className="text-sm text-white/10">No</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <span className="text-[10px] uppercase tracking-widest text-primary font-bold font-inter">Copy Trading</span>
                                                <div className="flex items-center gap-2">
                                                    <HugeiconsIcon icon={Shield01Icon} size={24} className="text-primary" />
                                                    <span className="text-sm text-primary font-bold">Included</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Experienced Traders Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <ScrollReveal variant="fade-up">
                        <div className="text-center mb-16">
                            <h2 className={`${spaceGrotesk.className} text-sm font-bold text-primary tracking-widest uppercase mb-4`}>Our Elite Leaders</h2>
                            <h3 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold`}>Experienced Traders</h3>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" stagger={0.1} delay={0.2}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 md:px-12">
                            {traders.length === 0 ? (
                                <div className="col-span-full py-20 text-center text-muted-foreground glass-morphism rounded-[2rem] border-white/10">
                                    <p className={`${inter.className} text-xl`}>No elite traders available to display right now.</p>
                                </div>
                            ) : traders.map((trader) => {
                                const isVerified = String(trader.ct_verified) === '1';
                                const formattedAmount = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Number(trader.ct_amount) || 0);
                                const formattedProfit = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(trader.ct_profit) || 0);

                                return (
                                    <Link
                                        key={trader.ct_id}
                                        href={`/trader/${trader.ct_uid}`}
                                        className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer shadow-2xl"
                                    >
                                        {/* Trader Image */}
                                        <div className="absolute inset-0 grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
                                            <NextImage
                                                src={trader.ct_profile_url || `https://i.pravatar.cc/300?u=${trader.ct_id}`}
                                                alt={trader.ct_name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Shadow Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                                        {/* Name and Badge Overlay */}
                                        <div className="absolute bottom-8 left-8 right-8 z-10">
                                            <div className="flex items-center gap-2">
                                                <h4 className={`${spaceGrotesk.className} font-bold text-2xl text-white tracking-tight`}>
                                                    {trader.ct_name}
                                                </h4>
                                                {isVerified && (
                                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#BF953F]">
                                                        <HugeiconsIcon
                                                            icon={CheckmarkBadge02Icon}
                                                            size={18}
                                                            className="text-black"
                                                            strokeWidth={3}
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Hover info (Min investment and Profit) */}
                                            <div className="mt-4 h-0 overflow-hidden group-hover:h-20 transition-all duration-500">
                                                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                                    <span className="text-sm text-primary font-bold">MIN INVESTMENT</span>
                                                    <span className="text-lg font-bold text-white">${formattedAmount}</span>
                                                </div>
                                                <div className="flex items-center justify-between pt-2">
                                                    <span className="text-xs text-green-400 font-bold tracking-widest">TOTAL PROFIT</span>
                                                    <span className="text-md font-bold text-green-400">{formattedProfit}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
