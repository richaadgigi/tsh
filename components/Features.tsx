"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { News01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { spaceGrotesk, inter } from "../lib/fonts";
import ScrollReveal from "./ScrollReveal";
import TradingViewNews from "./TradingViewNews";

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Content Side */}
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal variant="fade-right">
              <div className="inline-flex items-center gap-2 mb-6">
                <HugeiconsIcon icon={News01Icon} size={20} className="text-primary" />
                <h2 className="text-sm font-bold text-primary tracking-widest uppercase mt-0 mb-0">Market Insights</h2>
              </div>
              <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1]`}>
                Latest Market News <br />
                <span className="text-primary">Trending Updates</span>
              </h2>
              <p className={`${inter.className} text-lg text-muted-foreground mb-10 max-xl leading-relaxed`}>
                Stay ahead of the curve with breaking developments and trending stories from the financial world.
                Knowledge is your greatest asset in the market.
              </p>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-black transition-all group"
              >
                Read Full Report
                <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* News Widget Side */}
          <div className="flex-1 w-full max-w-2xl">
            <ScrollReveal variant="fade-left" delay={0.2}>
              <div className="glass border-white/5 rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
                <TradingViewNews />
              </div>
            </ScrollReveal>
          </div>

        </div>

        <ScrollReveal variant="fade-up" delay={0.6}>
          <div className="mt-16 pt-8 border-t border-white/5 max-w-xl text-center md:text-left mx-auto md:mx-0">
            <h4 className={`${spaceGrotesk.className} text-xl font-bold text-white mb-4`}>Up to the minute analysis</h4>
            <p className="text-muted-foreground">
              Inform your decisions with timely dispatches from our large team of global analysts.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
