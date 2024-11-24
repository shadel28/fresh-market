import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleColors = (index) => {
    setActiveIndex(index);
  };

  const menu = [
    { text: "Inventario", icon: <Inventory2Icon /> },
    { text: "Proveedores", icon: <LocalShippingIcon /> },
    { text: "Pedidos", icon: <StoreIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#fff",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <CircleNotificationsIcon
              sx={{
                color: "rgba(191, 191, 191);, 1",
                fontSize: "2.5rem",
              }}
            />
            <Avatar sx={{ bgcolor: "#198754", width: 36, height: 36 }}>
              M
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "#198754" }}
            fontWeight="700"
          >
            Fresh Market
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {menu.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ marginTop: "2rem" }}>
              <ListItemButton onClick={() => toggleColors(index)}>
                <ListItemIcon
                  sx={{
                    color: activeIndex === index ? "#198754" : "#000",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    fontWeight: "700",
                    color: activeIndex === index ? "#198754" : "#000",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box> */}
    </Box>
  );
}
