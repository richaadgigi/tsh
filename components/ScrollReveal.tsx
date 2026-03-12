"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
    children: ReactNode;
    variant?: "fade" | "fade-up" | "fade-down" | "fade-right" | "fade-left" | "scale";
    delay?: number;
    duration?: number;
    stagger?: number;
    once?: boolean;
    className?: string;
}

export default function ScrollReveal({
    children,
    variant = "fade-up",
    delay = 0,
    duration = 1,
    stagger = 0,
    once = true,
    className = "",
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!elementRef.current) return;

        const fromVars: gsap.TweenVars = { opacity: 0 };
        const toVars: gsap.TweenVars = {
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top 85%",
                toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
        };

        if (stagger > 0) {
            toVars.stagger = stagger;
        }

        switch (variant) {
            case "fade-up":
                fromVars.y = 50;
                toVars.y = 0;
                break;
            case "fade-down":
                fromVars.y = -50;
                toVars.y = 0;
                break;
            case "fade-right":
                fromVars.x = -50;
                toVars.x = 0;
                break;
            case "fade-left":
                fromVars.x = 50;
                toVars.x = 0;
                break;
            case "scale":
                fromVars.scale = 0.8;
                toVars.scale = 1;
                break;
        }

        gsap.fromTo(
            elementRef.current.children.length > 1 ? elementRef.current.children : elementRef.current,
            fromVars,
            toVars
        );
    }, { scope: elementRef });

    return <div ref={elementRef} className={`w-full ${className}`}>{children}</div>;
}
