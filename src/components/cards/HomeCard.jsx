import newRequest from "../../assets/contact_request.svg";
import question from "../../assets/QuestionMark.svg";
import exclmation from "../../assets/ExclamationMark.svg";
import Tick from "../../assets/Tick.svg";
import TotalIcon from "../../assets/TotalIcon.svg";
const contents = [
  { icon: newRequest, title: "new request", total: 5, color: "#FFA559" },
  { icon: question, title: "Pending Request", total: 4, color: "#F6635C" },
  { icon: exclmation, title: "Overdue Request", total: 1, color: "#D71313" },
  { icon: Tick, title: "Closed Request", total: 10, color: "#45FFCA" },
  { icon: TotalIcon, title: "Total Request", total: 20, color: "#62B2FD" },
];
function HomeCard() {
  return (
    <>
      {contents.map((content) => (
        <div
          className="cardContent"
          style={{ backgroundColor: `${content.color}` }}
        >
          <img src={content.icon} alt="" />
          <p>{content.title}</p>
          <p
            style={{
              color: "white",
              width: "28.449px",
              height: "26.779px",
              marginBottom: "30px",
            }}
          >
            {content.total}
          </p>
        </div>
      ))}
    </>
  );
}

export default HomeCard;
