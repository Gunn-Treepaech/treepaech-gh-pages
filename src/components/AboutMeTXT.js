import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMeTXT.css"

export default function AboutMe() {
  return (
    <div
      className="details"
      style={{
        position: "absolute",
        left: "40%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>Hello!!!</h1>
      <h1>My Name Is</h1>
      <h1>Treepaech Treechan</h1>
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
    </div>
  );
}
