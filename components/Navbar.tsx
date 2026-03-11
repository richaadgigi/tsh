"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { HexagonIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-16 h-16">
              <Image
                src="https://res.cloudinary.com/xnyder/image/upload/v1743325093/crypto-trade-signal-hive/brand/new-ctsh-logo_motwjq.png"
                alt="Trade Signal Hive Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/copy-trading" className="hover:text-primary transition-colors relative group">
              Copy Trading
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/media" className="hover:text-primary transition-colors relative group">
              Media
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://app.tradesignalhive.com/auth/signup"
              target="_blank"
              className="hidden sm:flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
            >
              Get Started
            </Link>
            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-[60]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HugeiconsIcon icon={Cancel01Icon} size={28} className="text-primary" />
              ) : (
                <HugeiconsIcon icon={Menu01Icon} size={28} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#000814] z-[9999] md:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-black pointer-events-none" />
        <div className="flex flex-col h-full overflow-y-auto relative z-10">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-black">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <div className="relative w-12 h-12">
                <Image
                  src="https://res.cloudinary.com/xnyder/image/upload/v1743325093/crypto-trade-signal-hive/brand/new-ctsh-logo_motwjq.png"
                  alt="Trade Signal Hive Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white uppercase tracking-tight hidden sm:block">
                Trade Signal <span className="text-primary">Hive</span>
              </span>
            </Link>
            <button
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={28} className="text-primary" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 py-10 gap-8 text-xl font-bold">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Copy Trading", href: "/copy-trading" },
              { label: "FAQ", href: "/faq" },
              { label: "Media", href: "/media" },
              { label: "Contact", href: "/contact" },
            ].map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-primary transition-all hover:scale-110 active:scale-95 tracking-wide"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://app.tradesignalhive.com/auth/signup"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 w-full max-w-[300px] py-5 bg-primary text-black rounded-full text-center flex items-center justify-center font-bold text-xl shadow-[0_0_40px_rgba(0,242,254,0.4)] transition-transform hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
