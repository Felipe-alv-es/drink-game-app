import { Player } from "./PlayerSelector";

export const getContainerStyle = () => ({
  padding: "16px",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #b7aecd, #8caedb, #2580b3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const getTitleStyle = () => ({
  fontFamily: "kanit",
  fontSize: "32px",
  fontWeight: "500",
  paddingBottom: "4px",
  color: "#fff7ff",
});

export const getAddItemStyle = () => ({
  padding: "16px",
  borderRadius: "16px",
  display: "flex",
  gap: 2,
  alignItems: "center",
  marginBottom: "24px",
  justifyContent: "space-between",
});

export const getTextFieldStyle = () => ({
  "& .MuiFormLabel-root": {
    color: "#fff7ff",
    fontFamily: "kanit",
    fontSize: "20px",
  },
  "& .MuiInputBase-root": {
    borderRadius: "16px",
    color: "#fff7ff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff7ff",
  },
});

export const getAddButtonStyle = () => ({
  backgroundColor: "#fff7ff",
  color: "#2580b3",
  fontWeight: "bold",
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
  color: "#fff7ff",
});

export const getButtonStyle = () => ({
  textTransform: "none",
  background: "#fff7ff",
  color: "#2580b3",
  fontFamily: "kanit",
  fontSize: "20px",
  borderRadius: "16px",
});
