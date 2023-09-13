import { useRef } from "react";
import HomeBarChart from "../../components/barCharts/HomeBarChart";
import HomeCard from "../../components/cards/homeCard";
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
          <button onClick={handleClick}>resolution rate</button>
          <button onClick={handleClick2}>compliance rate</button>
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
            {" "}
            <span ref={ref1}>
              <HomeBarChart title="Resolution rate" />
            </span>
            <span ref={ref2}>
              <HomeBarChart title="compliance rate" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
