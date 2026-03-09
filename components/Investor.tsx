"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { spaceGrotesk, inter } from "../lib/fonts";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon, QuotesIcon } from "@hugeicons/core-free-icons";
import ScrollReveal from "./ScrollReveal";

export default function Investor() {
  const testimonials = [
    {
      name: "Kathryn Murphy",
      role: "Fidelity Investments",
      text: "From real-time stock updates to intuitive charts, this app gives me everything I need to confidently monitor and grow my investments every day.",
      stars: 5,
      highlight: false,
    },
    {
      name: "Brooklyn Simmons",
      role: "Robinhood User",
      text: "This platform completely transformed my trading! Real-time updates, intelligent insights, and easy-to-use tools make investing simple and fast.",
      stars: 5,
      highlight: true,
    },
    {
      name: "Cameron Williamson",
      role: "Portfolio Manager",
      text: "Actionable insights and intuitive tools have made my market execution much more precise. I recommend Hive to all my associates.",
      stars: 5,
      highlight: false,
    },
    {
      name: "Brooklyn Simmons",
      role: "Robinhood User",
      text: "This platform completely transformed my trading! Real-time updates, intelligent insights, and easy-to-use tools make investing simple and fast.",
      stars: 5,
      highlight: true,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <ScrollReveal variant="fade-right" delay={0.2} className="max-w-xl text-center lg:text-left">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Trusted by Investors</h2>
            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-white leading-tight`}>
              Hear What Our <br />
              <span className="text-primary">Users are Saying</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-left" delay={0.4}>
            <p className={`${inter.className} text-lg text-muted-foreground max-w-md text-center lg:text-left leading-relaxed`}>
              Discover how Trade Signal Hive simplifies complex markets and boosts confidence for traders worldwide.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade-up" delay={0.6}>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={3}
              spaceBetween={30}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              autoplay={{ delay: 5000 }}
              loop
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              className="pb-20"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div
                    className={`relative flex h-full flex-col justify-between rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 border overflow-hidden ${item.highlight
                      ? "bg-primary/5 border-primary/20 shadow-[0_20px_50px_rgba(0,242,254,0.1)]"
                      : "bg-white/[0.02] border-white/5"
                      }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <HugeiconsIcon icon={QuotesIcon} size={40} className={`${item.highlight ? "text-primary" : "text-white/10"}`} />
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <HugeiconsIcon key={i} icon={StarIcon} size={16} className={`fill-current ${i < item.stars ? "text-primary" : "text-white/10"}`} />
                          ))}
                        </div>
                      </div>

                      <p className={`mb-10 text-lg leading-relaxed text-white/80 ${inter.className}`}>
                        "{item.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                      <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20 p-0.5">
                        <Image
                          src={`https://i.pravatar.cc/150?u=${item.name}`}
                          alt={item.name}
                          width={56}
                          height={56}
                          className="h-full w-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{item.name}</h4>
                        <span className="text-sm text-primary font-medium">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Controls Container */}
            <div className="flex justify-center items-center gap-8 mt-4">
              <div className="custom-pagination !static !w-auto" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
