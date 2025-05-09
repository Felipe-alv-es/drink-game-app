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
  { option: "😱 Surpresa", completeOption: "😱 Surpresa" },
  { option: "😳 Perguntas", completeOption: "😳 Perguntas" },
  { option: "😖 Pimenta", completeOption: "😖 Pimenta" },
  { option: "🎨 Artes", completeOption: "🎨 Artes" },
];

const SortingModal = ({
  open,
  handleClose,
  quantity,
  advanceToNextPlayer,
}: SortingModalProps) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [spinsLeft, setSpinsLeft] = useState(quantity);
  const [lastResult, setLastResult] = useState<string | null>(null);
  const [showChallengeCard, setShowChallengeCard] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [shuffledIndexes, setShuffledIndexes] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const spinRoulette = () => {
    if (!mustSpin && spinsLeft > 0) {
      let newPrize;
      do {
        newPrize = Math.floor(Math.random() * initialData.length);
      } while (newPrize === prizeNumber && initialData.length > 1);
      setPrizeNumber(newPrize);
      setMustSpin(true);
    }
  };

  useEffect(() => {
    if (open) {
      const indexes = initialData.map((_, i) => i);
      const shuffled = indexes.sort(() => Math.random() - 0.5);
      setShuffledIndexes(shuffled);
      setSpinsLeft(quantity);
      setCurrentIndex(0);
      setIsFirstRender(false);
      setTimeout(spinRoulette, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (
      !mustSpin &&
      initialData.length > 0 &&
      prizeNumber >= 0 &&
      !isFirstRender
    ) {
      setLastResult(initialData[prizeNumber].completeOption);
      setShowChallengeCard(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mustSpin, prizeNumber]);

  useEffect(() => {
    setSpinsLeft(quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleButtonClick = () => {
    if (spinsLeft === 1 || currentIndex >= shuffledIndexes.length - 1) {
      handleClose();
      advanceToNextPlayer();
      setIsFirstRender(true);
    } else {
      setSpinsLeft((prev) => prev - 1);
      setCurrentIndex((prev) => prev + 1);
      spinRoulette();
    }
  };

  return (
    <Modal open={open} sx={getModalStyle}>
      <>
        <Box>
          <RouletteWhell
            mustSpin={mustSpin}
            prizeNumber={prizeNumber}
            rouletteData={initialData}
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
          <ChallengeCard
            setShowChallengeCard={setShowChallengeCard}
            variation={prizeNumber}
          />
        )}
      </>
    </Modal>
  );
};

export default SortingModal;
