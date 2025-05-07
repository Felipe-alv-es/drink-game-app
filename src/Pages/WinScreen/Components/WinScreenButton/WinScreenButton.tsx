import { Button } from "@mui/material";

interface WinScreenButtonProps {
  handleRestart: () => void;
  disabled?: boolean;
  label?: string;
}

const WinScreenButton = ({
  handleRestart,
  disabled = false,
  label = "Jogar novamente",
}: WinScreenButtonProps) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleRestart}
      disabled={disabled}
      sx={{
        borderRadius: "32px",
        marginTop: "32px",
        background: "#fff7ff",
        color: "#383838",
        textTransform: "none",
        fontSize: "20px",
        paddingX: "32px",
      }}
    >
      {label}
    </Button>
  );
};

export default WinScreenButton;
