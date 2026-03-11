"use client";

import { spaceGrotesk, inter } from "../lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserGroupIcon, BookOpen01Icon, BubbleChatIcon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function ExpertNetwork() {
    const categories = [
        {
            icon: BubbleChatIcon,
            title: "Strategies & Discussions",
            desc: "Connect with experts and participate in deep market analysis."
        },
        {
            icon: BookOpen01Icon,
            title: "Forecasts & Educations",
            desc: "Stay informed with professional forecasts and educational pathing."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <ScrollReveal variant="fade-right">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-8">
                                <HugeiconsIcon icon={UserGroupIcon} size={24} />
                            </div>
                            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-white mb-8 leading-tight`}>
                                Market analysis and <br />
                                <span className="text-primary">trade inspiration</span>
                            </h2>
                            <p className={`${inter.className} text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed`}>
                                With a thriving network of experts, being a client of Trade Signal Hive opens doors to many opportunities.
                                Powerful market insight and the top trade setups in the industry. You will have extensive connections to professional traders.
                            </p>

                            <div className="space-y-6">
                                {categories.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-primary/20 transition-all">
                                        <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                                            <HugeiconsIcon icon={item.icon} size={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-primary font-bold tracking-widest uppercase text-xs mb-1">Strategy</h4>
                                            <h3 className={`${spaceGrotesk.className} text-xl font-bold text-white`}>{item.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="flex-1 w-full max-w-2xl bg-white/[0.01] rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden group/card shadow-2xl">
                        {/* World Map Background Overlay */}
                        <div className="absolute inset-0 z-0 opacity-20 group-hover/card:opacity-30 transition-opacity pointer-events-none">
                            <Image
                                src="/images/world-map.png"
                                alt="Global Community Map"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
                        </div>

                        <ScrollReveal variant="scale" delay={0.3}>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
                            <div className="text-center space-y-8 relative z-10">
                                <h3 className={`${spaceGrotesk.className} text-3xl font-bold text-white`}>
                                    Join a club of more than <span className="text-primary">480,000 traders</span>
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    We are more than just a community—we're a hub for traders of all levels. Connect with top experts, learn from seasoned professionals, or simply copy a trader’s profile and ride along on their journey to success.
                                </p>
                                <Link
                                    href="https://app.tradesignalhive.com/auth/signup" target="_blank"
                                    className="inline-flex items-center justify-center gap-3 bg-primary text-black px-10 py-4 rounded-full font-bold transition-all hover:scale-105"
                                >
                                    Join the Club <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
