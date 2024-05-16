import "bootstrap/dist/css/bootstrap.min.css";
import cat from "/src/image/cat3.jpeg";

export default function AboutMe() {
  return (
    <>
      <div>
        <img src={cat} alt="Main" className="imageCat" />
      </div>
    </>
  );
}
