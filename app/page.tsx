// react and next
import Image from "next/image";
import Link from "next/link";

// packages
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import { Bounded } from "@/components/Bounded";
import FadeIn from "@/components/FadeIn";
import RevealText from "@/components/RevealText";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <Bounded className={"relative min-h-screen overflow-hidden bg-neutral-950"}>
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
  );
}
