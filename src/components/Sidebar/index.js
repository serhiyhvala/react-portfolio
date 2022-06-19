import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import "./index.scss";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="activce" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="activce"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="activce"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
      </nav>
      <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/serhiyhvala">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/serhiyhvala">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4d"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/serhiyhvala">
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4d"/>
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
