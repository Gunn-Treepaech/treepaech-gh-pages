import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import "../pages/ProjectCloudApp.css";
import cat from "../image/cat3.jpeg";

export default function ProjectCloudApp({ onClick }) {
  return (
    <div className="ProjectCloudApp" onClick={onClick}>
      <div className="bg" onClick={onClick} />
      <div className="content">
        <div className="contentHead">
          <div className="closeButton">
            <CloseButton />
          </div>
          <h3>Home Loan Simulation Web Application</h3>
          <h5>Project Cloud App | Khon Kaen University</h5>
        </div>
        <img src={cat} alt="cat" />
        <p>Container Network Interface (CNI) study and testing details...</p>
        <img src={cat} alt="cat" />
        <div className="divButton">
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
