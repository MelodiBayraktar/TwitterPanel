import * as React from "react";
import {
  CssBaseline,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import   GroupIcon   from "@mui/icons-material/Group";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import EmailIcon from '@mui/icons-material/Email';
import { NavLink } from "react-router-dom";
const drawerWidth = 220;

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: "#454654", // Text rengi
  textDecoration: "none",
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
  display: "flex",
  "&.active": {
    color: "#1B76D2",
  },
  "& .MuiListItemIcon-root": {
    color: "#1B76D2", // İkonları mavi yapmak için
  },
}));
function SideNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebars = [
    {
      name: "Dashboard",
      icon: <ArtTrackIcon />,
      to: "/",
    },
    {
      name: "Users",
      icon: <GroupIcon />,
      to: "/users",
    },
    {
      name: "Last Messages",
      icon: <EmailIcon />,
      to: "/last-messages",
    },
  ];

  const drawer = (
    <div>
      <Typography
        variant="h5"
        sx={{
          py: 2,
          pl: 1,
          backgroundColor: "#1B76D2",
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Welcome{" "}
      </Typography>
      <Divider />
      <List>
        {sidebars.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <StyledNavLink to={item.to}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                </Box>
                <Box>{item.name}</Box>
              </StyledNavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            width: drawerWidth, 
            flexShrink: 0, 
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
   
    </Box>
  );
}

export default SideNav;
