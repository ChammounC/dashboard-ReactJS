import { Box, Typography, Checkbox } from "@mui/material";
import ChannelComponent from "../../component/ChannelComponent";
import MontageListHeader from "../MontageListHeader/MontageListHeader";

const MapChannels = () => {
  
  const channels = [
    "C3-A2",
    "C4-A1",
    "EOGL-A2",
    "EOGR-A1",
    "EMG",
    "C7D-HDJ",
    "HBB-7HJD",
    "AB-ABCD",
  ];
  return (
    <>
      <MontageListHeader />
      {channels.map((channel,index) => (
        <ChannelComponent key={index} channel={channel} />
      ))}
      <Box
        sx={{
          height: "108px",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          mt: "36px",
          p: "43px 0 43px 56px",
          borderRadius: "8px",
        }}
      >
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "23px",
            mr: "110px",
          }}
        >
          Additional Settings
        </Typography>
        <Box sx={{display:'flex',width:'250px',justifyContent:'space-between'}}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              size="medium"
              sx={{
                "&.Mui-check": { border: "1.5px solid #C4C4C4" },
              }}
            />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "23px",

                color: "#0F0F0F",
              }}
            >
              Spindle
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              size="medium"
              sx={{
                "&.Mui-check": { border: "1.5px solid #C4C4C4" },
              }}
            />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "23px",

                color: "#0F0F0F",
              }}
            >
              Artifacts
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MapChannels;
