import { Link } from "react-router-dom";

// Data-driven lists —> keeping content separate from markup means adding/removing a pipeline step or a nav card later is a one-line change,
// not a copy-pasted block.

const pipelineSteps = [
   { number: "01", label: "JIRA" },
   { number: "02", label: "BRANCH" },
   { number: "03", label: "CODE" },
   { number: "04", label: "REVIEW" },
   { number: "05", label: "MERGE" },
   { number: "06", label: "DEPLOY" },
];

const relatedTickets = ["PORT-3", "PORT-4", "PORT-5", "PORT-8"];

const navCards = [
   { title: "Profile", subtitle: "About me", to: "/profile" },
   { title: "Projects", subtitle: "Selected Work", to: "/projects" },
   { title: "Contact", subtitle: "Inquiry", to: "/contact" },
];

export default function BuildFooter() {
   return (
      <section className="build-footer">
         <div className="build-footer__grid">
            {/* ---------- LEFT: Behind the Build pipeline ---------- */}
            <div className="build-pipeline">
               <h2 className="build-pipeline__title">BEHIND THE BUILD</h2>
               <p className="build-pipeline__subtitle">
                  From backlog to deployed feature.
               </p>

               {/* Steps rendered from the array above, with a connector line
              between each one (styled via .build-pipeline__connector) */}
               <ol className="build-pipeline__steps">
                  {pipelineSteps.map((step, index) => (
                     <li className="build-pipeline__step" key={step.number}>
                        <span className="build-pipeline__step-number">
                           {step.number}
                        </span>
                        <span className="build-pipeline__step-label">
                           {step.label}
                        </span>

                        {/* No connector line after the last step */}
                        {index < pipelineSteps.length - 1 && (
                           <span
                              className="build-pipeline__connector"
                              aria-hidden="true"
                           />
                        )}
                     </li>
                  ))}
               </ol>

               {/* Ticket pills, mapped so the list can grow without touching JSX */}
               <div className="build-pipeline__tickets">
                  {relatedTickets.map((ticket) => (
                     <span className="ticket-pill" key={ticket}>
                        {ticket}
                     </span>
                  ))}
               </div>

               {/* Static terminal snippet — swap for real commands as needed */}
               <div className="terminal-card">
                  <p className="terminal-card__line">
                     <span className="terminal-card__prompt">$</span> git
                     checkout -b feature/PORT-3-home
                  </p>
                  <p className="terminal-card__line">
                     <span className="terminal-card__prompt">$</span> git push
                     origin feature/PORT-3-home
                  </p>
               </div>
            </div>

            {/* ---------- Vertical divider between the two halves ---------- */}
            <div className="build-footer__divider" aria-hidden="true" />

            {/* ---------- RIGHT: pill-style page nav cards ---------- */}
            <nav className="nav-pills" aria-label="Site sections">
               {navCards.map((card) => (
                  <Link to={card.to} className="nav-pill" key={card.title}>
                     <span className="nav-pill__title">{card.title}</span>
                     <span className="nav-pill__subtitle">{card.subtitle}</span>
                     <span className="nav-pill__icon" aria-hidden="true">
                        ›
                     </span>
                  </Link>
               ))}
            </nav>
         </div>

         {/* ---------- Bottom footer line ---------- */}
         <div className="build-footer__bottom">
            <p className="build-footer__copyright">
               © All Rights Reserved. Your Name
            </p>
            <p className="build-footer__stack">Built with React · Git · Jira</p>
         </div>
      </section>
   );
}
