// Home.js
import React from "react";
import Box from "@mui/material/Box";
import BarChart from "../components/Charts/BarChart";
import DonutChart from "../components/Charts/DonutChart";
import AreaChart from "../components/Charts/AreaChart";

const Home = () => {
  return (
    <Box sx={{ minHeightheight: "800px" }}>
      {" "}
      {/* Örnek olarak 500 piksel yükseklik veriyoruz */}
      {/* Burada diğer içeriğinizi ekleyin */}
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
