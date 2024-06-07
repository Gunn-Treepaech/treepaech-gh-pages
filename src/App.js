//App.js
import React, { useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbars";
import AboutMeTXT from "./components/AboutMeTXT";
import AboutMePage from "./pages/AboutMePage";
import Info from "./components/Info";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const infoRef = useRef(null);

  return (
    <div className="app">
      <Navbars homeRef={homeRef} aboutRef={aboutRef} infoRef={infoRef}/>
      <div ref={homeRef} className="homeSec">
        <AboutMeTXT />
      </div>
      <div>
        <div ref={infoRef} className="infoSec"></div>
        <Info />
      </div>
      <div>
        <div ref={aboutRef} className="aboutSec"></div>
        <AboutMePage />
      </div>
      
    </div>
  );
}
