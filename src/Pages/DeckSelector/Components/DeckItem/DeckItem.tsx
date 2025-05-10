import { ReactNode, useState } from "react";
import { Box, Checkbox, Paper, Typography } from "@mui/material";
import { ListTypes } from "../../../../Assets/Arrays/DefaultList";
import {
  getCardAlignStyle,
  getContainerStyle,
  getSelectorContainerStyle,
  getSelectorTitleStyle,
  getTitleStyle,
} from "./DeckItem.styles";
import QuestionButton from "../QuestionButton/QuestionButton";
import DeckModal from "../DeckModal/DeckModal";

interface PlayerInputProps {
  title: string;
  questions: ListTypes[];
  background?: string;
  color?: string;
  onClick?: () => void;
  isSelected?: boolean;
  icon?: ReactNode;
}

const DeckItem = ({
  title,
  questions,
  background,
  color,
  onClick,
  isSelected = false,
  icon,
}: PlayerInputProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Paper sx={getContainerStyle(background)} onClick={onClick}>
        <Typography sx={getTitleStyle(color)}>
          {title
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")}
        </Typography>
        <Box sx={getCardAlignStyle}>
          <Box sx={getSelectorContainerStyle}>
            <Checkbox
              checked={isSelected}
              onChange={() => onClick && onClick()}
              onClick={onClick}
              sx={{
                "& svg": { color: color },
                "&.Mui-checked": {
                  color: "#383838",
                },
              }}
            />
            <Typography sx={getSelectorTitleStyle(color)}>
              {"Selecionar baralho"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "8px",
            }}
          >
            <QuestionButton handleOpen={handleOpen} color={color} />
            {icon}
          </Box>
        </Box>
      </Paper>
      <DeckModal open={open} handleClose={handleClose} questions={questions} />
    </>
  );
};

export default DeckItem;
