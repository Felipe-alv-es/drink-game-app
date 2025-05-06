import { Box, Typography } from "@mui/material";

interface WaveMessageProps {
  isVisible: boolean;
  name: string;
}

const WaveMessage = ({ isVisible, name }: WaveMessageProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        transition: "2s",
        bottom: isVisible ? 20 : -200,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "#fff7ff",
          fontSize: "24px",
          fontWeight: "500",
          fontFamily: "kanit",
        }}
      >
        {`${name}, Vire a carta`}
      </Typography>
      <Typography
        sx={{
          color: "#fff7ff",
          fontSize: "16px",
          fontStyle: "italic",
          fontFamily: "kanit",
        }}
      >
        {`Deixe os problemas de amanhã, pro ${name} de amanhã`}
      </Typography>
    </Box>
  );
};

export default WaveMessage;
