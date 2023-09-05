import "./login.css";
import waves from "../../assets/Vectors.svg";
import logo from "../../assets/logo-group.svg";
import Inputs from "./Inputs";

function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="left">
          <form action="post" className="form-container">
            <p className="header">Sign in</p>
            <span className="subtitle">
              Sign in and start generating your reports!
            </span>
            <div className="inputs">
              <Inputs />
            </div>
            <button className="loginBtn">Login</button>
          </form>
        </div>
        <div className="right">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
      <div className="footer">
        <img src={waves} alt="waves" className="waves" />
      </div>
    </div>
  );
}

export default Login;
