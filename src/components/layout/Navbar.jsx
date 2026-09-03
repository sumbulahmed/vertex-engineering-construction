import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrolled';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Government', to: '/government' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={
          scrolled
            ? 'navbar navbar--scrolled'
            : 'navbar navbar--top'
        }
        role="banner"
      >
        <div className="navbar__inner">

          <Link
            to="/"
            className="navbar__logo"
            aria-label="Vertex Engineering and Construction home"
          >
            <span className="navbar__logo-mark">V</span>

            <span className="navbar__logo-text">
              VERTEX
              <span className="navbar__logo-sub"> E&amp;C</span>
            </span>
          </Link>

          <nav
            className="navbar__links"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'navbar__link navbar__link--active'
                    : 'navbar__link'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__actions">

            <button
              type="button"
              className="navbar__theme-btn"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {theme === 'dark' ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <Link
              to="/contact"
              className="btn btn-primary navbar__cta"
            >
              Start a Project
            </Link>

          </div>

          <div className="navbar__mobile-controls">

            <button
              type="button"
              className="navbar__theme-btn"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {theme === 'dark' ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button
              type="button"
              className="navbar__hamburger"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={
                menuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{
              duration: 0.35,
              ease: [0.32, 0.72, 0, 1],
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >

            <div className="mobile-menu__header">

              <Link
                to="/"
                className="navbar__logo"
                onClick={() => setMenuOpen(false)}
              >
                <span className="navbar__logo-mark">V</span>

                <span className="navbar__logo-text">
                  VERTEX
                  <span className="navbar__logo-sub">
                    {' '}E&amp;C
                  </span>
                </span>
              </Link>

              <button
                type="button"
                className="navbar__hamburger"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>

            </div>

            <nav
              className="mobile-menu__nav"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 + index * 0.06,
                    duration: 0.3,
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      isActive
                        ? 'mobile-menu__link mobile-menu__link--active'
                        : 'mobile-menu__link'
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mobile-menu__link-num">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="mobile-menu__footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <Link
                to="/contact"
                className="btn btn-primary mobile-menu__cta"
                onClick={() => setMenuOpen(false)}
              >
                Start a Project
              </Link>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}