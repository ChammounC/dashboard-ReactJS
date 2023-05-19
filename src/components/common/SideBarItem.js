import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";

const SideBarItem = ({ item, index }) => {
  const location = useLocation();

  return item.sidebarProps && item.path ? (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      <div
        style={{
          backgroundColor:
            location.pathname === item.path
              ? "#2CA9E3"
              : colorConfigs.sidebar.bg,
          flex: 1,
        }}
      />
      <ListItemButton
        key={index}
        component={Link}
        to={item.path}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
          paddingY: "12px",
          paddingX: "24px",
          flex: 50,
          backgroundColor:
            location.pathname === item.path
              ? colorConfigs.sidebar.activeBg
              : null,
        }}
      >
        <ListItemIcon sx={{ color: colorConfigs.sidebar.color }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        <Typography>{item.sidebarProps.displayText}</Typography>
      </ListItemButton>
    </div>
  ) : null;
};

export default SideBarItem;
