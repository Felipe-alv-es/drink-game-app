export const getContainerStyle = (isFlipped: boolean) => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  position: "relative",
  opacity: isFlipped ? 0 : 100,
  transition: "1s",
});

export const getFieldStyle = () => ({
  height: "12px",
  width: "100%",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "4px",
});
