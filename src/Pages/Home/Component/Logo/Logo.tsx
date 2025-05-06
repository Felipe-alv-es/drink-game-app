import { Box } from "@mui/material";
//@ts-ignore
import Logo from "../../../../Assets/Images/Logo/Logo.png";

const HomeLogo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70%",
      }}
    >
      <Box
        component="img"
        src={Logo}
        alt="Man avatar generic image"
        sx={{ height: "300px", width: "300px", borderRadius: "200px" }}
      />
    </Box>
  );
};

export default HomeLogo;
