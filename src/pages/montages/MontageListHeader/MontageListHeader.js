import { Box,Typography } from "@mui/material";

const MontageListHeader=()=>{
    return (
      <Box
        sx={{
          pt: "40px",
          pb: "40px",
          borderRadius: "3px",
        }}
      >
        <Box
          sx={{
            height: "63px",
            backgroundColor: "#E5F3FF",
            display: "flex",
            justifyContent: "flex-start",
            p: "20px 512px 20px 56px",
          }}
        >
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "23px",
              flex: "2.8",
              color: "#0F0F0F",
            }}
          >
            Channel
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "23px",
              flex: "4.5",
              color: "#0F0F0F",
            }}
          >
            Primary Channel (default select)
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "18px",
              flex: "3.5",
              lineHeight: "23px",
              color: "#0F0F0F",
            }}
          >
            Reference Channel (default N/A)
          </Typography>
        </Box>
        <Box
          sx={{
            width:'100px',
            flex: "3",
          }}
        ></Box>
      </Box>
    );
}

export default MontageListHeader;