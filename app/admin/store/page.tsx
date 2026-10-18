
import Order from "@/components/Order";
import AdminHeader from "@/components/AdminHeader";

export default function Page() {
    return (
        <div className="sub-page">
            <AdminHeader></AdminHeader>
            <div className="order-view">
                <ul>
                    <li><p>store item one</p></li>
                </ul>
            </div>
        </div>
    )
}

