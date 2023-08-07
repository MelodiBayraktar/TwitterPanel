import React from "react";
import Box from "@mui/material/Box";
import BarChart from "../components/Charts/BarChart";
import DonutChart from "../components/Charts/DonutChart";
import AreaChart from "../components/Charts/AreaChart";
import { LoginForm } from "../components/LoginForm";
import { useAtom } from "jotai";
import { authAtom } from "../auth";

const Home = () => {
  
  const [auth] = useAtom(authAtom);
  if (!auth || !auth.isAuthenticated) {
    return (
      <LoginForm />
    )
  }
  return (
    <Box>

      <Box>
        <BarChart />
      </Box>
      <Box>
        {" "}
        <DonutChart />{" "}
      </Box>
      <Box>
        {" "}
        <AreaChart />{" "}
      </Box>
    </Box>
  );
};

export default Home;
