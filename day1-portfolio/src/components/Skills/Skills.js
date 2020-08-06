import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Skills.css";

const data = {
  labels: ["Red", "Green"],
  datasets: [
    {
      data: [300, 50],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
};

function Skills() {
  return (
    <div className="container">
      <div>
        <div class="donut-chart chart4">
          <div class="quad one"></div>
          <div class="quad two"></div>
          <div class="quad three"></div>
          <div class="quad four"></div>
          <div class="quad top"></div>
          <div class="chart-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
