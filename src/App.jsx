import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import Complaints from "./pages/complaints/Complaints";
import ServiceRequests from "./pages/service-requests/ServiceRequests";
import SystemBugsErrors from "./pages/SystemBugs&Errors/SystemBugs&Errors";
import SystemEnhancements from "./pages/system-enhancements/SystemEnhancements";
import Reports from "./pages/Reports/Reports";
import Report from "./pages/Report/Report";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/customer-complaints",
          element: <Complaints />,
        },
        {
          path: "/service-requests",
          element: <ServiceRequests />,
        },
        // {
        //   path: "/system-bugs-&-errors",
        //   element: <SystemBugsErrors />,
        // },
        {
          path: "/system-enhancements",
          element: <SystemEnhancements />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/reports/:id",
          element: <Report />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
