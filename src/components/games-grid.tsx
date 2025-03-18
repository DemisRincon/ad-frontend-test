"use client";
import type React from "react";
import GameCard from "./game-card";
import type { Game } from "@/utils/types";
import LoadingSpinner from "./loading-spinner";
import useGamesGrid from "@/utils/hooks/useGamesGrid";

interface GamesGridProps {
  initialGameList: Game[];
  hasMore: boolean;
}

const GamesGrid: React.FC<GamesGridProps> = ({ initialGameList, hasMore }) => {
  const { games, hasMoreGames, isLoading, isLoadingMore, loadMoreGames } =
    useGamesGrid(initialGameList, hasMore);

  if (isLoading) {
    return <LoadingSpinner size="lg" />;
  }

  return (
    <div className="flex w-full py-9 px-6 2xl:py-12 2xl:px-32">
      <div className="w-full h-full flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 2xl:gap-16 w-full place-content-center">
          {games.map((game: Game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        {games.length === 0 && (
          <div className="mt-8 text-center font-archivo text-contentSecondary font-bold text-2xl">
            <p>No games found</p>
          </div>
        )}

        {hasMoreGames && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-contentPrimary rounded-lg font-archivo text-base h-[48px] w-[327px] text-white px-6 py-2 uppercase font-medium hover:bg-contentSecondary transition-colors"
              aria-label="Load more games"
              role="button"
              onClick={loadMoreGames}
              disabled={isLoadingMore}
            >
              {isLoadingMore ? "Loading..." : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesGrid;
