import Image from "next/image";

//components
import FadeIn from "@/components/FadeIn";
import ButtonLink from "@/components/ButtonLink";
import { Bounded } from "@/components/Bounded";
import TransitionLink from "@/components/TransitionLink";

const FeaturedProduct = () => {
  return (
    <Bounded className={"min-h-screen overflow-hidden bg-black py-16 md:py-24"}>
      <div
        className={
          "grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:grid-rows-[auto,auto]"
        }
      >
        <FadeIn
          className={"translate-y-16 opacity-0 lg:col-span-2 lg:row-span-2"}
          vars={{
            duration: 1,
          }}
          start={"top 80%"}
        >
          <Image
            src={"/images/grid-picture.jpg"}
            alt={"couple"}
            height={1000}
            width={1000}
            className={"h-auto w-full object-cover"}
          />
        </FadeIn>
        <FadeIn
          className={
            "translate-y-16 space-y-6 self-start bg-white/10 p-10 lg:col-start-3 lg:row-start-1"
          }
        >
          <h1 className={"text-3xl leading-tight font-semibold md:text-4xl"}>
            Powerful Simplicity.
          </h1>
          <p className={"max-w-lg text-base text-gray-300"}>
            An expression of quiet luxury. Cote Royal is designed for the man
            who commands attention without seeking it. A reflection of
            nature&apos;s raw beauty, redefined for today
          </p>
        </FadeIn>
        <FadeIn
          className={"animate-in relative translate-y-16 self-end bg-white/10"}
          vars={{ duration: 1, delay: 1 }}
        >
          <Image
            src={"/images/ignis-bottle.png"}
            alt={"ignis"}
            height={300}
            width={300}
            className={"mx-auto -mt-10 -rotate-12 object-cover md:-mt-20"}
          />
          <div className={"flex justify-between p-10 pt-4"}>
            <div className={"space-y-1"}>
              <h3 className={"font-display text-4xl"}>Ignis</h3>
              <p className={"mt-2 text-gray-400"}>Eau de Parfum</p>
              <TransitionLink href={"/product/ignis"} className={"mt-6"}>
                Buy Now
              </TransitionLink>
            </div>
            <p className={"mt-4 text-gray-100"} aria-label={"Product price"}>
              $11000
            </p>
          </div>
        </FadeIn>
      </div>
    </Bounded>
  );
};
export default FeaturedProduct;
