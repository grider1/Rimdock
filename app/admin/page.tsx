import Order from "@/components/Order";

export default function Page() {
    return (
        <div>
            <h1> ADMIN </h1>
            <div className="order-view">
                <ul>
                    <Order id="1" address="123 Main St" name="John Doe" amount={100.00} />
                </ul>
            </div>
        </div>
    )
}