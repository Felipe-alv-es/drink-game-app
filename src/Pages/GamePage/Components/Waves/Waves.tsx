import { Box } from "@mui/material";

interface WaveProps {
  isVisible: boolean;
}

export const TopWaves = ({ isVisible }: WaveProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        transition: "2s",
        top: isVisible ? 0 : -90,
        overflow: "hidden",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "200%",
          height: "100%",
          animation: isVisible
            ? "waveFadeInSlideDown 1s ease-out forwards, waveMove 5s linear infinite"
            : "none",
          animationDelay: "0s, 1s",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e07b7b"
            fillOpacity="1"
            d="M0,64L60,58.7C120,53,240,43,360,53.3C480,64,600,96,720,101.3C840,107,960,85,1080,80C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </Box>

      <style>
        {`
          @keyframes waveMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes waveFadeInSlideDown {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export const BottomWaves = ({ isVisible }: WaveProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        transition: "2s",
        bottom: isVisible ? -7 : -200,
        overflow: "hidden",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "200%",
          height: "100%",
          animation: isVisible
            ? "waveFadeInSlideUp 1s ease-out forwards, waveMove 5s linear infinite"
            : "none",
          animationDelay: "0s, 1s",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 380">
          <path
            fill="#8caedb"
            fillOpacity="1"
            d="M0,64L60,58.7C120,53,240,43,360,53.3C480,64,600,96,720,101.3C840,107,960,85,1080,80C1200,75,1320,85,1380,90.7L1440,96L1440,420L1380,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z"
          />
        </svg>
      </Box>

      <style>
        {`
          @keyframes waveMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes waveFadeInSlideUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};
