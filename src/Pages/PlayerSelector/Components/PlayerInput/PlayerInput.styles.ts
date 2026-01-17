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

  "& .MuiInputBase-root": {
    borderRadius: "16px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#FFF7FF",
    color: "#FFF7FF",
  },
  "& .Mui-focused": {
    color: "#FFF7FF",
  },
});

export const getAddButtonStyle = () => ({
  padding: "12px",
  bgcolor: "#FFF7FF",
  color: "#FFF7FF",
  "&:hover": {
    bgcolor: "#FFF7FF",
  },
});
