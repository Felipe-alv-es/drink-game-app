import { Box, Button } from "@mui/material";
import { getQuestionButtonStyle } from "./QuestionButton.styles";

interface QuestionButtonProps {
  handleOpen: () => void;
  color?: string;
}

const QuestionButton = ({ handleOpen, color }: QuestionButtonProps) => {
  return (
    <Box>
      <Button
        variant="outlined"
        sx={getQuestionButtonStyle(color)}
        onClick={handleOpen}
      >
        {"Perguntas"}
      </Button>
    </Box>
  );
};

export default QuestionButton;
