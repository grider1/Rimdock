"use client";

function handleClick() {
    console.log("Buy button clicked!");
}

export default function BuyButton() {
    return (
        <button onClick={handleClick} className="buy-button">Buy Now</button>
    )
}