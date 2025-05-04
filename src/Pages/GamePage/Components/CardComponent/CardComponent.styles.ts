export const getContainerStyle = (challengeOrShot: boolean) => ({
  position: "relative",
  width: "100%",
  height: "85%",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid rgba(255, 255, 255, 0.2)",

  "&::before": {
    content: "''",
    position: "absolute",
    inset: 0,
    zIndex: 0,
    borderRadius: "24px",
    transition: "opacity 1s ease",
    background: "linear-gradient(135deg, #b7aecd, #8caedb, #2580b3)",
    opacity: challengeOrShot ? 0 : 1,
  },

  "&::after": {
    content: "''",
    position: "absolute",
    inset: 0,
    zIndex: 0,
    borderRadius: "24px",
    transition: "opacity 1s ease",
    background: "linear-gradient(135deg, #d6a3a3, #e07b7b, #b32525)",
    opacity: challengeOrShot ? 1 : 0,
  },
});
