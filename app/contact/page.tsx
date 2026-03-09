import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Mail01Icon,
    SmartPhone01Icon,
    SentIcon,
    BubbleChatIcon,
    YoutubeIcon,
    MailQuestionMarkIcon
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
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
                                        <p className="font-bold text-white mb-1">{item.value}</p>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </ScrollReveal>

                            {/* Social Links */}
                            <ScrollReveal variant="fade-right" delay={0.4}>
                                <div className="glass-morphism p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all shadow-lg">
                                    <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-6 text-white`}>Follow Our Insights</h3>
                                    <div className="flex gap-4">
                                        <Link href="https://youtube.com/@tradesignalhive?si=VzlCKF43SaxXe3ro" target="_blank" className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                            <HugeiconsIcon icon={YoutubeIcon} size={24} />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Contact Form */}
                        <div className="flex-1 w-full">
                            <ScrollReveal variant="fade-left" delay={0.2}>
                                <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[3.5rem] glass-morphism shadow-2xl">
                                    <form className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-white placeholder:text-white/20"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-white placeholder:text-white/20"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-2">Subject</label>
                                            <input
                                                type="text"
                                                placeholder="How can we help?"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-white placeholder:text-white/20"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-2">Message</label>
                                            <textarea
                                                rows={6}
                                                placeholder="Your message here..."
                                                className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-white placeholder:text-white/20 resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-black py-6 rounded-2xl text-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,242,254,0.2)] flex items-center justify-center gap-3"
                                        >
                                            Get started
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
