"use client";

import { useState } from "react";
import { BackButton } from "@/components/back-button";
import { CartItem } from "@/components/cart-item";
import { OrderSummary } from "@/components/order-summary";
import { CartItemInterface } from "@/utils/types";

const mockData: CartItemInterface[] = [
  {
    id: "1",
    genre: "Action",
    image: "/game-images/cyberpunk2077.jpeg",
    name: "Cyberpunk 2077",
    description: "An open-world, action-adventure story set in Night City.",
    price: 59.99,
    isNew: true,
    quantity: 1,
  },
  {
    id: "2",
    genre: "RPG",
    image: "/game-images/thewitcher3.jpeg",
    name: "The Witcher 3: Wild Hunt",
    description:
      "A story-driven, next-generation open world role-playing game.",
    price: 39.99,
    isNew: false,
    quantity: 2,
  },
  {
    id: "3",
    genre: "Adventure",
    image: "/game-images/zeldabotw.jpeg",
    name: "The Legend of Zelda: Breath of the Wild",
    description:
      "An epic adventure that breaks boundaries in the Zelda series.",
    price: 59.99,
    isNew: true,
    quantity: 3,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItemInterface[]>(mockData);

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col w-full px-6 2xl:px-32">
      <div className="py-4">
        <BackButton href="/" label="Back to Catalog" />
      </div>

      <h1 className="mb-3 mt-8 text-2xl font-bold  font-archivo tracking-[0.025em] text-contentSecondary">
        Your Cart
      </h1>
      <p className="mb-8 text-contentSecondary font-archivo tracking-[0.025em]">
        {cartItems.length} items
      </p>

      <div className="flex flex-col gap-20 justify-between lg:flex-row">
        <div className="lg:col-span-2">
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
                onRemove={handleRemoveItem}
              />
            ))
          ) : (
            <div className="rounded-lg border p-8 text-center">
              <p className="text-gray-500">Your cart is empty</p>
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
