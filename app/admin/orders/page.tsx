import Order from "@/components/Order";
import AdminHeader from "@/components/AdminHeader";

export default function Page() {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="order-view">
                <ul>
                    <Order id="1" address="123 Main St" name="John Doe" amount={100.00} />
                </ul>
            </div>
        </div>
    )
}