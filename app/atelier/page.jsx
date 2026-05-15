"use client";

import { useEffect } from "react";
import { setupMobileNav } from "../mobileNav";

const stats = [
  { selector: "weddings", target: 450, suffix: "+", label: "Weddings Designed" },
  { selector: "cities", target: 12, suffix: "", label: "Cities Served" },
  { selector: "legacy", target: 15, suffix: "yr", label: "Atelier Legacy" },
];

export default function AtelierPage() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return undefined;

    const cleanupMobileNav = setupMobileNav(nav);
    const animationFrames = [];
    const timers = [];
    let isActive = true;

    function updateNav() {
      nav.classList.toggle("scrolled", window.scrollY > 80);
    }

    function animateStat(element, target, suffix, duration, onComplete) {
      const start = performance.now();

      function tick(now) {
        if (!isActive) return;

        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(target * eased)}${suffix}`;

        if (progress < 1) {
          animationFrames.push(requestAnimationFrame(tick));
        } else {
          element.textContent = `${target}${suffix}`;
          onComplete?.();
        }
      }

      element.textContent = `0${suffix}`;
      animationFrames.push(requestAnimationFrame(tick));
    }

    stats.forEach(({ selector, target, suffix }, index) => {
      const element = document.querySelector(`[data-count="${selector}"]`);
      if (!element) return;

      if (selector === "weddings") {
        const loopWeddingCounter = () => {
          animateStat(element, target, suffix, 900, () => {
            if (!isActive) return;
            timers.push(window.setTimeout(loopWeddingCounter, 3000));
          });
        };

        loopWeddingCounter();
        return;
      }

      animateStat(element, target, suffix, 900 + index * 120);
    });

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    return () => {
      isActive = false;
      cleanupMobileNav();
      animationFrames.forEach((frame) => cancelAnimationFrame(frame));
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("scroll", updateNav);
    };
  }, []);

  return (
    <div className="standalone-page">
      <div className="progress" id="progress"></div>

      <nav className="nav" id="nav">
        <a className="brand" href="/" aria-label="ElysianEventsByNick home">
          ElysianEventsByNick<span className="dot">&middot;</span>
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

      <section className="about atelier-about" id="about">
        <div className="atelier-copy">
          <p className="eyebrow">THE ATELIER</p>
          <h2>A decade of <em>crafted</em><br />celebrations.</h2>
          <p>At ElysianEventsByNick, decor is more than decoration — it’s about creating unforgettable experiences ❤️
With expertise in stylish event planning and aesthetic setups, the brand has worked across various celebration themes, delivering elegant and visually stunning events tailored to every client’s vision.
.</p>
          <p>From floral elegance to modern luxury setups, every project reflects creativity, perfection, and passion. Whether it’s a wedding, reception, baby shower, birthday, or corporate gathering, the team ensures a seamless and memorable atmosphere for every occasion ✨.</p>

          <div className="atelier-mobile-actions" aria-label="Atelier actions">
            <a className="atelier-action primary" href="/#gallery">View Work</a>
            <a className="atelier-action secondary" href="/enquire">Enquire</a>
          </div>

          <div className="stats">
            {stats.map(({ selector, target, suffix, label }) => (
              <div className="stat" key={selector}>
                <div className="n" data-count={selector}>{target}{suffix}</div>
                <div className="l">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image about-video">
          <div className="about-video-frame">
            <iframe
              loading="lazy"
              title="Gumlet video player"
              src="https://play.gumlet.io/embed/6a0314045ad2dae94efb9b56?background=true&autoplay=true&loop=true&disable_player_controls=true"
              referrerPolicy="origin"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
              allowFullScreen
            />
          </div>
         
        </div>
      </section>

      <footer className="footer">
        <div className="brand">ElysianEventsByNick<span className="dot">&middot;</span></div>
        <p>Bespoke Wedding Atelier &middot; Jaipur &middot; Estd. 2014</p>
        <div className="socials">
          <a href="https://instagram.com">INSTAGRAM</a>
          <a href="#">YOUTUBE</a>
        </div>
      </footer>
    </div>
  );
}
