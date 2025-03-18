import {
  isItemInCart,
  addToCart,
  removeFromCart,
  getCartItems,
} from "@/services/cart";
import { Game } from "@/utils/endpoint";
import { CartItemInterface } from "@/utils/types";

describe("Cart Service", () => {
  const itemId = "1";
  const newItem: Game = {
    id: itemId,
    name: "Game 1",
    genre: "Action",
    image: "image_url",
    description: "Game description",
    price: 59.99,
    isNew: true,
  };

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe("isItemInCart", () => {
    it("should return true if item is in cart", () => {
      localStorage.setItem("cartItems", JSON.stringify([{ id: itemId }]));
      expect(isItemInCart(itemId)).toBe(true);
    });

    it("should return false if item is not in cart", () => {
      localStorage.setItem("cartItems", JSON.stringify([{ id: "2" }]));
      expect(isItemInCart(itemId)).toBe(false);
    });
  });

  describe("addToCart", () => {
    it("should add a new item to the cart", () => {
      addToCart(newItem);
      const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      expect(cart).toHaveLength(1);
      expect(cart[0].id).toBe(newItem.id);
    });

    it("should increase the quantity if the item already exists in the cart", () => {
      addToCart(newItem);
      addToCart(newItem);
      const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      expect(cart).toHaveLength(1);
      expect(cart[0].quantity).toBe(2);
    });
  });

  describe("removeFromCart", () => {
    it("should remove an item from the cart", () => {
      localStorage.setItem("cartItems", JSON.stringify([{ id: itemId }]));
      removeFromCart(itemId);
      const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      expect(cart).toHaveLength(0);
    });

    it("should not remove any item if the item is not in the cart", () => {
      localStorage.setItem("cartItems", JSON.stringify([{ id: "2" }]));
      removeFromCart(itemId);
      const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      expect(cart).toHaveLength(1);
    });
  });

  describe("getCartItems", () => {
    it("should return all items in the cart", () => {
      const cartItems: CartItemInterface[] = [
        {
          id: itemId,
          name: "Game 1",
          quantity: 1,
          genre: "Action",
          image: "image_url",
          description: "Game description",
          price: 59.99,
          isNew: true,
        },
      ];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      const items = getCartItems();
      expect(items).toHaveLength(1);
      expect(items[0].id).toBe(itemId);
    });

    it("should return an empty array if there are no items in the cart", () => {
      const items = getCartItems();
      expect(items).toHaveLength(0);
    });
  });
});
