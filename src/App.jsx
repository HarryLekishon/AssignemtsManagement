import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import Complaints from "./pages/complaints/Complaints";

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
