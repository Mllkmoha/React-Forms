import Input from "./Input.jsx";
import { Link } from "react-router-dom";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    handleInputFocus: handleEmailFocus,

    hasError: emailHasError,
  } = useInput("", (value) => isNotEmpty(value) && isEmail(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    handleInputFocus: handlePasswordFocus,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    // event is the form submission event
    event.preventDefault(); // prevent the default behavior of the form

    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailHasError, passwordHasError);
    console.log("Sending HTTP request...");
  }

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* onSubmit is the form submission event handler */}
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          onBlur={handleEmailBlur}
          onFocus={handleEmailFocus}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          onBlur={handlePasswordBlur}
          onFocus={handlePasswordFocus}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password."}
        />
      </div>
      <p className="form-actions">
        <Link className="button button-flat" to="/signup">
          Sign up
        </Link>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
