import React from "react";
import "./Signup.css";
import { useState } from "react";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isButtonDisabled = !(
    fullName &&
    phoneNumber &&
    email &&
    username &&
    password
  );
  const handleEmailFocus = (e) => {
    e.target.setAttribute("autocomplete", "email");
  };
  const handleUsername = (e) => {
    e.target.setAttribute("autocomplete", "name");
  };
  const handlePhoneNumber = (e) => {
    e.target.setAttribute("autocomplete", "phone");
  };
  return (
    <div className="sign">
      <h2>SIGNUP TO BUY & SELL COUPONS</h2>
      <div className="inputs">
        <input
          placeholder="Full Name"
          name="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          onFocus={handleUsername}
          autoComplete="name"
        />
        <input
          placeholder="Phone Numer"
          type="tel"
          name="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onFocus={handlePhoneNumber}
          autoComplete="phone"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleEmailFocus}
          autoComplete="email"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign up</button>
      </div>
      <div className="lower">
        <h3>OR</h3>
      </div>
      <div className="para">
        <p>
          Have an account? <a href="/">LOG IN</a>
        </p>
      </div>
    </div>
  );
}
