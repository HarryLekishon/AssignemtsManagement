import "./login.css";
function Inputs() {
  return (
    <>
      <div class="field">
        <input
          class="field__input"
          type="text"
          placeholder="Enter Personal No."
        />
        <p class="field__label">Personal No.</p>
      </div>{" "}
      <div class="field">
        <input class="field__input" type="password" placeholder="Password" />
        <p class="field__label">Password</p>
      </div>
    </>
  );
}

export default Inputs;
