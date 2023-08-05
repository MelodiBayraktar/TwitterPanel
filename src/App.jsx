import * as React from "react";
import SideNav from "./components/Layout/SideNav";
import Home from "./pages/Home";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import LastMessages from "./pages/LastMessages";

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
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/last-messages" element={<LastMessages />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
