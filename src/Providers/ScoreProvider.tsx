import { createContext, useContext, useState, ReactNode } from "react";

type ScoreContextType = {
  score: number;
  incrementScore: () => void;
  resetScore: () => void;
};

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export const useScore = (): ScoreContextType => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("useScore must be used within a ScoreProvider");
  }
  return context;
};

type ScoreProviderProps = { children: ReactNode };

export const ScoreProvider = ({ children }: ScoreProviderProps) => {
  const [score, setScore] = useState(0);

  const incrementScore = () => setScore((prev) => prev + 1);

  const resetScore = () => setScore(0);

  return (
    <ScoreContext.Provider value={{ score, incrementScore, resetScore }}>
      {children}
    </ScoreContext.Provider>
  );
};