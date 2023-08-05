// Home.js
import React from "react";
import Box from "@mui/material/Box";
import BarChart from "../components/Charts/BarChart";
import DonutChart from "../components/Charts/DonutChart";
import AreaChart from "../components/Charts/AreaChart";

const Home = () => {
  return (
    <Box sx={{ minHeight: "800px" }}>

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
