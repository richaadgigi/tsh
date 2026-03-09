import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RealTime from "@/components/RealTime";
import Features from "@/components/Features";
import ExpertNetwork from "@/components/ExpertNetwork";
import SecurityScale from "@/components/SecurityScale";
import Smarter from "@/components/Smarter";
import Investor from "@/components/Investor";
import EasyHelp from "@/components/EasyHelp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <RealTime />
      <ExpertNetwork />
      <section id="company">
        <Smarter />
      </section>
      <SecurityScale />
      <Features />
      <Investor />
      <section id="faq">
        <EasyHelp />
      </section>
      <section id="contact">
        <Footer />
      </section>
      <section id="download" className="h-1" />
    </main>
  );
}
