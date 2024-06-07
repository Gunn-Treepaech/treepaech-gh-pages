import "./Info.css";
import My from "../image/My.jpg"

export default function Info() {
  return (
    <>
      <div className="infoSec">
        <h1>About Me</h1>
      </div>
      <div className="infoContainer">
        <div className="infoText">
          <p>
            <span style={{ fontWeight: "bolder" }}>Name: </span>Treepaech Treechan
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Nick Name: </span>Gun
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Born: </span>June 12, 2001
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Age: </span>23 years
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Sex: </span>Male
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Military Status: </span>Exempt
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Education: </span>Bachelor of Engineering in Computer Engineering at Khon Kaen University
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>GPA: </span>3.43 Second Class Honors
          </p>
        </div>
        <div className="infoImg">
          <img className="myImg" src={My} alt="My"/>
        </div>
      </div>
    </>
  );
}
