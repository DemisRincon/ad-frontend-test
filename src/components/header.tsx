import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-10 border-b bg-fillSecondary h-[64px] max-h-16 flex items-center justify-between px-6 2xl:px-32"
      aria-label="Main Navigation"
    >
      <div className="container flex items-center justify-between">
        <h1 className="text-contentPrimary font-bold font-area">GamerShop</h1>
        <Link href="/cart" aria-label="View Cart">
          <Image
            src="/cart.svg"
            alt="Shopping Cart"
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
