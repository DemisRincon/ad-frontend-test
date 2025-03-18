"use client";

import { useContext, useEffect, useState, useCallback } from "react";
import { GameContext } from "@/utils/context/provider";
import fetchGames from "@/services/fetchGames";
import { useSearchParams } from "next/navigation";
import type { Game } from "../types";

const useGamesGrid = (initialGameList: Game[], hasMore: boolean) => {
  const { setIsLoading, isLoading } = useContext(GameContext);
  const [hasMoreGames, setHasMoreGames] = useState(hasMore);
  const [games, setGames] = useState<Game[]>(initialGameList);
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "All";

  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? Number.parseInt(pageParam, 10) : 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchData = useCallback(
    async (page: number, shouldAppend = false) => {
      if (!shouldAppend) {
        setIsLoading(true);
      } else {
        setIsLoadingMore(true);
      }

      try {
        const response = await fetchGames(genre === "All" ? "" : genre, page);

        if (shouldAppend) {
          setGames((prevGames) => [...prevGames, ...response.games]);
        } else {
          setGames(response.games);
        }

        setCurrentPage(response.currentPage);
        setTotalPages(response.totalPages);
        setHasMoreGames(response.currentPage < response.totalPages);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        if (!shouldAppend) {
          setIsLoading(false);
        } else {
          setIsLoadingMore(false);
        }
      }
    },
    [genre, setIsLoading]
  );

  useEffect(() => {
    fetchData(initialPage, false);
  }, [searchParams, fetchData, initialPage]);

  const loadMoreGames = useCallback(() => {
    if (currentPage < totalPages && !isLoadingMore) {
      fetchData(currentPage + 1, true);
    }
  }, [currentPage, totalPages, fetchData, isLoadingMore]);

  return {
    games,
    hasMoreGames,
    isLoading,
    isLoadingMore,
    loadMoreGames,
    currentPage,
  };
};

export default useGamesGrid;
