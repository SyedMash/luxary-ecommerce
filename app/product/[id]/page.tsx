import React from "react";
import { Bounded } from "@/components/Bounded";
import { products } from "@/constants";
import { Product } from "@/type";
import Image from "next/image";
import { HiStar } from "react-icons/hi2";

interface IProductPageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: IProductPageProps) => {
  const { id: name } = await params;
  const filteredProduct: Product[] = products.filter(
    (product) => product.name === name,
  );

  const { name: productName, description, productImage } = filteredProduct[0];

  return (
    <Bounded className="min-h-screen py-10">
      <div className="grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">
        <div className="relative mb-14 flex justify-center pb-10">
          <Image
            src={productImage}
            width={600}
            height={600}
            priority
            alt={name}
            className="absolute top-[90%] -scale-y-100 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,.15)_100%)]"
          />
          <Image
            src={productImage}
            width={600}
            height={600}
            priority
            alt={name}
            className="relative"
          />
        </div>

        <div className="text-white">
          <h1 className="font-display mb-4 border-b border-neutral-700 pb-2 text-4xl md:text-5xl">
            {productName}
          </h1>

          <div className="space-y-6">
            <p className="text-md font-semibold">Eau de Parfum Spray</p>
            {description}
            <p className="mt-10 text-3xl font-light">$110</p>
            <button className="w-full bg-white py-3 font-medium text-black uppercase transition duration-200 hover:bg-neutral-200">
              Add to Bag
            </button>
            <div className="flex items-center gap-4 border-t border-neutral-700 pt-6">
              <a href="#" className="hover:text-neutral-300">
                763 total reviews
              </a>
              <div className="flex">
                {[...Array(4)].map((_, index) => (
                  <HiStar className="size-5 text-white" key={index} />
                ))}
                <HiStar className="size-5 text-white/50" />
              </div>
              <span>4.4/5</span>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};
export default Page;
