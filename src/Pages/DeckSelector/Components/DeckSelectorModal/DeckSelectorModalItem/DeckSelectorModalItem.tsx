import { Box, Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDeck } from "../../../../../Context/DeckContext";

interface DeckSelectorModalItemProps {
  text: string;
  icon: string;
}

const DeckSelectorModalItem = ({ text, icon }: DeckSelectorModalItemProps) => {
  const { category, addCategory, removeCategory } = useDeck();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(category.includes(text));
  }, [category, text]);

  const handleToggle = () => {
    if (checked) {
      removeCategory(text);
    } else {
      addCategory(text);
    }
    setChecked(!checked);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontFamily: "kanit", fontWeight: "500" }}>
        {icon + text}
      </Typography>
      <Checkbox checked={checked} onChange={handleToggle} />
    </Box>
  );
};

export default DeckSelectorModalItem;
