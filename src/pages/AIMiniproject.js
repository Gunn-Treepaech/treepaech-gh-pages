import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import "./AIMiniproject.css"

//Images
import AIMiniprojectImg1 from "../image/AIMiniproject/1.png";
import AIMiniprojectImg2 from "../image/AIMiniproject/2.png";
import AIMiniprojectImg3 from "../image/AIMiniproject/3.png";

export default function AIMiniproject({ onClick }) {
  return (
    <div className="AIMiniproject" onClick={onClick}>
      <div className="bg" onClick={onClick} />
      <div className="AIMiniproject-content">
        <div className="AIMiniproject-contentHead">
          <div className="AIMiniproject-closeButton">
            <CloseButton />
          </div>
          <h3>Garbage Classification Using Ai</h3>
          <h5>Augmented Intelligence Project | Khon Kaen University</h5>
        </div>
        <img src={AIMiniprojectImg1} alt="AIMiniprojectImg1" />
        <p>The homepage will feature a webcam. When the "Predict With Webcam" button is clicked, it will capture an image from the webcam to determine the type of waste. If the "Upload Image" button is clicked, it will upload an image to determine the type of waste.</p>
        <img src={AIMiniprojectImg2} alt="AIMiniprojectImg2" />
        <p>Example: Using the webcam might identify the waste as recycled waste, instructing to dispose of it in the yellow bin.</p>
        <img src={AIMiniprojectImg3} alt="AIMiniprojectImg3" />
        <p>Example: Uploading an image might identify the waste as general waste, instructing to dispose of it in the green bin.</p>
        <div className="AIMiniproject-divButton">
          <a
            href="https://github.com/Gunn-Treepaech/Garbage-classification-using-AI.git"
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
