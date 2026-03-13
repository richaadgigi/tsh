"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Mail01Icon,
    SentIcon,
    BubbleChatIcon,
    YoutubeIcon,
    MailQuestionMarkIcon
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields (Name, Email, Message).");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const subject = encodeURIComponent(formData.subject || `Contact Query from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

        window.location.href = `mailto:support@tradesignalhive.com?subject=${subject}&body=${body}`;
    };

    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal variant="fade-up" delay={0.2}>
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-8">
                            <HugeiconsIcon icon={MailQuestionMarkIcon} size={16} className="text-primary" />
                            <span className="text-xs font-bold text-primary tracking-widest uppercase">Contact Center</span>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.4}>
                        <h1 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-bold mb-8 leading-tight text-white`}>
                            Get in <span className="text-primary">Touch</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.6}>
                        <p className={`${inter.className} text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed`}>
                            At Trade Signal Hive, we value your inquiries and are here to assist you.
                            Whether you have questions about our services, need support, or want to collaborate,
                            our team is ready to help.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        {/* Contact Info Cards */}
                        <div className="w-full lg:w-1/3 space-y-6">
                            <ScrollReveal variant="fade-right" stagger={0.1}>
                                {[
                                    {
                                        icon: Mail01Icon,
                                        title: "Email Us",
                                        value: "support@tradesignalhive.com",
                                        desc: "Our friendly team is here to help."
                                    },
                                    {
                                        icon: BubbleChatIcon,
                                        title: "Live Chat",
                                        value: "Available 24/7",
                                        desc: "Speak to our support team instantly."
                                    },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all group mb-6 last:mb-0">
                                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                                            <HugeiconsIcon icon={item.icon} size={24} className="text-primary group-hover:text-black transition-all" />
                                        </div>
                                        <h3 className={`${spaceGrotesk.className} text-lg font-bold mb-2 text-white`}>{item.title}</h3>
                                        {item.title === "Email Us" ? (
                                            <a href={`mailto:${item.value}`} className="font-bold text-white mb-1 hover:text-primary transition-colors block">{item.value}</a>
                                        ) : (
                                            <p className="font-bold text-white mb-1">{item.value}</p>
                                        )}
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </ScrollReveal>

                            {/* Social Links */}
                            <ScrollReveal variant="fade-right" delay={0.4}>
                                <div className="glass-morphism p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all shadow-lg">
                                    <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-6 text-white`}>Follow Our Insights</h3>
                                    <div className="flex gap-4">
                                        <Link href="https://t.me/trade_signal_hive" target="_blank" className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.08-.19-.09-.05-.21-.02-.3.01-.13.04-2.18 1.39-6.17 4.08-.58.42-1.11.62-1.59.61-.53-.01-1.55-.3-2.31-.55-.93-.31-1.67-.47-1.61-1 .03-.27.4-.55 1.11-.84 4.35-1.89 7.25-3.14 8.7-3.74 4.14-1.72 5-2.02 5.55-2.03.12 0 .39.03.54.15.12.1.17.24.19.34.02.04.04.14.03.28z" /></svg>
                                        </Link>
                                        <Link href="https://www.facebook.com/share/1P23b2jCPR/" target="_blank" className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Contact Form */}
                        <div className="flex-1 w-full">
                            <ScrollReveal variant="fade-left" delay={0.2}>
                                <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[3.5rem] glass-morphism shadow-2xl">
                                    <form className="space-y-8" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-2">Full Name <span className="text-red-500">*</span></label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="John Doe"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-white placeholder:text-white/20"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-2">Email Address <span className="text-red-500">*</span></label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-white placeholder:text-white/20"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-2">Subject</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="How can we help?"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-white placeholder:text-white/20"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-2">Message <span className="text-red-500">*</span></label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                placeholder="Your message here..."
                                                className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-white placeholder:text-white/20 resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-black py-6 rounded-2xl text-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,242,254,0.2)] flex items-center justify-center gap-3"
                                        >
                                            Send Message
                                            <HugeiconsIcon icon={SentIcon} size={20} />
                                        </button>
                                    </form>
                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
