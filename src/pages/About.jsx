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
        to="/contact"
        className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
      >
        <span className="header__nav-icon" />
        Contact
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
const Hero = () => (
  <section className="hero">
    <div className="hero__container">
      <div className="hero__content">
        <div className="hero__title-wrapper">
          <span className="hero__badge" />
          <h1 className="hero__title">About</h1>
        </div>
        <p className="hero__subtitle">Who I Am</p>
      </div>
    </div>
  </section>
);

/* ---------- Intro ---------- */
const Intro = () => (
  <section className="keep-creating">
    <div className="keep-creating__container">
      <div className="keep-creating__card">
        <div className="keep-creating__bg" />
        <div className="keep-creating__content">
          <p className="keep-creating__tagline">Nairobi, Kenya</p>
          <h2 className="keep-creating__title">
            Design that stays out of the way,
            <br />so the work can speak for itself.
          </h2>
          <h2 className="keep-creating__title-mobile">
            Design that stays
            <br />out of the way, so
            <br />the work can speak
            <br />for itself.
          </h2>
          <p className="keep-creating__body">
            I'm John Doe, a web designer based in Nairobi. My path started in
            advertising, moved through design school, and led me into web —
            where I now focus on interfaces that are calm, considered, and
            built to be used, not just looked at.
          </p>
          <p className="keep-creating__body-mobile">
            I'm John Doe, a web designer based in Nairobi, moving from
            advertising into web design and development.
          </p>
          <p className="keep-creating__body-extra">
            I currently work at Safaricom.Ltd, where I split my time between
            visual design, front-end build, and the small usability details
            that decide whether a site actually works for the people using it.
          </p>
          <p className="keep-creating__body-extra-mobile">
            I work at Safaricom.Ltd across design, front-end build, and
            usability.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- How I Work ---------- */
const HowIWork = () => {
  const values = [
    { title: 'Clarity First', text: 'Every screen earns its place. If it doesn\'t help the user, it doesn\'t ship.' },
    { title: 'Detail-Oriented', text: 'Spacing, motion, and copy are treated as design decisions, not afterthoughts.' },
    { title: 'Outcome-Driven', text: 'Good design should be measurable — in usability, conversion, or clarity gained.' },
  ];

  return (
    <section className="profile-details">
      <div className="profile-details__container">
        <div className="profile-details__section-header" style={{ marginTop: 0 }}>
          <h3 className="profile-details__section-title">How I Work</h3>
        </div>
        <p className="profile-details__section-subtitle">The principles behind the process</p>

        <div className="profile-details__strength-grid">
          {values.map((v) => (
            <div key={v.title} className="profile-details__strength-card">
              <div className="profile-details__strength-bg" />
              <p className="profile-details__strength-text">
                <strong>{v.title}</strong>
                <br />
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Journey (condensed timeline) ---------- */
const Journey = () => (
  <section className="profile-details">
    <div className="profile-details__container">
      <div className="profile-details__section-header" style={{ marginTop: 0 }}>
        <h3 className="profile-details__section-title">Journey</h3>
      </div>
      <p className="profile-details__section-subtitle">A quick look at how I got here</p>

      <div className="profile-details__timeline" style={{ marginTop: 50 }}>
        <div className="profile-details__timeline-item">
          <span className="profile-details__timeline-year">2015</span>
          <div className="profile-details__timeline-text">
            <p>Studied media art at Strathmore University while working part-time at Safaricom.Ltd.</p>
          </div>
        </div>
        <div className="profile-details__timeline-item">
          <span className="profile-details__timeline-year">2017</span>
          <div className="profile-details__timeline-text">
            <p>Joined an advertising design firm in Nairobi, working on brand and OOH campaigns.</p>
          </div>
        </div>
        <div className="profile-details__timeline-item">
          <span className="profile-details__timeline-year">2019</span>
          <div className="profile-details__timeline-text">
            <p>Moved into web design and development, with a continued focus on UX.</p>
          </div>
        </div>
      </div>

      <p className="profile-details__licenses-body">
        <Link to="/profile" className="hero__breadcrumb-link" style={{ color: 'var(--color-primary)' }}>
          Read the full profile →
        </Link>
      </p>
    </div>
  </section>
);

/* ---------- Footer ---------- */
const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__main">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">Home</Link>
          <p className="footer__tagline">John Doe<br />Design Profile</p>
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

/* ---------- Main About Page ---------- */
function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="profile-page">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Intro />
      <HowIWork />
      <Journey />
      <Footer />
    </div>
  );
}

export default About;