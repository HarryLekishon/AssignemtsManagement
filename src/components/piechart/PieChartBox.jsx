// import { useEffect,useState } from "react";
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// import data2 from "../../data/data2";
// import "./pieChartBox.css";

// const PieChartBox = ({ type }) => {
//   const [requestData, SetRequestData] = useState([]);
//   const [statusCounts, SetStatusCounts] = useState({});

//   useEffect(()=>{
//     SetRequestData(data2);
//     const counts ={};
//     data2.forEach((item)=>{
//       const status = item.cat_id;
//       counts[status]= (counts[status] || 0) + 1;
      
      
//     });
//     SetStatusCounts(counts);



   
   

  
//   },[]);
//   console.log("Status/Cat" + statusCounts)
//   const servicerequest = statusCounts['Service request'];
//   // console.log(servicerequest)

//   const customercomplaints = statusCounts['Complaint'];
//   const enhancements = statusCounts['Enhancement'];
//   const systemerrors = statusCounts['Bug'];
//   const totalrequests = "S_requests: " + servicerequest;
//   const totalcomplaints = "Complaints: " + customercomplaints;
//   const totalenhancements = "Enhancements";
//   const totalbugs = "System Bugs: " + systemerrors;
//   const total = requestData.length;
//   const totalcategories = "Total : " + total;
 
//   console.log(total + "tots")

//   let data = [];
//   switch (type){

//     case " per category":
//       data = [
//         { name: totalrequests , value: servicerequest, color: "#0088FE",font: "5px" },
//         { name: totalcomplaints, value: customercomplaints, color: "#00C49F",font: "5px" },
//         { name: totalenhancements, value: enhancements, color: "#00C49F",font: "5px" },
//         { name: totalbugs, value: systemerrors, color: "#00C49F",font: "5px" },
//         { name:totalcategories , value: total, color: "#00C49F",font: "5px" },
//       ];
//       break;
//       case "By status":
//         data = [
//           { name: totalrequests , value: servicerequest, color: "#0088FE",font: "5px" },
//           { name: totalcomplaints, value: customercomplaints, color: "#00C49F",font: "5px" },
//           { name: totalenhancements, value: enhancements, color: "#00C49F",font: "5px" },
//           { name: totalbugs, value: systemerrors, color: "#00C49F",font: "5px" },
//           { name:totalcategories , value: total, color: "#00C49F",font: "5px" },
//         ];
//         break;
//         case " per ongoing projects":
//         data = [
//           { name: totalrequests , value: servicerequest, color: "#0088FE",font: "5px" },
//           { name: totalcomplaints, value: customercomplaints, color: "#00C49F",font: "5px" },
//           { name: totalenhancements, value: enhancements, color: "#00C49F",font: "5px" },
//           { name: totalbugs, value: systemerrors, color: "#00C49F",font: "5px" },
//           { name:totalcategories , value: total, color: "#00C49F",font: "5px" },
//         ];
//         break;
//         default: 
//         break;

//   }


  

//   return (
//     <div className="pieChartBox">
//       <h1>Issue Resolution {type}</h1>
//       <div className="pieChartContainer">
//         <div className="chart">
//           <ResponsiveContainer width="99%" height={300}>
//             <PieChart>
//               <Tooltip
//                 contentStyle={{ background: "white", borderRadius: "5px" }}
//               />
//               <Pie
//                 data={data}
//                 innerRadius={"70%"}
//                 outerRadius={"90%"}
//                 paddingAngle={5}
//                 dataKey="value"
//               >
//                 {data.map((item) => (
//                   <Cell key={item.name} fill={item.color}  />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="options">
//           {data.map((item) => (
//             <div className="option" key={item.name}>
//               <div className="title">
//                 <div className="dot" style={{ background: item.color }} />
//                 <span>{item.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PieChartBox;


// import React, { useEffect, useState } from "react";
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// import "./pieChartBox.css";
// import data2 from "../../data/data2";

// const PieChartBox = ({ type }) => {
//   const [statusCounts, setStatusCounts] = useState({});

