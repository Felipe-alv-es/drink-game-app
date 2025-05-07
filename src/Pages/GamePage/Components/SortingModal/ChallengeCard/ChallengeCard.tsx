import React, { useEffect, useState } from "react";
import { Typography, Button, Paper, Box } from "@mui/material";
import { SufferingChallenges } from "../../../../../Assets/Arrays/EmbarrassingQuestions";
import {
  getButtonStyle,
  getContainerStyle,
  getDescriptionStyle,
  getJokeStyle,
  getTitleStyle,
} from "./ChallengeCard.styles";
//@ts-ignore
import ChallengeCardBack from "./ChallengeCardBack/ChallengeCardBack";

interface ChallengeCardProps {
  setShowChallengeCard: (value: React.SetStateAction<boolean>) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  setShowChallengeCard,
}) => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const entryTimer = setTimeout(() => {
      setHasEntered(true);
    }, 50);

    const flipTimer = setTimeout(() => {
      setIsFlipped(true);
    }, 1500);

    return () => {
      clearTimeout(entryTimer);
      clearTimeout(flipTimer);
    };
  }, []);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: hasEntered ? "8%" : "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1300,
        perspective: "1000px",
        width: "95vw",
        maxWidth: 400,
        height: "auto",
        opacity: hasEntered ? 1 : 0,
        transition: "top 0.8s ease, opacity 0.8s ease",
      }}
    >
      <Box
        onClick={handleFlip}
        sx={{
          width: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)", // Card flip
          position: "relative",
        }}
      >
        <Paper sx={getContainerStyle}>
          <Box>
            <Typography sx={getTitleStyle}>
              {SufferingChallenges[0].title}
            </Typography>
            <Typography sx={getDescriptionStyle}>
              {SufferingChallenges[0].description}
            </Typography>
          </Box>
          <Typography sx={getJokeStyle}>
            {SufferingChallenges[0].joke}
          </Typography>
          <Button
            variant="outlined"
            sx={getButtonStyle}
            fullWidth
            onClick={() => setShowChallengeCard(false)}
          >
            {"Feito"}
          </Button>
        </Paper>
        <ChallengeCardBack />
      </Box>
    </Box>
  );
};

export default ChallengeCard;
