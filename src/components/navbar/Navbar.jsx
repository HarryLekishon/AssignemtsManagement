import "./navbar.css";
import kralogo from "../../assets/KRA.svg";
import { NavLink } from "react-router-dom";
import { menu } from "../../data/data";

function Navbar() {
  return (
    <div className="nav">
      <div className="top">
        <img src={kralogo} alt="kra-logo" className="nav-logo" />
      </div>
      <div className="bottom">
        <div className="linkContainer">
          {menu.map((item) => (
            <div className="item" key={item.id}>
              <span className="title">{item.title}</span>
              {item.listItems.map((listItem) => (
                <NavLink
                  to={listItem.url}
                  className="listItem"
                  key={listItem.id}
                >
                  <img src={listItem.icon} alt="" />
                  <span className="listItemTitle">{listItem.title}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
