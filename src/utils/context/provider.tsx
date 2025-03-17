"use client";
import { type ReactNode, createContext, type FC, useState } from "react";

interface GameContextType {
  genre: string;
  handleChangeGenre: (value: string) => void;
  isLoading: boolean;
}

export const GameContext = createContext<GameContextType>({
  genre: "All",
  handleChangeGenre: () => {},
  isLoading: false,
});

interface GameContexProviderProps {
  children: ReactNode;
}

export const GameContexProvider: FC<GameContexProviderProps> = ({
  children,
}) => {
  const [genre, setGenre] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeGenre = (value: string) => {
    setGenre(value);
  };

  return (
    <GameContext.Provider value={{ genre, handleChangeGenre, isLoading }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContexProvider;
