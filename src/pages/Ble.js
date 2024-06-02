import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import "./Ble.css";
import DemoVideo from "../videos/DEMO.mp4"

export default function Ble({ onClick }) {
  return (
    <div className="Ble" onClick={onClick}>
      <div className="bg" onClick={onClick} />
      <div className="Ble-content">
        <div className="Ble-contentHead">
          <div className="Ble-closeButton">
            <CloseButton />
          </div>
          <h3>BLE Wireless connection system</h3>
          <h5>
            Wireless Personal Area Networks Project | Khon Kaen University
          </h5>
        </div>
        <h3>Video Demo</h3>
        <div className="video-sec">
          <video width="320"  controls>
            <source src={DemoVideo} type="video/mp4" />
          </video>
        </div>
        <div className="Ble-divButton">
          <a
            href="https://drive.google.com/drive/folders/1ycShce2M2Ktjc6DaXdGerYMkVN3tsgBF"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="primary" className="gitButton">
              Files Link
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
