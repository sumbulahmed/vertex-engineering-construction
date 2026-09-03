import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Vertex Engineering home">
              <span className="footer__logo-mark">V</span>
              <div>
                <div className="footer__logo-name">VERTEX</div>
                <div className="footer__logo-tagline">Engineering &amp; Construction</div>
              </div>
            </Link>
            <p className="footer__description">
              Building spaces, structures and infrastructure with purpose — across government, commercial, residential and industrial sectors.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="LinkedIn" className="footer__social-link"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter" className="footer__social-link"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram" className="footer__social-link"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About</Link></li>
              <li><Link to="/services" className="footer__link">Services</Link></li>
              <li><Link to="/projects" className="footer__link">Projects</Link></li>
              <li><Link to="/team" className="footer__link">Team</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Services</h3>
            <ul className="footer__links">
              <li><Link to="/services" className="footer__link">General Construction</Link></li>
              <li><Link to="/services" className="footer__link">Commercial Construction</Link></li>
              <li><Link to="/services" className="footer__link">Residential Construction</Link></li>
              <li><Link to="/services" className="footer__link">Infrastructure Development</Link></li>
              <li><Link to="/services" className="footer__link">Industrial Construction</Link></li>
              <li><Link to="/services" className="footer__link">Project Management</Link></li>
            </ul>
          </div>

          {/* Sectors + Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Sectors</h3>
            <ul className="footer__links">
              <li><Link to="/government" className="footer__link">Government &amp; Institutional</Link></li>
              <li><Link to="/projects" className="footer__link">Commercial</Link></li>
              <li><Link to="/projects" className="footer__link">Residential</Link></li>
              <li><Link to="/projects" className="footer__link">Industrial</Link></li>
              <li><Link to="/projects" className="footer__link">Infrastructure</Link></li>
            </ul>

            <h3 className="footer__col-title" style={{ marginTop: 'var(--space-8)' }}>Contact</h3>
            <ul className="footer__contact">
              <li>
                <MapPin size={14} />
                <span>Blue Area, Islamabad, Pakistan</span>
              </li>
              <li>
                <Phone size={14} />
                <a href="tel:+92511234567" className="footer__link">+92 51 123 4567</a>
              </li>
              <li>
                <Mail size={14} />
                <a href="mailto:info@vertexec.com" className="footer__link">info@vertexec.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} Vertex Engineering &amp; Construction. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link">Privacy Policy</a>
            <span className="footer__dot" aria-hidden="true">·</span>
            <a href="#" className="footer__link">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
