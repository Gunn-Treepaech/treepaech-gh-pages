import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbars";
import AboutMe from "./components/AboutMeTXT";

export default function App() {
  return (
    <div className="app">
      <Navbars />
      <AboutMe />
    </div>
  );
}
