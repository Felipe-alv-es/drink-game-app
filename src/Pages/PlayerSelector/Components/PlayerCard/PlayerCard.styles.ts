import { Player } from "../../../../Context/PlayersContext";

export const getPlayersItemStyle = (player: Player) => ({
  background: "#ffffff",
  borderStyle: "solid",
  borderColor: player.color,
  padding: "16px",
  borderRadius: "16px",
  display: "flex",
  gap: 2,
  alignItems: "center",
  marginBottom: "12px",
  justifyContent: "space-between",
});

export const getPlayerNameStyle = (player: Player) => ({
  fontSize: "20px",
  fontFamily: "kanit",
  color: player.color,
});
