import React from "react";
import {Container, Box, CssBaseline} from "@mui/material";
import SideNav from "./SideNav";
function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
    <CssBaseline />
      {" "}
      <SideNav/>
      <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
