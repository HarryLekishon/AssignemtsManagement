import { useEffect, useState } from "react";
import newRequest from "../../assets/contact_request.svg";
import question from "../../assets/QuestionMark.svg";
import exclmation from "../../assets/ExclamationMark.svg";
import Tick from "../../assets/Tick.svg";
import TotalIcon from "../../assets/TotalIcon.svg";
import data2 from "../../data/data2";
import {
  closedReqColor,
  newReqColor,
  overdueReqColor,
  pendReqColor,
  totalReqColor,
} from "../../data/data";

function HomeCard() {
  const [requestData, SetRequestData] = useState([]);
  const [statusCounts, SetStatusCounts] = useState({});

  useEffect(() => {
    SetRequestData(data2);
    const counts = {};
    data2.forEach((item) => {
      const status = item.status_id;
      counts[status] = (counts[status] || 0) + 1;
    });
    SetStatusCounts(counts);
  }, []);
  const newrequests = statusCounts["New"];
  const pendingrequests = statusCounts["Pending"];
  const overduerequests = statusCounts["Overdue"];
  const closedrequests = statusCounts["Closed"];
  const allrequests = requestData.length;

  const contents = [
    {
      id: 1,
      icon: newRequest,
      title: "new request",
      total: newrequests,
      color: newReqColor,
    },
    {
      id: 2,
      icon: question,
      title: "Pending Request",
      total: pendingrequests,
      color: pendReqColor,
    },
    {
      id: 3,
      icon: exclmation,
      title: "Overdue Request",
      total: overduerequests,
      color: overdueReqColor,
    },
    {
      id: 4,
      icon: Tick,
      title: "Closed Request",
      total: closedrequests,
      color: closedReqColor,
    },
    {
      id: 5,
      icon: TotalIcon,
      title: "Total Request",
      total: allrequests,
      color: totalReqColor,
    },
  ];

  return (
    <>
      {contents.map((content) => (
        <div
          key={content.id}
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
