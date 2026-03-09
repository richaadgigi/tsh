"use client";

import { spaceGrotesk, inter } from "../lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shield01Icon, ZapIcon, BarChartIcon, AnalyticsUpIcon } from "@hugeicons/core-free-icons";
import ScrollReveal from "./ScrollReveal";
import TradingViewQuotes from "./TradingViewQuotes";

export default function Smarter() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full">
            <ScrollReveal variant="fade-right">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-6">
                <HugeiconsIcon icon={Shield01Icon} size={24} />
              </div>
              <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-white mb-6 leading-tight`}>
                Institutional Insights <br />
                <span className="text-primary">At Your Fingertips</span>
              </h2>
              <p className={`${inter.className} text-muted-foreground text-lg max-w-md leading-relaxed`}>
                Track elite performers and see what drives the market. We provide the data, you make the move.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex-1 w-full relative">
            <ScrollReveal variant="scale" duration={1.2}>
              <div className="absolute -inset-4 bg-primary/10 blur-[80px] rounded-full" />
              <div className="relative glass border-white/5 rounded-[3.5rem] p-1 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />
                <div className="p-8 md:p-12">
                  <TradingViewQuotes />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Highlight Grid */}
        <div className="mt-24">
          <ScrollReveal variant="fade-up" stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ZapIcon,
                  title: "Instant Execution",
                  desc: "Low-latency signals delivered straight to your dashboard."
                },
                {
                  icon: BarChartIcon,
                  title: "In-depth Analytics",
                  desc: "Institutional-grade data synthesized for clear decisions."
                },
                {
                  icon: AnalyticsUpIcon,
                  title: "Profit Tracking",
                  desc: "Real-time PnL insights with automated history logs."
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
                    <HugeiconsIcon icon={item.icon} size={28} />
                  </div>
                  <h4 className={`${spaceGrotesk.className} text-xl font-bold text-white mb-4`}>{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
