import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import "./ProjectACP.css"

//Images
import ProjectACPImg1 from "../image/ProjectACP/1.png";
import ProjectACPImg2 from "../image/ProjectACP/2.png";
import ProjectACPImg3 from "../image/ProjectACP/3.png";
import ProjectACPImg4 from "../image/ProjectACP/4.png";
import ProjectACPImg5 from "../image/ProjectACP/5.png";
import ProjectACPImg6 from "../image/ProjectACP/9.png";
import ProjectACPImg7 from "../image/ProjectACP/6.png";
import ProjectACPImg8 from "../image/ProjectACP/7.png";
import ProjectACPImg9 from "../image/ProjectACP/8.png";

export default function ProjectACP({ onClick }) {
  return (
    <div className="ProjectACP" onClick={onClick}>
      <div className="bg" onClick={onClick} />
      <div className="ProjectACP-content">
        <div className="ProjectACP-contentHead">
          <div className="ProjectACP-closeButton">
            <CloseButton />
          </div>
          <h3>Health Manage Calendar</h3>
          <h5>
            Project Advanced Computer Programming (Java) | Khon Kaen University
          </h5>
        </div>
        <img src={ProjectACPImg1} alt="ProjectACPImg1" />
        <p>
          The main page will display a calendar showing the current date.
          Additionally, it will show tasks for today, which can be viewed by
          clicking the "Today" button. The "Events" button will display all the
          saved tasks.
        </p>
        <img src={ProjectACPImg2} alt="ProjectACPImg2" />
        <p>
          When clicking the "Edit" button, users can edit their height and
          weight. The system will also provide weekly time management
          recommendations, such as how to adjust BMI.
        </p>
        <img src={ProjectACPImg3} alt="ProjectACPImg3" />
        <p>
          After filling in the information and clicking "Save," the system will
          calculate the BMI, explain the user's health status, and suggest days
          for activities based on the user's preferences.
        </p>
        <img src={ProjectACPImg4} alt="ProjectACPImg4" />
        <p>
          In the "Edit" menu, users can choose a color to change the background.
        </p>
        <img src={ProjectACPImg5} alt="ProjectACPImg5" />
        <p>
          The system will change the background color based on the user's
          selection.
        </p>
        <img src={ProjectACPImg6} alt="ProjectACPImg6" />
        <p>Users can add tasks by clicking the "Add activity" menu.</p>
        <img src={ProjectACPImg7} alt="ProjectACPImg7" />
        <p>
          Clicking the "Add Regularly" button will add tasks that repeat every
          week.
        </p>
        <img src={ProjectACPImg8} alt="ProjectACPImg8" />
        <p>
          Clicking the "Specifically Event" button will add tasks for specified
          dates and times.
        </p>
        <img src={ProjectACPImg9} alt="ProjectACPImg9" />
        <p>
          After adding information, tasks will appear on the "Today" page on
          their scheduled dates.
        </p>
        <div className="ProjectACP-divButton">
          <a
            href="https://github.com/Gunn-Treepaech/Project-ACP.git"
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
