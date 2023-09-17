// import { useRef } from "react";
// import HomeBarChart from "../../components/barCharts/HomeBarChart";
// import HomeCard from "../../components/cards/HomeCard";
// import PieChartBox from "../../components/piechart/PieChartBox";
// import "./home.css";

// function Home() {
//   const ref1 = useRef(null);
//   const ref2 = useRef(null);

//   const handleClick = () => {
//     ref1.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   const handleClick2 = () => {
//     ref2.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   return (
//     <div className="homecontainer">
//       <div className="home">
//         <p>Welcome, John Doe</p>
//         <div className="rateBtn">
//           <button onClick={handleClick}>Resolution rate: 95%</button>
//           <button onClick={handleClick2}>Compliance rate: 95%</button>
//         </div>
//       </div>

//       <div className="grid">
//         <HomeCard />
//       </div>
//       <div className="chartsBox">
//         <div className="chartTop">

//           <PieChartBox type=" per category" />
//           <PieChartBox type="By status" />
//         </div>
//         <div className="chartBottom">
//           <div className="pieTop">
//             <PieChartBox type=" per ongoing projects" />
//             <PieChartBox type=" per ongoing projects" />
//             <PieChartBox type=" per ongoing projects" />
//           </div>
//           <div className="barCharts">
//             <div ref={ref1}>
//               <HomeBarChart title="Resolution rate" />
//             </div>

//             <div ref={ref2}>
//               <HomeBarChart title="Compliance rate" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;






// import { useRef, useState } from "react";
// import HomeBarChart from "../../components/barCharts/HomeBarChart";
// import HomeCard from "../../components/cards/HomeCard";
// import PieChartBox from "../../components/piechart/PieChartBox";
// import data2 from "../../data/data2";
// import "./home.css";

// function Home() {
//   const ref1 = useRef(null);
//   const ref2 = useRef(null);

//   const handleClick = () => {
//     ref1.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   const handleClick2 = () => {
//     ref2.current?.scrollIntoView({ behavior: "smooth" });
//   };


//   const [projectData, setProjectData] = useState([]);


   

//   return (
//     <div className="homecontainer">
//       <div className="home">
//         <p>Welcome, John Doe</p>
//         <div className="rateBtn">
//           <button onClick={handleClick}>Resolution rate: 95%</button>
//           <button onClick={handleClick2}>Compliance rate: 95%</button>
//         </div>
//       </div>

//       <div className="grid">
//         <HomeCard />
//       </div>
//       <div className="chartsBox">
//         <div className="chartTop">
//           <PieChartBox type=" per category" />
//           <PieChartBox type="By status" />
//         </div>
//         <div className="chartBottom">
//           <div className="pieTop">
//             {ongoingProjects.map((project, index) => (
//               <PieChartBox key={index} type="per ongoing projects" data={project} />
//             ))}
//           </div>
//           <div className="barCharts">
//             <div ref={ref1}>
//               <HomeBarChart title="Resolution rate" />
//             </div>

//             <div ref={ref2}>
//               <HomeBarChart title="Compliance rate" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;







import React, { useRef, useEffect, useState } from "react";
import HomeBarChart from "../../components/barCharts/HomeBarChart";
import HomeCard from "../../components/cards/HomeCard";
import PieChartBox from "../../components/piechart/PieChartBox";
import "./home.css";

import data2 from "../../data/data2"; // Import the data2 file

function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleClick = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [projectData, setProjectData] = useState([]);

  // Function to identify unique project IDs
  const getUniqueProjectIds = () => {
    const uniqueIds = new Set();
    data2.forEach((item) => {
      uniqueIds.add(item.app_id);
    });
    return Array.from(uniqueIds);
  };

  useEffect(() => {
    // Get unique project IDs
    const uniqueProjectIds = getUniqueProjectIds();

    // Create chart data for each project
    const charts = uniqueProjectIds.map((projectId) => {
      const projectChartData = data2.filter((item) => item.app_id === projectId);
      return { projectId, data: projectChartData };
    });

    // Set the project data
    setProjectData(charts);
  }, []);

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
        {/* Static pie charts */}
        <PieChartBox type="Per Category" data={data2} />
        <PieChartBox type="By Status" data={data2} />
      </div>
      <div className="chartBottom">

      <div className="pieTop">
        <div className="projectScrollContainer">
  {/* Dynamic pie charts for each project */}
  <div className="projectContainer projectGroupContainer">
    {projectData.map((project) => (
      
      <PieChartBox
        key={project.projectId}
        type={`Per ${project.projectId}`}
        data={project.data}
      />
    ))}
  </div>
  </div>
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