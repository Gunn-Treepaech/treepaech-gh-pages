import React, { useState } from "react";
import "./AboutMePage.css";
import CardKitchenSink from "../components/CardKitchenSink";
import "bootstrap/dist/css/bootstrap.min.css";
import InternshipPage from "./InternshipPage";

// Images
import Internship from "../image/Internship.jpg";
import cat from "../image/cat3.jpeg";

export default function AboutMe() {
  const [showInternship, setShowInternship] = useState(false);

  const handleInternshipClick = () => {
    setShowInternship(false);
  };

  const handleCardClick = () => {
    setShowInternship(true);
  };

  return (
    <>
      <div className="aboutSec">
        <h1>My Experiences</h1>
      </div>
      <div className="cardShows">
        {!showInternship ? (
          <>
            <CardKitchenSink
              titleName={"Internship (Programmer)"}
              cardText={
                'Developed a website to display and store IoT device data. Assisted in training on IoT control system design and installation. Tested, improved, and corrected code examples in the book "Developing IoT on ESP32 Microcontroller with MicroPython."'
              }
              cardImg={Internship}
              className="card"
              onButtonClick={handleCardClick}
            />
            <CardKitchenSink
              titleName={"Senior Project"}
              cardText={"Treepaech"}
              cardImg={cat}
              className="card"
            />
            <CardKitchenSink
              titleName={"Gun Test"}
              cardText={"Treepaech"}
              cardImg={cat}
              className="card"
            />
            <CardKitchenSink
              titleName={"Gun Test"}
              cardText={"Treepaech"}
              cardImg={cat}
              className="card"
            />
          </>
        ) : null}
        {showInternship ? (
          <InternshipPage onClick={handleInternshipClick} />
        ) : null}
      </div>
    </>
  );
}
