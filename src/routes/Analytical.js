import React from "react";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from "recharts";
import { ProgressBar } from "react-bootstrap";
import { useCommunication } from "../context/data";
import "./Analytical.css"; // Importing the styles

const Analytics = () => {
  // Get companies data from context (assuming companies array is in the state)
  const { state } = useCommunication();
  const companies = state.companies || [];

  // Prepare data for pie and bar charts dynamically based on companies
  const pieData = companies.map((company) => ({
    name: company.name,
    value: company.communicationPeriodicity, // Use communicationPeriodicity for value
  }));

  // Calculate progress for each company (assuming you have logic for progress)
  const getProgress = (company) => {
    return Math.min(company.communicationPeriodicity, 100); // Ensure max 100%
  };

  return (
    <div className="analytics-container">
      <h1>Analytics</h1>

      {/* Pie Chart Section */}
      <div className="chart-container pie-chart-container">
        <h3 className="section-header">Pie Chart Example</h3>
        <PieChart width={400} height={400}>
          <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={150} fill="#8884d8">
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#2E5077" : "#4DA1A9"} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Bar Chart Section */}
      <div className="chart-container bar-chart-container">
        <h3 className="section-header">Bar Chart Example</h3>
        <BarChart width={400} height={300} data={pieData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#4DA1A9" />
        </BarChart>
      </div>

      {/* Progress Bars Section */}
      <div className="progress-bars-container">
        <h3 className="section-header">Company Progress</h3>
        {companies.map((company, index) => (
          <div key={index} className="progress-bar-container">
            <h4>{company.name}</h4>
            <ProgressBar now={getProgress(company)} label={`${getProgress(company)}%`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
