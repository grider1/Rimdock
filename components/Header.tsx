"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white">
      <h1 className="title">ridge murdock</h1>
    <header>
      <ul className="header-nav">
        <li><a href="/">work</a></li>
        <li><a href="/info">info</a></li>
        <li><a href="/store">store</a></li>
      </ul>
      <Link href="/cart">
        <Image src="/cart.jpg" width={60} height={60} alt="Cart Button"/>
      </Link>
    </header> 
    </div>
  );
}