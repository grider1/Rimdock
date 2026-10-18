export default function AdminHeader() {
    return(
        <div className="adminheader">
            <ul className="header-nav">
                <li><a href="/admin/orders">orders</a></li>
                <li><a href="/admin/site">site</a></li>
                <li><a href="/admin/store">store</a></li>
            </ul>
        </div>
    )
}