import { Player } from "../../../../Context/PlayersContext";

export const getContainerStyle = () => ({
  display: "flex",
  alignItems: "center",
});

export const getTitleStyle = (player: Player) => ({
  color: player.color,
  fontFamily: "kanit",
  fontWeight: "500",
});

export const getTooltipStyles = (player: Player) => ({
  color: player.color,
  fontFamily: "kanit",
  fontWeight: "500",
});
