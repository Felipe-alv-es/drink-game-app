import { Box, Typography, Snackbar } from "@mui/material";
import { getContainerStyle, getTitleStyle } from "./DeckSelector.styles";
import DeckItem from "./Components/DeckItem/DeckItem";
import { DesafioPadrão, ObedeçaOLider } from "../../Assets/Arrays/DefaultList";
import DeckSelectorButton from "./Components/DeckSelectorButton/DeckSelectorButton";
import { useDeck } from "../../Context/DeckContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeckSelectorModal from "./Components/DeckSelectorModal/DeckSelectorModal";
import DeckSelectorMenuButton from "./Components/DeckSelectorMenuButton/DeckSelectorMenuButton";

const DeckSelector = () => {
  const navigate = useNavigate();
  const { toggleDeck, selectedDecks } = useDeck();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleOnClick = () => {
    if (selectedDecks.length === 0) {
      setSnackbarOpen(true);
      return;
    }
    navigate("/game-page");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={getContainerStyle}>
      <Box>
        <Typography sx={getTitleStyle}>{"Selecione o baralho"}</Typography>
        <DeckItem
          title="DesafioPadrão"
          questions={DesafioPadrão}
          onClick={() => toggleDeck("DesafioPadrão")}
          isSelected={selectedDecks.includes("DesafioPadrão")}
        />
        <DeckItem
          title="ObedeçaOLider"
          questions={ObedeçaOLider}
          background="#4B5320"
          color="#fff7ff"
          onClick={() => toggleDeck("ObedeçaOLider")}
          isSelected={selectedDecks.includes("ObedeçaOLider")}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <DeckSelectorMenuButton handleOpen={handleOpen} />
        <DeckSelectorButton onClick={handleOnClick} />
      </Box>
      <DeckSelectorModal open={open} handleClose={handleClose} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Selecione pelo menos um baralho para continuar"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Box>
  );
};

export default DeckSelector;
