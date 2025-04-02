import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
