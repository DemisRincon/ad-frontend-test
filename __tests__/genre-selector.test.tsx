import { render, screen, fireEvent } from "@testing-library/react";
import GenreSelector from "@/components/genre-selector";
import MyContextProvider from "@/utils/context/provider";
import "@testing-library/jest-dom";

describe("GenreSelector", () => {
  const genreList = ["All", "Action", "Adventure", "RPG"];
  const selectedGenre = "All";

  const renderWithContext = (ui: React.ReactElement) => {
    return render(<MyContextProvider>{ui}</MyContextProvider>);
  };

  it("renders correctly with given props", () => {
    renderWithContext(
      <GenreSelector genreList={genreList} selectedGenre={selectedGenre} />
    );
    expect(screen.getByText("TOP SELLERS")).toBeInTheDocument();
    expect(screen.getByLabelText("Filter games by genre")).toBeInTheDocument();
  });

  it("displays the correct genre title", () => {
    renderWithContext(
      <GenreSelector genreList={genreList} selectedGenre="Action" />
    );
    expect(screen.getByText("Action GAMES")).toBeInTheDocument();
  });

  it("calls handleChange when a new genre is selected", () => {
    renderWithContext(
      <GenreSelector genreList={genreList} selectedGenre={selectedGenre} />
    );
    const select = screen.getByLabelText(
      "Filter games by genre"
    ) as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "RPG" } });
    expect(select.value).toBe("RPG");
  });
});
