export const getAddItemStyle = () => ({
  paddingY: "16px",
  borderRadius: "16px",
  display: "flex",
  gap: 2,
  alignItems: "center",
  marginBottom: "24px",
  justifyContent: "space-between",
});

export const getTextFieldStyle = () => ({
  "& .MuiFormLabel-root": {
    color: "#FFF7FF",
    fontFamily: "kanit",
    fontSize: "20px",
    fontWeight: "300",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#FFF7FF",
  },
  "& .MuiInputBase-root": {
    borderRadius: "16px",
    color: "#FFF7FF",
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFF7FF",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFF7FF",
    },
  },
});

export const getAddButtonStyle = () => ({
  borderColor: "#FFF7FF",
  color: "#2580b3",
  fontWeight: "bold",
  height: "64px",
  borderRadius: "50%",
});
