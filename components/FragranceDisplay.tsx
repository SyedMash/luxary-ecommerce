// react and next
import Image from "next/image";

// types and constants
import { products } from "@/constants";

// components
import ButtonLink from "@/components/ButtonLink";
import FadeIn from "@/components/FadeIn";
import TransitionLink from "@/components/TransitionLink";

interface FragranceDisplayProps {
  id: number;
}

const FragranceDisplay = ({ id }: FragranceDisplayProps) => {
  const fragrance = products.find((product) => product.id === id)!;
  const { name, featureImage, description } = fragrance;

  return (
    <FadeIn
      className={
        "relative z-10 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
      }
    >
      <div className={"absolute inset-0 z-0"}>
        <Image
          src={featureImage}
          alt={name}
          fill={true}
          className={"object-cover opacity-40 md:opacity-100"}
          quality={90}
        />
      </div>
      <FadeIn className={"relative z-10 grid translate-y-8"}>
        <h3 className={"font-display mb-3 text-5xl md:text-6xl lg:text-7xl"}>
          {name}
        </h3>
        <p className={"mb-8 text-base font-semibold text-gray-300"}>
          Eu de Parfum
        </p>
        <p className={"mb-10 max-w-md text-lg text-gray-300"}>{description}</p>

        <div className={"flex flex-wrap gap-4"}>
          <TransitionLink href={`/product/${name}`}>Discover</TransitionLink>
          <ButtonLink href={`/`} content={"Add To Bag"} />
        </div>
      </FadeIn>
    </FadeIn>
  );
};
export default FragranceDisplay;
