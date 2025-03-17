import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/components/header";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render the header with the title 'GamerShop'", () => {
    const titleElement = screen.getByText(/GamerShop/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the cart image with correct src attribute", () => {
    const cartImage = screen.getByAltText("Shopping Cart");
    expect(cartImage).toHaveAttribute("src", "/cart.svg");
  });
});
