"use client";

// react and next
import { useRef } from "react";

// packages
import clsx from "clsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface FadeInProps {
  children: React.ReactNode;
  vars?: gsap.TweenVars;
  className?: string;
  start?: string;
}

const FadeIn = ({
  children,
  className,
  vars,
  start = "top 80%",
}: FadeInProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(containerRef.current, {
          duration: 5,
          opacity: "1",
          ease: "power3.out",
          y: 0,
          ...vars,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(containerRef.current, {
          duration: 0.5,
          opacity: "1",
          ease: "none",
          y: 0,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div className={clsx("opacity-0", className)} ref={containerRef}>
      {children}
    </div>
  );
};

export default FadeIn;
