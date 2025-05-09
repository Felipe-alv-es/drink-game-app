import { Box, Typography, Modal, Button } from "@mui/material";
import { ListTypes } from "../../../../Assets/Arrays/DefaultList";
import {
  getButtonStyle,
  getContainerStyle,
  getTasksStyle,
  getTitleStyle,
} from "./DeckModal.styles";

interface PlayerInputProps {
  open: boolean;
  handleClose: () => void;
  questions: ListTypes[];
}

const DeckModal = ({ open, handleClose, questions }: PlayerInputProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={getContainerStyle}>
        <Typography sx={getTitleStyle}>{"Exemplo de perguntas"}</Typography>
        {questions.slice(0, 3).map((q, i) => (
          <Typography key={i} sx={getTasksStyle}>
            - {q.title}
          </Typography>
        ))}
        <Button
          onClick={handleClose}
          variant="outlined"
          fullWidth
          sx={getButtonStyle}
        >
          {"Fechar"}
        </Button>
      </Box>
    </Modal>
  );
};

export default DeckModal;
