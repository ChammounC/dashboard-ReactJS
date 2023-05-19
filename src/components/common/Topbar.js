import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";

const TopBar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100%-${sizeConfigs.sidebar.width})`,
          ml: sizeConfigs.sidebar.width,
          boxShadow: "unset",
          backgroundColor: colorConfigs.topbar.bg,
          color: colorConfigs.topbar.color,
        }}
      >
        <Toolbar>
        <Typography variant="h6">React sidebar with dropdown</Typography>
      </Toolbar>

      </AppBar>
    </>
  );
};


export default TopBar;