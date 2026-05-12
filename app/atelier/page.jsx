"use client";

import { useEffect } from "react";
import { setupMobileNav } from "../mobileNav";

const pageMarkup = "<div class=\"progress\" id=\"progress\"></div>\r\n\r\n<!-- NAV -->\r\n<nav class=\"nav\" id=\"nav\">\r\n  <a class=\"brand\" href=\"/\" aria-label=\"SAANJH home\">SAANJH<span class=\"dot\">&middot;</span></a>\r\n  <button class=\"nav-toggle\" type=\"button\" aria-label=\"Open menu\" aria-expanded=\"false\" aria-controls=\"primaryNav\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </button>\r\n  <ul class=\"nav-links\" id=\"primaryNav\">\r\n    <li><a href=\"/#gallery\">PORTFOLIO</a></li>\r\n    <li><a href=\"/atelier\">ATELIER</a></li>\r\n    <li><a href=\"/#services\">SERVICES</a></li>\r\n    <li><a href=\"/enquire\">ENQUIRE</a></li>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- =================== ABOUT =================== -->\r\n<section class=\"about\" id=\"about\">\r\n  <div>\r\n    <p class=\"eyebrow\">THE ATELIER</p>\r\n    <h2>A decade of <em>crafted</em><br>celebrations.</h2>\r\n    <p>SAANJH is a full-service wedding design atelier born in the gardens of Jaipur. We build mandaps the way couture houses build gowns — every petal stitched in by hand, every drape considered, every chandelier chosen for the story it tells.</p>\r\n    <p>From beachside ceremonies in Goa to royal weddings in Rajasthan, we have designed over 200 weddings for couples who believe their day should feel like nothing they have ever seen before.</p>\r\n    <div class=\"stats\">\r\n      <div class=\"stat\"><div class=\"n\">200+</div><div class=\"l\">Weddings Designed</div></div>\r\n      <div class=\"stat\"><div class=\"n\">12</div><div class=\"l\">Cities Served</div></div>\r\n      <div class=\"stat\"><div class=\"n\">10yr</div><div class=\"l\">Atelier Legacy</div></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"about-image\">\r\n    <img src=\"/images/hero-ornate.jpg\" alt=\"Atelier Work\">\r\n  </div>\r\n</section>\r\n\r\n<!-- FOOTER -->\r\n<footer class=\"footer\">\r\n  <div class=\"brand\">SAANJH<span class=\"dot\">·</span></div>\r\n  <p>Bespoke Wedding Atelier · Jaipur · Estd. 2014</p>\r\n  <div class=\"socials\">\r\n    <a href=\"https://instagram.com\">INSTAGRAM</a>\r\n    <!-- <a href=\"#\">PINTEREST</a> -->\r\n    <a href=\"#\">YOUTUBE</a>\r\n  </div>\r\n</footer>";

export default function AtelierPage() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return undefined;

    const cleanupMobileNav = setupMobileNav(nav);

    function updateNav() {
      nav.classList.toggle("scrolled", window.scrollY > 80);
    }

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    return () => {
      cleanupMobileNav();
      window.removeEventListener("scroll", updateNav);
    };
  }, []);

  return <div className="standalone-page" dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
