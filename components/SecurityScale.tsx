"use client";

import { spaceGrotesk } from "../lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shield01Icon, GlobeIcon, LockIcon, BarChartIcon } from "@hugeicons/core-free-icons";
import ScrollReveal from "./ScrollReveal";

export default function SecurityScale() {
    const metrics = [
        {
            icon: GlobeIcon,
            category: "Community Building",
            title: "Thriving Global Community",
            desc: "Trusted by more than 1 Million+ traders around the world.",
            color: "primary"
        },
        {
            icon: LockIcon,
            category: "Encrypted",
            title: "Rock-Solid Security",
            desc: "Top-level encryption and mult-factor authentication.",
            color: "white"
        },
        {
            icon: BarChartIcon,
            category: "Gold Bars",
            title: "$1 Billion+ Monthly Volume",
            desc: "Handling high-volume trades across multiple digital currencies.",
            color: "primary"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
            <div className="container mx-auto px-6">
                <ScrollReveal variant="fade-up" className="text-center mb-20">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-6">
                        <HugeiconsIcon icon={Shield01Icon} size={24} />
                    </div>
                    <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-white mb-6`}>
                        Designed for secure & <br />
                        <span className="text-primary">efficient trading</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Powerful tools and secure technology designed to help you succeed in the world of cryptocurrency.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {metrics.map((item, idx) => (
                        <ScrollReveal key={idx} variant="fade-up" delay={0.2 * idx}>
                            <div className="glass-morphism p-8 md:p-12 rounded-[3rem] border border-white/5 group hover:border-primary/20 transition-all h-full flex flex-col items-center text-center">
                                <div className={`h-16 w-16 rounded-2xl bg-${item.color}/10 flex items-center justify-center mb-8 border border-${item.color}/20 group-hover:scale-110 transition-transform`}>
                                    <HugeiconsIcon icon={item.icon} size={32} className={`text-${item.color}`} />
                                </div>
                                <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 italic">{item.category}</h4>
                                <div className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold text-white mb-4`}>{item.title}</div>
                                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
