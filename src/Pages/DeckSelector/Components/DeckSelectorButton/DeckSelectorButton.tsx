import { Button } from "@mui/material";
import { getButtonStyle } from "./DeckSelectorButton.styles";

interface DeckSelectorButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DeckSelectorButton = ({ onClick }: DeckSelectorButtonProps) => {
  return (
    <Button variant="outlined" sx={getButtonStyle} onClick={onClick}>
      {"Começar"}
    </Button>
  );
};

export default DeckSelectorButton;
