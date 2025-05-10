export const getFlipContainerStyle = (hasEntered: boolean) => ({
  position: "fixed",
  top: hasEntered ? "8%" : "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1300,
  perspective: "1000px",
  width: "90vw",
  opacity: hasEntered ? 1 : 0,
  transition: "top 0.8s ease, opacity 0.8s ease",
});

export const getFlipBoxStyle = (timeToFlip: boolean) => ({
  width: "100%",
  transformStyle: "preserve-3d",
  transition: "transform 0.8s",
  transform: timeToFlip ? "rotateY(0deg)" : "rotateY(180deg)",
  position: "relative",
});

export const getContainerStyle = (variation: number) => {
  const backgrounds = [
    "linear-gradient(135deg, #f28b82, #e57373)",
    "linear-gradient(135deg, #f19c9c, #b53c3c)",
    "linear-gradient(135deg, #ba68c8, #6a1b9a)",
    "linear-gradient(135deg, #8c4fa0, #4d1460)",
  ];

  return {
    padding: "32px",
    borderRadius: "32px",
    background: backgrounds[variation],
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
  };
};

export const getTitleStyle = () => ({
  color: "#fff7ff",
  fontWeight: 700,
  fontSize: "32px",
  fontFamily: "kanit",
  paddingBottom: "16px",
});

export const getDescriptionStyle = () => ({
  color: "#fff7ff",
  fontSize: "20px",
  fontWeight: "300",
  fontFamily: "kanit",
  fontStyle: "italic",
});

export const getJokeStyle = () => ({
  color: "#fff7ff",
  fontSize: "14px",
  fontWeight: "200",
  fontFamily: "kanit",
  fontStyle: "italic",
  paddingBottom: "16px",
});
