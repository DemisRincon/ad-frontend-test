import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CartPage from "@/app/cart/page";
import { getCartItems, removeFromCart } from "@/services/cart";
import "@testing-library/jest-dom";

jest.mock("../../src/services/cart");

const mockCartItems = [
  {
    id: "1",
    name: "Game 1",
    description: "Description 1",
    price: 10,
    image: "/game1.jpg",
    genre: "Action",
  },
  {
    id: "2",
    name: "Game 2",
    description: "Description 2",
    price: 20,
    image: "/game2.jpg",
    genre: "Adventure",
  },
];

describe("CartPage Component", () => {
  beforeEach(() => {
    (getCartItems as jest.Mock).mockResolvedValue(mockCartItems);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the cart page with items", async () => {
    render(<CartPage />);
    const cartTitle = await screen.findByTestId("cart-item-count");
    expect(cartTitle).toBeInTheDocument();

    const cartItems = (
      await screen.findAllByRole("heading", { level: 3 })
    ).filter(
      (item) =>
        item.classList.contains("text-lg") &&
        item.classList.contains("font-bold") &&
        item.classList.contains("text-contentSecondary")
    );
    expect(cartItems).toHaveLength(2);
  });

  it("should display the correct number of items", async () => {
    render(<CartPage />);
    const cartTitle = await screen.findByTestId("cart-item-count");
    expect(cartTitle).toBeInTheDocument();
  });

  it("should display 'Your cart is empty' when there are no items", async () => {
    (getCartItems as jest.Mock).mockResolvedValueOnce([]);
    render(<CartPage />);

    const emptyMessage = await screen.findByText(/Your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  it("should remove an item from the cart", async () => {
    render(<CartPage />);
    const removeButton = await screen.findAllByRole("button");
    fireEvent.click(removeButton[0]);

    await waitFor(() => {
      expect(removeFromCart).toHaveBeenCalledWith("1");
    });

    const updatedItems = await screen.findAllByText(/Game/i);
    expect(updatedItems).toHaveLength(2);
  });
});
