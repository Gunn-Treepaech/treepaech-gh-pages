//AboutMePage.js
import React, { useState, useEffect } from "react";
import "./AboutMePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardKitchenSink from "../components/CardKitchenSink";
import InternshipPage from "./InternshipPage";
import SeniorProject from "./SeniorProject";
import ProjectCloudApp from "./ProjectCloudApp";
import ProjectACP from "./ProjectACP";
import AIMiniproject from "./AIMiniproject";
import Bleproject from "./Ble"

// Images
import InternshipImg from "../image/Internship.jpg";
import SeniorProjectImg from "../image/SeniorProjectImg.png";
import ProjectCloudAppImg from "../image/ProjectCloudApp.png";
import ProjectACPImg from "../image/ProjectACP.png";
import GarbageClassificationUsingAi from "../image/AIMiniproject.png";
import Wirelessconnectionsystem from "../image/BleWirelessConnectionSystem.png";

export default function AboutMe() {
  const [showInternship, setShowInternship] = useState(false);
  const [showSeniorProject, setShowSeniorProject] = useState(false);
  const [showProjectCloudApp, setShowProjectCloudApp] = useState(false);
  const [showProjectACP, setShowProjectACP] = useState(false);
  const [showAIMiniproject, setShowAIMiniproject] = useState(false);
  const [showBleproject, setShowBleproject] = useState(false);

  useEffect(() => {
    if (
      showInternship ||
      showSeniorProject ||
      showProjectCloudApp ||
      showProjectACP ||
      showAIMiniproject ||
      showBleproject
    ) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [
    showInternship,
    showSeniorProject,
    showProjectCloudApp,
    showProjectACP,
    showAIMiniproject,
    showBleproject
  ]);

  const handleInternshipClick = () => {
    setShowInternship(true);
  };

  const handleSeniorProjectClick = () => {
    setShowSeniorProject(true);
  };

  const handleProjectCloudAppClick = () => {
    setShowProjectCloudApp(true);
  };

  const handleProjectACPClick = () => {
    setShowProjectACP(true);
  };

  const handleAIMiniprojectClick = () => {
    setShowAIMiniproject(true);
  };

  const handleBleprojectClick = () => {
    setShowBleproject(true);
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
      if (showProjectACP) {
        setShowProjectACP(false);
      }
      if (showAIMiniproject) {
        setShowAIMiniproject(false);
      }
      if (showBleproject) {
        setShowBleproject(false);
      }
    }
  };

  return (
    <>
      <div className="aboutSec">
        <h1>My Experiences</h1>
      </div>
      <div className="cardShows">
        {
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
              titleName={"Container Network Interface (CNI) study and testing"}
              cardText={
                "In this project, we test the performance of three CNI types: Calico, Flannel, and Cilium. We perform performance tests using physical devices, specifically a Raspberry Pi 4 and a virtual simulator."
              }
              cardImg={SeniorProjectImg}
              className="card"
              onButtonClick={handleSeniorProjectClick}
            />
            <CardKitchenSink
              titleName={"Home Loan Simulation Web Application"}
              cardText={
                "A web application that simulates a 3-year home loan repayment plan, generating monthly reports on repayment, interest payments, principal payments, and remaining balance."
              }
              cardImg={ProjectCloudAppImg}
              className="card"
              onButtonClick={handleProjectCloudAppClick}
            />
            <CardKitchenSink
              titleName={"Health Manage Calendar"}
              cardText={
                "A calendar program with a to-do management system such as Adding to-dos and reminding when the due date is due There is also a system to recommend time management for various things."
              }
              cardImg={ProjectACPImg}
              className="card"
              onButtonClick={handleProjectACPClick}
            />
            <CardKitchenSink
              titleName={"Garbage Classification Using Ai"}
              cardText={
                "Capture an image from a webcam or upload it from your device for prediction using a Vision AI model. Based on the model's prediction, determine the appropriate waste bin for disposal. After processing, display the correct waste bin image for proper disposal."
              }
              cardImg={GarbageClassificationUsingAi}
              className="card"
              onButtonClick={handleAIMiniprojectClick}
            />
            <CardKitchenSink
              titleName={"BLE Wireless connection system"}
              cardText={
                "Send data via BLE using the NRF52840 Dongle to control the LED on the NRF52840-DK board. The dongle will send commands to turn the LED on or off."
              }
              cardImg={Wirelessconnectionsystem}
              className="card"
              onButtonClick={handleBleprojectClick}
            />
          </>
        }
        {showInternship && <InternshipPage onClick={handleBackgroundClick} />}
        {showSeniorProject && <SeniorProject onClick={handleBackgroundClick} />}
        {showProjectCloudApp && <ProjectCloudApp onClick={handleBackgroundClick} />}
        {showProjectACP && <ProjectACP onClick={handleBackgroundClick} />}
        {showAIMiniproject && <AIMiniproject onClick={handleBackgroundClick} />}
        {showBleproject && <Bleproject onClick={handleBackgroundClick} />}
      </div>
    </>
  );
}
