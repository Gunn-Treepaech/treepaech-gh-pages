import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import "./ProjectCloudApp.css"

//Images
import ProjectCloudAppImg1 from "../image/ProjectCloudApp/1.png";
import ProjectCloudAppImg2 from "../image/ProjectCloudApp/2.png";
import ProjectCloudAppImg3 from "../image/ProjectCloudApp/3.png";
import ProjectCloudAppImg4 from "../image/ProjectCloudApp/4.png";
import ProjectCloudAppImg5 from "../image/ProjectCloudApp/5.png";
import ProjectCloudAppImg6 from "../image/ProjectCloudApp/6.png";

export default function ProjectCloudApp({ onClick }) {
  return (
    <div className="ProjectCloudApp" onClick={onClick}>
      <div className="bg" onClick={onClick} />
      <div className="ProjectCloudApp-content">
        <div className="ProjectCloudApp-contentHead">
          <div className="ProjectCloudApp-closeButton">
            <CloseButton />
          </div>
          <h3>Home Loan Simulation Web Application</h3>
          <h5>Project Cloud App | Khon Kaen University</h5>
        </div>
        <img src={ProjectCloudAppImg1} alt="ProjectCloudAppImg1" />
        <p>The main page will look like the picture below, with a button in the center that allows users to navigate to another section of the web application.</p>
        <img src={ProjectCloudAppImg2} alt="ProjectCloudAppImg2" />
        <p>The data entry page will include fields for loan amount, monthly installment amount, and MRR. The MRR value will be recorded in the database, with a note of the last update date, or users can edit it themselves. Additionally, it will include fields for interest rate and the month and year the loan starts.</p>
        <img src={ProjectCloudAppImg3} alt="ProjectCloudAppImg3" />
        <p>Users can add another form for comparison, up to a maximum of 4 forms.</p>
        <img src={ProjectCloudAppImg4} alt="ProjectCloudAppImg4" />
        <p>Select the MRR values available in the database from 4 banks.</p>
        <img src={ProjectCloudAppImg5} alt="ProjectCloudAppImg5" />
        <p>After completing the information and clicking the calculate button, the system will calculate the values by sending them to an API written in Flask.</p>
        <img src={ProjectCloudAppImg6} alt="ProjectCloudAppImg6" />
        <p>Users can click to view more details, which will show the year, month, and the amounts paid in each month.</p>
        <div className="ProjectCloudApp-divButton">
          <a
            href="https://github.com/Gunn-Treepaech/Project_Cloud_App_2023.git"
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
