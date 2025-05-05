import React from "react";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa6";
import { getButtonStyle } from "./NavigationButtons.styles";

interface NavigationButtonsProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const NavigationButtons = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonsProps
>(({ onClick }, ref) => {
  return (
    <Button variant="contained" sx={getButtonStyle} onClick={onClick}>
      {"Feito"} <FaArrowRight size={24} />
    </Button>
  );
});

export default NavigationButtons;
