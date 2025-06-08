"use client";

// react and next
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// packages
import clsx from "clsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import { Bounded } from "@/components/Bounded";
import FadeIn from "@/components/FadeIn";
import RevealText from "@/components/RevealText";
import FeaturedProduct from "@/components/FeaturedProduct";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const words =
    `Cote Royal is designed for the man who commands, attention without seeking it`.split(
      " ",
    );

  useGSAP(
    () => {
      const component = componentRef.current;
      const textElement = textRef.current;
      const contentElement = contentRef.current;
      const letters = textElement?.querySelectorAll("span");

      if (!component || !textElement || !letters || !contentElement) return;

      //   set initial blur and color
      gsap.set(contentElement, { filter: "blur(40px)" });
      gsap.set(letters, { color: "hsl(220, 9%, 20%)" });

      gsap.to(contentElement, {
        filter: "blur(0px)",
        duration: 1,
        scrollTrigger: {
          trigger: component,
          start: "top 75%",
          end: "top top",
          scrub: 2,
        },
      });

      const colorTl = gsap.timeline({
        scrollTrigger: {
          trigger: component,
          start: "top top",
          end: "bottom -100%",
          pin: true,
          scrub: true,
        },
      });

      colorTl
        .to(
          letters,
          {
            color: "white",
            stagger: {
              each: 0.01,
              from: "start",
              ease: "power1.inOut",
            },
          },
          "",
        )
        .to(
          ".glow-background",
          {
            opacity: 1,
            ease: "power2.out",
          },
          "",
        );
    },
    { scope: componentRef },
  );

  return (
    <>
      <Bounded
        className={"relative min-h-screen overflow-hidden bg-neutral-950"}
      >
        <FadeIn
          className={"absolute inset-0 motion-safe:scale-125"}
          vars={{ scale: 1, opacity: "25%" }}
        >
          <Image
            src={"/images/pexels-cottonbro-9374661.jpg"}
            alt={"hero-image"}
            className={"object-cover motion-reduce:opacity-50"}
            priority={true}
            fill={true}
          />
        </FadeIn>
        <div className={"relative flex h-screen flex-col justify-center"}>
          <RevealText
            className={
              "font-display max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl"
            }
            id={"hero-title"}
            text={"Effortless Elegance"}
            duration={1.7}
            staggerAmount={0.2}
            as={"h1"}
          />
          <FadeIn
            className="mt-6 max-w-md translate-y-8"
            vars={{ delay: 1, duration: 1.3 }}
          >
            <p className={"text-lg text-neutral-100"}>
              An expression of quiet luxury. Cote Royal is designed for the man
              who commands attention without seeking it. A reflection of
              natures&apos;s raw beauty
            </p>
          </FadeIn>
          <FadeIn
            className="mt-8 translate-y-5"
            vars={{ delay: 1.7, duration: 1.1 }}
          >
            <Link
              href={"/"}
              className={clsx(
                "inline-flex w-fit items-center justify-center border border-white px-12 py-4 text-center font-extrabold tracking-wider text-white uppercase transition-colors duration-300 hover:bg-white/20",
              )}
            >
              Shop Now
            </Link>
          </FadeIn>
        </div>
      </Bounded>

      <Bounded
        className={"relative flex h-screen items-center justify-center"}
        ref={componentRef}
      >
        <div
          className={"glow-background absolute inset-0 z-0 size-full opacity-0"}
        />
        {/*<div*/}
        {/*  className={*/}
        {/*    "absolute inset-0 size-full bg-[url('/backgrounds/noisetexture.jpg')] opacity-30 mix-blend-multiply"*/}
        {/*  }*/}
        {/*/>*/}
        <div ref={contentRef}>
          <h1
            className={
              "mb-2 text-center text-sm tracking-wider text-neutral-200 uppercase md:mb-8 md:text-base"
            }
          >
            Define Luxury
          </h1>
          <div className={"text-center"} ref={textRef}>
            <p
              className={
                "font-display flex flex-wrap justify-center text-5xl leading-tight text-balance uppercase md:text-7xl"
              }
            >
              {words.map((word, idx: number) => (
                <span key={`${word}-${idx}`}>
                  {word.split("").map((char, charIndex: number) => (
                    <span key={`${char}-${charIndex}`}>{char}</span>
                  ))}
                  {idx < words.length - 1 ? <span>&nbsp;</span> : null}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Bounded>

      <FeaturedProduct />
    </>
  );
}
