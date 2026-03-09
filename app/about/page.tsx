import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shield01Icon, StarIcon, SentIcon, UserGroupIcon, GlobeIcon, ZapIcon, FavouriteIcon, Award01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal variant="fade-up" delay={0.2}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-8">
                            20% DISCOUNT FOR 1 MONTH ACCOUNT
                        </div>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.4}>
                        <h1 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-bold mb-8 leading-tight text-white`}>
                            Revolutionizing the <br />
                            <span className="text-primary">Future of Finance</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.6}>
                        <p className={`${inter.className} text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12`}>
                            Built on innovation, security, and transparency, we are dedicated to empowering
                            individuals and businesses to take control of their digital assets with confidence.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <ScrollReveal variant="fade-right">
                                <h2 className={`${spaceGrotesk.className} text-sm font-bold text-primary tracking-widest uppercase mb-6`}>Who We Are</h2>
                                <h3 className={`${spaceGrotesk.className} text-4xl font-bold mb-6 text-white`}>Built by Experts, <br />Driven by Mission</h3>
                                <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed mb-8`}>
                                    We are a team of blockchain enthusiasts, financial experts, and tech innovators
                                    driven by a shared mission: to make cryptocurrency accessible, secure, and rewarding for everyone.
                                </p>
                                <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed`}>
                                    Whether you're a seasoned investor or a newcomer to the crypto space,
                                    we provide the tools, insights, and opportunities you need to thrive in the digital economy.
                                </p>
                            </ScrollReveal>
                        </div>
                        <div className="flex-1">
                            <ScrollReveal variant="scale" delay={0.3}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                                        <HugeiconsIcon icon={UserGroupIcon} size={32} className="text-primary mb-4" />
                                        <span className="text-2xl font-bold text-white">480k+</span>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Traders</span>
                                    </div>
                                    <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col items-center text-center mt-8">
                                        <HugeiconsIcon icon={Award01Icon} size={32} className="text-primary mb-4" />
                                        <span className="text-2xl font-bold text-white">10+ Year</span>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Experience</span>
                                    </div>
                                    <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col items-center text-center -mt-8">
                                        <HugeiconsIcon icon={GlobeIcon} size={32} className="text-primary mb-4" />
                                        <span className="text-2xl font-bold text-white">90+</span>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Countries</span>
                                    </div>
                                    <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                                        <HugeiconsIcon icon={ZapIcon} size={32} className="text-primary mb-4" />
                                        <span className="text-2xl font-bold text-white">0.01s</span>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Latency</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <ScrollReveal variant="fade-up">
                        <div className="text-center mb-16">
                            <h2 className={`${spaceGrotesk.className} text-sm font-bold text-primary tracking-widest uppercase mb-4`}>What We Do</h2>
                            <h3 className={`${spaceGrotesk.className} text-4xl font-bold text-white`}>Our Specializations</h3>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" stagger={0.2} delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: StarIcon,
                                    title: "Secure Trading & Investment",
                                    desc: "Buy, sell, and trade with ease on our user-friendly platform."
                                },
                                {
                                    icon: SentIcon,
                                    title: "DeFi & Staking Opportunities",
                                    desc: "Earn passive income and maximize your crypto holdings."
                                },
                                {
                                    icon: Shield01Icon,
                                    title: "Cutting-Edge Security",
                                    desc: "Your assets are safeguarded with top-tier encryption and multi-layer protection."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-morphism p-8 md:p-12 rounded-[2.5rem] border-white/10 hover:border-primary/30 transition-all group">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                                        <HugeiconsIcon icon={item.icon} size={28} />
                                    </div>
                                    <h4 className={`${spaceGrotesk.className} text-xl font-bold mb-4 text-white`}>{item.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <ScrollReveal variant="scale">
                        <div className="glass-morphism rounded-[3.5rem] p-8 md:p-12 border-white/10 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10" />
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className="w-full lg:w-1/3 aspect-square relative rounded-[3rem] overflow-hidden border-2 border-primary/20">
                                    <Image
                                        src={`https://i.pravatar.cc/600?u=RonaldKentJohn`}
                                        alt="Ronald Kent John"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h2 className={`${spaceGrotesk.className} text-sm font-bold text-primary tracking-widest uppercase mb-4`}>The Visionary</h2>
                                    <h3 className={`${spaceGrotesk.className} text-4xl font-bold mb-2 text-white`}>Ronald Kent John</h3>
                                    <span className="text-muted-foreground mb-8 block text-lg">Founder & CEO</span>
                                    <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed mb-8`}>
                                        Ronald Kent John is the visionary founder behind Trade Signal Hive. With a robust background in finance and technology
                                        spanning over a decade, Ronald has been a pioneer in bridging the gap between traditional markets and the burgeoning world of cryptocurrencies.
                                    </p>
                                    <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed`}>
                                        His passion for innovation and deep understanding of market dynamics have driven him to develop a platform that empowers
                                        both novice and experienced traders with real-time insights and cutting-edge analytics. Under his leadership,
                                        Trade Signal Hive continues to evolve as a trusted resource in the crypto trading community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <ScrollReveal variant="fade-up">
                        <div className="text-center mb-16">
                            <h2 className={`${spaceGrotesk.className} text-sm font-bold text-primary tracking-widest uppercase mb-4`}>Why Choose Us?</h2>
                            <h3 className={`${spaceGrotesk.className} text-4xl font-bold text-white`}>Built for the Future</h3>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" stagger={0.1} delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "User-Centric Platform",
                                    desc: "Seamless experience, whether on mobile or desktop.",
                                    icon: ZapIcon
                                },
                                {
                                    title: "Low Fees, High Rewards",
                                    desc: "Competitive rates designed to maximize your profits.",
                                    icon: FavouriteIcon
                                },
                                {
                                    title: "Global Reach, Local Support",
                                    desc: "24/7 customer service to assist you anytime, anywhere.",
                                    icon: GlobeIcon
                                },
                                {
                                    title: "Future-Ready Innovation",
                                    desc: "Stay ahead with the latest in crypto, NFTs, and Web3.",
                                    icon: Shield01Icon
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group">
                                    <HugeiconsIcon icon={item.icon} size={40} className="text-primary mb-6 transition-transform group-hover:scale-110" />
                                    <h4 className={`${spaceGrotesk.className} font-bold mb-4 text-white`}>{item.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <ScrollReveal variant="scale">
                        <div className="bg-primary p-8 md:p-12 rounded-[4rem] text-center text-black relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-black/5 -z-10" />
                            <h2 className={`${spaceGrotesk.className} text-4xl md:text-6xl font-bold mb-8`}>
                                Join a club of more than <br /> 480,000 traders
                            </h2>
                            <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto mb-12 opacity-80 italic">
                                We are more than just a community—we're a hub for traders of all levels.
                                Connect with top experts, learn from seasoned professionals, or simply copy a trader’s profile and ride along on their journey to success.
                            </p>
                            <Link
                                href="/dashboard"
                                className="inline-block bg-black text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
                            >
                                Get Started Now
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
