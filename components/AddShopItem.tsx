"use client";

type AddShopItemProps = {
    name: string;
    image: string;
    price: number;
}

export default function AddShopItem({
    name,
    image,
    price
}: AddShopItemProps) {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = {
                    name: formData.get("name") as string,
                    image: formData.get("image") as string,
                    price: parseFloat(formData.get("price") as string),
                };
                console.log(data);
            }}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="image" placeholder="Image URL" required />
                <input type="number" name="price" placeholder="Price" step="0.01" required />
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}