export const getPointsContainerStyle = () => ({
  display: "flex",
  alignItems: "center",
  gap: 3,
  justifyContent: "center",
  paddingY: "20px",
});

export const getTitleStyle = () => ({
  fontFamily: "kanit",
  fontSize: "20px",
  fontWeight: "700",
  paddingBottom: "4px",
  color: "#FFF7FF",
  textAlign: "center",
});

export const getTextFieldStyle = () => ({
  "& .MuiInputBase-root": {
    borderRadius: "8px",
    color: "#FFF7FF",
    textAlign: "center",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF7FF",
  },
  input: {
    textAlign: "center",
    fontFamily: "kanit",
    fontSize: "16px",
    padding: "8px",
  },
});
