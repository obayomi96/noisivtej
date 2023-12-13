import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const LogisticsChart = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    data: [
      { asset: "China", amount: 60000 },
      { asset: "Cocoa exports", amount: 40000 },
      { asset: "West Africa", amount: 7000 },
      { asset: "Ghana", amount: 5000 },
      { asset: "Europe ", amount: 30000 },
    ],
    title: {
      text: "Quick overview of your logistics",
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
      },
    ],
  });

  return <AgChartsReact options={options} />;
};

export default LogisticsChart;
