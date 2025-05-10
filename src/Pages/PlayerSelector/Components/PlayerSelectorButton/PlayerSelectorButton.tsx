import { Box, Button } from "@mui/material";
import { getButtonStyle } from "./PlayerSelectorButton.styles";

interface PlayerSelectorButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PlayerSelectorButton = ({ onClick }: PlayerSelectorButtonProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        left: 0,
        paddingX: "32px",
        paddingY: "16px",
        bottom: 0,
        background: "rgba(255, 255, 255, 0)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Button
        variant="contained"
        sx={getButtonStyle}
        onClick={onClick}
        fullWidth
      >
        {"Começar"}
      </Button>
    </Box>
  );
};

export default PlayerSelectorButton;
