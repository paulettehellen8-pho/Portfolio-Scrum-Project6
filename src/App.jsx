import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
export default function App() {
   return (
      <div>
         <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
            <Link to="/projects">Projects</Link> |{" "}
            <Link to="/contact">Contact</Link> |{" "}
            <Link to="/profile">Profile</Link>
         </nav>
         <hr />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
         </Routes>

         <div />

         <section className="photo-section">
            <h3 className="section-title">. Personal Creation & Hobbies </h3>
            <h1>graphics design</h1>
            <p className="section-description">Explore my creative work and hobbies</p>
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <h1>Photos</h1>
            <p className="section-description">A collection of my favorite photos</p>
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <h1>Illustrations</h1>
            <p className="section-description">A collection of my illustrations</p>
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <h1>Movie</h1>
            <p className="section-description">A collection of my favorite movies</p>
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <img src="" alt="" className="photo" />
            <h1>Articles  </h1>
            <p className="section-description">A collection of my articles</p>
            <img src="" alt="design" className="photo" />
            <img src="" alt="marketing" className="photo" />
            <img src="" alt="tips" className="photo" />
          </section>
      </div>
   );
}
