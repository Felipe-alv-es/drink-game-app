import { Box, Typography, Snackbar } from "@mui/material";
import {
  getCardContainerStyle,
  getContainerStyle,
  getFixedFooterStyle,
  getTitleStyle,
} from "./DeckSelector.styles";
import DeckItem from "./Components/DeckItem/DeckItem";
import {
  DesafioPadrão,
  ObedeçaOLider,
  FimDaCarreiraSocial,
  ConstrangimentoAdulto,
  DesgraçaColetiva,
} from "../../Assets/Arrays/DefaultList";
import DeckSelectorButton from "./Components/DeckSelectorButton/DeckSelectorButton";
import { useDeck } from "../../Context/DeckContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeckSelectorModal from "./Components/DeckSelectorModal/DeckSelectorModal";
import DeckSelectorMenuButton from "./Components/DeckSelectorMenuButton/DeckSelectorMenuButton";
import { FaUserTie, FaRegGrimace } from "react-icons/fa";
import { RiUserUnfollowFill } from "react-icons/ri";
import { FaFire } from "react-icons/fa";
import { BsTornado } from "react-icons/bs";

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
        <Box sx={getCardContainerStyle}>
          <DeckItem
            title="DesafioPadrão"
            questions={DesafioPadrão}
            onClick={() => toggleDeck("DesafioPadrão")}
            isSelected={selectedDecks.includes("DesafioPadrão")}
            icon={<FaRegGrimace size={32} color="#383838" />}
          />
          <DeckItem
            title="ObedeçaOLider"
            questions={ObedeçaOLider}
            background="#556B2F"
            color="#556B2F"
            onClick={() => toggleDeck("ObedeçaOLider")}
            isSelected={selectedDecks.includes("ObedeçaOLider")}
            icon={<FaUserTie size={32} color="#556B2F" />}
          />
          <DeckItem
            title="FimDaCarreiraSocial"
            questions={FimDaCarreiraSocial}
            background="#89CFF0"
            color="#89CFF0"
            onClick={() => toggleDeck("FimDaCarreiraSocial")}
            isSelected={selectedDecks.includes("FimDaCarreiraSocial")}
            icon={<RiUserUnfollowFill size={32} color="#89CFF0" />}
          />
          <DeckItem
            title="DesgraçaColetiva"
            questions={DesgraçaColetiva}
            background="#C5A84D"
            color="#C5A84D"
            onClick={() => toggleDeck("DesgraçaColetiva")}
            isSelected={selectedDecks.includes("DesgraçaColetiva")}
            icon={<BsTornado size={32} color="#C5A84D" />}
          />
          <DeckItem
            title="ConstrangimentoAdulto"
            questions={ConstrangimentoAdulto}
            background="#BC8F8F"
            color="#BC8F8F"
            onClick={() => toggleDeck("ConstrangimentoAdulto")}
            isSelected={selectedDecks.includes("ConstrangimentoAdulto")}
            icon={<FaFire size={32} color="#BC8F8F" />}
          />
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
      />
    </Box>
  );
};

export default DeckSelector;
