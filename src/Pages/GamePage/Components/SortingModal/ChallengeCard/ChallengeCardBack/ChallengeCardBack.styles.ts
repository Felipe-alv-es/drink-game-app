export const getContainerStyle = (variation: number) => {
  const backgrounds = [
    "linear-gradient(135deg, #f28b82, #e57373)",
    "linear-gradient(135deg, #f19c9c, #b53c3c)",
    "linear-gradient(135deg, #ba68c8, #6a1b9a)",
    "linear-gradient(135deg, #8c4fa0, #4d1460)",
  ];

  return {
    width: "100%",
    height: "100%",
    borderRadius: "32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: backgrounds[variation],
  };
};

export const getCardbackFlipContainerStyle = () => ({
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  position: "absolute",
  width: "95vw",
  height: "80vh",
  borderRadius: "32px",
});

export const getCardbackImageStyle = () => ({
  height: "250px",
  width: "250px",
  borderRadius: "200px",
});
