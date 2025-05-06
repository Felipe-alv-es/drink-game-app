const getAnimationStyles = (animation: "enter" | "exit") => {
  if (animation === "enter") {
    return {
      animation: `enterAnimation 0.3s ease-out`,
      "@keyframes enterAnimation": {
        from: {
          opacity: 0,
          transform: "translateY(100%)",
        },
        to: {
          opacity: 1,
          transform: "translateY(0%)",
        },
      },
    };
  } else if (animation === "exit") {
    return {
      animation: `exitAnimation 0.3s ease-in`,
      "@keyframes exitAnimation": {
        from: {
          opacity: 1,
          transform: "translateY(0%)",
        },
        to: {
          opacity: 0,
          transform: "translateY(-100%)",
        },
      },
    };
  }
  return {};
};

export const getTextStyle = (animation: "enter" | "exit") => ({
  fontSize: "12px",
  fontStyle: "italic",
  color: "#fff7ff",
  position: "absolute",
  width: "100%",
  ...getAnimationStyles(animation),
});

export const getTipMessageContainer = () => ({
  height: "60px",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
  marginX: "16px",
});
