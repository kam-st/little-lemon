import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="section full-width-section">
      <div className="section-inner">
        <img src="/images/footer.png" alt="little lemon" />
        <div className="footer-content">
          <div className="footer-nav">
            <p className="footer-head">Navigtion</p>
            <Link to="/" className="footer-item">
              Home
            </Link>
            <Link to="#" className="footer-item">
              About
            </Link>
            <Link to="#" className="footer-item">
              Menu
            </Link>
            <Link to="/booking" className="footer-item">
              Reservations
            </Link>
            <Link href="#" className="footer-item">
              Order Online
            </Link>
            <Link href="#" className="footer-item">
              Login
            </Link>
          </div>
          <div className="footer-contact">
            <p className="footer-head">Contact</p>
            <a href="/" className="footer-item">
              Address
            </a>
            <a href="/" className="footer-item">
              Phone Number
            </a>
            <a href="/" className="footer-item">
              Email
            </a>
          </div>
          <div className="footer-social">
            <p className="footer-head">Social Media</p>
            <a href="/" className="footer-item">
              Facebook
            </a>
            <a href="/" className="footer-item">
              Instagram
            </a>
            <a href="/" className="footer-item">
              TikTok
            </a>
            <a href="/" className="footer-item">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
