import { HugeiconsIcon } from "@hugeicons/react";
import { HexagonIcon, YoutubeIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import Image from "next/image";
import { spaceGrotesk, inter } from "../lib/fonts";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/5 py-20 relative overflow-hidden">
      <ScrollReveal variant="fade-up" stagger={0.2}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-white/10" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

            <div className="md:col-span-4 space-y-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-14 h-14">
                  <Image
                    src="https://res.cloudinary.com/xnyder/image/upload/v1743325093/crypto-trade-signal-hive/brand/new-ctsh-logo_motwjq.png"
                    alt="Trade Signal Hive Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className={`${spaceGrotesk.className} text-2xl font-bold text-white`}>
                  Trade Signal <span className="text-primary">Hive</span>
                </span>
              </Link>
              <p className={`${inter.className} text-muted-foreground text-lg leading-relaxed max-w-sm`}>
                The institutional-grade trading signal platform for the next generation of asset managers.
                Accurate. Real-time. Professional.
              </p>
              <div className="flex gap-4">
                <Link href="https://youtube.com/@tradesignalhive?si=VzlCKF43SaxXe3ro" target="_blank" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                  <HugeiconsIcon icon={YoutubeIcon} size={20} />
                </Link>
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">
              <div className="space-y-6">
                <h3 className={`${spaceGrotesk.className} text-lg font-bold text-white uppercase tracking-wider`}>Platform</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/copy-trading" className="text-muted-foreground hover:text-primary transition-colors">
                      Copy Trading
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/media" className="text-muted-foreground hover:text-primary transition-colors">
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className={`${spaceGrotesk.className} text-lg font-bold text-white uppercase tracking-wider`}>Company</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/media" className="text-muted-foreground hover:text-primary transition-colors">
                      Media
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className={`${spaceGrotesk.className} text-lg font-bold text-white uppercase tracking-wider`}>Legal</h3>
                <ul className="space-y-4">
                  {["Terms of Service", "Privacy Policy", "Risk Disclosure", "Compliance"].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Trade Signal Hive. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
