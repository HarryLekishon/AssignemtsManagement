import HomeBarChart from "../../components/barCharts/HomeBarChart";
import HomeCard from "../../components/cards/homeCard";
import PieChartBox from "../../components/piechart/PieChartBox";
import "./home.css";

function Home() {
  return (
    <div className="homecontainer">
      <div className="home">
        <p>Welcome, John Doe</p>
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
            <HomeBarChart title="Issue resolution by compliance rate" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
