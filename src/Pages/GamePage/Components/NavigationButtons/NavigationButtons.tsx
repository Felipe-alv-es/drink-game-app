import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa6";
import { getButtonStyle } from "./NavigationButtons.styles";

const NavigationButtons = () => {
  return (
    <Button variant="contained" sx={getButtonStyle}>
      {"Feito"} <FaArrowRight size={24} />
    </Button>
  );
};

export default NavigationButtons;
