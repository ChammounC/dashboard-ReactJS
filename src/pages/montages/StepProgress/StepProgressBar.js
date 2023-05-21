import { Box, Divider } from "@mui/material";
import ProgressBox from "./ProgressBox";


const StepProgressBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        height: "137px",
        borderRadius: "8px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ProgressBox step="1" content="Upload EDFs" />
      <Divider
        style={{ width: "320px"}}
        variant="middle"
        sx={{
          borderBottomWidth: "1px",
          ml: "0%",
          mr: "0%",
          bgcolor: "#c4c4c4",
        }}
      />
      <ProgressBox step="2" content="Map Channels" />
      <Divider
        style={{ width: "320px" }}
        variant="middle"
        sx={{
          borderBottomWidth: "1px",
          ml: "0%",
          mr: "0%",
          bgcolor: "#c4c4c4",
        }}
      />
      <ProgressBox step="3" content="Save & Preview" />
    </Box>
  );
};

export default StepProgressBar;
