import Image from "next/image";
import { product } from "./lib/definitions";
import ShopView from "@/components/ShopView";

const example_products: product[] = [
  {
    name: "Coffee and Eggs",
    price: 20.00,
    image: "/coffee_eggs.jpg",
  },
  {
    name: "Moondog",
    price: 20.00,
    image: "/moondog.jpg",
  },
]; 

export default function Home() {
  return (
      <ShopView
        items={
          example_products
        }
      />  
  );
}
