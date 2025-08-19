export const getAddItemStyle = () => ({
  borderRadius: "12px",
  display: "flex",
  gap: 1,
  alignItems: "center",
  marginBottom: "24px",
  justifyContent: "space-between",
});

export const getTextFieldStyle = () => ({
  "& .MuiFormLabel-root": {
    color: "#FFF7FF",
    fontFamily: "kanit",
    fontSize: "20px",
    fontWeight: "500",
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
      borderWidth: "2px",
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
  borderWidth: "2px",
});
