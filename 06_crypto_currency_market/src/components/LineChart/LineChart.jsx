import { useContext, useEffect, useState } from "react";
import "./LineChart.css";
import Chart from "react-google-charts";
import { CoinContext } from "../../context/CoinContext";

function LineChart({ historicalData }) {
  const [data, setData] = useState([["Date", "Prices"]]);
  const {currency} = useContext(CoinContext);

  useEffect(() => {
    let dataCopy = [["Date", "Price"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]); // date and price
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  const options = {
    title: "Price (Last 10 Days)",
    curveType: "function",
    legend: { position: "bottom", textStyle: { color: "#fff", fontSize: 13 } },
    backgroundColor: "transparent",
    chartArea: { width: "85%", height: "70%" },
    hAxis: {
      title: "Date",
      textStyle: { color: "#ccc", fontSize: 12 },
      titleTextStyle: { color: "#ccc", fontSize: 14 },
      gridlines: { color: "#333" },
    },
    vAxis: {
      title: `Price ${(currency.name.toUpperCase())}`,
      textStyle: { color: "#ccc", fontSize: 12 },
      titleTextStyle: { color: "#ccc", fontSize: 14 },
      gridlines: { color: "#333" },
    },
    titleTextStyle: { color: "#fff", fontSize: 16, bold: true },
  };

  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      height="100%"
      legendToggle
    />
  );
}

export default LineChart;
