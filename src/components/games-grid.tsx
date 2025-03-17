"use client";
import React, { useState } from "react";
import GameCard from "./game-card";
import { Game } from "@/utils/types";

interface GamesGridProps {
  initialGameList: Game[];
  hasMore: boolean;
}

const GamesGrid: React.FC<GamesGridProps> = ({ initialGameList, hasMore }) => {
  const [games, setGames] = useState<Game[]>(initialGameList);
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex w-full py-9 px-6 2xl:py-12 2xl:px-32">
      <div className="w-full h-full flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 2xl:gap-16 w-full place-content-center">
          {games.map((game: Game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        {games.length === 0 && !loading && (
          <div className="mt-8 text-center font-archivo text-contentSecondary font-bold text-2xl">
            <p>No games found</p>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <button
            disabled={loading}
            className="bg-contentPrimary rounded-lg font-archivo text-base h-[48px] w-[327px] text-white px-6 py-2 uppercase font-medium hover:bg-contentSecondary transition-colors"
            aria-label="Load more games"
          >
            {loading ? "Loading..." : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamesGrid;
