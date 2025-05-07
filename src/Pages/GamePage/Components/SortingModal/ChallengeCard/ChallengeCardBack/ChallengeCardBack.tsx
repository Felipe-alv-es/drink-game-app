import { Paper, Box } from "@mui/material";

//@ts-ignore
import FourEnemy from "../../../../../../Assets/Images/Utils/FourEnemy.png";

const ChallengeCardBack = () => {
  return (
    <Box
      sx={{
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
        position: "absolute",
        width: "95vw",
        height: "80vh",
        borderRadius: "32px",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #6a0dad, #5e2b97, #3e1f63)",
        }}
      >
        <Box
          component="img"
          src={FourEnemy}
          alt="Man avatar generic image"
          sx={{ height: "200px", width: "200px", borderRadius: "200px" }}
        />
      </Paper>
    </Box>
  );
};

export default ChallengeCardBack;
