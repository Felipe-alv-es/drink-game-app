import { Box } from "@mui/material";
import { Wheel } from "react-custom-roulette";

interface RouletteWhellProps {
  mustSpin: boolean;
  prizeNumber: number;
  rouletteData: {
    option: string;
    completeOption: string;
  }[];
  setMustSpin: (value: React.SetStateAction<boolean>) => void;
}

const RouletteWhell = ({
  mustSpin,
  prizeNumber,
  rouletteData,
  setMustSpin,
}: RouletteWhellProps) => {
  return (
    <Box sx={{ background: "#fff7ff", borderRadius: "50%" }}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={rouletteData}
        backgroundColors={["#f28b82", "#e57373", "#ba68c8", "#6a1b9a"]}
        textColors={["#fff7ff"]}
        outerBorderColor={"#fff7ff"}
        outerBorderWidth={8}
        innerRadius={20}
        spinDuration={0.2}
        radiusLineColor={"#fff7ff"}
        radiusLineWidth={1}
        fontSize={20}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
    </Box>
  );
};

export default RouletteWhell;
