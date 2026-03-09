import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon, Shield01Icon, ZapIcon } from "@hugeicons/core-free-icons";
import { spaceGrotesk, inter } from "../lib/fonts";
import ScrollReveal from "./ScrollReveal";

export default function Plan() {
    const plans = [
        {
            name: "Premium Plan",
            price: "29",
            tag: "Recommended",
            features: [
                "All Pro Features",
                "VIP webinars & tutorials",
                "AI-powered portfolio suggestions",
                "Priority Support 24/7"
            ],
            cta: "Get Started",
            gradient: false
        },
        {
            name: "Pro Plan",
            price: "39",
            tag: "Advanced",
            features: [
                "Advanced market analytics",
                "Join and connect with investors",
                "Unlimited watchlists",
                "Instant Market Alerts"
            ],
            cta: "Go Unlimited",
            gradient: true
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <ScrollReveal variant="fade-up" delay={0.2}>
                        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-6">Choose Your Plan</h2>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.4}>
                        <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight`}>
                            Simple Transparent <br />
                            <span className="text-primary">& Flexible Pricing</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.6}>
                        <p className={`${inter.className} text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed`}>
                            Select the perfect plan for your investing journey — no hidden fees, just smarter trading.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                    {plans.map((plan, idx) => (
                        <ScrollReveal key={idx} variant="fade-up" delay={0.4 + (idx * 0.2)}>
                            <div
                                className={`relative flex flex-col h-full p-8 md:p-12 rounded-[2.8rem] border transition-all duration-500 hover:scale-[1.02] ${plan.gradient
                                    ? "bg-primary/5 border-primary/20 shadow-[0_20px_50px_rgba(0,242,254,0.1)]"
                                    : "bg-white/[0.02] border-white/5"
                                    }`}
                            >
                                {plan.gradient && (
                                    <div className="absolute top-8 right-8">
                                        <HugeiconsIcon icon={ZapIcon} size={24} className="text-primary animate-pulse" />
                                    </div>
                                )}

                                <div className="mb-10">
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${plan.gradient ? "bg-primary text-black" : "bg-white/10 text-white"
                                        }`}>
                                        {plan.tag}
                                    </span>
                                    <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-white mb-2`}>{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-bold text-white">${plan.price}</span>
                                        <span className="text-muted-foreground text-sm ml-2">/ one-time</span>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-12 flex-1">
                                    {plan.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3">
                                            <div className={`h-6 w-6 rounded-full flex items-center justify-center ${plan.gradient ? "bg-primary/20 text-primary" : "bg-white/10 text-white/50"
                                                }`}>
                                                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} />
                                            </div>
                                            <span className={`${inter.className} text-white/80`}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/dashboard"
                                    className={`w-full py-5 rounded-2xl text-center font-bold text-lg transition-all ${plan.gradient
                                        ? "bg-primary text-black hover:shadow-[0_0_30px_rgba(0,242,254,0.4)]"
                                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
