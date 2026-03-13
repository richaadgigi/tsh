import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { spaceGrotesk, inter } from "../lib/fonts";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function EasyHelp() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="scale" duration={1.2}>
          <div className="relative glass-morphism border-primary/20 rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl">
            {/* Decorative Background Glows */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/10 blur-[100px] -z-10" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="flex-1 text-center lg:text-left">
                <ScrollReveal variant="fade-up" delay={0.2}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-8">
                    <HugeiconsIcon icon={SparklesIcon} size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">New Standard</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal variant="fade-up" delay={0.4}>
                  <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight`}>
                    Your Trading Journey <br />
                    <span className="text-primary">Starts Right Here</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal variant="fade-up" delay={0.6}>
                  <p className={`${inter.className} text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed`}>
                    Experience a seamless interface with institutional-grade tools.
                    Transparent. Secure. Built for the modern trader.
                  </p>
                </ScrollReveal>
                <ScrollReveal variant="fade-up" delay={0.8}>
                  <Link
                    href="https://app.tradesignalhive.com/auth/signup" target="_blank"
                    className="inline-flex items-center justify-center gap-3 bg-primary text-black px-12 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,242,254,0.3)] group"
                  >
                    Start Trading Now
                    <HugeiconsIcon icon={ArrowRight01Icon} size={24} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </ScrollReveal>
              </div>

              <ScrollReveal variant="scale" delay={0.6} className="flex-1 relative w-full max-w-[500px] self-end -mb-8 md:-mb-12 lg:mt-0 mt-8">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl opacity-50" />
                <Image
                  src="/trading.png"
                  alt="Trade Signal App Preview"
                  width={600}
                  height={800}
                  className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-bottom"
                />
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
