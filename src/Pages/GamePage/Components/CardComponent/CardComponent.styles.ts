export const getPreContainerStyle = (
  animationStep: "none" | "slideOut" | "slideUp",
  isFirstRender: boolean,
  hasFadedIn: boolean
) => ({
  perspective: "1000px",
  width: "100%",
  height: "85%",
  animation:
    animationStep === "slideOut"
      ? "slideOut 0.7s ease-in"
      : animationStep === "slideUp"
      ? "slideUp 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)"
      : "none",
  borderStyle: "none",
  opacity: isFirstRender && !hasFadedIn ? 0 : 1,
  transition: isFirstRender ? "opacity 0.7s ease-in-out" : undefined,
  "@keyframes slideOut": {
    "0%": {
      transform: "translateX(0)",
      opacity: 1,
    },
    "100%": {
      transform: "translateX(100%)",
      opacity: 0,
    },
  },
  "@keyframes slideUp": {
    "0%": {
      transform: "translateY(100%)",
      opacity: 0,
    },
    "100%": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
});

export const getRotateStyle = (isFlipped: boolean) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  background: "#e6ecf3",
});

export const getContainerStyle = (challengeOrShot: boolean) => ({
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",

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
