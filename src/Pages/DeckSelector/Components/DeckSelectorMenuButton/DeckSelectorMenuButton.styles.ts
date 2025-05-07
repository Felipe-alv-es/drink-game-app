export const getContainerStyle = () => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
});

export const getTitleStyle = () => ({
  fontFamily: "kanit",
  fontSize: "20px",
  paddingBottom: "16px",
});

export const getTasksStyle = () => ({
  fontFamily: "kanit",
  fontSize: "14px",
  paddingBottom: "8px",
  fontStyle: "italic",
});

export const getButtonStyle = () => ({
  textTransform: "none",
  borderRadius: "32px",
  borderColor: "#383838",
  color: "#383838",
  marginTop: "8px",
});
