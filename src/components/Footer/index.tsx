import { useContext } from "react";
import { LangContext } from "../../context/langContext";
import "./index.scss";

const Footer = () => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <div className="footer">
      <div className="footer-contact">
        <div>
          <h4>{lang === "hr" ? "Adresa" : "Adress"}</h4>
          <p>Ul. Luke Baotića 27</p>
          <p>21210, Solin</p>
          <p>{lang === "hr" ? "Hrvatska" : "Croatia"}</p>
        </div>
        <div>
          <h4>{lang === "hr" ? "Radno Vrijeme" : "Working Hours"}</h4>
          <p>
            {lang === "hr"
              ? "Pon-Pet: 08:00 - 16:00"
              : "Mon-Fri: 08:00 - 16:00"}
          </p>
          <p>{lang === "hr" ? "Sub: 08:00 - 16:00" : "Sat: 08:00 - 16:00"}</p>
          <p>{lang === "hr" ? "Ned: Ne radimo" : "Sun: We don't work"}</p>
        </div>
        <div>
          <h4>{lang === "hr" ? "Kontakt" : "Contact"}</h4>
          <p>{lang === "hr" ? "Broj:" : "Phone:"} 091/567-7933</p>
          <p>E-mail: lukac.toni@gmail.com</p>
        </div>
      </div>

      {/* <div className="footer-map">
        <iframe
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?q=43.5308837,16.489286&hl=en-US&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div> */}

      <s className="footer-copyright">
        ©2022 NETO d.o.o. All rights reserved Built by NETO d.o.o.
      </s>
    </div>
  );
};

export default Footer;
