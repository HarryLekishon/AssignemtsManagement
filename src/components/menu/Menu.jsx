import { Link } from "react-router-dom";
import "./menu.css";
function Menu() {
  return (
    <div className="menu">
      <span  className="logoutBtn">

        <Link to="/login" type="submit" >
          Logout
        </Link>
      </span>
    </div>
  );
}

export default Menu;
