import React, { useCallback, useContext, useEffect, useState } from "react";
import { GameContext } from "../context/provider";
import { useSearchParams } from "next/navigation";

const useGenreSelector = (genreList: string[]) => {
  const { isLoading } = useContext(GameContext);
  const [genre, setGenre] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchParamGenre = searchParams.get("genre") || "";
    const newGenre = genreList.find(
      (item) => item.toLowerCase() === searchParamGenre.toLowerCase()
    );
    console.log(newGenre);
    console.log(genre);
    setGenre(newGenre || "All");
  }, [searchParams, genreList, genre]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newGenre = e.target.value;
      setGenre(newGenre);
      let newUrl = new URL(window.location.href);
      if (newGenre.toLowerCase() === "all") {
        newUrl.searchParams.delete("genre");
      } else {
        newUrl.searchParams.set("genre", newGenre.toLowerCase());
      }
      window.history.pushState(null, "", newUrl.toString());
    },
    []
  );

  return { genre, handleChange, isLoading };
};

export default useGenreSelector;