//   useEffect(() => {
//     const counts = {};
//     data2.forEach((item) => {
//       const status = item.cat_id;
//       counts[status] = (counts[status] || 0) + 1;
//     });
//     setStatusCounts(counts);
//   }, [data2]);

//   const getStatusCount = (status) => statusCounts[status] || 0;

//   const chartData = [
//     { name: "Service request", value: getStatusCount("Service request"), color: "#0088FE" },
//     { name: "Complaints", value: getStatusCount("Complaint"), color: "#00C49F" },
//     { name: "Enhancements", value: getStatusCount("Enhancement"), color: "#00C49F" },
//     { name: "System Bugs", value: getStatusCount("Bug"), color: "#00C49F" },
//     { name: "Total", value: data2.length, color: "#00C49F" },
//   ];

//   return (
//     <div className="pieChartBox">
//       <h1>Issue Resolution {type}</h1>
//       <div className="pieChartContainer">
//         <div className="chart">
//           <ResponsiveContainer width="99%" height={300}>
//             <PieChart>
//               <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
//               <Pie data={chartData} innerRadius={"70%"} outerRadius={"90%"} paddingAngle={5} dataKey="value">
//                 {chartData.map((item) => (
//                   <Cell key={item.name} fill={item.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="options">
//           {chartData.map((item) => (
//             <div className="option" key={item.name}>
//               <div className="title">
//                 <div className="dot" style={{ background: item.color }} />
//                 <span>{`${item.name}: ${item.value}`}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PieChartBox;






// import React from "react";
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// import "./PieChartBox.css";
// import data2 from "../../data/data2"; // Import the data2 file

// const PieChartBox = ({ type }) => {
//   const chartData = [];

//   if (type === " per category" && data2) {
//     const categoryCounts = {};

//     data2.forEach((item) => {
//       const category = item.cat_id;
//       categoryCounts[category] = (categoryCounts[category] || 0) + 1;
//     });

//     // Convert the category counts into chart data
//     Object.entries(categoryCounts).forEach(([category, count]) => {
//       chartData.push({ name: category, value: count, color: getRandomColor() });
//     });
//   } else if (type === "By status" && data2) {
//     const statusCounts = {};

//     data2.forEach((item) => {
//       const status = item.status_id;
//       statusCounts[status] = (statusCounts[status] || 0) + 1;
//     });

//     // Convert the status counts into chart data
//     Object.entries(statusCounts).forEach(([status, count]) => {
//       chartData.push({ name: status, value: count, color: getRandomColor() });
//     });
//   }

//   // Function to generate random colors for chart segments
//   function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   return (
//     <div className="pieChartBox">
//       <h1>Issue Resolution {type}</h1>
//       <div className="pieChartContainer">
//         <div className="chart">
//           <ResponsiveContainer width="99%" height={300}>
//             <PieChart>
//               <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
//               <Pie data={chartData} innerRadius={"70%"} outerRadius={"90%"} paddingAngle={5} dataKey="value">
//                 {chartData.map((item) => (
//                   <Cell key={item.name} fill={item.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="options">
//           {chartData.map((item) => (
//             <div className="option" key={item.name}>
//               <div className="title">
//                 <div className="dot" style={{ background: item.color }} />
//                 <span>{`${item.name}: ${item.value}`}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PieChartBox;










// import React, { useEffect, useState } from "react";
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// import "./PieChartBox.css";
// import data2 from "../../data/data2"; // Import the data2 file

// const PieChartBox = ({ type }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (type === " per category" && data2) {
//       const categoryCounts = {};

//       data2.forEach((item) => {
//         const category = item.cat_id;
//         categoryCounts[category] = (categoryCounts[category] || 0) + 1;
//       });

//       // Convert the category counts into chart data
//       const categoryChartData = Object.entries(categoryCounts).map(([category, count]) => ({
//         name: category,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(categoryChartData);
//     } else if (type === "By status" && data2) {
//       const statusCounts = {};

//       data2.forEach((item) => {
//         const status = item.status_id;
//         statusCounts[status] = (statusCounts[status] || 0) + 1;
//       });

