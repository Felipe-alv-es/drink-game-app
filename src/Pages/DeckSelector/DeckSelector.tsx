import { Box, Typography } from "@mui/material";
import { getContainerStyle, getTitleStyle } from "./DeckSelector.styles";
import DeckItem from "./Components/DeckItem/DeckItem";
import { DesafioPadrão, ObedeçaOLider } from "../../Assets/Arrays/DefaultList";
import DeckSelectorButton from "./Components/DeckSelectorButton/DeckSelectorButton";
import { useDeck } from "../../Context/DeckContext";
import { useNavigate } from "react-router-dom";

const DeckSelector = () => {
  const navigate = useNavigate();
  const { toggleDeck, selectedDecks } = useDeck();

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
      <DeckSelectorButton onClick={() => navigate("/game-page")} />
    </Box>
  );
};

export default DeckSelector;
