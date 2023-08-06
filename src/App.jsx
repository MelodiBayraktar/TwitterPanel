import { useState } from "react";
import SideNav from "./components/Layout/SideNav";
import Home from "./pages/Home";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import LastMessages from "./pages/LastMessages";
import { LoginForm } from "./components/LoginForm";
import Layout from "./components/Layout/Layout";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      {isAuthenticated ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/last-messages" element={<LastMessages />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      ) : (
        <LoginForm onLogin={() => setIsAuthenticated(true)} />
      )}
    </Router>
  );
}

export default App;