//       // Convert the status counts into chart data
//       const statusChartData = Object.entries(statusCounts).map(([status, count]) => ({
//         name: status,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(statusChartData);
//     }
//   }, [type]);

//   // Function to generate random colors for chart segments
//   function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   return (
//     <div className="pieChartBox">
//       <h1>Issue Resolution {type}</h1>
//       <div className="pieChartContainer">
//         <div className="chart">
//           <ResponsiveContainer width="99%" height={300}>
//             <PieChart>
//               <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
//               <Pie data={chartData} innerRadius={"70%"} outerRadius={"90%"} paddingAngle={5} dataKey="value">
//                 {chartData.map((item) => (
//                   <Cell key={item.name} fill={item.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="options">
//           {chartData.map((item) => (
//             <div className="option" key={item.name}>
//               <div className="title">
//                 <div className="dot" style={{ background: item.color }} />
//                 <span>{`${item.name}: ${item.value}`}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PieChartBox;






// import React, { useEffect, useState } from "react";
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// import "./PieChartBox.css";
// import data2 from "../../data/data2"; // Import the data2 file

// const PieChartBox = ({ type }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (type === " per category" && data2) {
//       const categoryCounts = {};

//       data2.forEach((item) => {
//         const category = item.cat_id;
//         categoryCounts[category] = (categoryCounts[category] || 0) + 1;
//       });

//       // Convert the category counts into chart data
//       const categoryChartData = Object.entries(categoryCounts).map(([category, count]) => ({
//         name: category,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(categoryChartData);
//     } else if (type === "By status" && data2) {
//       const statusCounts = {  };

//       data2.forEach((item) => {
//         const status = item.status_id;
//         statusCounts[status] = (statusCounts[status] || 0) + 1;
//       });

//       // Convert the status counts into chart data
//       const statusChartData = Object.entries(statusCounts).map(([status, count]) => ({
//         name: status,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(statusChartData);
//     } else if (type === " per ongoing projects" && data2) {
//       const projectCounts = {};

//       data2.forEach((item) => {
//         const project = item.app_id;
//         projectCounts[project] = (projectCounts[project] || 0) + 1;
//       });

//       // Convert the project counts into chart data
//       const projectChartData = Object.entries(projectCounts).map(([project, count]) => ({
//         name: project,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(projectChartData);
//     }
//   }, [type]);

//   // Function to generate random colors for chart segments
//   function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   return (
//     <div className="pieChartBox">
//       <h1>Issue Resolution {type}</h1>
//       <div className="pieChartContainer">
//         <div className="chart">
//           <ResponsiveContainer width="99%" height={300}>
//             <PieChart>
//               <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
//               <Pie data={chartData} innerRadius={"70%"} outerRadius={"90%"} paddingAngle={5} dataKey="value">
//                 {chartData.map((item) => (
//                   <Cell key={item.name} fill={item.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="options">
//           {chartData.map((item) => (
//             <div className="option" key={item.name}>
//               <div className="title">
//                 <div className="dot" style={{ background: item.color }} />
//                 <span>{`${item.name}: ${item.value}`}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PieChartBox;


// import React, { useEffect, useState } from "react";
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// import "./PieChartBox.css";
// import PropTypes from 'prop-types';


// const PieChartBox = ({ type, data }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (type === "Per Category" && data) {
//       const categoryCounts = {};
//       data.forEach((item) => {
//         const category = item.cat_id;
//         categoryCounts[category] = (categoryCounts[category] || 0) + 1;
//       });

//       const categoryChartData = Object.entries(categoryCounts).map(([category, count]) => ({
//         name: category,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(categoryChartData);
//     } else if (type === "By Status" && data) {
//       const statusCounts = {};
//       data.forEach((item) => {
//         const status = item.status_id;
//         statusCounts[status] = (statusCounts[status] || 0) + 1;
//       });

//       const statusChartData = Object.entries(statusCounts).map(([status, count]) => ({
//         name: status,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(statusChartData);
//     } else if (type.startsWith("Per Project:") && data) {
//       const projectId = type.split(":")[1].trim();

