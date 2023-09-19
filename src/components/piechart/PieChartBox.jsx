import  { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./PieChartBox.css";
import PropTypes from "prop-types";

const PieChartBox = ({ type, data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (type === "Per Category" && data) {
      const categoryCounts = {};
      data.forEach((item) => {
        const category = item.cat_id;
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      });

      const categoryChartData = Object.entries(categoryCounts).map(
        ([category, count]) => ({
          name: category,
          value: count,
          color: getRandomColor(),
        })
      );

      setChartData(categoryChartData);
    } else if (type === "By Status" && data) {
      const statusCounts = {};
      data.forEach((item) => {
        const status = item.status_id;
        statusCounts[status] = (statusCounts[status] || 0) + 1;
      });

      const statusChartData = Object.entries(statusCounts).map(
        ([status, count]) => ({
          name: status,
          value: count,
          color: getRandomColor(),
        })
      );

      setChartData(statusChartData);
    } else if (type.startsWith("Per") && data) {
      // Extract project ID from type
      const projectId = type.replace("Per ", "");

      // Filter data for the selected project
      const filteredData = data.filter((item) => item.app_id === projectId);

      // Calculate counts for different statuses
      const statusCounts = {
        new: 0,
        closed: 0,
        pending: 0,
        // Add more statuses as needed
      };

      filteredData.forEach((item) => {
        const status = item.status_id;
        statusCounts[status] = (statusCounts[status] || 0) + 1;
      });

      // Convert the status counts into chart data
      const statusChartData = Object.entries(statusCounts).map(
        ([status, count]) => ({
          name: status,
          value: count,
          color: getRandomColor(),
        })
      );

      setChartData(statusChartData);
    }
  }, [type, data]);

  // Function to generate random colors for chart segments
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="projectContainer">
    <div className="pieChartBox">
      <h1>Issue Resolution {type}</h1>
      <div className="pieChartContainer">
        <div className="chart">
          <ResponsiveContainer width="99%" height={300}>
            <PieChart>
              <Tooltip
                contentStyle={{ background: "white", borderRadius: "5px" }}
              />
              <Pie
                data={chartData}
                innerRadius={"70%"}
                outerRadius={"90%"}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="options">
          {chartData.map((item) => (
            <div className="option" key={item.name}>
              <div className="title">
                <div className="dot" style={{ background: item.color }} />
                <span>{`${item.name}: ${item.value}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

PieChartBox.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default PieChartBox;
