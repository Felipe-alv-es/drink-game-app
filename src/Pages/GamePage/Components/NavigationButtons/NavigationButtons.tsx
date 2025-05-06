import React from "react";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa6";
import { getButtonStyle } from "./NavigationButtons.styles";

interface NavigationButtonsProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  babyMode: boolean;
}

export const NavigationButtons = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonsProps
>(({ onClick, babyMode }, ref) => {
  return (
    <Button variant="contained" sx={getButtonStyle} onClick={onClick}>
      {babyMode ? "Castigo" : "Feito"} <FaArrowRight size={24} />
    </Button>
  );
});

export default NavigationButtons;
