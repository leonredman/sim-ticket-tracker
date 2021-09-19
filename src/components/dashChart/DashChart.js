import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Doughnut } from "react-chartjs-2";

const ChartTotals = () => {
  const [chartTotals, setChartTotals] = useState([]);

  // Hook to get data and update component

  useEffect(() => {
    //Axios.get("http://localhost:3001/tickets/chart").then((response) => {
    Axios.get("https://simtrak-database.herokuapp.com/tickets/chart").then(
      (response) => {
        //console.log(response.data);   // get request result = response.data as data object

        // setChartTotals response  with function that loops through all the elements in an array
        // to convert it to a single value. An array of values in this case. Notice how the first
        // param is a function and the second is an array. The empty array is the initial value.
        // Take each element in the array and call Object.values on it to get it's values and
        // combine those with the values in the array.

        setChartTotals(
          response.data.reduce(
            (acc, value) => [...acc, ...Object.values(value)],
            []
          )
        );

        //console.log(chartTotals);
      }
    );
  }, []);

  // add chartjs component data inside the scope

  const data = {
    labels: ["New Tickets", "In Porgress", "In QA", "Completed"],
    datasets: [
      {
        label: "# of Tickets",

        //data: [12, 19, 3, 5],  -  set variable axios data to array
        data: chartTotals,

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="totals">
      <Doughnut data={data} />
    </div>
  );
};

export default ChartTotals;
