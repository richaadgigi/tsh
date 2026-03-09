import Link from "next/link";
import Image from "next/image";
import { spaceGrotesk, inter } from "../lib/fonts";
import ScrollReveal from "./ScrollReveal";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, AnalyticsUpIcon } from "@hugeicons/core-free-icons";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-[#050505]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero-bg.png"
          alt="Trading Graph Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-primary/2 shadow-[0_0_100px_rgba(0,242,254,0.1)] blur-[120px] rounded-full -z-10" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -z-10 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-8 animate-glow">
              Leading Trade Signals for the Next Gen
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.4}>
            <h1 className={`${spaceGrotesk.className} text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-white`}>
              Don't wait to invest in your future <br />
              <span className="text-primary">Smarter Faster Investing</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.6}>
            <p className={`${inter.className} text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed`}>
              Start building your portfolio with just $1. Invest in stocks, options & ETFs at your pace and commission free.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/dashboard"
                className="group flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,242,254,0.4)]"
              >
                Create an account
                <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/copy-trading"
                className="flex items-center gap-2 glass px-8 py-4 rounded-full text-lg font-bold border-white/10 hover:bg-white/5 transition-all text-white"
              >
                Get Started
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
