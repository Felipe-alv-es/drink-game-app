import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface Player {
  name: string;
  color: string;
  points: number;
}

const playerColors = [
  "#e57373",
  "#64b5f6",
  "#81c784",
  "#ffd54f",
  "#ba68c8",
  "#4dd0e1",
  "#ff8a65",
  "#a1887f",
  "#90a4ae",
  "#f06292",
  "#9575cd",
  "#4caf50",
  "#ffb74d",
  "#7986cb",
  "#e0e0e0",
  "#f44336",
  "#2196f3",
  "#00bcd4",
  "#9c27b0",
  "#cddc39",
];

interface PlayersContextType {
  players: Player[];
  addPlayer: (name: string) => void;
  removePlayer: (name: string) => void;
  clearPlayers: () => void;
  addPoints: (name: string, pointsToAdd: number) => void;
}

const PlayersContext = createContext<PlayersContextType | undefined>(undefined);

export const PlayersProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("players");
    if (stored) setPlayers(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const addPlayer = (name: string) => {
    if (!name.trim() || players.find((p) => p.name === name)) return;
    const color = playerColors[players.length % playerColors.length];
    setPlayers((prev) => [...prev, { name, color, points: 0 }]);
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

  return (
    <PlayersContext.Provider
      value={{ players, addPlayer, removePlayer, clearPlayers, addPoints }}
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
