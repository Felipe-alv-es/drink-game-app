//@ts-ignore
import End from "../../Assets/Images/CardBack/EndChallenge.png";

export const getContainerStyle = (background: string) => ({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  backgroundImage: `url(${End})`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  color: "#fff7ff",
  paddingBottom: "48px",
});

export const getTitleStyle = () => ({
  fontFamily: "kanit",
  fontSize: "32px",
});

export const getDescriptionStyle = () => ({
  fontFamily: "kanit",
  fontSize: "20px",
  fontStyle: "italic",
  paddingBottom: "32px",
});
