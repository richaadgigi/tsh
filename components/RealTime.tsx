import { HugeiconsIcon } from "@hugeicons/react";
import { AnalyticsUpIcon, BarChartIcon, PieChartIcon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { spaceGrotesk, inter } from "../lib/fonts";
import ScrollReveal from "./ScrollReveal";

export default function RealTime() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col items-center justify-center mb-20 space-y-6 text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <HugeiconsIcon icon={AnalyticsUpIcon} size={16} className="text-primary animate-pulse" />
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Real-Time Insights</span>
            </div>
            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-white mb-2 leading-tight`}>
              Market Insights <br />
              <span className="text-primary">In Real-Time</span>
            </h2>
            <p className={`${inter.className} text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed`}>
              Unlock precision investing with features designed to provide clear market signals,
              instant alerts, and seamless portfolio tracking.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Market Insights Card */}
          <ScrollReveal variant="fade-right" delay={0.2}>
            <div className="group relative glass-morphism rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:scale-[1.02] h-full">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  <HugeiconsIcon icon={BarChartIcon} size={28} />
                </div>
                <h3 className={`${spaceGrotesk.className} mb-6 text-3xl font-bold text-white`}>
                  Live Market <br /> Intelligence
                </h3>
                <p className={`${inter.className} text-muted-foreground text-lg mb-10 leading-relaxed`}>
                  Deep-dive into live stock shifts. Track trends as they happen and leverage AI-driven insights to outpace the market.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Explore Insights <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Portfolio Tracking Card */}
          <ScrollReveal variant="fade-left" delay={0.4}>
            <div className="group relative glass-morphism rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:scale-[1.02] h-full text-white">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary border border-secondary/20">
                  <HugeiconsIcon icon={PieChartIcon} size={28} />
                </div>
                <h3 className={`${spaceGrotesk.className} mb-6 text-3xl font-bold`}>
                  Unified Portfolio <br /> Management
                </h3>
                <p className={`${inter.className} text-muted-foreground text-lg mb-10 leading-relaxed`}>
                  One dashboard, total control. Synchronize your assets and track net worth growth with precision analytics.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all"
                  >
                    Manage Portfolio <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom Banner Card */}
          <div className="lg:col-span-2">
            <ScrollReveal variant="scale" delay={0.6}>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 md:p-12 text-white text-center md:text-left">
                <div className="absolute inset-0 bg-white/[0.01]" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div>
                    <h3 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold text-white mb-4`}>
                      Ready to elevate <br /> your trading?
                    </h3>
                    <p className="text-muted-foreground text-lg">Join 40,000+ traders scaling their wealth.</p>
                  </div>
                  <Link
                    href="/dashboard"
                    className="bg-primary text-black px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all w-full md:w-auto text-center"
                  >
                    Join Hive Now
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
