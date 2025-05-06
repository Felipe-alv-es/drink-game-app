import { Player } from "../../Context/PlayersContext";
import { keyframes } from "@mui/material";

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const getContainerStyle = () => ({
  padding: "16px",
  minHeight: "100vh",
  animation: `${gradientShift} 15s ease infinite`,
  background:
    "linear-gradient(135deg, #b7aecd, #8caedb, #2580b3, #d6a3a3, #e07b7b, #b32525)",
  backgroundSize: "400% 400%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const getTitleStyle = () => ({
  fontFamily: "kanit",
  fontSize: "36px",
  fontWeight: "700",
  paddingBottom: "4px",
  color: "#FFF7FF",
  textAlign: "center",
});

export const getPlayersItemStyle = (player: Player) => ({
  background: player.color,
  padding: "16px",
  borderRadius: "16px",
  display: "flex",
  gap: 2,
  alignItems: "center",
  marginBottom: "12px",
  justifyContent: "space-between",
});

export const getPlayerNameStyle = () => ({
  fontSize: "20px",
  fontFamily: "kanit",
  color: "#FFF7FF",
});
