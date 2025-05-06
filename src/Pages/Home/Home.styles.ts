import { keyframes } from "@mui/material";

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const getContainerStyle = () => ({
  animation: `${gradientShift} 15s ease infinite`,
  background:
    "linear-gradient(135deg, #b7aecd, #8caedb, #2580b3, #d6a3a3, #e07b7b, #b32525)",
  backgroundSize: "400% 400%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const getButtonContainerStyle = () => ({
  display: "flex",
  justifyContent: "center",
  padding: "24px",
});

export const getButtonStyle = () => ({
  textTransform: "none",
  borderRadius: "32px",
  paddingX: "32px",
  paddingY: "8px",
  fontFamily: "kanit",
  color: "#fff7ff",
  borderColor: "#fff7ff",
  fontSize: "20px",
  fontWeight: "600",
});
