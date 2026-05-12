"use client";

import { useEffect } from "react";
import { setupMobileNav } from "../mobileNav";

const WHATSAPP_NUMBER = "919876543210";
const pageMarkup = "<div class=\"progress\" id=\"progress\"></div>\r\n\r\n<!-- NAV -->\r\n<nav class=\"nav\" id=\"nav\">\r\n  <a class=\"brand\" href=\"/\" aria-label=\"SAANJH home\">SAANJH<span class=\"dot\">&middot;</span></a>\r\n  <button class=\"nav-toggle\" type=\"button\" aria-label=\"Open menu\" aria-expanded=\"false\" aria-controls=\"primaryNav\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </button>\r\n  <ul class=\"nav-links\" id=\"primaryNav\">\r\n    <li><a href=\"/#gallery\">PORTFOLIO</a></li>\r\n    <li><a href=\"/atelier\">ATELIER</a></li>\r\n    <li><a href=\"/#services\">SERVICES</a></li>\r\n    <li><a href=\"/enquire\">ENQUIRE</a></li>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- =================== CONTACT =================== -->\r\n<section class=\"contact\" id=\"contact\">\r\n  <div class=\"contact-inner\">\r\n\r\n    <div class=\"contact-info\">\r\n      <p class=\"eyebrow\">ENQUIRE</p>\r\n      <h2>Begin your <em>SAANJH</em> story.</h2>\r\n      <p>Tell us about your wedding. We respond personally within 24 hours, and we'd love to design a celebration that's entirely yours.</p>\r\n\r\n      <div class=\"contact-detail\">\r\n        <div class=\"ic\">✉</div>\r\n        <div>\r\n          <div class=\"ttl\">Email</div>\r\n          <div class=\"val\">hello@saanjh.in</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"contact-detail\">\r\n        <div class=\"ic\">☎</div>\r\n        <div>\r\n          <div class=\"ttl\">Phone / WhatsApp</div>\r\n          <div class=\"val\">+91 98720 43542</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"contact-detail\">\r\n        <div class=\"ic\">⌂</div>\r\n        <div>\r\n          <div class=\"ttl\">Atelier</div>\r\n          <div class=\"val\">C-Scheme, Jaipur, Rajasthan 302001</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"contact-detail\">\r\n        <div class=\"ic\">◐</div>\r\n        <div>\r\n          <div class=\"ttl\">Studio Hours</div>\r\n          <div class=\"val\">By appointment, Mon — Sat</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"contact-form\">\r\n      <div class=\"row2\">\r\n        <div class=\"field\">\r\n          <label>FULL NAME</label>\r\n          <input type=\"text\" required placeholder=\"Your name\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>PARTNER NAME</label>\r\n          <input type=\"text\" placeholder=\"Optional\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row2\">\r\n        <div class=\"field\">\r\n          <label>EMAIL</label>\r\n          <input type=\"email\" required placeholder=\"your@email.com\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>PHONE</label>\r\n          <input type=\"tel\" placeholder=\"+91 ...\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row2\">\r\n        <div class=\"field\">\r\n          <label>WEDDING DATE</label>\r\n          <input type=\"date\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>EVENT TYPE</label>\r\n          <select>\r\n            <option>Wedding Ceremony</option>\r\n            <option>Sangeet / Mehndi</option>\r\n            <option>Reception</option>\r\n            <option>Full Multi-Day Wedding</option>\r\n            <option>Destination Wedding</option>\r\n            <option>Other</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row2\">\r\n        <div class=\"field\">\r\n          <label>VENUE / CITY</label>\r\n          <input type=\"text\" placeholder=\"Jaipur, Goa, etc.\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>GUEST COUNT</label>\r\n          <select>\r\n            <option>Under 100</option>\r\n            <option>100 — 300</option>\r\n            <option>300 — 600</option>\r\n            <option>600 — 1000</option>\r\n            <option>1000+</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>TELL US YOUR VISION</label>\r\n        <textarea placeholder=\"Theme, colors, references, or anything special...\"></textarea>\r\n      </div>\r\n      <button type=\"submit\" class=\"submit-btn\">SEND ENQUIRY</button>\r\n    </form>\r\n  </div>\r\n</section>\r\n\r\n<!-- FOOTER -->\r\n<footer class=\"footer\">\r\n  <div class=\"brand\">SAANJH<span class=\"dot\">·</span></div>\r\n  <p>Bespoke Wedding Atelier · Jaipur · Estd. 2014</p>\r\n  <div class=\"socials\">\r\n    <a href=\"https://instagram.com\">INSTAGRAM</a>\r\n    <!-- <a href=\"#\">PINTEREST</a> -->\r\n    <a href=\"#\">YOUTUBE</a>\r\n  </div>\r\n</footer>";

export default function EnquirePage() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const contactForm = document.querySelector(".contact-form");
    const cleanupMobileNav = setupMobileNav(nav);

    function updateNav() {
      nav?.classList.toggle("scrolled", window.scrollY > 80);
    }

    function getValue(selector) {
      return contactForm?.querySelector(selector)?.value?.trim() || "";
    }

    function buildWhatsAppMessage() {
      const details = [
        ["Full name", getValue('input[placeholder="Your name"]')],
        ["Partner name", getValue('input[placeholder="Optional"]')],
        ["Email", getValue('input[type="email"]')],
        ["Phone", getValue('input[type="tel"]')],
        ["Wedding date", getValue('input[type="date"]')],
        ["Event type", getValue("select")],
        ["Venue / city", getValue('input[placeholder="Jaipur, Goa, etc."]')],
        ["Guest count", contactForm?.querySelectorAll("select")[1]?.value?.trim() || ""],
        ["Vision", getValue("textarea")],
      ].filter(([, value]) => value);

      return [
        "Hi SAANJH, I would like to enquire about wedding planning.",
        "",
        ...details.map(([label, value]) => label + ": " + value),
      ].join("\n");
    }

    function handleSubmit(event) {
      event.preventDefault();
      const submitButton = contactForm?.querySelector(".submit-btn");
      const whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(buildWhatsAppMessage());
      const whatsappWindow = window.open(whatsappUrl, "_blank");

      if (whatsappWindow) {
        whatsappWindow.opener = null;
      } else {
        window.location.href = whatsappUrl;
      }

      if (submitButton) submitButton.textContent = "OPENING WHATSAPP";
    }

    const submitButton = contactForm?.querySelector(".submit-btn");
    if (submitButton) submitButton.textContent = "SEND VIA WHATSAPP";

    contactForm?.addEventListener("submit", handleSubmit);
    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    return () => {
      cleanupMobileNav();
      contactForm?.removeEventListener("submit", handleSubmit);
      window.removeEventListener("scroll", updateNav);
    };
  }, []);

  return <div className="standalone-page" dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
