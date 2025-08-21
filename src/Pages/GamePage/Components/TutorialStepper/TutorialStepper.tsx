import { useState } from "react";
import {
  Dialog,
  DialogContent,
  MobileStepper,
  Button,
  Box,
} from "@mui/material";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
//@ts-ignore
import TutorialImage from "../../../../Assets/Images/Tutorial/10.png";
//@ts-ignore
import TutorialImage1 from "../../../../Assets/Images/Tutorial/11.png";
//@ts-ignore
import TutorialImage2 from "../../../../Assets/Images/Tutorial/12.png";

const TutorialStepper = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const steps = [
    { img: TutorialImage },
    { img: TutorialImage1 },
    { img: TutorialImage2 },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onClose();
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Dialog open={open} sx={{ paddingBottom: "48px" }}>
      <DialogContent
        sx={{
          p: 0,
        }}
      >
        <Box>
          <img
            src={steps[activeStep].img}
            alt={`tutorial-step-${activeStep}`}
            style={{ width: "100%", maxHeight: 450, objectFit: "contain" }}
          />
        </Box>
      </DialogContent>
      <MobileStepper
        variant="dots"
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            <IoCaretForward size={24} />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <IoCaretBack size={24} />
          </Button>
        }
        sx={{
          justifyContent: "center",
          "& .MuiMobileStepper-dots": {
            gap: "6px",
          },
        }}
      />
    </Dialog>
  );
};

export default TutorialStepper;
