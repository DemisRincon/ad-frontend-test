"use client";
import { type ReactNode, createContext, type FC, useState } from "react";

interface GameContextType {
  genre: string;
  handleChangeGenre: (value: string) => void;
}

export const GameContext = createContext<GameContextType>({
  genre: "All",
  handleChangeGenre: () => {},
});

interface GameContexProviderProps {
  children: ReactNode;
}

export const GameContexProvider: FC<GameContexProviderProps> = ({
  children,
}) => {
  // Initialize with "All" as default
  const [genre, setGenre] = useState("All");

  const handleChangeGenre = (value: string) => {
    setGenre(value);
  };

  return (
    <GameContext.Provider value={{ genre, handleChangeGenre }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContexProvider;
