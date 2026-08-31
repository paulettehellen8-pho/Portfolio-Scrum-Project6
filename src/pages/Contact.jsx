import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './../index.css';

/* ---------- Header ---------- */
const Header = ({ isScrolled }) => (
  <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
    <Link to="/" className="header__logo">Home</Link>
    <nav className="header__nav">
      <NavLink
        to="/"
        className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
      >
        <span className="header__nav-icon" />
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
      >
        <span className="header__nav-icon" />
        About
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
      >
        <span className="header__nav-icon" />
        Profile
      </NavLink>
    </nav>
    <button className="header__menu-btn" aria-label="Menu">
      <span className="header__menu-line" />
      <span className="header__menu-line" />
      <span className="header__menu-line" />
    </button>
  </header>
);

/* ---------- Hero ---------- */
const ContactHero = () => (
  <section className="hero">
    <div className="hero__container">
      <div className="hero__content">
        <div className="hero__title-wrapper">
          <span className="hero__badge" />
          <h1 className="hero__title">Contact</h1>
        </div>
        <p className="hero__subtitle">Get in Touch</p>
      </div>
    </div>
  </section>
);

/* ---------- Contact Main ---------- */
const ContactMain = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to a real endpoint or mail service when ready.
    setSent(true);
  };

  return (
    <section className="contact-section">
      <div className="contact-section__container">
        <div className="contact-info">
          <p className="contact-info__label">Say Hello</p>
          <h2 className="contact-info__title">Let's build something together.</h2>
          <p className="contact-info__body">
            Whether it's a project, a question, or just a hello — I'd love to hear from you.
          </p>
          <div className="contact-info__items">
            <div className="contact-info__item">
              <span className="contact-info__item-label">Email</span>
              <a href="mailto:hello@johndoe.dev" className="contact-info__item-value">
                hello@johndoe.dev
              </a>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__item-label">Phone</span>
              <a href="tel:+254700000000" className="contact-info__item-value">
                +254 700 000 000
              </a>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__item-label">Based in</span>
              <span className="contact-info__item-value">Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__group">
            <label htmlFor="name" className="contact-form__label">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact-form__input"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="contact-form__group">
            <label htmlFor="email" className="contact-form__label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact-form__input"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="contact-form__group">
            <label htmlFor="message" className="contact-form__label">Message</label>
            <textarea
              id="message"
              name="message"
              className="contact-form__textarea"
              rows="6"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button type="submit" className="contact-form__submit">
            {sent ? 'Sent ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

/* ---------- Footer ---------- */
const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__main">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">Home</Link>
          <p className="footer__tagline">John Doe<br />Design Profile</p>
          <p className="footer__license-title">Licenses</p>
          <p className="footer__thanks">Special Thanks</p>
          <div className="footer__thanks-logos">
            <img src="#" alt="Moringa School." />
            <img src="#" alt="Partner" />
          </div>
        </div>

        <nav className="footer__nav">
          <Link to="/profile" className="footer__nav-link">
            <span>Profile</span>
            <small>About me</small>
          </Link>
          <Link to="/projects" className="footer__nav-link">
            <span>Services</span>
            <small>What I offer</small>
          </Link>
          <Link to="/contact" className="footer__nav-link">
            <span>Contact</span>
            <small>Get in touch</small>
          </Link>
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© All Rights Reserved. John Doe</p>
      </div>
    </div>
  </footer>
);

/* ---------- Main Contact Page ---------- */
function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="contact-page">
      <Header isScrolled={isScrolled} />
      <ContactHero />
      <ContactMain />
      <Footer />
    </div>
  );
}

export default Contact;