"use client";
// react and next
import { useRef } from "react";

// packages
import { gsap } from "gsap";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface RevealTextProps {
  id: string;
  text: string;
  className: string;
  staggerAmount?: number;
  as?: React.ElementType;
  duration: number;
  align?: "left" | "center" | "right";
}

const RevealText = ({
  id,
  className,
  text,
  duration = 0.8,
  align = "left",
  as: Component = "div",
  staggerAmount = 0.1,
}: RevealTextProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".reveal-text-word", {
          y: 0,
          stagger: 0,
          duration: duration,
          ease: "power3.out",
          opacity: 1,
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(".reveal-text-word", {
          y: 0,
          stagger: staggerAmount,
          opacity: 1,
          ease: "none",
          duration: duration,
        });
      });
    },
    { scope: componentRef },
  );

  const words = text.split(" ");

  return (
    <Component
      className={clsx(
        "reveal-text text-balance",
        align === "center" && "text-center",
        align === "left" && "text-start",
        align === "right" && "text-end",
        className,
      )}
      ref={componentRef}
    >
      {words.map((word, idx: number) => (
        <span
          key={`${word}-${idx}-${id}`}
          className="mb-0 inline-block overflow-hidden pb-4"
        >
          <span className="reveal-text-word mt-0 inline-block translate-y-[120%] will-change-transform">
            {word}
            {idx < words.length - 1 ? <>&nbsp;</> : null}
          </span>
        </span>
      ))}
    </Component>
  );
};

export default RevealText;
