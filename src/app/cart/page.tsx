"use client";

import { useState, useEffect } from "react";
import { BackButton } from "@/components/back-button";
import { CartItem } from "@/components/cart-item";
import { OrderSummary } from "@/components/order-summary";
import { CartItemInterface } from "@/utils/types";
import { getCartItems, removeFromCart } from "@/services/cart";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItemInterface[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items);
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id: string) => {
    await removeFromCart(id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col w-full px-6 2xl:px-32">
      <div className="py-4">
        <BackButton
          href="/"
          label="Back to Catalog"
          aria-label="Back to Catalog"
        />
      </div>

      <h1 className="mb-3 mt-8 text-2xl font-bold font-archivo tracking-[0.025em] text-contentSecondary">
        Your Cart
      </h1>
      <p
        className="mb-8 text-contentSecondary font-archivo tracking-[0.025em]"
        data-testid="cart-item-count"
        aria-live="polite"
      >
        {cartItems.length} items
      </p>

      <div className="flex flex-col gap-20 justify-between lg:flex-row">
        <div className="flex flex-col gap-8 w-full">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                genre={item.genre}
                isNew={item.isNew}
                onRemove={handleRemoveItem}
              />
            ))
          ) : (
            <div
              className="flex justify-center items-center rounded-lg border p-8 text-center w-full lg:w-full h-[200px] bg-white"
              role="alert"
            >
              <p className="text-contentPrimary text-xl">Your cart is empty</p>
            </div>
          )}
        </div>

        <div>
          {cartItems.length > 0 && (
            <OrderSummary
              items={cartItems.map((item) => ({
                id: item.id,
                name: item.name,
                price: item.price,
              }))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
