import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    CheckmarkBadge02Icon,
    TelegramIcon,
    WhatsappIcon,
    Facebook01Icon,
    Linkedin01Icon,
    ArrowLeft01Icon,
    AnalyticsUpIcon,
    ZapIcon,
    MoneyReceive01Icon,
    UserGroupIcon
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import NextImage from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { copyTraderApi, CopyTrader } from "@/lib/api";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ ct_uid: string }>;
}

export default async function TraderProfilePage({ params }: PageProps) {
    const { ct_uid } = await params;

    // Fetch all traders and find the matching one
    const response = await copyTraderApi.getCopyTraders();
    const trader = response.data.find(t => t.ct_uid === ct_uid);

    if (!trader) {
        notFound();
    }

    const isVerified = String(trader.ct_verified) === '1';
    const isActive = String(trader.ct_active) === '1';

    return (
        <main className="min-h-screen bg-[#020617] text-white">
            <Navbar />

            {/* Profile Hero Header */}
            <section className="relative pt-20">
                {/* Banner Background */}
                <div className="h-64 md:h-80 w-full bg-[#050B1B] border-b border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />
                    <div className="absolute inset-0 bg-[url('/images/world-map.png')] bg-cover bg-center mix-blend-overlay opacity-20" />
                </div>

                <div className="container mx-auto px-6 relative">
                    <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-10 -mt-20 md:-mt-24 pb-12">
                        {/* Avatar and Name Group */}
                        <div className="flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-4 group/header">
                            {/* Large Avatar */}
                            <ScrollReveal variant="scale" delay={0.2}>
                                <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full border-[6px] border-[#020617] bg-[#050B1B] overflow-hidden shadow-2xl group/avatar flex-shrink-0">
                                    <NextImage
                                        src={trader.ct_profile_url || `https://i.pravatar.cc/300?u=${trader.ct_id}`}
                                        alt={trader.ct_name}
                                        fill
                                        className="object-cover group-hover/avatar:scale-110 transition-transform duration-700"
                                        priority
                                    />
                                    {/* Online/Away Indicator */}

                                </div>
                            </ScrollReveal>

                            {/* Name and Basic Title */}
                            <div className="pb-2 text-center md:text-left">
                                <ScrollReveal variant="fade-up" delay={0.3}>
                                    <div className="flex items-center gap-2 mt-10  justify-center md:justify-start whitespace-nowrap">
                                        <h1 className={`${spaceGrotesk.className} text-2xl md:text-3xl font-semibold tracking-tight text-white`}>
                                            {trader.ct_name}
                                        </h1>
                                        {isVerified && (
                                            <div className="flex items-center justify-center p-1 rounded-full bg-[#BF953F] shadow-[0_0_15px_rgba(191,149,63,0.3)] flex-shrink-0">
                                                <HugeiconsIcon
                                                    icon={CheckmarkBadge02Icon}
                                                    size={18}
                                                    className="text-black"
                                                    strokeWidth={3}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap justify-center mt-1 md:justify-start items-center gap-4 text-muted-foreground">
                                        {isActive ? (
                                            <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full font-black border border-green-500/20 tracking-widest uppercase">ACTIVE NOW</span>
                                        ) : (
                                            <span className="text-[10px] bg-red-500/10 text-red-500 px-2 py-0.5 rounded-full font-black border border-red-500/20 tracking-widest uppercase">AWAY</span>
                                        )}
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>

                        {/* Hero Buttons */}
                        <div className="flex items-center gap-3 pb-6 flex-shrink-0">
                            <ScrollReveal variant="fade-left" delay={0.4}>
                                <Link
                                    href="https://app.tradesignalhive.com/auth/signup"
                                    target="_blank"
                                    className="bg-white text-black px-8 py-3.5 rounded-2xl font-black hover:bg-white/90 transition-all flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 text-sm md:text-base whitespace-nowrap"
                                >
                                    Copy Trading
                                </Link>
                            </ScrollReveal>
                            <ScrollReveal variant="fade-left" delay={0.5}>
                                <Link
                                    href="/copy-trading"
                                    className="border border-white/10 bg-white/5 backdrop-blur-md px-8 py-3.5 rounded-2xl font-black hover:bg-white/10 transition-all text-white/90 shadow-xl hover:scale-105 active:scale-95 text-sm md:text-base"
                                >
                                    Back
                                </Link>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

                        {/* Left Column: Description */}
                        <div className="lg:col-span-8 space-y-8">
                            {/* HTML Description Content */}
                            <ScrollReveal variant="fade-up" delay={0.2}>
                                <div className="glass-morphism rounded-[2.5rem] p-10 md:p-16 border-white/10 relative overflow-hidden">
                                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                        <h2 className={`${spaceGrotesk.className} text-3xl font-bold text-white flex items-center gap-4`}>
                                            <span className="h-10 w-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(191,149,63,0.5)]" />
                                            About {trader.ct_name.split(' ')[0]}
                                        </h2>

                                        {/* Social Icons Integrated */}
                                        <div className="flex gap-3">
                                            {trader.ct_social_telegram && (
                                                <Link href={trader.ct_social_telegram} target="_blank" className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-white group shadow-lg">
                                                    <HugeiconsIcon icon={TelegramIcon} size={20} className="group-hover:scale-110 transition-transform" />
                                                </Link>
                                            )}
                                            {trader.ct_social_whatsapp && (
                                                <Link href={trader.ct_social_whatsapp} target="_blank" className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/50 transition-all text-white group shadow-lg">
                                                    <HugeiconsIcon icon={WhatsappIcon} size={20} className="group-hover:scale-110 transition-transform" />
                                                </Link>
                                            )}
                                            {trader.ct_social_facebook && (
                                                <Link href={trader.ct_social_facebook} target="_blank" className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-600/50 transition-all text-white group shadow-lg">
                                                    <HugeiconsIcon icon={Facebook01Icon} size={20} className="group-hover:scale-110 transition-transform" />
                                                </Link>
                                            )}
                                            {trader.ct_social_linkedin && (
                                                <Link href={trader.ct_social_linkedin} target="_blank" className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-400/20 hover:border-blue-400/50 transition-all text-white group shadow-lg">
                                                    <HugeiconsIcon icon={Linkedin01Icon} size={20} className="group-hover:scale-110 transition-transform" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className={`${inter.className} text-xl md:text-2xl text-white/80 prose prose-invert prose-p:text-xl prose-p:leading-[1.8] prose-p:text-white/80 prose-headings:text-white prose-strong:text-white prose-blockquote:border-primary prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:rounded-2xl max-w-none font-medium [&_*]:!font-[inherit] [&_*]:!text-[inherit] [&_*]:!leading-[inherit]`}
                                        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                                        dangerouslySetInnerHTML={{ __html: trader.ct_description }}
                                    />
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Column: Stats & Investment Details */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Performance Stats (Compact) */}
                            <ScrollReveal variant="fade-left" delay={0.3}>
                                <div className="glass-morphism rounded-[2rem] p-6 border-white/10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <HugeiconsIcon icon={AnalyticsUpIcon} size={60} />
                                    </div>
                                    <h3 className={`${spaceGrotesk.className} text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-5`}>Performance Metrics</h3>
                                    <div className="space-y-5">
                                        <div>
                                            <div className="flex items-center justify-between mb-2 padding-right-2">
                                                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Win Rate</span>
                                                <span className="text-primary font-black text-lg">{trader.ct_win_rate}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(191,149,63,0.5)]"
                                                    style={{ width: `${trader.ct_win_rate}%` }}
                                                />
                                            </div>
                                        </div>
                                        <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Total Profit</span>
                                            <span className="text-xl font-black text-white tracking-tight">
                                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(trader.ct_profit) || 0)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Investment Details (Compact Grid) */}
                            <ScrollReveal variant="fade-left" delay={0.4}>
                                <div className="glass-morphism rounded-[2rem] p-6 border-white/10 space-y-4">
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                            <HugeiconsIcon icon={ZapIcon} size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-0.5">Min Capital</h4>
                                            <p className="text-lg font-black text-white tracking-tighter">
                                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(trader.ct_amount) || 0)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
                                        <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
                                            <HugeiconsIcon icon={MoneyReceive01Icon} size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-0.5">Min Withdrawal</h4>
                                            <p className="text-lg font-black text-white tracking-tighter">
                                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(trader.ct_withdrawal) || 0)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Call to Action */}
                            <ScrollReveal variant="scale" delay={0.5}>
                                <Link
                                    href="https://app.tradesignalhive.com/auth/signup"
                                    target="_blank"
                                    className="w-full bg-primary text-black p-7 rounded-[2rem] font-black text-xl hover:scale-[1.03] active:scale-[0.98] transition-all flex flex-col items-center justify-center gap-1.5 shadow-[0_20px_50px_rgba(191,149,63,0.25)] group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    <span className="relative z-10 flex items-center gap-2 italic">Copy This Trader <HugeiconsIcon icon={ZapIcon} size={20} /></span>
                                    <span className="relative z-10 text-[10px] opacity-70 uppercase tracking-[0.2em] font-black">Join The Elite Elite Circle</span>
                                </Link>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
