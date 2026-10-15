import Image from 'next/image'
import BuyButton from '@/components/BuyButton';

type ShopItemProps = {
    name: string;
    image: string;
    price: number;
}

export default function ShopItem({
    name,
    image,
    price
}: ShopItemProps) {
    return (
       <div className="shop-item">
        <Image src={image} width={200} height={200} alt={name}/>
        <div>
            <h2>{name}</h2>
            <div className="flex flex-row justify-between">
                <p>${price.toFixed(2)}</p>
                <BuyButton />
            </div>
        </div>
       </div> 
    );
}
