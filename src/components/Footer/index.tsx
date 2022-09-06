import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact">
        <div className="footer-contact-1">
          <div>
            <h4>Adresa</h4>
            <p>Ul. Luke Baotića 25</p>
            <p>21210, Solin</p>
            <p>Hrvatska</p>
          </div>
          <div>
            <h4>Radno vrijeme</h4>
            <p>Pon-Pet: 08:00 - 16:00</p>
            <p>Sub: 08:00 - 16:00</p>
            <p>Ned: Ne radimo</p>
          </div>
        </div>
        <div className="footer-contact-2">
          <h4>Kontakt</h4>
          <p>Broj: 099/9999-999</p>
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
    </div>
  );
};

export default Footer;
