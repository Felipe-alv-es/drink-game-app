import { Box, Modal, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getButtonStyle,
  getModalStyle,
  getTitleStyle,
} from "./SortingModal.styles";
import RouletteWhell from "./RouletteWhell/RouletteWhell";
import ChallengeCard from "./ChallengeCard/ChallengeCard";

interface SortingModalProps {
  open: boolean;
  handleClose: () => void;
  quantity: number;
  advanceToNextPlayer: () => void;
}

const initialData = [
  { text: "😌 Fácil" },
  { text: "😬 Moderado" },
  { text: "😖 Sofrimento" },
  { text: "💀 Desgraçado" },
];

const SortingModal = ({
  open,
  handleClose,
  quantity,
  advanceToNextPlayer,
}: SortingModalProps) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState<
    { option: string; completeOption: string }[]
  >([]);
  const [spinsLeft, setSpinsLeft] = useState(quantity);
  const [lastResult, setLastResult] = useState<string | null>(null);
  const [showChallengeCard, setShowChallengeCard] = useState(false);

  const spinRoulette = () => {
    if (!mustSpin && spinsLeft > 0) {
      const newPrize = Math.floor(Math.random() * rouletteData.length);
      setPrizeNumber(newPrize);
      setMustSpin(true);
    }
  };

  useEffect(() => {
    const formatted = initialData.map((item) => ({
      completeOption: item.text,
      option:
        item.text.length > 30 ? item.text.slice(0, 30) + "..." : item.text,
    }));
    setRouletteData(formatted);
  }, []);

  useEffect(() => {
    if (open && rouletteData.length > 0 && spinsLeft === quantity) {
      spinRoulette();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, rouletteData, spinsLeft, quantity]);

  useEffect(() => {
    if (!mustSpin && rouletteData.length > 0 && prizeNumber >= 0) {
      setLastResult(rouletteData[prizeNumber].completeOption);
      setShowChallengeCard(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mustSpin, prizeNumber]);

  const handleButtonClick = () => {
    if (spinsLeft === 1) {
      handleClose();
      setSpinsLeft(quantity);
      advanceToNextPlayer();
    } else {
      setSpinsLeft((prev) => prev - 1);
      spinRoulette();
    }
  };

  return (
    <Modal open={open} onClose={handleClose} sx={getModalStyle}>
      <>
        <Box>
          <RouletteWhell
            mustSpin={mustSpin}
            prizeNumber={prizeNumber}
            rouletteData={rouletteData}
            setMustSpin={setMustSpin}
          />
          {lastResult && (
            <Typography sx={getTitleStyle}>{lastResult}</Typography>
          )}
          <Button
            onClick={handleButtonClick}
            disabled={mustSpin}
            fullWidth
            variant="contained"
            sx={getButtonStyle}
          >
            {spinsLeft === 1 ? "Completo" : `Giros restantes: ${spinsLeft - 1}`}
          </Button>
        </Box>
        {showChallengeCard && (
          <ChallengeCard setShowChallengeCard={setShowChallengeCard} />
        )}
      </>
    </Modal>
  );
};

export default SortingModal;
