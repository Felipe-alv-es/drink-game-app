import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTextStyle, getTipMessageContainer } from "./TipsMessage.styles";
import { TipMessages } from "../../../../Assets/Arrays/TipMessageList";

const TipsMessage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState<"enter" | "exit" | null>("enter");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("exit");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % TipMessages.length);
        setAnimation("enter");
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={getTipMessageContainer}>
      <Typography sx={getTextStyle(animation)}>
        {TipMessages[currentIndex]}
      </Typography>
    </Box>
  );
};

export default TipsMessage;
