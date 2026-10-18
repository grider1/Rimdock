type OrderProps = {
    id: string;
    address: string;
    name: string;
    amount: number;
}

export default function Order({ id, address, name, amount }: OrderProps) {
    return (
        <div className="order">
            <h2>Order ID: {id}</h2>
            <p>Customer Name: {name}</p>
            <p>Shipping Address: {address}</p>
            <p>Total Amount: ${amount.toFixed(2)}</p>
        </div>
    )
}