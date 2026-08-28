import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './../index.css';
function Image(props) {
  return <img className="profile-details__personal-item" src={props.src} alt="" />;
}

function Thumb(props) {
  return <img className="profile-details__article-thumb" src={props.src} alt="" />;
}

function ArticleCard(props) {
  return (
    <div className="profile-details__article-card">
      <Thumb src={props.thumbSrc} />
      <div className="profile-details__article-info">
        <span className="profile-details__article-category">{props.category}</span>
        <p className="profile-details__article-title">{props.text}</p>
      </div>
    </div>
  );
}

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
const Hero = () => (
  <section className="hero">
    <div className="hero__container">
      <div className="hero__content">
        <div className="hero__title-wrapper">
          <span className="hero__badge" />
          <h1 className="hero__title">Profile</h1>
        </div>
        <p className="hero__subtitle">About Me</p>
      </div>
    </div>
  </section>
);

/* ---------- Keep Creating ---------- */
const KeepCreating = () => (
  <section className="keep-creating">
    <div className="keep-creating__container">
      {/* Intro Card */}
      <div className="keep-creating__card">
        <div className="keep-creating__bg" />
        <div className="keep-creating__content">
          <p className="keep-creating__tagline">Keep Creating. Quietly, Steadily.</p>
          <h2 className="keep-creating__title">
            Design that balances logic and intuition,
            <br />with a focus on execution.
          </h2>
          <h2 className="keep-creating__title-mobile">
            Design that balances
            <br />logic and intuition,
            <br />with a focus on
            <br />execution.
          </h2>
          <p className="keep-creating__body">
            Hello. I'm John Doe, a web designer based in Nairobi.
            <br />
            I currently work at Safaricom.Ltd ., a marketing company, where I focus on
            building websites that drive measurable results—prioritizing SEO,
            conversion rates, and practical effectiveness.
          </p>
          <p className="keep-creating__body-mobile">
            Hello. I'm John Doe, a web designer based in Nairobi.
            I work at Safaricom.Ltd ., focusing on SEO, conversion, and
            results-driven website production.
          </p>
          <p className="keep-creating__body-extra">
            Beyond staying current with visual trends, I offer websites that
            deliver real outcomes through logical strategy and data analysis.
          </p>
          <p className="keep-creating__body-extra-mobile">
            Beyond trends, I deliver websites that drive real results
            through strategy and analysis.
          </p>
        </div>
      </div>

      {/* Roots Card */}
      <div className="keep-creating__card keep-creating__card--roots">
        <div className="keep-creating__roots-content">
          <p className="keep-creating__label">Roots</p>
          <h3 className="keep-creating__roots-title">
            Inspired by advertising —
            <br />creating work that is seen and used.
          </h3>
          <h3 className="keep-creating__roots-title-mobile">
            Inspired by advertising —
            <br />creating work that is
            <br />seen and used.
          </h3>
          <p className="keep-creating__roots-body">
            My journey into design began with the powerful advertising campaigns
            released during the Great East Japan Earthquake. I was deeply moved
            by messages that cut through the noise, and I knew I wanted to
            deliver that kind of impact through my own work.
          </p>
          <p className="keep-creating__roots-body-mobile">
            My journey began with the powerful ads released during the
            Great East Japan Earthquake. I knew I wanted to deliver that impact.
          </p>
          <p className="keep-creating__roots-body-extra">
            After working at an advertising design firm, I moved into the web space.
            I believe great design must first be seen, and beyond aesthetics,
            it's the small details of usability that create a truly meaningful experience.
            That's why I now work at a web marketing company where I can integrate
            SEO and UX into every project.
          </p>
          <p className="keep-creating__roots-body-extra-mobile">
            After an advertising firm, I moved to web. I believe design must be
            seen, and usability creates experience. I now integrate SEO and UX.
          </p>
        </div>
      </div>

      {/* Vision Card */}
      <div className="keep-creating__card keep-creating__card--vision">
        <div className="keep-creating__vision-bg" />
        <div className="keep-creating__vision-content">
          <p className="keep-creating__label keep-creating__label--dark">Vision</p>
          <h3 className="keep-creating__vision-title">
            Design user experiences that are
            <br />widely used and directly drive results.
          </h3>
          <h3 className="keep-creating__vision-title-mobile">
            Design experiences that
            <br />are widely used and
            <br />drive results.
          </h3>
          <p className="keep-creating__vision-body">
            Working at a marketing-focused company has taught me that a website
            isn't just about visual beauty. It must be a practical tool that
            contributes to achieving business goals. Aesthetics alone isn't enough.
          </p>
          <p className="keep-creating__vision-body-extra">
            Moving forward, I aim to combine my company's strengths with design
            thinking, incorporating UX and HCD principles to craft experiences
            that feel intuitive to users and deliver measurable value to businesses.
          </p>
          <p className="keep-creating__vision-body-extra-mobile">
            I aim to combine UX and HCD principles to craft experiences that
            are intuitive and deliver measurable value.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Profile Details sub‑components ---------- */

function Strengths() {
  return (
    <div className="profile-details__strengths">
      <div className="profile-details__section-header">
        <h3 className="profile-details__section-title">Strengths</h3>
        <p className="profile-details__section-subtitle">What I value</p>
      </div>
      <div className="profile-details__strength-grid">
        <div className="profile-details__strength-card">
          <div className="profile-details__strength-bg" />
          <p className="profile-details__strength-text">
            Balancing refined uniqueness<br />with conventional clarity.
          </p>
        </div>
        <div className="profile-details__strength-card">
          <div className="profile-details__strength-bg" />
          <p className="profile-details__strength-text">
            Leveraging both quantitative<br />data and qualitative behavioral insights.
          </p>
        </div>
        <div className="profile-details__strength-card">
          <div className="profile-details__strength-bg" />
          <p className="profile-details__strength-text">
            Evaluating work logically<br />through UX, not just aesthetics.
          </p>
        </div>
      </div>
    </div>
  );
}

function Selections() {
  return (
    <div className="profile-details__selections">
      <div className="profile-details__section-header">
        <h3 className="profile-details__section-title">Selections</h3>
        <p className="profile-details__section-subtitle">Gallery features</p>
      </div>
      <p className="profile-details__selections-body">
        Many of our projects have been featured on prestigious design and UX gallery sites.
        To further enhance our brand reputation, we actively research and apply for
        advertising and design awards in collaboration with our clients.
      </p>
      <div className="profile-details__selection-logos">
        <div className="profile-details__selection-logo" />
        <div className="profile-details__selection-logo" />
        <div className="profile-details__selection-logo" />
        <div className="profile-details__selection-logo" />
        <div className="profile-details__selection-logo profile-details__selection-logo--gradient" />
        <div className="profile-details__selection-logo" />
      </div>
    </div>
  );
}

function PersonalCreations() {
  return (
    <div className="profile-details__personal">
      <div className="profile-details__personal-header">
        <span className="profile-details__personal-badge" />
        <p className="profile-details__personal-title">Personal Creations &amp; Hobbies</p>
      </div>

      {/* Graphic */}
      <div className="profile-details__personal-section">
        <div className="profile-details__personal-section-header">
          <h3 className="profile-details__section-title">Graphic</h3>
          <p className="profile-details__section-subtitle">Graphic Design</p>
        </div>
        <div className="profile-details__personal-grid">
          <Image src="https://i.pinimg.com/736x/a5/cc/ae/a5ccae68771dd1ad54977d2f94c2e6d2.jpg" />
          <Image src="https://i.pinimg.com/736x/2d/fa/75/2dfa751746e63bb74ae8adbc631c42af.jpg" />
          <Image src="https://i.pinimg.com/736x/81/ef/d4/81efd48451bde26d46c7272c27b73450.jpg" />
        </div>
        <p className="profile-details__personal-caption">Aichi International Film Festival poster competition entries by mme</p>
      </div>

      {/* Photo */}
      <div className="profile-details__personal-section">
        <div className="profile-details__personal-section-header">
          <h3 className="profile-details__section-title">Photo</h3>
          <p className="profile-details__section-subtitle">Photography &amp; Retouching</p>
        </div>
        <div className="profile-details__personal-grid profile-details__personal-grid--photo">
          <Image src="https://i.pinimg.com/736x/0e/84/4d/0e844d58a145e5dc448c9e358ecf4a69.jpg" />
          <Image src="https://i.pinimg.com/736x/7a/e3/83/7ae383733a6245db5d6024474c604881.jpg" />
          <Image src="https://i.pinimg.com/736x/00/87/9b/00879b661873e693b02a6def89b7bf54.jpg" />
        </div>
        <p className="profile-details__personal-caption">Travel photography, family, and friends</p>
      </div>

      {/* Illustration & Movie */}
      <div className="profile-details__personal-row">
        <div className="profile-details__personal-section profile-details__personal-section--half">
          <div className="profile-details__personal-section-header">
            <h3 className="profile-details__section-title">Illustration</h3>
            <p className="profile-details__section-subtitle">Illustration</p>
          </div>
          <div className="profile-details__personal-grid-illustration">
            <Image src="https://i.pinimg.com/736x/69/5a/43/695a43e1babc706295f342a583da13fe.jpg" />
            <Image src="https://i.pinimg.com/736x/93/69/c3/9369c30253bc8ff48169d1d7ce65061a.jpg" />
          </div>
        </div>
        <div className="profile-details__personal-section profile-details__personal-section--half">
          <div className="profile-details__personal-section-header">
            <h3 className="profile-details__section-title">Movie</h3>
            <p className="profile-details__section-subtitle">Video &amp; Editing</p>
          </div>
          <div className="profile-details__personal-grid-movie">
            <Image src="https://i.pinimg.com/736x/ef/9f/3e/ef9f3eab03eb95d0f52365dc6df97863.jpg" />
            <Image src="https://i.pinimg.com/736x/bc/af/a1/bcafa1445f7a3962739af7dd6024a784.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Articles() {
  return (
    <div className="profile-details__articles">
      <div className="profile-details__section-header">
        <h3 className="profile-details__section-title">Articles</h3>
        <p className="profile-details__section-subtitle">My published articles</p>
      </div>
      <p className="profile-details__articles-body">
        As part of content marketing, I write columns for our company blog. Our
        articles attract users from organic search, Pinterest, and even Adobe's
        featured site.
      </p>
      <div className="profile-details__articles-grid">
        <ArticleCard text="30 Simple Button Designs for Web Production" category="Design" thumbSrc="https://i.pinimg.com/736x/1e/3e/6f/1e3e6f54a68e56519519677d1b682a39.jpg" />
        <ArticleCard text="How to Write Effective Catchphrases for Your Website" category="Marketing" thumbSrc="https://i.pinimg.com/736x/25/7c/da/257cdaab8c439162e47fbea594c85316.jpg" />
        <ArticleCard text="Easily Merge & Split PDFs with Adobe Acrobat" category="Tips" thumbSrc="https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg" />
      </div>
    </div>
  );
}

/* ---------- Profile Details main component ---------- */
const ProfileDetails = () => (
  <section className="profile-details">
    <div className="profile-details__container">
      <div className="profile-details__layout">
        {/* Avatar */}
        <div className="profile-details__image-wrapper">
          <Image src="https://i.pinimg.com/1200x/3c/ca/6c/3cca6c3216076a483f5c24cffcaef97d.jpg"/>
        </div>

        {/* Info */}
        <div className="profile-details__info">
          <div className="profile-details__name-row">
            <span className="profile-details__name">John Doe</span>
            <span className="profile-details__name-separator" />
            <span className="profile-details__birth">Born Dec 6, 1992</span>
          </div>

          {/* Timeline */}
          <div className="profile-details__timeline">
            <div className="profile-details__timeline-item">
              <span className="profile-details__timeline-year">2015</span>
              <div className="profile-details__timeline-text">
                <p>Studied media art (installation works) at Strathmore University, Faculty of Information Science and Technology.</p>
                <p>Enrolled in a Design School to study advertising design, while working part-time at Safaricom.Ltd. overseeing fintech operations.</p>
              </div>
            </div>
            <div className="profile-details__timeline-item">
              <span className="profile-details__timeline-year">2017</span>
              <div className="profile-details__timeline-text">
                <p>Joined an advertising design firm in Nairobi. Worked on corporate brochures, school guides, and OOH projects for a major new landmark complex and a historical cultural restoration project.</p>
              </div>
            </div>
            <div className="profile-details__timeline-item">
              <span className="profile-details__timeline-year">2019</span>
              <div className="profile-details__timeline-text">
                <p>Left the firm to join Moringa School., a Tech company in Kenya, that focuses on teaching coding. Currently producing websites to learn web development with strong attention to UX.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub‑sections */}
      <Strengths />
      <Selections />
      <PersonalCreations />
      <Articles />
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

/* ---------- Main Profile Page ---------- */
function Profile() {
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
      <KeepCreating />
      <ProfileDetails />
      <Footer />
    </div>
  );
}
export default Profile;