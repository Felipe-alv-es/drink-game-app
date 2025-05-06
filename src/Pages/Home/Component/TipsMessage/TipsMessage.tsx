import { Box, Typography } from "@mui/material";

const TipsMessage = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography
        sx={{ fontSize: "12px", fontStyle: "italic", color: "#fff7ff" }}
      >
        Depois de beber varias doses, não é recomendado comer pó de cerâmica
      </Typography>
    </Box>
  );
};

export default TipsMessage;
