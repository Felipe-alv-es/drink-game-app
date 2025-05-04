export const getContainerStyle = () => ({
  width: "100%",
  height: "40%",
  display: "flex",
  flexDirection: "column",
  placeItems: "center",
  padding: "24px",
  justifyContent: "end",
  background: "transparent",
  borderStyle: "none",
  zIndex: 1,
});

export const getTitleStyle = (highlighted: boolean) => ({
  color: "#fff7ff",
  fontSize: "28px",
  fontWeight: "500",
  textShadow: highlighted
    ? "0 0 4px rgba(255, 255, 255, 0.5)"
    : "0 1px 2px rgba(0, 0, 0, 0.2)",
  fontFamily: "kanit",
  transform: highlighted ? "scale(1.1)" : "scale(1)",
  transition: "all 0.3s ease-in-out",
});

export const getIconContainerStyle = () => ({
  display: "flex",
  justifyContent: "center",
  gap: 1,
});

export const getIconStyle = (highlighted: boolean) => ({
  transform: highlighted ? "scale(1.1)" : "scale(1)",
  filter: highlighted
    ? "brightness(1.2) drop-shadow(0 0 6px rgba(255, 247, 255, 0.6))"
    : "none",
  transition: "transform 0.3s ease, filter 0.3s ease",
});
