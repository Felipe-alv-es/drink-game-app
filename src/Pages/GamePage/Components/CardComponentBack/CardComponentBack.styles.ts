export const getContainerStyle = () => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  transform: "rotateY(180deg)",
  backfaceVisibility: "hidden",
  overflow: "hidden",
  borderRadius: "24px",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
});

export const getFirstColorStyle = () => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "linear-gradient(135deg, #b7aecd, #8caedb, #2580b3)",
  clipPath: "polygon(0 0, 100% 0, 0 100%)",
});

export const getSecondColorStyle = () => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "linear-gradient(135deg, #d6a3a3, #e07b7b, #b32525)",
  clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
});

export const getImageContainerStyle = () => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});