//       const projectData = data.filter((item) => item.app_id === projectId);

//       const projectCounts = {};
//       projectData.forEach((item) => {
//         const status = item.status_id;
//         projectCounts[status] = (projectCounts[status] || 0) + 1;
//       });

//       const projectChartData = Object.entries(projectCounts).map(([status, count]) => ({
//         name: status,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(projectChartData);
//     }
//   }, [type, data]);

//   function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   return (
//     <div className="pieChartBox">
//       <h1>Issue Resolution {type}</h1>
//       <div className="pieChartContainer">
//         <div className="chart">
//           <ResponsiveContainer width="99%" height={300}>
//             <PieChart>
//               <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
//               <Pie data={chartData} innerRadius={"70%"} outerRadius={"90%"} paddingAngle={5} dataKey="value">
//                 {chartData.map((item) => (
//                   <Cell key={item.name} fill={item.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="options">
//           {chartData.map((item) => (
//             <div className="option" key={item.name}>
//               <div className="title">
//                 <div className="dot" style={{ background: item.color }} />
//                 <span>{`${item.name}: ${item.value}`}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// PieChartBox.propTypes = {
//   type: PropTypes.string.isRequired,
//   data: PropTypes.array.isRequired,
// };

// export default PieChartBox;






// import React, { useEffect, useState } from "react";
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// import "./PieChartBox.css";
// import PropTypes from 'prop-types';

// const PieChartBox = ({ type, data }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (type === "Per Category" && data) {
//      const categoryCounts = {};
//       data.forEach((item) => {
//         const category = item.cat_id;
//         categoryCounts[category] = (categoryCounts[category] || 0) + 1;
//       });

//       const categoryChartData = Object.entries(categoryCounts).map(([category, count]) => ({
//         name: category,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(categoryChartData);
//     } else if (type === "By Status" && data) {
//          const statusCounts = {};
//       data.forEach((item) => {
//         const status = item.status_id;
//         statusCounts[status] = (statusCounts[status] || 0) + 1;
//       });

//       const statusChartData = Object.entries(statusCounts).map(([status, count]) => ({
//         name: status,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(statusChartData);
//     } else if (type.startsWith("Per") && data) {
//       // Extract project ID from type
//       const projectId = type.replace("Per ", "");

//       // Filter data for the selected project
//       const filteredData = data.filter((item) => item.app_id === projectId);

//       // Calculate counts for different statuses
//       const statusCounts = {
//         new: 0,
//         closed: 0,
//         pending: 0,
//         // Add more statuses as needed
//       };

//       filteredData.forEach((item) => {
//         const status = item.status_id;
//         statusCounts[status] = (statusCounts[status] || 0) + 1;
//       });

//       // Convert the status counts into chart data
//       const statusChartData = Object.entries(statusCounts).map(([status, count]) => ({
//         name: status,
//         value: count,
//         color: getRandomColor(),
//       }));

//       setChartData(statusChartData);
//     }
//   }, [type, data]);

//   // Function to generate random colors for chart segments
//   function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   return (
//     <div className="pieChartBox">
//       <h1>Issue Resolution {type}</h1>
//       <div className="pieChartContainer">
//         <div className="chart">
//           <ResponsiveContainer width="99%" height={300}>
//             <PieChart>
//               <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
//               <Pie data={chartData} innerRadius={"70%"} outerRadius={"90%"} paddingAngle={5} dataKey="value">
//                 {chartData.map((item) => (
//                   <Cell key={item.name} fill={item.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="options">
//           {chartData.map((item) => (
//             <div className="option" key={item.name}>
//               <div className="title">
//                 <div className="dot" style={{ background: item.color }} />
//                 <span>{`${item.name}: ${item.value}`}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// PieChartBox.propTypes = {
//   type: PropTypes.string.isRequired,
//   data: PropTypes.array.isRequired,
// };

// export default PieChartBox;






import React, { useEffect, useState } from "react";
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
