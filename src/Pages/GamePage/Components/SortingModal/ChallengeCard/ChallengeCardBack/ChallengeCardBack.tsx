import { Paper, Box } from "@mui/material";
import {
  getCardbackFlipContainerStyle,
  getCardbackImageStyle,
  getContainerStyle,
} from "./ChallengeCardBack.styles";
//@ts-ignore
import Logo from "../../../../../../Assets/Images/Logo/Logo.png";

interface ChallengeCardBackProps {
  variation?: number;
  isFinalRouletten?: boolean;
}

const ChallengeCardBack: React.FC<ChallengeCardBackProps> = ({
  variation,
  isFinalRouletten,
}) => {
  return (
    <Box sx={getCardbackFlipContainerStyle}>
      <Paper sx={getContainerStyle(variation, isFinalRouletten)}>
        <Box
          component="img"
          src={Logo}
          alt="Enemy avatar"
          sx={getCardbackImageStyle}
        />
      </Paper>
    </Box>
  );
};

export default ChallengeCardBack;
