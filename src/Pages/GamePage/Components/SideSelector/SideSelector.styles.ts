export const getContainerStyle = () => ({
  display: "flex",
  placeItems: "center",
  width: "100%",
  gap: 2,
  paddingX: "24px",
  zIndex: 1,
});

export const getSelectorContainerStyle = (challengeOrShot: boolean) => ({
  position: "relative",
  height: "64px",
  width: "64px",
  borderRadius: "64px",
  transition: "transform 0.5s ease, top 0.5s ease",
  transform: challengeOrShot ? "rotate(180deg)" : " rotate(0deg)",
  display: "grid",
  placeItems: "center",
});

export const getTitleStyle = (challengeOrShot: boolean) => ({
  fontSize: "32px",
  fontWeight: "700",
  color: "#fff7ff",
  fontFamily: "kanit",
  transition: "transform 0.5s ease, top 0.5s ease",
  transform: challengeOrShot ? "rotate(180deg)" : " rotate(0deg)",
});

export const getDividerStyle = () => ({
  height: "4px",
  width: "100%",
  background: "#fff7ff",
});
