import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LangContext } from "../../context/langContext";
const Contact = () => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <div className="contact">
      <h2>
        {lang === "hr" ? "Možete nas kontaktirati putem:" : "Contact as via:"}
      </h2>
      <a href="tel:+385915677933" className="contact-link">
        <div>
          <FontAwesomeIcon
            icon={faPhone}
            size={"4x"}
            className="contact-link-icon"
          />
          <h3>091/567-7933</h3>
        </div>
      </a>

      <a href="mailto:lukac.toni@gmail.com" className="contact-link">
        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            size={"4x"}
            className="contact-link-icon"
          />
          <h3>Lukac.toni@gmail.com</h3>
        </div>
      </a>
    </div>
  );
};

export default Contact;
