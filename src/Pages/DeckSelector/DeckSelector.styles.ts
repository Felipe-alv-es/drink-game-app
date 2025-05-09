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
  padding: "16px",
  minHeight: "100vh",
  animation: `${gradientShift} 15s ease infinite`,
  background:
    "linear-gradient(135deg, #b7aecd, #8caedb, #2580b3, #d6a3a3, #e07b7b, #b32525)",
  backgroundSize: "400% 400%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "> div:first-of-type": {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    paddingBottom: "24px",
  },
});

export const getTitleStyle = () => ({
  fontFamily: "kanit",
  fontSize: "36px",
  fontWeight: "700",
  paddingBottom: "4px",
  color: "#FFF7FF",
  textAlign: "center",
});
