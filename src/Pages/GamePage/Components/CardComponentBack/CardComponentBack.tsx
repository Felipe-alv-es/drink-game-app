import { Box } from "@mui/material";
import {
  getContainerStyle,
  getFirstColorStyle,
  getSecondColorStyle,
} from "./CardComponentBack.styles";

const CardComponentBack = () => {
  return (
    <Box sx={getContainerStyle()}>
      <Box sx={getFirstColorStyle()} />
      <Box sx={getSecondColorStyle()} />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          padding: "24px",
          color: "#fff7ff",
          fontFamily: "kanit",
        }}
      >
        Verso da carta
      </Box>
    </Box>
  );
};

export default CardComponentBack;
