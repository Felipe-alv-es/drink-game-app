import { IconButton } from "@mui/material";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface NavigateBackButtonProps {
  color: string;
}

interface NavigateBackButtonProps {
  color: string;
  onBackPress?: () => void;
}

const NavigateBackButton = ({
  color,
  onBackPress,
}: NavigateBackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigate(-1);
    }
  };

  return (
    <IconButton
      sx={{
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 2,
      }}
      onClick={handleClick}
    >
      <FaArrowLeftLong color={color} />
    </IconButton>
  );
};

export default NavigateBackButton;
