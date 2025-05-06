import { Button } from "@mui/material";
import { getButtonStyle } from "./PlayerSelectorButton.styles";

interface PlayerSelectorButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PlayerSelectorButton = ({ onClick }: PlayerSelectorButtonProps) => {
  return (
    <Button variant="outlined" sx={getButtonStyle} onClick={onClick}>
      {"Começar"}
    </Button>
  );
};

export default PlayerSelectorButton;
