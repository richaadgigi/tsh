import Link from "next/link";
import { spaceGrotesk, inter } from "../lib/fonts";
import ScrollReveal from "./ScrollReveal";

export default function Tools() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal variant="fade-up" delay={0.2}>
                        <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-4">SMART TOOLS</h2>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.4}>
                        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${spaceGrotesk.className}`}>
                            Explore Advanced <br /> Tools for Smarter Investing
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.6}>
                        <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${inter.className}`}>
                            Use advanced trading tools to analyze markets, manage portfolios efficiently, and <br />
                            make smarter, confident investment decisions.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                    <ScrollReveal variant="fade-right" delay={0.4} className="flex-1 w-full max-w-xl">
                        <div className="secured glass-morphism p-10 md:p-12 rounded-[3rem] border border-white/5 relative group">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]" />
                            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 leading-tight ${spaceGrotesk.className}`}>
                                Secure Bank Transfers <br /> and Fast Withdrawals
                            </h2>
                            <p className={`text-lg text-muted-foreground mb-10 ${inter.className}`}>
                                Track top stocks like Apple, Tesla, Amazon, and NVIDIA for <br />
                                smarter investing decisions.
                            </p>
                            <Link href="https://app.tradesignalhive.com/auth/signup" target="_blank">
                                <button className="bg-primary text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,242,254,0.2)]">
                                    Explore Now
                                </button>
                            </Link>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-left" delay={0.6} className="flex-1 w-full max-w-md">
                        <div className="secure flex flex-col gap-6 relative">
                            {/* Decorative Glow */}
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />

                            <div className="bank glass-morphism p-8 rounded-3xl border border-white/10 flex flex-col gap-2">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest">Bank Transfer</p>
                                <p className="text-lg font-bold text-white uppercase tracking-wider">Savings (**** **** 7458)</p>
                            </div>

                            <div className="draw glass-morphism p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl rounded-full" />
                                <h3 className={`text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 ${spaceGrotesk.className}`}>
                                    Withdrawal Details
                                </h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">From:</span>
                                        <span className="text-white font-medium">Available Balance</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">Method:</span>
                                        <span className="text-white font-medium">Bank Transfer</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">Est. Arrival:</span>
                                        <span className="text-white font-medium">1-3 Business Days</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm border-t border-white/5 pt-4">
                                        <span className="text-muted-foreground">Amount:</span>
                                        <span className="text-white font-bold text-lg">$1,458.70</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">Fee:</span>
                                        <span className="text-primary font-bold">$0.00</span>
                                    </li>
                                </ul>
                                <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20">
                                    <ul className="flex justify-between items-center">
                                        <li className="text-primary font-bold">Total:</li>
                                        <li className="text-primary text-xl font-bold">$1,458.70</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
