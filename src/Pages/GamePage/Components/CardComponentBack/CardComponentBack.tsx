import { Box } from "@mui/material";
import {
  getContainerStyle,
  getFirstColorStyle,
  getSecondColorStyle,
} from "./CardComponentBack.styles";
//@ts-ignore
import Logo from "../../../../Assets/Images/Logo/Logo.png";

const CardComponentBack = () => {
  return (
    <Box sx={getContainerStyle()}>
      <Box sx={getFirstColorStyle()} />
      <Box sx={getSecondColorStyle()} />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Man avatar generic image"
          sx={{ height: "300px", width: "300px", borderRadius: "200px" }}
        />
      </Box>
    </Box>
  );
};

export default CardComponentBack;
