import { Box, Typography } from "@mui/material";
import ChannelComponent from "../component/ChannelComponent";
import MontageListHeader from "./MontageListHeader/MontageListHeader";
import { ChannelContext } from "../../context/ChannelContext";
import { useContext } from "react";

const PreviewConfigPage = () => {
    const {channelData}=useContext(ChannelContext);
    console.log('channelData:',channelData);
  const channels = [
    "C3-A2",
    "C4-A1",
    "EOGL-A2",
  ];
  return (
    <>
      <MontageListHeader />
      {channels.map((channel) => (
        <ChannelComponent channel={channel} />
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
            fontSize: "20px",
            lineHeight: "26px",
            color: "#8A8A8A",
            mr:'50px'
          }}
        >
          Output Format:
        </Typography>
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "26px",
            color: "#0F0F0F",
          }}
        >
          Wanombi.xml
        </Typography>
      </Box>
    </>
  );
};

export default PreviewConfigPage;
