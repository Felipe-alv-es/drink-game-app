export const getButtonStyle = () => ({
  textTransform: "none",
  fontSize: "18px",
  borderRadius: "16px",
  color: "#fff7ff",
  background: "linear-gradient(135deg, #b7aecd, #8caedb, #2580b3)",
  fontWeight: 400,
  transition: "all 0.3s ease-in-out",
  width: "150px",
  gap: 1,
  fontFamily: "kanit",
  "&:hover": {
    backgroundColor: "#ff6347",
    color: "#fff",
    borderColor: "#ff6347",
    transform: "scale(1.05)",
  },
  "&:active": {
    backgroundColor: "#ff4500",
    borderColor: "#ff4500",
    transform: "scale(1)",
  },
});
