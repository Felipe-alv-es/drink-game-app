import React from "react";
import { Button } from "@mui/material";

import { getButtonStyle } from "./ChallengeCardButton.styles";

interface ChallengeCardProps {
  setShowChallengeCard: (value: React.SetStateAction<boolean>) => void;
}

const ChallengeCardButton: React.FC<ChallengeCardProps> = ({
  setShowChallengeCard,
}) => {
  return (
    <Button
      variant="outlined"
      sx={getButtonStyle}
      fullWidth
      onClick={() => setShowChallengeCard(false)}
    >
      {"Feito"}
    </Button>
  );
};

export default ChallengeCardButton;
