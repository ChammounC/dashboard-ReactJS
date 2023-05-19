import { Drawer, List, Toolbar,Stack,  Typography,Divider } from '@mui/material';

import sizeConfigs from '../../configs/sizeConfigs';
import colorConfigs from '../../configs/colorConfigs';
import appRoutes from '../../routes/appRoutes'
import SideBarItem from './SideBarItem';
import SidebarItemCollapse from './SidebarItemCollapse';
import { useState } from 'react';

const Sidebar=()=>{
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sizeConfigs.sidebar.width,
            boxSizing: "border-box",
            borderRight: "0px",
            backgroundColor: colorConfigs.sidebar.bg,
            color:colorConfigs.sidebar.color
          },
        }}
      >
        <List disablePadding>
          <Toolbar>
            <Stack
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="center"
            >
              <Typography
                fontSize="1.5em"
                color="#fff"
                paddingBottom="1em"
                paddingTop="1em"
                fontWeight="500"
              >
                React Test
              </Typography>
            </Stack>
          </Toolbar>
          <Divider
            variant="middle"
            sx={{
              borderBottomWidth: "2px",
              marginBottom: "2em",
              bgcolor: "#4F4F4F",
            }}
          />
          {appRoutes.map((route, index) =>
            route.sidebarProps ? (
                route.child?(
                    <SidebarItemCollapse item={route} index={index}/>
                ):
              <SideBarItem item={route} index={index}/>
            ) : null
          )}
        </List>
      </Drawer>
    );
}

export default Sidebar;