import { Dialog, Button, Typography, Box } from "@mui/material";
import { FC } from "react";

interface ExitGameModalProps {
  open: boolean;
  onClose: () => void;
  onConfirmExit: () => void;
}

const ExitGameModal: FC<ExitGameModalProps> = ({
  open,
  onClose,
  onConfirmExit,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography sx={{ fontFamily: "kanit", fontSize: "20px" }}>
          {"Deseja sair do jogo?"}
        </Typography>
        <Typography
          sx={{ fontFamily: "kanit", fontSize: "16px", fontWeight: "300" }}
        >
          {"Isso encerrará sua partida atual. Tem certeza que deseja sair?"}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={onClose}>{"Cancelar"}</Button>
          <Button onClick={onConfirmExit} color="error">
            {"Sair do jogo"}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ExitGameModal;
