export const getContainerStyle = (background?: string) => ({
  padding: "16px",
  borderRadius: "16px",
  // background: background ? background : "",
  borderStyle: "solid",
  borderColor: background ? background : "",
});

export const getTitleStyle = (color?: string) => ({
  fontFamily: "kanit",
  paddingBottom: "16px",
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "600",
  color: color ? color : "#383838",
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
  color: color ? color : "#383838",
});

export const getCardAlignStyle = () => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 2,
});
