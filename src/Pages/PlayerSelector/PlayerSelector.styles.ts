import { Player } from "./PlayerSelector";

export const getContainerStyle = () => ({
  padding: "16px",
  minHeight: "100vh",
  background: "#e6ecf3",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const getTitleStyle = () => ({
  fontFamily: "kanit",
  fontSize: "32px",
  fontWeight: "600",
  paddingBottom: "4px",
  color: "#383838",
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
    color: "#383838",
    fontFamily: "kanit",
    fontSize: "20px",
  },
  "& .MuiInputBase-root": {
    borderRadius: "16px",
    color: "#383838",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#383838",
  },
});

export const getAddButtonStyle = () => ({
  backgroundColor: "#383838",
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
  color: "#383838",
});

export const getButtonStyle = () => ({
  textTransform: "none",
  background: "#383838",
  color: "#e6ecf3",
  fontFamily: "kanit",
  fontSize: "20px",
  borderRadius: "16px",
});
