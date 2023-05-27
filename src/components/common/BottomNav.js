import { BottomNavigation, Box, Button, Typography } from "@mui/material";
import React from "react";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StepContext } from "../../context/StepContext";

const BottomNav = () => {
  const {setStep} = useContext(StepContext);
  const location = useLocation();
  const navigate = useNavigate();



  const showBackButton = () => {
    // Check if in first montages Page
    if (location.pathname === "/montages") return;

    return (
      <Button
        variant="outlined"
        onClick={() => {setStep((prevState)=>prevState-1);navigate(-1)}}
        sx={{
          textTransform: "capitalize",
          width: "181px",
          height: "66px",
          alignItems: "center",
          p: "10px 32px",
          justifyContent: "center",
          background: "#EAEAEA",
          border: "1px solid #959595",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#fff",
            border: "1px solid #959595",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "26px",

            textAlign: "center",
            color: "#959595",
          }}
        >
          Back
        </Typography>
      </Button>
    );
  };

  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: "0",
        left: sizeConfigs.sidebar.width,
        height: "112px",
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        p: "56px 23px",
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: "999",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {showBackButton()}
        <Button
          sx={{
            ml: "32px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "26px",
              textAlign: "center",
              color: "#959595",
            }}
          >
            Cancel Montage
          </Typography>
        </Button>
      </Box>
      <Link
        onClick={() => {
          setStep((prevState)=>prevState+1);
        }}
        style={{ textDecoration: "none" }}
        to={`${
          location.pathname === "/montages"
            ? "/montages/mapchannels"
            : location.pathname.includes("mapchannels")
            ? "/montages/previewconfig"
            : "/montages/previewconfig"
        }`}
      >
        <Button
          variant="contained"
          sx={{
            display: "flex",
            width: "181px",
            height: "66px",
            alignItems: "center",
            p: "10px 32px",
            justifyContent: "center",
            background: "#2F7EC7",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "26px",
              textAlign: "center",
              color: " #fff",
            }}
          >
            Next
          </Typography>
        </Button>
      </Link>
    </BottomNavigation>
  );
};

export default BottomNav;
