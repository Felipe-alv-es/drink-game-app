import { Player } from "../../../../Context/PlayersContext";

export const getContainerStyle = () => ({
  display: "flex",
  alignItems: "center",
  animation: "floating 2s ease-in-out infinite",
  "@keyframes floating": {
    "0%": { transform: "translateY(-1.5px)" },
    "50%": { transform: "translateY(1.5px)" },
    "100%": { transform: "translateY(-1.5px)" },
  },
});

export const getTitleStyle = (player: Player) => ({
  color: player.color,
  fontFamily: "kanit",
  fontWeight: "500",
});
