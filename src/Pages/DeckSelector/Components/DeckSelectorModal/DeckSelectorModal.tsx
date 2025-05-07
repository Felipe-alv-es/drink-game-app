import { Box, Modal, Typography } from "@mui/material";
import { getContainerStyle, getTitleStyle } from "./DeckSelectorModal.styles";
import DeckSelectorModalItem from "./DeckSelectorModalItem/DeckSelectorModalItem";

interface DeckSelectorModalProps {
  open: boolean;
  handleClose: () => void;
}

const DeckSelectorModal = ({ open, handleClose }: DeckSelectorModalProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={getContainerStyle}>
        <Typography sx={getTitleStyle}>
          {"Selecione o que deve ser bloqueado"}
        </Typography>
        <DeckSelectorModalItem text="Pimenta" icon="🌶️ " />
        <DeckSelectorModalItem text="Adulto" icon="🔞 " />
      </Box>
    </Modal>
  );
};

export default DeckSelectorModal;
