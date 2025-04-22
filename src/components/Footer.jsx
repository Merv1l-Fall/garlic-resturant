
import './Footer.css';
import mapImage from "./map.png";
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
          <img src={mapImage} alt="Map" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
