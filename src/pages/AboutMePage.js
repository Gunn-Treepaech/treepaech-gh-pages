//AboutMePage.js
import React, { useState, useEffect } from "react";
import "./AboutMePage.css";
import CardKitchenSink from "../components/CardKitchenSink";
import InternshipPage from "./InternshipPage";
import SeniorProject from "./SeniorProject";
import ProjectCloudApp from "./ProjectCloudApp";
import "bootstrap/dist/css/bootstrap.min.css";

// Images
import InternshipImg from "../image/Internship.jpg";
import cat from "../image/cat3.jpeg";
import SeniorProjectImg from "../image/SeniorProjectImg.png";

export default function AboutMe() {
  const [showInternship, setShowInternship] = useState(false);
  const [showSeniorProject, setShowSeniorProject] = useState(false);
  const [showProjectCloudApp, setShowProjectCloudApp] = useState(false);

  useEffect(() => {
    if (showInternship || showSeniorProject) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showInternship, showSeniorProject]);

  const handleInternshipClick = () => {
    setShowInternship(true);
    setShowSeniorProject(false);
  };

  const handleSeniorProjectClick = () => {
    setShowSeniorProject(true);
    setShowInternship(false);
  };

  const handleProjectCloudAppClick = () => {
    setShowSeniorProject(false);
    setShowInternship(false);
    setShowProjectCloudApp(true);
  };

  const handleBackgroundClick = (e) => {
    // console.log("Event:", e);
    // console.log("Event target:", e.target);
    if (
      e.target.classList.contains("bg") ||
      e.target.classList.contains("btn-close")
    ) {
      if (showInternship) {
        setShowInternship(false);
      }
      if (showSeniorProject) {
        setShowSeniorProject(false);
      }
      if (showProjectCloudApp) {
        setShowProjectCloudApp(false);
      }
    }
  };

  return (
    <>
      <div className="aboutSec">
        <h1>My Experiences</h1>
      </div>
      <div className="cardShows">
        {!showInternship && !showSeniorProject && !showProjectCloudApp && (
          <>
            <CardKitchenSink
              titleName={"Internship (Programmer)"}
              cardText={
                'Developed a website to display and store IoT device data. Assisted in training on IoT control system design and installation. Tested, improved, and corrected code examples in the book "Developing IoT on ESP32 Microcontroller with MicroPython."'
              }
              cardImg={InternshipImg}
              className="card"
              onButtonClick={handleInternshipClick}
            />
            <CardKitchenSink
              titleName={"Senior Project"}
              cardText={
                "In this project, we test the performance of three CNI types: Calico, Flannel, and Cilium. We perform performance tests using physical devices, specifically a Raspberry Pi 4 and a virtual simulator."
              }
              cardImg={SeniorProjectImg}
              className="card"
              onButtonClick={handleSeniorProjectClick}
            />
            <CardKitchenSink
              titleName={"Project Cloud App"}
              cardText={
                "a web application that simulates a 3-year home loan repayment plan, generating monthly reports on repayment, interest payments, principal payments, and remaining balance. Users can select from four preloaded interest rates from banks stored in the database or input their rates."
              }
              cardImg={cat}
              className="card"
              onButtonClick={handleProjectCloudAppClick}
            />
            <CardKitchenSink
              titleName={"Gun Test"}
              cardText={"Treepaech"}
              cardImg={cat}
              className="card"
              onButtonClick={handleBackgroundClick}
            />
          </>
        )}
        {showInternship && <InternshipPage onClick={handleBackgroundClick} />}
        {showSeniorProject && <SeniorProject onClick={handleBackgroundClick} />}
        {showProjectCloudApp && (
          <ProjectCloudApp onClick={handleBackgroundClick} />
        )}
      </div>
    </>
  );
}
