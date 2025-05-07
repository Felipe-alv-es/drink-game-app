import { Button } from "@mui/material";

interface DeckSelectorMenuButtonProps {
  handleOpen: () => void;
}

const DeckSelectorMenuButton = ({
  handleOpen,
}: DeckSelectorMenuButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={() => handleOpen()}
      sx={{
        textTransform: "none",
        background: "#383838",
        color: "#fff7ff",
        fontFamily: "kanit",
        fontSize: "20px",
        borderRadius: "16px",
      }}
    >
      {"Filtrar punições"}
    </Button>
  );
};

export default DeckSelectorMenuButton;
