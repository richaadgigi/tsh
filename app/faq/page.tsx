"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon, MinusSignIcon, BubbleChatIcon, ArrowRight01Icon, QuestionIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
    {
        question: "What is Trade Signal Hive?",
        answer: "Trade Signal Hive is a premier platform offering expert market analysis and top trade setups in the cryptocurrency industry. Our thriving network of professional traders provides valuable insights to help you make informed trading decisions."
    },
    {
        question: "How does Trade Signal Hive help traders?",
        answer: "We provide real-time market insights, expert trade setups, and in-depth analysis to help traders maximize their profits. Whether you're a beginner or an experienced trader, our platform gives you a competitive edge."
    },
    {
        question: "How do I get started?",
        answer: "Sign up, verify your account, deposit funds, and start trading. Our beginner guides will help you navigate the process seamlessly."
    },
    {
        question: "How secure is my account?",
        answer: "We use high-level encryption, two-factor authentication (2FA), and cold storage protocols for maximum security of your assets and personal information."
    },
    {
        question: "Do I need trading experience to use Trade Signal Hive?",
        answer: "No! Our platform is designed for both beginners and experienced traders. We provide educational resources, trade signals, and expert analysis to guide you at every step."
    },
    {
        question: "Are there any fees or subscription plans?",
        answer: "Yes, Trade Signal Hive offers a variety of subscription plans tailored to different trading needs. Pricing typically depends on the level of access to premium signals, analytics tools, and additional resources. Detailed pricing information can be found on our pricing page."
    },
    {
        question: "Is my data secure on Trade Signal Hive?",
        answer: "Absolutely. The platform employs robust security protocols including encryption, two-factor authentication, and regular security audits to ensure that your personal and trading data remain safe and confidential."
    },
    {
        question: "How can I contact customer support?",
        answer: "Our support team is available 24/7 via live chat, email, and support tickets to assist you with any inquiries or issues."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal variant="fade-up" delay={0.2}>
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-8">
                            <HugeiconsIcon icon={QuestionIcon} size={16} className="text-primary" />
                            <span className="text-xs font-bold text-primary tracking-widest uppercase">Support Center</span>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.4}>
                        <h1 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-bold mb-8 leading-tight text-white`}>
                            Frequently Asked <br />
                            <span className="text-primary">Questions</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.6}>
                        <p className={`${inter.className} text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12`}>
                            Have questions? We're here to help. Explore our common queries or contact us for further enquiries.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.8}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 bg-primary text-black px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,242,254,0.3)]"
                        >
                            Contact Us <HugeiconsIcon icon={BubbleChatIcon} size={24} />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <ScrollReveal variant="fade-up" stagger={0.1}>
                        <div className="max-w-4xl mx-auto space-y-4">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`group glass-morphism rounded-[2rem] border transition-all duration-300 ${openIndex === idx ? "border-primary/30 bg-white/[0.04]" : "border-white/5 hover:border-white/10"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className="w-full text-left p-8 md:p-12 flex items-center justify-between gap-6"
                                    >
                                        <span className={`${spaceGrotesk.className} text-xl md:text-2xl font-bold text-white`}>
                                            {faq.question}
                                        </span>
                                        <div className={`h-10 w-10 rounded-full flex items-center justify-center border transition-all ${openIndex === idx ? "bg-primary border-primary text-black" : "border-white/10 text-white/50 group-hover:border-white/30"
                                            }`}>
                                            {openIndex === idx ? <HugeiconsIcon icon={MinusSignIcon} size={20} /> : <HugeiconsIcon icon={PlusSignIcon} size={20} />}
                                        </div>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                        }`}>
                                        <div className="px-8 md:px-12 pb-8 md:pb-12">
                                            <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed pt-2 border-t border-white/5`}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <ScrollReveal variant="scale">
                        <div className="bg-primary p-8 md:p-12 rounded-[4rem] text-center text-black relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold mb-8`}>
                                Still have questions?
                            </h2>
                            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 opacity-80 leading-relaxed italic">
                                Can't find the answer you're looking for? Our dedicated support team is available 24/7 to help you with anything you need.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto bg-black text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl"
                                >
                                    Get in Touch <HugeiconsIcon icon={ArrowRight01Icon} size={24} />
                                </Link>
                                <Link
                                    href="https://app.tradesignalhive.com/auth/signup" target="_blank"
                                    className="w-full sm:w-auto bg-black/10 border border-black/20 text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-black/20 transition-all font-bold"
                                >
                                    Go to Dashboard
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
