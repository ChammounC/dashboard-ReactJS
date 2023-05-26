import { Box, Divider } from "@mui/material";
import ProgressBox from "./ProgressBox";
import { useContext } from "react";
import { StepContext } from "../../../context/StepContext";


const StepProgressBar = () => {
  const {step} = useContext(StepContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        height: "137px",
        borderRadius: "8px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProgressBox componentStep="1" content="Upload EDFs" />
        <Divider
          style={{ width: "320px" }}
          variant="middle"
          sx={{
            borderBottomWidth: step > 1 ? "2px" : "1px",
            ml: "-2.8%",
            mr: "-3.6%",
            mt: "-2%",
            bgcolor: step > 1 ? "#10A44B" : "#c4c4c4",
          }}
        />
        <ProgressBox componentStep="2" content="Map Channels" />
        <Divider
          style={{ width: "320px" }}
          variant="middle"
          sx={{
            borderBottomWidth: step > 2 ? "2px" : "1px",
            ml: "-3.5%",
            mr: "-4%",
            mt: "-2%",
            bgcolor: step > 2 ? "#10A4AB" : "#c4c4c4",
          }}
        />
        <ProgressBox componentStep="3" content="Save & Preview" />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "75%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
    </Box>
  );
};

export default StepProgressBar;
