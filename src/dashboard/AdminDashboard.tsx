import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Avatar, Tooltip } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Route, Routes, useNavigate } from "react-router-dom";

import AccessoriesPage from "../pages/Accessories";
import BlogPage from "@/pages/Blogs";
import Orders from "@/pages/Orders";
import RapiringRequests from "@/pages/RapiringRequests";
import Brands from "@/pages/Brands";
import Notifications from "@/pages/Notifications";
import Dashboard from "@/pages/Dashboard";
import AccessoriesForm from "@/pages/AccessoriesForm";
import BlogsForm from "@/pages/BlogsForm";
import BlogData from "@/pages/Blogsdata";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import DevicesIcon from "@mui/icons-material/Devices";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BuildIcon from "@mui/icons-material/Build";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UpdateAccessories from "@/pages/UpdateAccessories";
import ServicesPage from "@/pages/Services";
import ClosedDaysPage from "@/pages/CloseDay";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import HandymanIcon from "@mui/icons-material/Handyman";
import BusinessIcon from "@mui/icons-material/Business";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

interface RouteItem {
  name: string;
  path: string;
  element: React.ReactNode;
  icon: React.ReactElement;
}

interface CustomAppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 260;

const routes1: RouteItem[] = [
  {
    name: "Dashboard",
    path: "Dashboard",
    element: <Dashboard />,
    icon: <DashboardIcon />,
  },
  {
    name: "Blogs",
    path: "Blogsdata",
    element: <BlogData />,
    icon: <MenuBookIcon />, // reading/blogs
  },
  {
    name: "Orders",
    path: "Orders",
    element: <Orders />,
    icon: <ShoppingCartCheckoutIcon />, // orders/cart
  },
  {
    name: "Repairing Requests",
    path: "RepairingRequests",
    element: <RapiringRequests />,
    icon: <HandymanIcon />, // repair work
  },
  {
    name: "Brands",
    path: "Brands",
    element: <Brands />,
    icon: <BusinessIcon />, // brands/companies
  },
  {
    name: "Accessories",
    path: "updateAccessories",
    element: <UpdateAccessories />,
    icon: <HeadphonesIcon />, // accessories/items
  },
  { 
    name: "CloseDays",
    path: "CloseDay",
    element: <ClosedDaysPage />,
    icon: <EventBusyIcon />, // closed/unavailable days
  },
  { 
    name: "Services",
    path: "Services",
    element: <ServicesPage />,
    icon: <MiscellaneousServicesIcon />, // services
  },
  {
    name: "Notifications",
    path: "Notifications",
    element: <Notifications />,
    icon: <NotificationsActiveIcon />,
  },
];

/* =====================================
   Mixins
===================================== */
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#fdfdfd",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  backgroundColor: "#fdfdfd",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

/* =====================================
   Styled Components
===================================== */
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<CustomAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#ffffff",
  color: "#1976d2",
  boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(!open ? closedMixin(theme) : openedMixin(theme)),
  "& .MuiDrawer-paper": open ? openedMixin(theme) : closedMixin(theme),
}));

/* =====================================
   Component
===================================== */
export default function AdminDashboard(): JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const navigateHandler = (path: string) => navigate(path);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 3,
              color: "#1976d2",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Typography variant="h5" noWrap sx={{ flexGrow: 1, fontWeight: 600 }}>
            TECHOUTLET LTD
          </Typography>

          <Tooltip title="Logout">
            <IconButton
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              sx={{ color: "#1976d2" }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                py: 2,
              }}
            >
              <img
                src="/logo.gif"
                alt="Logo"
                style={{ width: 80, height: 80, borderRadius: "50%" }}
              />
            </Box>
          )}
          <IconButton onClick={handleDrawerClose} sx={{ color: "#1976d2" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {routes1.map((route, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => navigateHandler(route.path)}
                sx={{
                  borderRadius: 2,
                  my: 0.5,
                  mx: 1,
                  "&:hover": { backgroundColor: "#e3f2fd" },
                }}
              >
                <ListItemIcon sx={{ color: "#1976d2", minWidth: 40 }}>
                  {React.cloneElement(route.icon, { fontSize: "medium" })}
                </ListItemIcon>
                <ListItemText
                  primary={route.name}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main */}
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <DrawerHeader />
        <Routes>
          {routes1.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Box>
    </Box>
  );
}
