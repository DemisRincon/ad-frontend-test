import { Game } from "@/utils/endpoint";
import { CartItemInterface } from "@/utils/types";

export const isItemInCart = (itemId: string): boolean => {
  const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
  return cart.some((item: { id: string }) => item.id === itemId);
};

export const addToCart = (newItem: Game): void => {
  const cartKey = "cartItems";
  const existingCart = localStorage.getItem(cartKey);

  let cart: CartItemInterface[] = [];

  if (existingCart) {
    cart = JSON.parse(existingCart);
  }

  const existingItemIndex = cart.findIndex((item) => item.id === newItem.id);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    const cartItem: CartItemInterface = { ...newItem, quantity: 1 };
    cart.push(cartItem);
  }

  localStorage.setItem(cartKey, JSON.stringify(cart));
};

export const removeFromCart = (itemId: string): void => {
  const cartKey = "cartItems";
  const existingCart = localStorage.getItem(cartKey);

  if (existingCart) {
    const cart = JSON.parse(existingCart);
    const updatedCart = cart.filter(
      (item: { id: string }) => item.id !== itemId
    );
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
  }
};

export const getCartItems = (): CartItemInterface[] => {
  const cartKey = "cartItems";
  const existingCart = localStorage.getItem(cartKey);

  if (existingCart) {
    return JSON.parse(existingCart);
  }

  return [];
};
