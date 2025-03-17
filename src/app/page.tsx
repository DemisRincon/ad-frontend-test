import GamesGrid from "@/components/games-grid";
import GenreSelector from "@/components/genre-selector";
import fetchGames from "@/services/fetchGames";
import React from "react";

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const selectedGenre =
    typeof searchParams.genre === "string" ? searchParams.genre : "";
  const page =
    typeof searchParams.page === "string"
      ? Number.parseInt(searchParams.page)
      : 1;

  const { availableFilters, games, totalPages, currentPage } = await fetchGames(
    selectedGenre,
    page
  );
  const hasMore = currentPage < totalPages;
  return (
    <>
      <section className="border-b border-fillPrimary">
        <GenreSelector
          genreList={["All", ...availableFilters]}
          selectedGenre={selectedGenre}
        />
      </section>
      <section>
        <GamesGrid initialGameList={games} hasMore={hasMore} />
      </section>
    </>
  );
};

export default Home;
