// InternshipPage.js
import React from "react";
import "./InternshipPage.css";
import InternshipALL from "../image/Internship/Internship_ALL.png";
import BOOk from "../image/Internship/book.jpg";
import RS485 from "../image/Internship/RS485.png";
import ARUBA from "../image/Internship/Aruba.png";

export default function InternshipPage({ onClick }) {
  return (
    <div className="internship" onClick={onClick}>
      <div className="internship-bg" onClick={onClick} />
      <div className="internship-content">
        <img src={RS485} alt="rs485" />
        <p>Write a program to receive data from a SENSOR that has a MODBUS RTU connection.</p>
        <img src={ARUBA} alt="aruba" />
        <p>Write a program to receive BLE data from ARUBA AP-505.</p>
        <img src={InternshipALL} alt="internship" />
        <p>Assist in training on the design and installation of IoT control systems.</p>
        <img src={BOOk} alt="book" />
        <p>Test, improve, and correct the code examples in the book ‘Developing IoT on ESP32 Microcontroller with MicroPython’</p>
        <a href="https://se-ed.com/s/dpF4">You can order at</a>
      </div>
    </div>
  );
}
