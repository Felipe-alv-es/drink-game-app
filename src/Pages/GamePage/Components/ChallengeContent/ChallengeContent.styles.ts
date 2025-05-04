export const getContainerStyle = () => ({
  height: "60%",
  paddingX: "40px",
  paddingTop: "8px",
  background: "transparent",
  borderStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  zIndex: 1,
});

export const getTitleStyle = (highlighted: boolean) => ({
  color: "#fff7ff",
  fontWeight: highlighted ? 700 : 600,
  textShadow: highlighted
    ? "0 1px 2px rgba(0, 0, 0, 0.3)"
    : "0 0 4px rgba(255, 255, 255, 0.5)",
  transform: highlighted ? "scale(1)" : "scale(1.1)",
  fontSize: "28px",
  fontFamily: "kanit",
  paddingBottom: "8px",
  transition: "all 0.3s ease-in-out",
});

export const getDescriptionStyle = (highlighted: boolean) => ({
  color: "#fff7ff",
  fontSize: "18px",
  transform: highlighted ? "scale(1)" : "scale(1.1)",
  textShadow: highlighted
    ? "0 1px 2px rgba(0, 0, 0, 0.2)"
    : "0 0 4px rgba(255, 255, 255, 0.5)",
  fontFamily: "kanit",
  fontStyle: "italic",
  transition: "all 0.3s ease-in-out",
});

export const getPlayerNameStyle = () => ({
  zIndex: 1,
  fontSize: "20px",
  fontFamily: "kanit",
  color: "#fff7ff",
  textAlign: "center",
  fontStyle: "italic",
  paddingBottom: "8px",
});
