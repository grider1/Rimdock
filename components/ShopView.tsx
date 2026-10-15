import type { product } from "@/app/lib/definitions.ts";
import ShopItem from "@/components/ShopItem";


type ShopViewProps = {
    items: product[];
}

export default function ShopView({ items }: ShopViewProps) {
    return (
        <div className="gap-1rem align-items-center">
            <div className="shop-view">
                {items.map((item, index) => (
                    <ShopItem
                        key={index}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}
