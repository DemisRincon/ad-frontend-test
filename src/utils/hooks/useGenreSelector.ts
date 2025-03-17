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
    const newUrl = `?genre=${newGenre.toLowerCase()}`;
    window.history.pushState(null, "", newUrl);
  };

  return { genre, handleChange };
};

export default useGenreSelector;
