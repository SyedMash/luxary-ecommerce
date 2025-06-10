import { Product } from "@/type";

export const products: Product[] = [
  {
    id: 1,
    name: "ignis",
    description:
      "Forged in fire, Ignis is a bold statement of power and poise. Smoldering spices and rich woods create an intense, magnetic presence. For the man whose quiet confidence speaks volumes, this fragrance captures fire’s raw allure—uncompromising and unforgettable.\n" +
      "\n",
    featureImage: "/images/ignis-ad.png",
    productImage: "/images/ignis-bottle.png",
  },
  {
    id: 2,
    name: "Terra",
    description:
      "Rooted in strength, Terra is a tribute to nature’s quiet power. Deep woods and herbal notes evoke the scent of earth after rain—calm, grounded, and refined. For the man who commands attention without effort, Terra embodies the beauty of balance.",
    featureImage: "/images/terra-ad.png",
    productImage: "/images/terra-bottle.png",
  },
  {
    id: 3,
    name: "Aqua",
    description:
      "Cool and invigorating, Aqua channels the untamed spirit of the ocean. Crisp aquatic notes flow over mineral woods, capturing the mystery of open water. As refreshing as a sea breeze yet as commanding as the tide, Aqua is for the man who moves with quiet strength.\n" +
      "\n",
    featureImage: "/images/aqua-ad.png",
    productImage: "/images/aqua-bottle.png",
  },
];

export const scentProfiles = ["spicy", "woody", "fresh"];
