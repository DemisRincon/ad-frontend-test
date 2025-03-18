import React, { useCallback, useContext, useEffect, useState } from "react";
import { GameContext } from "../context/provider";

const useGenreSelector = (genreList: string[], selectedGenre: string) => {
  const { isLoading } = useContext(GameContext);
  const [genre, setGenre] = useState("");
  const handleChangeGenre = useCallback((value: string) => {
    setGenre(value);
  }, []);
  useEffect(() => {
    if (genre === "" && selectedGenre) {
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

  return { genre, handleChange, isLoading };
};

export default useGenreSelector;
