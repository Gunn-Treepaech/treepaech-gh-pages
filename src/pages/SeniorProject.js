// SeniorProject.js
import React from "react";
import InternshipImg from "../image/Internship.jpg";
import "./SeniorProject.css";

export default function SeniorProject({ onClick }) {
  return (
    <div className="SeniorProject" onClick={onClick}>
      <div className="SeniorProject-bg" onClick={onClick} />
      <div className="SeniorProject-content">
        <img src={InternshipImg} alt="internship" />
        <p>Senior project details...</p>
        <img src={InternshipImg} alt="internship" />
        <p>More senior project details...</p>
      </div>
    </div>
  );
}
