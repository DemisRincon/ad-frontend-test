import React, { useContext, useEffect } from "react";
import { GameContext } from "../context/provider";

const useGenreSelector = (genreList: string[], selectedGenre: string) => {
  const { genre, handleChangeGenre } = useContext(GameContext);

  useEffect(() => {
    if (genre === "All" && selectedGenre) {
      const matchedGenre = genreList.find(
        (item) => item.toLowerCase() === selectedGenre.toLowerCase()
      );

      if (matchedGenre) {
        handleChangeGenre(matchedGenre);
      }
    }
  }, [selectedGenre, genreList, handleChangeGenre, genre]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newGenre = e.target.value;
    handleChangeGenre(newGenre);

    let newUrl = new URL(window.location.href);
    if (newGenre.toLowerCase() === "all") {
      newUrl.searchParams.delete("genre");
    } else {
      newUrl.searchParams.set("genre", newGenre.toLowerCase());
    }
    window.history.pushState(null, "", newUrl.toString());
  };

  return { genre, handleChange };
};

export default useGenreSelector;
