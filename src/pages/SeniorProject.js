// SeniorProject.js
import React from "react";
import "./SeniorProject.css";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

//Images
import SeniorProjectImg from "../image/SeniorProject/SeniorProject (Small).png";
import ReportImg from "../image/SeniorProjectImg.png";

export default function SeniorProject({ onClick }) {
  return (
    <div className="SeniorProject" onClick={onClick}>
      <div className="bg" onClick={onClick} />
      <div className="SeniorProject-content">
        <div className="contentHead">
          <div className="closeButton">
            <CloseButton />
          </div>
          <h3>Container Network Interface (CNI) study and testing</h3>
          <h5>Senior Project | Khon Kaen University</h5>
        </div>
        <img src={SeniorProjectImg} alt="SeniorProject" />
        <p>Container Network Interface (CNI) study and testing details...</p>
        <ul>
          <li>
            In this project, we were interested in testing the performance of
            three types of CNIs: Calico, Flannel, and Cilium.
          </li>
          <li>
            CNI performance testing was performed with a physically accessible
            device, a Raspberry Pi 4 and software simulating the operation of
            real computers on a server machine.
          </li>
          <li>
            We measured the performance of CNIs by deploying the Iperf3
            container to various nodes within our group, with different types of
            CNIs in operation. Then, we instructed the Iperf3 clients to send
            data to the Iperf3 server and recorded the results in a text file.
          </li>
          <li>
            To study the performance of CNIs and utilize the findings
            appropriately.
          </li>
        </ul>
        <img src={ReportImg} alt="SeniorProject" />
        <div className="divButton">
          <a
            href="https://drive.google.com/file/d/17N_Co5j-NO7tvlkf2CpA5lnxuSiuFTQw/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="primary" className="pdfButton">
              See Full Report
            </Button>
          </a>
          <a
            href="https://github.com/Gunn-Treepaech/CNI_Project.git"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="primary" className="gitButton">
              Github Link
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
