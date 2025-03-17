"use client";

import React, { FC } from "react";

interface GenreSelectorProps {
  genreList: string[];
  selectedGenre: string;
}
const GenreSelector: FC<GenreSelectorProps> = ({
  genreList,
  selectedGenre = "All",
}) => {
  return (
    <div className="flex flex-col w-full py-8 px-6 2xl:py-12 2xl:px-32">
      <h2 className="uppercase text-2xl 2xl:text-4xl font-archivo text-contentSecondary font-bold mb-8 2xl:mb-12 ">
        {selectedGenre === "All" ? "TOP SELLERS" : selectedGenre + " GAMES"}
      </h2>
      <div className="flex justify-start items-center 2xl:justify-end ">
        <div className="flex items-center text-contentSecondary text-2xl font-archivo">
          <span className="mr-6 font-bold">Genre</span>
          <span>|</span>
          <select
            value={selectedGenre}
            className="ml-6 appearance-none bg-transparent p-4 border-none focus:outline-none relative w-[205px]"
            style={{
              backgroundImage: `url("/dropdown.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 16px center",
              backgroundSize: "1.5rem",
            }}
            aria-label="Filter games by genre"
          >
            {genreList.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default GenreSelector;
