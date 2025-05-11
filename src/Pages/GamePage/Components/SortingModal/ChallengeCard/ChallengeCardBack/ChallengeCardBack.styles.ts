//@ts-ignore
import Back1 from "../../../../../../Assets/Images/CardBack/BackSurprise.png";
//@ts-ignore
import Back2 from "../../../../../../Assets/Images/CardBack/BackQuestion.png";
//@ts-ignore
import Back3 from "../../../../../../Assets/Images/CardBack/BackPepper.png";
//@ts-ignore
import Back4 from "../../../../../../Assets/Images/CardBack/BackArts.png";
//@ts-ignore
import FinalBack1 from "../../../../../../Assets/Images/CardBack/FinalChallengeBack1.png";
//@ts-ignore
import FinalBack2 from "../../../../../../Assets/Images/CardBack/FinalChallengeBack2.png";
//@ts-ignore
import FinalBack3 from "../../../../../../Assets/Images/CardBack/FinalChallengeBack3.png";
//@ts-ignore
import FinalBack4 from "../../../../../../Assets/Images/CardBack/FinalChallengeBack4.png";

export const getContainerStyle = (
  variation: number,
  isFinalRouletten: boolean
) => {
  const backgrounds = isFinalRouletten
    ? [FinalBack1, FinalBack2, FinalBack3, FinalBack4]
    : [Back1, Back2, Back3, Back4];

  return {
    width: "100%",
    height: "100%",
    borderRadius: "32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${backgrounds[variation]})`,
    backgroundSize: "cover",
  };
};

export const getCardbackFlipContainerStyle = () => ({
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  position: "absolute",
  width: "90vw",
  height: "80vh",
  borderRadius: "32px",
});

export const getCardbackImageStyle = () => ({
  height: "250px",
  width: "250px",
  borderRadius: "200px",
});
