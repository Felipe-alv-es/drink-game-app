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
        background:
          "linear-gradient(135deg, rgba(183, 174, 205, 0.85), rgba(140, 174, 219, 0.85), rgba(37, 128, 179, 0.85))",
      }}
    >
      <Button
        variant="outlined"
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
