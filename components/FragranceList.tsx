import React from "react";

// components
import { Bounded } from "@/components/Bounded";
import RevealText from "@/components/RevealText";
import FragranceDisplay from "@/components/FragranceDisplay";
import { products } from "@/constants";

const FragranceList = () => {
  return (
    <Bounded className={"space-y-8 bg-black py-16 text-center md:py-24"}>
      <div className={"mx-auto space-y-8"}>
        <p className={"text-sm font-light tracking-[0.2em] uppercase"}>
          Our Fragrances
        </p>
        <RevealText
          id={"fragrance-list-heading"}
          text={"An Essence for Every Man"}
          className={
            "font-display text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
          }
          duration={1.5}
          align={"center"}
          as={"h2"}
          staggerAmount={0.3}
        />
        <p className={"mx-auto max-w-2xl text-lg text-balance text-gray-300"}>
          An expression of quiet luxury. Cote Royal is designed for the man who
          commands attention without seeking it.
        </p>

        <div className={"mt-12 grid grid-cols-1 gap-12"}>
          {products.map((product) => (
            <FragranceDisplay key={product.id} />
          ))}
        </div>
      </div>
    </Bounded>
  );
};
export default FragranceList;
