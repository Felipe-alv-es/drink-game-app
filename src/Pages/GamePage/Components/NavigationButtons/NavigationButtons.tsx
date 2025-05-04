import React from "react";
import Button from "@mui/material/Button";
import { ImHappy2 } from "react-icons/im";
import { getButtonStyle } from "./NavigationButtons.styles";

const NavigationButtons = () => {
  return (
    <Button variant="contained" sx={getButtonStyle}>
      {"Feito"} <ImHappy2 size={24} />
    </Button>
  );
};

export default NavigationButtons;
