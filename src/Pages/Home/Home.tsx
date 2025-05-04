import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h1">Tela de início</Typography>
      <Button onClick={() => navigate("/game-page")}>
        Ir pra tela seguinte
      </Button>
    </Box>
  );
};

export default Home;
