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
  },
  "& .MuiInputBase-root": {
    borderRadius: "16px",
    color: "#FFF7FF",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF7FF",
  },
});

export const getAddButtonStyle = () => ({
  backgroundColor: "#FFF7FF",
  color: "#2580b3",
  fontWeight: "bold",
  borderRadius: "24px",
  height: "56px",
});
