import { useState } from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  AppBar,
} from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

export default function SideBar({ currentPath }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation(); // Para obtener la ruta actual

  const toggleColors = (index) => {
    setActiveIndex(index);
  };

  // Menú con rutas asociadas
  const menu = [
    { text: "Inventario", icon: <Inventory2Icon />, route: "/inventory" },
    { text: "Proveedores", icon: <LocalShippingIcon />, route: "/supplier" },
    { text: "Pedidos", icon: <StoreIcon />, route: "/purchases" },
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
            <Link
              to={item.route} // Ruta asociada al menú
              style={{
                textDecoration: "none",
                pointerEvents:
                  location.pathname === item.route ? "none" : "auto", // Evitar clics en la ruta actual
              }}
              key={index}
            >
              <ListItem disablePadding sx={{ marginTop: "2rem" }}>
                <ListItemButton
                  onClick={() => toggleColors(index)}
                  selected={location.pathname === item.route} // Estilo seleccionado
                >
                  <ListItemIcon
                    sx={{
                      color:
                        location.pathname === item.route ? "#198754" : "#000",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      fontWeight: "700",
                      color:
                        location.pathname === item.route ? "#198754" : "#000",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
