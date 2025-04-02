import React, { useState } from "react";
import "./styles.css";

function Login() {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");

  const isButtonDisabled = !(userInput && password);
  const handlePhoneNumber = (e) => {
    e.target.setAttribute("autocomplete", "phone");
  };

  return (
    <div className="outer">
      <h1>COUPON HUB!</h1>
      <div className="input">
        <input
          className="login1"
          type="tel"
          placeholder="Phone Number, Email or User ID"
          name="phone"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onFocus={handlePhoneNumber}
          autoComplete="phone"
        />
        <input
          className="login2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isButtonDisabled}>Login</button>
        <h3>OR</h3>
      </div>
      <div className="para">
        <p>
          New to Our Site? <a href="/Signup">SIGN UP</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
