"use client";

import { useEffect } from "react";
import { setupMobileNav } from "../mobileNav";

const stats = [
  { selector: "weddings", target: 450, suffix: "+", label: "Weddings Designed" },
  { selector: "cities", target: 12, suffix: "", label: "Cities Served" },
  { selector: "legacy", target: 10, suffix: "yr", label: "Atelier Legacy" },
];

export default function AtelierPage() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return undefined;

    const cleanupMobileNav = setupMobileNav(nav);
    const animationFrames = [];

    function updateNav() {
      nav.classList.toggle("scrolled", window.scrollY > 80);
    }

    function animateStat(element, target, suffix, duration) {
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(target * eased)}${suffix}`;

        if (progress < 1) {
          animationFrames.push(requestAnimationFrame(tick));
        }
      }

      element.textContent = `0${suffix}`;
      animationFrames.push(requestAnimationFrame(tick));
    }

    stats.forEach(({ selector, target, suffix }, index) => {
      const element = document.querySelector(`[data-count="${selector}"]`);
      if (element) animateStat(element, target, suffix, 900 + index * 120);
    });

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    return () => {
      cleanupMobileNav();
      animationFrames.forEach((frame) => cancelAnimationFrame(frame));
      window.removeEventListener("scroll", updateNav);
    };
  }, []);

  return (
    <div className="standalone-page">
      <div className="progress" id="progress"></div>

      <nav className="nav" id="nav">
        <a className="brand" href="/" aria-label="SAANJH home">
          SAANJH<span className="dot">&middot;</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="primaryNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="nav-links" id="primaryNav">
          <li><a href="/#gallery">PORTFOLIO</a></li>
          <li><a href="/atelier">ATELIER</a></li>
          <li><a href="/#services">SERVICES</a></li>
          <li><a href="/enquire">ENQUIRE</a></li>
        </ul>
      </nav>

      <section className="about" id="about">
        <div>
          <p className="eyebrow">THE ATELIER</p>
          <h2>A decade of <em>crafted</em><br />celebrations.</h2>
          <p>SAANJH is a full-service wedding design atelier born in the gardens of Jaipur. We build mandaps the way couture houses build gowns — every petal stitched in by hand, every drape considered, every chandelier chosen for the story it tells.</p>
          <p>From beachside ceremonies in Goa to royal weddings in Rajasthan, we have designed over 450 weddings for couples who believe their day should feel like nothing they have ever seen before.</p>

          <div className="stats">
            {stats.map(({ selector, target, suffix, label }) => (
              <div className="stat" key={selector}>
                <div className="n" data-count={selector}>{target}{suffix}</div>
                <div className="l">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image">
          <img src="/images/hero-ornate.jpg" alt="Atelier Work" />
        </div>
      </section>

      <footer className="footer">
        <div className="brand">SAANJH<span className="dot">·</span></div>
        <p>Bespoke Wedding Atelier · Jaipur · Estd. 2014</p>
        <div className="socials">
          <a href="https://instagram.com">INSTAGRAM</a>
          <a href="#">YOUTUBE</a>
        </div>
      </footer>
    </div>
  );
}
