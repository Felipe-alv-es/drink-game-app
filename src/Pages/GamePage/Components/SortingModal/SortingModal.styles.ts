export const getModalStyle = () => ({
  placeItems: "center",
  alignSelf: "center",
  textAlign: "center",
  "> div": {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
});

export const getButtonStyle = () => ({
  textTransform: "none",
  background: "#fff7ff",
  color: "#383838",
  fontFamily: "kanit",
  fontSize: "20px",
  borderRadius: "16px",
});

export const getTitleStyle = () => ({
  fontFamily: "kanit",
  fontSize: "20px",
  fontWeight: "700",
  paddingBottom: "4px",
  color: "#FFF7FF",
  textAlign: "center",
});
