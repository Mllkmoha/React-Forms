import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function handleSubmit(event) {
    // event is the form submission event
    event.preventDefault(); // prevent the default behavior of the form

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const emailIsValid = enteredEmail.includes("@");
    const passwordIsValid = enteredPassword.trim().length >= 6;

    if (!emailIsValid || !passwordIsValid) {
      setEmailIsInvalid(!emailIsValid);
      setPasswordIsInvalid(!passwordIsValid);
      return;
    }

    setEmailIsInvalid(false);
    setPasswordIsInvalid(false);

    console.log("Sending HTTP request...");
  }

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* onSubmit is the form submission event handler */}
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            ref={emailInputRef}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            ref={passwordInputRef}
          />
          <div className="control-error">
            {passwordIsInvalid && <p>Please enter a valid password.</p>}
          </div>
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
