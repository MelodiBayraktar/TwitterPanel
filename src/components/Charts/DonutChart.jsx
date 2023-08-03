import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { chartsMockData } from "../../_mock/charts";

const DonutChart = () => {

  const chartData = chartsMockData.map((item) => item.age);
  const options = {
    labels: chartsMockData.map((item) => item.city),
  };
  const series = chartsMockData.map((item) => item.age);

  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default DonutChart;
