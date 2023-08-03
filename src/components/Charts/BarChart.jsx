import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {chartsMockData} from "../../_mock/charts"

const ChartComponent = () => {
  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: chartsMockData.map((data) => data.name), 
    },
  };

  const series = [
    {
      name: 'Age',
      data: chartsMockData.map((data) => data.age), 
    },
  ];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ChartComponent;
