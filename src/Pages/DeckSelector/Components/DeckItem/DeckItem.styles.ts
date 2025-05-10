export const getContainerStyle = (background?: string) => ({
  padding: "16px",
  borderRadius: "16px",
  borderStyle: "solid",
  borderColor: background ? background : "#4c4c4c",
});

export const getTitleStyle = (color?: string) => ({
  fontFamily: "kanit",
  paddingBottom: "16px",
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "600",
  color: color ? color : "#4c4c4c",
});

export const getQuestionStyle = () => ({
  fontFamily: "kanit",
  fontWeight: "300",
});

export const getSelectorContainerStyle = () => ({
  display: "flex",
  alignItems: "center",
});

export const getSelectorTitleStyle = (color?: string) => ({
  fontFamily: "kanit",
  fontWeight: "300",
  color: color ? color : "#4c4c4c",
});

export const getCardAlignStyle = () => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 2,
});
