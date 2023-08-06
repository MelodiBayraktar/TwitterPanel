import React from "react";
import {Container} from "@mui/material";
import SideNav from "./SideNav";
function Layout({ children }) {
  return (
    <div>
      {" "}
      <SideNav/>
      <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
        {children}
      </Container>
    </div>
  );
}

export default Layout;
