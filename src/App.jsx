import * as React from "react";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <SideNav />{" "}
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 8, overflowY: "auto", m: 2 }}
        >
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
