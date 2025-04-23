
import './Footer.css';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-opening-hours">
            <p><strong>Öppettider:</strong></p>
            <p>Vardagar: 11:00 - 20:00</p>
            <p>Helg: 11:00 - 19:00</p>
          </div>


          <p><strong>Ring oss:</strong><br />07373222</p>

          <div className="footer-divider" />

          <p><strong>Address:</strong><br />Linné gatan 5E Göteborg</p>

          <Link to="/login">Jobbar du här? Då tror vi att du vill se det här</Link>
        </div>

        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28738.399774914236!2d11.12697027580815!3d58.659657774749846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4644350cea4f36ab%3A0x79f911bb4499ab8b!2sKlyftan!5e0!3m2!1ssv!2sse!4v1745392821563!5m2!1ssv!2sse"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
