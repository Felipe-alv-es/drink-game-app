export const getContainerStyle = () => ({
  background: "#e6ecf3",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  placeItems: "center",
  padding: "16px",
});

export const getContentContainerStyle = () => ({
  height: "100%",
  width: "100%",
  gap: 2,
  display: "flex",
  flexDirection: "column",
});

export const getPointCounterStyle = () => ({
  fontSize: "20px",
  fontWeight: "700",
  paddingLeft: "32px",
  fontStyle: "italic",
  color: "#383838",
});

export const getFooterStyle = (isFlipped: boolean) => ({
  justifyContent: "space-between",
  width: "100%",
  opacity: isFlipped ? 0 : 100,
  transition: "2s",
  "> div": {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "16px",
    alignItems: "center",
  },
});
