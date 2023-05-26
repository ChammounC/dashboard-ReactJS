import { Drawer, List,   Typography,Divider,Box } from '@mui/material';

import sizeConfigs from '../../configs/sizeConfigs';
import colorConfigs from '../../configs/colorConfigs';
import appRoutes from '../../routes/appRoutes'
import SideBarItem from './SideBarItem';
import SidebarItemCollapse from './SidebarItemCollapse';

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
            color: colorConfigs.sidebar.color,
            justifyContent: "space-between",
          },
        }}
      >
        <List disablePadding>
          <Typography
            fontSize="28px"
            color="#fff"
            margin="40px 80px"
            fontWeight="700"
lineHeight='36px'
textAlign= 'center'
          >
            React Test
          </Typography>
          <Divider
            variant="middle"
            sx={{
              borderBottomWidth: "2px",
              marginBottom: "48px",
              mx:"25px",
              bgcolor: "#4F4F4F",
            }}
          />
          {appRoutes.map((route, index) =>{
            return route.sidebarProps ? (
              route.child && route.path!=='/montages' ? (
                <SidebarItemCollapse key={index} item={route} index={index} />
              ) : (
                <SideBarItem key={index} item={route} index={index} />
              )
            ) : null}
          )}
        </List>
        <Box
          sx={{
            margin: "60px 26px ",
            padding: "40px",
            backgroundColor: "#02354F",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Typography
            fontWeight="500"
            fontSize="28px"
            lineHeight="36px"
            textAlign="center"
          >
            1650
          </Typography>
          <Typography
            fontWeight="500"
            fontSize="16px"
            lineHeight="21px"
            textAlign="center"
          >
            Total Credits Available
          </Typography>
        </Box>
      </Drawer>
    );
}

export default Sidebar;