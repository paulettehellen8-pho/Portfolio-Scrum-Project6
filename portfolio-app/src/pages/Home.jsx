import React from 'react';
import '../index.css';

export default function Home() {
	const cards = [
		{ title: 'JDoe', body: 'keep Creating. Quietly. Stealth' },
		{ title: 'Project', body: 'My work lives at the intersection of form, function...' },
		{ title: 'Case Study', body: 'Systems, interfaces and subtle motion' },
		{ title: 'Note', body: 'Minimal, calm and intentional' },
	];

	return (
		<div className="home-root">
			<header className="home-header">
				<div className="home-logo">John Doe</div>
				<nav className="home-nav">
					{['Home', 'About', 'Profile'].map((n) => (
						<a key={n} href={'#' + n.toLowerCase()} className="home-nav-link">
							{n}
						</a>
					))}
				</nav>
			</header>

			<main className="home-main">
				<div className="home-hero-card">
					<section className="home-showcase">
						<div className="showcase-overlay" />

						<div className="home-isometric">
							{cards.map((c, i) => (
								<article key={i} className="home-iso-card">
									<div className="iso-card-title">{c.title}</div>
									<p className="iso-card-body">{c.body}</p>
								</article>
							))}
						</div>
					</section>

					<aside className="home-typography">
						<div className="role">Web Designer</div>
						<h1 className="hero-name">John Doe</h1>
						<h2 className="hero-sub">Design Profile</h2>
						<p className="hero-desc">I craft calm, considered interfaces and brand experiences rooted in simplicity. My work lives at the intersection of form, function and subtle motion.</p>
					</aside>
				</div>
			</main>
		</div>
	);
}
