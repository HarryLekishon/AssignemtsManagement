import "./login.css";
import waves from "../../assets/Vectors.svg";
import logo from "../../assets/logo-group.svg";

const options = [
  {
    newId: 1,
    id: "personalNo.",
    type: "text",
    labelName: "Enter your Personal No. ",
    placeholder: "Enter your Personal No. ",
    for: "personalNo.",
  },
  {
    newId: 2,
    id: "password",
    type: "password",
    labelName: "Enter your Password ",
    placeholder: "Enter your Personal No. ",
    for: "password",
  },
];
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
              <input
                type="text"
                id="personalNo"
                class="form__field"
                placeholder="Enter Personal No."
              />
              <label for="personalNo" class="form__label">
                Enter Personal No.
              </label>
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
