"use client";
import { type ReactNode, createContext, type FC, useState } from "react";

interface GameContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const GameContext = createContext<GameContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

interface GameContexProviderProps {
  children: ReactNode;
}

export const GameContexProvider: FC<GameContexProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GameContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContexProvider;
