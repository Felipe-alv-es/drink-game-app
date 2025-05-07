import React, { useEffect, useState } from "react";
import { Typography, Paper, Box } from "@mui/material";
import { SufferingChallenges } from "../../../../../Assets/Arrays/EmbarrassingQuestions";
import {
  getContainerStyle,
  getDescriptionStyle,
  getFlipBoxStyle,
  getFlipContainerStyle,
  getJokeStyle,
  getTitleStyle,
} from "./ChallengeCard.styles";
//@ts-ignore
import ChallengeCardBack from "./ChallengeCardBack/ChallengeCardBack";
import ChallengeCardButton from "./ChallengeCardButton/ChallengeCardButton";

interface ChallengeCardProps {
  setShowChallengeCard: (value: React.SetStateAction<boolean>) => void;
  variation?: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  setShowChallengeCard,
  variation,
}) => {
  const [hasEntered, setHasEntered] = useState(false);
  const [timeToFlip, setTimeToFlip] = useState(false);

  useEffect(() => {
    const entryTimer = setTimeout(() => {
      setHasEntered(true);
    }, 50);

    const flipTimer = setTimeout(() => {
      setTimeToFlip(true);
    }, 1500);

    return () => {
      clearTimeout(entryTimer);
      clearTimeout(flipTimer);
    };
  }, []);

  const handleFlip = () => {
    setTimeToFlip((prev) => !prev);
  };

  return (
    <Box sx={getFlipContainerStyle(hasEntered)}>
      <Box onClick={handleFlip} sx={getFlipBoxStyle(timeToFlip)}>
        <Paper sx={getContainerStyle(variation)}>
          <Box>
            <Typography sx={getTitleStyle}>
              {SufferingChallenges[0].title}
            </Typography>
            <Typography sx={getDescriptionStyle}>
              {SufferingChallenges[0].description}
            </Typography>
          </Box>
          <Box>
            <Typography sx={getJokeStyle}>
              {SufferingChallenges[0].joke}
            </Typography>
            <ChallengeCardButton setShowChallengeCard={setShowChallengeCard} />
          </Box>
        </Paper>
        <ChallengeCardBack variation={variation} />
      </Box>
    </Box>
  );
};

export default ChallengeCard;
