import { render, screen, fireEvent } from "@testing-library/react";
import GenreSelector from "@/components/genre-selector";
import MyContextProvider from "@/utils/context/provider";
import "@testing-library/jest-dom";
import { useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

jest.mock("../src/utils/hooks/useGenreSelector.ts", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    genre: "All",
    handleChange: jest.fn(),
    isLoading: false,
  }),
}));

describe("GenreSelector", () => {
  const genreList = ["All", "Action", "Adventure", "RPG"];

  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  const renderWithContext = (ui: React.ReactElement) => {
    return render(<MyContextProvider>{ui}</MyContextProvider>);
  };

  it("renders correctly with given props", () => {
    renderWithContext(<GenreSelector genreList={genreList} />);
    expect(screen.getByText("TOP SELLERS")).toBeInTheDocument();
    expect(screen.getByLabelText("Filter games by genre")).toBeInTheDocument();
  });

  it("renders genre list correctly", () => {
    renderWithContext(<GenreSelector genreList={genreList} />);
    genreList.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it("disables the select element when loading", () => {
    (
      require("../src/utils/hooks/useGenreSelector.ts").default as jest.Mock
    ).mockReturnValue({
      genre: "All",
      handleChange: jest.fn(),
      isLoading: true,
    });

    renderWithContext(<GenreSelector genreList={genreList} />);
    expect(screen.getByLabelText("Filter games by genre")).toBeDisabled();
  });

  it("enables the select element when not loading", () => {
    (
      require("../src/utils/hooks/useGenreSelector.ts").default as jest.Mock
    ).mockReturnValue({
      genre: "All",
      handleChange: jest.fn(),
    });

    renderWithContext(<GenreSelector genreList={genreList} />);
    expect(screen.getByLabelText("Filter games by genre")).not.toBeDisabled();
  });

  it("calls handleChange when select value changes", () => {
    const handleChange = jest.fn();
    (
      require("../src/utils/hooks/useGenreSelector.ts").default as jest.Mock
    ).mockReturnValue({
      genre: "All",
      handleChange,
    });

    renderWithContext(<GenreSelector genreList={genreList} />);
    const select = screen.getByLabelText(
      "Filter games by genre"
    ) as HTMLSelectElement;
    select.value = "Action";
    fireEvent.change(select, { target: { value: "Action" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
