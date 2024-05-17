import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialFollow.css";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3>Social Follow</h3>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/treepaech.treechan/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/gunnzzz___/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
}
