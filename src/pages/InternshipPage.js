// InternshipPage.js
import React from "react";
import "./InternshipPage.css";
import InternshipImg from "../image/Internship.jpg";

export default function InternshipPage({ onClick }) {
  return (
    <div className="internship" onClick={onClick}>
      <div className="internship-bg" onClick={onClick} />
      <div className="internship-content">
        <img src={InternshipImg} alt="internship" />
        <p>Internship details...</p>
        <img src={InternshipImg} alt="internship" />
        <p>More internship details...</p>
      </div>
    </div>
  );
}
