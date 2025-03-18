import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GamesGrid from "@/components/games-grid";
import useGamesGrid from "@/utils/hooks/useGamesGrid";
import type { Game } from "@/utils/types";
import "@testing-library/jest-dom";

jest.mock("../src/utils/hooks/useGamesGrid");

const mockUseGamesGrid = useGamesGrid as jest.MockedFunction<
  typeof useGamesGrid
>;

const mockGames: Game[] = [
  {
    id: "1",
    genre: "Action",
    image: "/game1.jpg",
    name: "Game 1",
    description: "An action-packed adventure game.",
    price: 59.99,
    isNew: true,
  },
  {
    id: "2",
    genre: "Adventure",
    image: "/game2.jpg",
    name: "Game 2",
    description: "An exciting adventure game.",
    price: 59.99,
    isNew: false,
  },
];

describe("GamesGrid Component", () => {
  const defaultMockReturnValue = {
    games: mockGames,
    hasMoreGames: true,
    isLoading: false,
    isLoadingMore: false,
    loadMoreGames: jest.fn(),
    currentPage: 1,
  };

  beforeEach(() => {
    mockUseGamesGrid.mockReturnValue(defaultMockReturnValue);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the loading spinner when isLoading is true", () => {
    mockUseGamesGrid.mockReturnValueOnce({
      ...defaultMockReturnValue,
      games: [],
      isLoading: true,
    });

    render(<GamesGrid initialGameList={[]} hasMore={false} />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders the game cards", () => {
    render(<GamesGrid initialGameList={mockGames} hasMore={true} />);
    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
  });

  it("renders 'No games found' when there are no games", () => {
    mockUseGamesGrid.mockReturnValueOnce({
      ...defaultMockReturnValue,
      games: [],
      hasMoreGames: false,
    });

    render(<GamesGrid initialGameList={[]} hasMore={false} />);
    expect(screen.getByText("No games found")).toBeInTheDocument();
  });

  it("renders the 'See More' button when there are more games to load", () => {
    render(<GamesGrid initialGameList={mockGames} hasMore={true} />);
    expect(
      screen.getByRole("button", { name: /Load more games/i })
    ).toBeInTheDocument();
  });

  it("calls loadMoreGames when 'See More' button is clicked", () => {
    const loadMoreGamesMock = jest.fn();
    mockUseGamesGrid.mockReturnValueOnce({
      ...defaultMockReturnValue,
      loadMoreGames: loadMoreGamesMock,
    });

    render(<GamesGrid initialGameList={mockGames} hasMore={true} />);
    fireEvent.click(screen.getByText("See More", { selector: "button" }));
    expect(loadMoreGamesMock).toHaveBeenCalled();
  });

  it("disables the 'See More' button when isLoadingMore is true", () => {
    mockUseGamesGrid.mockReturnValueOnce({
      ...defaultMockReturnValue,
      isLoadingMore: true,
    });

    render(<GamesGrid initialGameList={mockGames} hasMore={true} />);
    expect(screen.getByText("Loading...")).toBeDisabled();
  });
});
