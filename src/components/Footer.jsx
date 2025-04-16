
import './Footer.css';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p><strong>Ring oss:</strong><br />07373222</p>
          <div className="footer-divider" />
          <p><strong>Address:</strong><br />Linné gatan 5E Göteborg</p>
          <Link to="/login"><p>Pssst, admin se här!</p></Link>
        </div>
        <div className="footer-map">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Map_of_Stockholm.png/400px-Map_of_Stockholm.png"
            alt="Map"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
