import { useContext, useEffect, useState } from "react";
import { GameContext } from "@/utils/context/provider";
import fetchGames from "@/services/fetchGames";
import { useSearchParams } from "next/navigation";
import { Game } from "../types";

const useGamesGrid = (initialGameList: Game[], hasMore: boolean) => {
  const { setIsLoading, isLoading } = useContext(GameContext);
  const [hasMoreGames, setHasMoreGames] = useState(hasMore);
  const [games, setGames] = useState<Game[]>(initialGameList);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "All";
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const response = await fetchGames(
        genre === "All" ? "" : genre,
        currentPage
      );
      setGames(response.games);
      setIsLoading(false);
      setCurrentPage(response.currentPage);
      setHasMoreGames(response.currentPage < response.totalPages);
    }
    fetchData();
  }, [searchParams, setIsLoading, currentPage, genre]);

  return { games, hasMoreGames, isLoading };
};

export default useGamesGrid;
