import Image from "next/image";
import { product } from "./lib/definitions";
import ShopView from "@/components/ShopView";

const example_products: product[] = [
  {
    name: "Coffee and Eggs",
    price: 20.00,
    image: "/coffee_eggs_cover.jpg",
  },
  {
    name: "Coffee and Eggs",
    price: 20.00,
    image: "/coffee_eggs_cover.jpg",
  },
]; 

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Welcome to the Rimdock Website</h1>
      <ShopView
        items={
          example_products
        }
      />  
    </main>
  );
}
