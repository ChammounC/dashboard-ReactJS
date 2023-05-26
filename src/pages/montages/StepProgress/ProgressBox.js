import { Avatar, Box, Typography } from "@mui/material";
import { useContext } from "react";
import { StepContext } from "../../../context/StepContext";
import checkLogo from "../../../assets/images/check.svg";

const ProgressBox = ({ componentStep, content }) => {
  const { step } = useContext(StepContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          height: "50px",
          width: "50px",
          border: `2px solid ${step < componentStep ? "#C4C4C4" : "#10A44B"}`,
          backgroundColor: step > componentStep ? "#10A44B" : "transparent",
        }}
      >
        {step > componentStep ? (
          <img
            src={checkLogo}
            alt="check"
            style={{ height: "26px", width: "26px" }}
          />
        ) : (
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "26px",
              textAlign: "center",
              letterSpacing: "0.02em",
              color: step < componentStep ? "#959595" : "#10A44B",
            }}
          >
            {componentStep}
          </Typography>
        )}
      </Avatar>
      <Typography
        sx={{
          fontWeight: step < componentStep ? 500 : 700,
          fontSize: "18px",
          lineHeight: "23px",
          textAlign: "center",
          letterSpacing: "0.02em",
          color: step < componentStep ? "#8A8A8A" : "#10A44B",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default ProgressBox;
