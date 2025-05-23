export const getContainerStyle = (background: string) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100vw",
  background: background,
  color: "#fff7ff",
});

export const getTitleStyle = () => ({
  fontFamily: "kanit",
  fontSize: "32px",
});

export const getDescriptionStyle = () => ({
  fontFamily: "kanit",
  fontSize: "20px",
  fontStyle: "italic",
  paddingBottom: "32px",
});
