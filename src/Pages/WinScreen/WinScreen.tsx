import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { Player } from "../../Context/PlayersContext";
import { usePlayers } from "../../Context/PlayersContext";
import { useDeck } from "../../Context/DeckContext";

const WinScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearPlayers, setMaxPoints } = usePlayers();
  const { selectedDecks, toggleDeck } = useDeck();

  const winner: Player | undefined = location.state?.winner;

  const handleRestart = () => {
    clearPlayers();
    setMaxPoints(50);

    selectedDecks.forEach((deck) => toggleDeck(deck));

    localStorage.removeItem("players");

    navigate("/");
  };

  if (!winner) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h5" gutterBottom>
          Nenhum vencedor encontrado.
        </Typography>
        <Button variant="contained" onClick={handleRestart}>
          Voltar para o início
        </Button>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor={winner.color}
      color="#fff"
      px={4}
    >
      <Typography variant="h2" gutterBottom>
        🎉 {winner.name} venceu!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Com {winner.points} pontos!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleRestart}
        sx={{ mt: 4 }}
      >
        Jogar novamente
      </Button>
    </Box>
  );
};

export default WinScreen;
