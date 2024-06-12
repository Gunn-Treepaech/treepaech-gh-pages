import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMeTXT.css";
import Button from "react-bootstrap/Button";
import CV from "../Documents/Treepaech_CV.pdf";

export default function AboutMeTXt() {
  return (
    <div className="homeSec">
      <h1 className="aboutMetxtHead">Hello!!!</h1>
      <h1 className="aboutMetxtHead">
        <span className="animationName"></span>
      </h1>
      <p className="aboutMetxt">
        A recent graduate with a Bachelor's degree in Computer Engineering from
        Khon Kaen University, who is determined to apply the knowledge gained
        from academic studies to the real world. With internship experience at
        PlaySmart IoT and Systems, aimed at adding value and benefits to the
        company, there is a strong desire to join the workforce and develop
        programming skills further, along with continuous learning about the
        industry. Eager to work with the company, grow alongside it, fully
        engage in learning, and work hard to acquire new skills and continuously
        grow with the organization, while being enthusiastic about learning new
        skills in the future.
      </p>
      <div className="downloadButton">
        <a
          href={CV}
          download="Treepaech_CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="downloadBT">
            <span class="span-mother">
              <span>D</span>
              <span>o</span>
              <span>w</span>
              <span>n</span>
              <span>l</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>&nbsp;</span>
              <span>C</span>
              <span>V</span>
            </span>
            <span class="span-mother2">
              <span>D</span>
              <span>o</span>
              <span>w</span>
              <span>n</span>
              <span>l</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>&nbsp;</span>
              <span>C</span>
              <span>V</span>
            </span>
          </Button>
        </a>
      </div>
    </div>
  );
}
