import { HugeiconsIcon } from "@hugeicons/react";
import { YoutubeIcon } from "@hugeicons/core-free-icons";
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
                <div className="relative w-36 h-36">
                  <Image
                    src="https://res.cloudinary.com/xnyder/image/upload/v1743325093/crypto-trade-signal-hive/brand/new-ctsh-logo_motwjq.png"
                    alt="Trade Signal Hive Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className={`${inter.className} text-muted-foreground text-lg leading-relaxed max-w-sm`}>
                The institutional-grade trading signal platform for the next generation of asset managers.
                Accurate. Real-time. Professional.
              </p>
              <div className="flex gap-4">
                <Link href="https://t.me/trade_signal_hive" target="_blank" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.08-.19-.09-.05-.21-.02-.3.01-.13.04-2.18 1.39-6.17 4.08-.58.42-1.11.62-1.59.61-.53-.01-1.55-.3-2.31-.55-.93-.31-1.67-.47-1.61-1 .03-.27.4-.55 1.11-.84 4.35-1.89 7.25-3.14 8.7-3.74 4.14-1.72 5-2.02 5.55-2.03.12 0 .39.03.54.15.12.1.17.24.19.34.02.04.04.14.03.28z" /></svg>
                </Link>
                <Link href="https://www.facebook.com/share/1P23b2jCPR/" target="_blank" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
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
