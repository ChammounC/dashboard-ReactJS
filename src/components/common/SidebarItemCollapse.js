import { Collapse, ListItemButton, ListItemIcon, ListItemText, Typography,List } from "@mui/material";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";

import SideBarItem from "./SideBarItem";

import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import { useState } from "react";

const SidebarItemCollapse = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return item.sidebarProps ? (
    <>
      <ListItemButton
        key={index}
        onClick={() => setOpen(!open)}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
          paddingY: "12px",
          paddingX: "24px",
        }}
      >
        <ListItemIcon sx={{ color: colorConfigs.sidebar.color }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} index={index} />
              ) : (
                <SideBarItem item={route} index={index} />
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
