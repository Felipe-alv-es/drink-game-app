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
        background: "#4c4c4c",
        borderStyle: "solid",
        color: "#fff7ff",
        fontFamily: "kanit",
        fontSize: "16px",
        borderRadius: "16px",
      }}
    >
      {"Filtrar punições"}
    </Button>
  );
};

export default DeckSelectorMenuButton;
