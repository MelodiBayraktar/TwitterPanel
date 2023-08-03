import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {chartsMockData} from "../../_mock/charts"

const AreaChart = () => {
  const cities = [...new Set(chartsMockData.map((item) => item.city))];

  const series = cities.map((city) => {
    const genderCounts = {
      Erkek: 0,
      Kadın: 0,
    };

    chartsMockData.forEach((item) => {
      if (item.city === city) {
        genderCounts[item.gender]++;
      }
    });

    return {
      name: city,
      data: [genderCounts.Erkek, genderCounts.Kadın],
    };
  });

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ['Erkek', 'Kadın'],
    },
  };

 

  return (
    <div>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default AreaChart;
