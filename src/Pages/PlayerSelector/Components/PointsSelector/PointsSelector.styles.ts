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
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    color: "#FFF7FF",
    textAlign: "center",

    "& fieldset": {
      borderColor: "#FFF7FF",
      borderWidth: "2px",
    },

    "&:hover fieldset": {
      borderColor: "#FFF7FF",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#FFF7FF",
    },
  },
  input: {
    textAlign: "center",
    fontFamily: "kanit",
    fontSize: "16px",
    padding: "8px",
  },
});
