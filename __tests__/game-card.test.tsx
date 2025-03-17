import React from "react";
import { render, screen } from "@testing-library/react";
import GameCard from "@/components/game-card";
import "@testing-library/jest-dom";

const mockGame = {
  id: "1",
  name: "Test Game",
  image: "/test-image.jpg",
  description: "This is a test game description.",
  isNew: true,
  genre: "Action",
  price: 59.99,
};

describe("GameCard Component", () => {
  it("should render game details correctly", () => {
    render(<GameCard game={mockGame} />);

    const gameTitle = screen.getAllByTitle(mockGame.name)[0];
    const gameImage = screen.getByAltText(`Cover image of ${mockGame.name}`);
    const gameGenre = screen.getByTitle(mockGame.genre);
    const gamePrice = screen.getByTitle(`Price: $${mockGame.price}`);
    const addToCartButton = screen.getByLabelText(
      `Add ${mockGame.name} to cart`
    );

    expect(gameTitle).toBeInTheDocument();
    expect(gameImage).toBeInTheDocument();
    expect(gameGenre).toBeInTheDocument();
    expect(gamePrice).toBeInTheDocument();
    expect(addToCartButton).toBeInTheDocument();
  });

  it("should display 'New' badge if the game is new", () => {
    render(<GameCard game={mockGame} />);
    const newBadge = screen.getByLabelText("New");
    expect(newBadge).toBeInTheDocument();
  });

  it("should not display 'New' badge if the game is not new", () => {
    const nonNewGame = { ...mockGame, isNew: false };
    render(<GameCard game={nonNewGame} />);
    const newBadge = screen.queryByLabelText("New");
    expect(newBadge).not.toBeInTheDocument();
  });
});
