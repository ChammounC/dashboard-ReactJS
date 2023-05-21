import { Avatar, Box, Typography } from "@mui/material";

const ProgressBox = ({ step, content }) => {
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
          border: "2px solid #10A44B",
          backgroundColor: "transparent",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "26px",
            textAlign: "center",
            letterSpacing: "0.02em",
            color: "#10A44B",
          }}
        >
          {step}
        </Typography>
      </Avatar>
      {/* <Typography
        sx={{
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "23px",
          textAlign: "center",
          letterSpacing: "0.02em",
          color: "#10A44B",
        }}
      >
        {content}
      </Typography> */}
    </Box>
  );
};

export default ProgressBox;
