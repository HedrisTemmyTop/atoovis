import React from 'react';
import { useState } from "react";
import BarChart from "../components/BarChart";
import '../../src/styles/VendorDash/Graph.css'
// import LineChart from "./components/LineChart";
// import PieChart from "./components/PieChart";
import { Data } from "../utils/data";

function App() {
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Revenue",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#4CC5D2",
        //   "#ecf0f1",
        //   "#50AF95",
        //   "#f3ba2f",
        //   "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div className="bar">
        <BarChart chartData={userData} />
      </div>
      {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
  );
}

export default App;