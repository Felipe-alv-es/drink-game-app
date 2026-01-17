import { Box, Typography, Snackbar } from "@mui/material";
import {
  getCardContainerStyle,
  getContainerStyle,
  getFixedFooterStyle,
  getTitleStyle,
} from "./DeckSelector.styles";
import DeckItem from "./Components/DeckItem/DeckItem";
import { decks } from "../../Assets/Arrays/DefaultList";
import DeckSelectorButton from "./Components/DeckSelectorButton/DeckSelectorButton";
import { useDeck } from "../../Context/DeckContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeckSelectorModal from "./Components/DeckSelectorModal/DeckSelectorModal";
import DeckSelectorMenuButton from "./Components/DeckSelectorMenuButton/DeckSelectorMenuButton";
import NavigateBackButton from "../../Components/NavigateBackButton/NavigateBackButton";

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
      <NavigateBackButton color="#FFF7FF" />
      <Box>
        <Typography sx={getTitleStyle}>{"Selecione o baralho"}</Typography>
        <Box sx={getCardContainerStyle}>
          {decks.map(({ key, title, questions, background, color, icon }) => (
            <DeckItem
              key={key}
              title={title}
              questions={questions}
              background={background}
              color={color}
              onClick={() => toggleDeck(key)}
              isSelected={selectedDecks.includes(key)}
              icon={icon}
            />
          ))}
        </Box>
      </Box>
      <Box sx={getFixedFooterStyle}>
        <Box>
          <DeckSelectorMenuButton handleOpen={handleOpen} />
          <DeckSelectorButton onClick={handleOnClick} />
        </Box>
      </Box>
      <DeckSelectorModal open={open} handleClose={handleClose} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Selecione pelo menos um baralho para continuar"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ top: "48px !important" }}
      />
    </Box>
  );
};

export default DeckSelector;
