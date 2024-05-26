import React, { useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbars";
import AboutMeTXT from "./components/AboutMeTXT";
import AboutMePage from "./pages/AboutMePage";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="app">
      <Navbars homeRef={homeRef} aboutRef={aboutRef} />
      <div id="home" ref={homeRef} className="homeSec">
        <AboutMeTXT />
      </div>
      <div id="about" ref={aboutRef}>
        <AboutMePage />
      </div>
    </div>
  );
}
