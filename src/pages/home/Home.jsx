import PieChartBox from "../../components/piechart/PieChartBox";
import "./home.css";
import newRequest from "../../assets/contact_request.svg";
import question from "../../assets/QuestionMark.svg";
import exclmation from "../../assets/ExclamationMark.svg";
import Tick from "../../assets/Tick.svg";
import TotalIcon from "../../assets/TotalIcon.svg";

function Home() {
  return (
    <div className="homecontainer">
      <div className="home">
        <p>Welcome, John Doe</p>
      </div>

      <div className="grid">
        <div className="cardContent" style={{ backgroundColor: "#FFA559" }}>
          <img src={newRequest} alt="" />
          <p>new request</p>
          <p
            style={{
              color: "#BC7235",
              width: "28.449px",
              height: "26.779px",
              marginBottom: "30px",
            }}
          >
            5
          </p>
        </div>
        <div className="cardContent" style={{ backgroundColor: "#F6635C" }}>
          <img src={question} alt="" />
          <p>Pending Request</p>
          <p
            style={{
              color: "#F34E48",
              width: "28.449px",
              height: "26.779px",
              marginBottom: "30px",
            }}
          >
            4
          </p>
        </div>
        <div className="cardContent" style={{ backgroundColor: "#D71313" }}>
          <img src={exclmation} alt="" />
          <p>Overdue Request</p>
          <p
            style={{
              color: "#F21A1A",
              width: "28.449px",
              height: "26.779px",
              marginBottom: "30px",
            }}
          >
            1
          </p>
        </div>
        <div className="cardContent" style={{ backgroundColor: "#45FFCA" }}>
          <img src={Tick} alt="" />
          <p>Closed Request</p>
          <p
            style={{
              color: "#00A576",
              width: "28.449px",
              height: "26.779px",
              marginBottom: "30px",
            }}
          >
            10
          </p>
        </div>
        <div className="cardContent" style={{ backgroundColor: "#62B2FD" }}>
          <img src={TotalIcon} alt="" />
          <p>Total Request</p>
          <p
            style={{
              color: "#3668F1",
              width: "28.449px",
              height: "26.779px",
              marginBottom: "30px",
            }}
          >
            20
          </p>
        </div>
      </div>
      <PieChartBox />
    </div>
  );
}

export default Home;
