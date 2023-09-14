import { useRef } from "react";
import HomeBarChart from "../../components/barCharts/HomeBarChart";
import HomeCard from "../../components/cards/HomeCard";
import PieChartBox from "../../components/piechart/PieChartBox";
import "./home.css";

function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleClick = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="homecontainer">
      <div className="home">
        <p>Welcome, John Doe</p>
        <div className="rateBtn">
          <button onClick={handleClick}>Resolution rate: 95%</button>
          <button onClick={handleClick2}>Compliance rate: 95%</button>
        </div>
      </div>

      <div className="grid">
        <HomeCard />
      </div>
      <div className="chartsBox">
        <div className="chartTop">
          <PieChartBox type=" per category" />
          <PieChartBox type="By status" />
        </div>
        <div className="chartBottom">
          <div className="pieTop">
            <PieChartBox type=" per ongoing projects" />
            <PieChartBox type=" per ongoing projects" />
            <PieChartBox type=" per ongoing projects" />
          </div>
          <div className="barCharts">
            <div ref={ref1}>
              <HomeBarChart title="Resolution rate" />
            </div>

            <div ref={ref2}>
              <HomeBarChart title="Compliance rate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
