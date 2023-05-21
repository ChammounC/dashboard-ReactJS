import React from "react";
import { Box, ListItemText, Toolbar, Typography } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "../common/Sidebar";

import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "../common/BottomNav";

const MainLayout = () => {
  const location = useLocation();
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>
        <Box
          component="main"
          sx={{
            justifyContent: "space-between",
            flexGrow: 1,
            p: "56px",
            width: `calc(100% - ${sizeConfigs.sidebar.width})`,
            minHeight: "100vh",
            backgroundColor: colorConfigs.mainBg,
          }}
        >
          <Toolbar
            style={{
              padding: "0px",
              minHeight: "0px",
            }}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "48px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "36px",
                letterSpacing: "0.02em",
              }}
            >
              Test_Study
            </Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <AccountCircleIcon sx={{ width: "30px", height: "30px" }} />
              <ListItemText
                // disableTypography
                primary={
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "21px",
                      letterSpacing: "0.015em",
                      flex: "5",
                    }}
                  >
                    Ed Sheeran
                  </Typography>
                }
              />
              <ExpandMoreOutlinedIcon />
            </div>
          </Toolbar>
          <Outlet />
        {location.pathname.includes('/montages')&&<BottomNav />}
        </Box>
    </Box>
  );
};

export default MainLayout;
