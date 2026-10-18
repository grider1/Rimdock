import Image from 'next/image'

type ItemProps = {
    name: string;
    image: string;
}

export default function Item({
    name,
    image,
}: ItemProps) {
    return (
       <div className="shop-item">
        <Image src={image} width={350} height={350} alt={name}/>
        <div>
            <h2>{name}</h2>
        </div>
       </div> 
    );
}
