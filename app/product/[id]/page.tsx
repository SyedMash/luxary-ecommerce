import React from "react";
import { Bounded } from "@/components/Bounded";
import { products } from "@/constants";
import { Product } from "@/type";

interface IProductPageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: IProductPageProps) => {
  const { id: name } = await params;
  const filteredProduct: Product[] = products.filter(
    (product) => product.name === name,
  );

  return (
    <Bounded className={"h-screen overflow-hidden"}>
      {filteredProduct[0].description}
    </Bounded>
  );
};
export default Page;
