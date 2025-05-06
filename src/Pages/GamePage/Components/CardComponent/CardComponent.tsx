import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  getContainerStyle,
  getPreContainerStyle,
  getRotateStyle,
} from "./CardComponent.styles";
import ChallengeContent from "../ChallengeContent/ChallengeContent";
import ShotsController from "../ShotsController/ShotsController";
import SideSelector from "../SideSelector/SideSelector";
import CardComponentBack from "../CardComponentBack/CardComponentBack";

interface CardComponentProps {
  title: string;
  description: string;
  quantity: number;
  playerName: string;
  challengeOrShot: boolean;
  setChallengeOrShot: React.Dispatch<React.SetStateAction<boolean>>;
  isFlipped: boolean;
  isFirstRender: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  babyMode: boolean;
}

export const CardComponent = React.forwardRef<
  HTMLButtonElement,
  CardComponentProps
>(
  (
    {
      title,
      description,
      quantity,
      playerName,
      challengeOrShot,
      setChallengeOrShot,
      isFlipped,
      isFirstRender,
      onClick,
      babyMode,
    },
    ref
  ) => {
    const [animationStep, setAnimationStep] = useState<
      "none" | "slideOut" | "slideUp"
    >("none");
    const [hasFadedIn, setHasFadedIn] = useState(false);

    useEffect(() => {
      if (isFirstRender) {
        const timeout = setTimeout(() => {
          setHasFadedIn(true);
        }, 700);
        setAnimationStep("slideUp");
        return () => clearTimeout(timeout);
      } else if (isFlipped) {
        setAnimationStep("slideOut");
        const timeout = setTimeout(() => {
          setAnimationStep("slideUp");
        }, 650);
        return () => clearTimeout(timeout);
      }
    }, [isFlipped, isFirstRender]);

    return (
      <Box
        sx={getPreContainerStyle(animationStep, isFirstRender, hasFadedIn)}
        component={"button"}
        onClick={onClick}
        ref={ref}
      >
        <Box sx={getRotateStyle(isFlipped)}>
          <Box sx={getContainerStyle(challengeOrShot)}>
            <ChallengeContent
              title={title}
              description={description}
              onClick={() => setChallengeOrShot(false)}
              challengeOrShot={challengeOrShot}
              playerName={playerName}
            />
            <SideSelector challengeOrShot={challengeOrShot} />
            <ShotsController
              quantity={quantity}
              onClick={() => setChallengeOrShot(true)}
              challengeOrShot={challengeOrShot}
              babyMode={babyMode}
            />
          </Box>
          <CardComponentBack />
        </Box>
      </Box>
    );
  }
);

export default CardComponent;
