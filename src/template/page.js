import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import "../pages/ProjectCloudApp.css";
import cat from "../image/cat3.jpeg";

//Images
import ProjectCloudAppImg1 from "../image/ProjectCloudApp/1.png";

export default function ProjectCloudApp({ onClick }) {
  return (
    <div className="ProjectCloudApp" onClick={onClick}>
      <div className="bg" onClick={onClick} />
      <div className="content">
        <div className="contentHead">
          <div className="closeButton">
            <CloseButton />
          </div>
          <h3>Container Network Interface (CNI) study and testing</h3>
          <h5>Senior Project | Khon Kaen University</h5>
        </div>
        <img src={cat} alt="cat" />
        <p>Container Network Interface (CNI) study and testing details...</p>
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
