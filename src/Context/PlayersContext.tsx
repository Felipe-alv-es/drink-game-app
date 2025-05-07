import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { playerColors } from "../Assets/Arrays/PlayerColors";

export interface Player {
  name: string;
  color: string;
  points: number;
  babymode: boolean;
}
interface PlayersContextType {
  players: Player[];
  addPlayer: (name: string) => void;
  removePlayer: (name: string) => void;
  clearPlayers: () => void;
  addPoints: (name: string, pointsToAdd: number) => void;
  setBabymode: (name: string, value: boolean) => void;
  maxPoints: number;
  setMaxPoints: (value: number) => void;
}

const PlayersContext = createContext<PlayersContextType | undefined>(undefined);

export const PlayersProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [maxPoints, setMaxPoints] = useState<number>(50);

  useEffect(() => {
    const stored = localStorage.getItem("players");
    if (stored) {
      const parsed = JSON.parse(stored);
      const updated = parsed.map((p: any) => ({
        ...p,
        babymode: p.babymode ?? false,
      }));
      setPlayers(updated);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const addPlayer = (name: string) => {
    if (!name.trim() || players.find((p) => p.name === name)) return;
    const color = playerColors[players.length % playerColors.length];
    setPlayers((prev) => [
      ...prev,
      {
        name,
        color,
        points: 0,
        babymode: false,
      },
    ]);
  };

  const removePlayer = (name: string) => {
    setPlayers((prev) => prev.filter((player) => player.name !== name));
  };

  const clearPlayers = () => setPlayers([]);

  const addPoints = (name: string, pointsToAdd: number) => {
    setPlayers((prev) =>
      prev.map((player) =>
        player.name === name
          ? { ...player, points: player.points + pointsToAdd }
          : player
      )
    );
  };

  const setBabymode = (name: string, value: boolean) => {
    setPlayers((prev) =>
      prev.map((player) =>
        player.name === name ? { ...player, babymode: value } : player
      )
    );
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
        addPlayer,
        removePlayer,
        clearPlayers,
        addPoints,
        setBabymode,
        maxPoints,
        setMaxPoints,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayers = (): PlayersContextType => {
  const context = useContext(PlayersContext);
  if (!context)
    throw new Error("usePlayers deve ser usado dentro de PlayersProvider");
  return context;
};
