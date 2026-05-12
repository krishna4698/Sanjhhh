"use client";

import { useEffect } from "react";
import { setupMobileNav } from "./mobileNav";

const pageMarkup = "<div class=\"progress\" id=\"progress\"></div>\r\n\r\n<!-- NAV -->\r\n<nav class=\"nav\" id=\"nav\">\r\n  <a class=\"brand\" href=\"/\" aria-label=\"SAANJH home\">SAANJH<span class=\"dot\">&middot;</span></a>\r\n  <button class=\"nav-toggle\" type=\"button\" aria-label=\"Open menu\" aria-expanded=\"false\" aria-controls=\"primaryNav\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </button>\r\n  <ul class=\"nav-links\" id=\"primaryNav\">\r\n    <li><a href=\"/#gallery\">PORTFOLIO</a></li>\r\n    <li><a href=\"/atelier\">ATELIER</a></li>\r\n    <li><a href=\"/#services\">SERVICES</a></li>\r\n    <li><a href=\"/enquire\">ENQUIRE</a></li>\r\n  </ul>\r\n</nav><!-- =================== HERO ZOOM SECTION =================== -->\r\n<div class=\"hero-wrap\" id=\"heroWrap\">\r\n  <section class=\"hero\">\r\n\r\n    <!-- LAYER 1: Rose-lit garden mandap -->\r\n    <div class=\"lyr\" id=\"L1\" style=\"--focus-y:46%\">\r\n      <img src=\"/images/hero-zoom-golden-gazebo.jpg\" alt=\"Rose-lit garden mandap with chandelier and floral aisle\">\r\n    </div>\r\n\r\n    <!-- LAYER 2: Ornate floral aisle -->\r\n    <div class=\"lyr\" id=\"L2\" style=\"opacity:0; --focus-y:48%\">\r\n      <img src=\"/images/hero-zoom-ornate-aisle.jpg\" alt=\"Ornate floral wedding aisle with reflective black water\">\r\n    </div>\r\n\r\n    <!-- LAYER 3: Coastal pastel ceremony -->\r\n    <div class=\"lyr\" id=\"L3\" style=\"opacity:0; --focus-y:45%\">\r\n      <img src=\"/images/hero-zoom-coastal-pastel.jpg\" alt=\"Pastel coastal wedding mandap by the sea\">\r\n    </div>\r\n\r\n    <!-- LAYER 4: Red rose canopy -->\r\n    <div class=\"lyr\" id=\"L4\" style=\"opacity:0; --focus-y:43%\">\r\n      <img src=\"/images/hero-zoom-rose-canopy.jpg\" alt=\"Red rose canopy mandap with floral pillars\">\r\n    </div>\r\n\r\n    <!-- LAYER 5: Heart arch stage -->\r\n    <div class=\"lyr\" id=\"L5\" style=\"opacity:0; --focus-y:47%\">\r\n      <img src=\"/images/hero-zoom-heart-arch.jpg\" alt=\"Heart-shaped floral wedding stage in a garden\">\r\n    </div>\r\n\r\n    <div class=\"vignette\"></div>\r\n    <div class=\"grain\"></div>\r\n\r\n    <!-- BRAND MARK (visible at start) -->\r\n    <div class=\"hero-mark\" id=\"heroMark\">\r\n      <p class=\"eyebrow\">EST. 2014 · BESPOKE WEDDING ATELIER</p>\r\n      <h1>SAANJH</h1>\r\n      <div class=\"ornament\">\r\n        <span></span>\r\n        <svg viewBox=\"0 0 24 24\"><path d=\"M12 2L14 10 22 12 14 14 12 22 10 14 2 12 10 10z\"/></svg>\r\n        <span></span>\r\n      </div>\r\n      <p class=\"tagline\">Where every wedding becomes a story.</p>\r\n    </div>\r\n\r\n    <!-- CAPTIONS for zoom stages -->\r\n    <div class=\"cap\" id=\"c1\">\r\n      <p class=\"num\">01 &middot; SIGNATURE</p>\r\n      <h2>Rose-Lit Garden <em>Mandap</em></h2>\r\n      <p>A glowing pavilion framed by petals, lanterns, and gold</p>\r\n    </div>\r\n    <div class=\"cap\" id=\"c2\">\r\n      <p class=\"num\">02 &middot; ORNATE AISLE</p>\r\n      <h2>A <em>Palace</em> of Florals</h2>\r\n      <p>Reflective aisles and sculptural blooms for a grand entrance</p>\r\n    </div>\r\n    <div class=\"cap\" id=\"c3\">\r\n      <p class=\"num\">03 &middot; COASTAL PASTEL</p>\r\n      <h2>Pastels by the <em>Sea</em></h2>\r\n      <p>Soft arches, sea air, and ceremony light</p>\r\n    </div>\r\n    <div class=\"cap\" id=\"c4\">\r\n      <p class=\"num\">04 &middot; ROSE CANOPY</p>\r\n      <h2>Crimson <em>Canopies</em>, Ivory Pillars</h2>\r\n      <p>A flower-dense mandap built for vows beneath the sun</p>\r\n    </div>\r\n    <div class=\"cap\" id=\"c5\">\r\n      <p class=\"num\">05 &middot; HEART ARCH</p>\r\n      <h2>Twin Arches, <em>One Promise</em></h2>\r\n      <p>A contemporary floral stage shaped around the couple</p>\r\n    </div>\r\n\r\n    <div class=\"scroll-cue\" id=\"scrollCue\">SCROLL TO EXPLORE</div>\r\n  </section>\r\n</div>\r\n\r\n<!-- =================== PORTFOLIO GALLERY =================== -->\r\n<div class=\"gallery-wrap\" id=\"gallery\">\r\n  <div class=\"gallery-pin\">\r\n\r\n    <div class=\"gal-counter\">\r\n      <strong id=\"gNum\">01</strong> / <span id=\"gTotal\">07</span> · PORTFOLIO\r\n    </div>\r\n\r\n    <div class=\"gal-dots\" id=\"galDots\">\r\n      <span></span><span></span><span></span><span></span>\r\n      <span></span><span></span><span></span>\r\n    </div>\r\n\r\n    <!-- SLIDE 1 -->\r\n    <div class=\"gal-slide active\">\r\n      <img src=\"/images/hero-pampas.jpg\" alt=\"Pampas Beach\">\r\n      <div class=\"gal-meta\">\r\n        <p class=\"num\">PROJECT · 001</p>\r\n        <h3>The <em>Pampas</em> Pavilion</h3>\r\n        <p>A coastal ceremony framed by hand-tied pampas grass and blush florals. Goa, 2024.</p>\r\n        <span class=\"tag\">BEACH WEDDING</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- SLIDE 2 -->\r\n    <div class=\"gal-slide\">\r\n      <img src=\"/images/hero-golden.jpg\" alt=\"Golden Pavilion\">\r\n      <div class=\"gal-meta\">\r\n        <p class=\"num\">PROJECT · 002</p>\r\n        <h3>The <em>Golden</em> Gazebo</h3>\r\n        <p>A garden mandap dripping in crystal chandeliers, rose carpeting, and lantern light. Udaipur, 2024.</p>\r\n        <span class=\"tag\">GARDEN WEDDING</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- SLIDE 3 -->\r\n    <div class=\"gal-slide\">\r\n      <img src=\"/images/hero-ornate.jpg\" alt=\"Ornate Mandap\">\r\n      <div class=\"gal-meta\">\r\n        <p class=\"num\">PROJECT · 003</p>\r\n        <h3>The <em>Royal</em> Architecture</h3>\r\n        <p>Six gilded mandap pillars crowned with floral fountains. A reflective floor doubled the drama. Jaipur, 2023.</p>\r\n        <span class=\"tag\">PALACE WEDDING</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- SLIDE 4 -->\r\n    <div class=\"gal-slide\">\r\n      <img src=\"/images/hero-peacock.jpg\" alt=\"Peacock Mandap\">\r\n      <div class=\"gal-meta\">\r\n        <p class=\"num\">PROJECT · 004</p>\r\n        <h3>The <em>Peacock</em> Procession</h3>\r\n        <p>A coastal mandap with peacock motifs, tea-rose canopy, and a turquoise guest aisle. Mumbai, 2024.</p>\r\n        <span class=\"tag\">COASTAL WEDDING</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- SLIDE 5 -->\r\n    <div class=\"gal-slide\">\r\n      <img src=\"/images/hero-rose.jpg\" alt=\"Rose Dome\">\r\n      <div class=\"gal-meta\">\r\n        <p class=\"num\">PROJECT · 005</p>\r\n        <h3>A Thousand <em>Roses</em></h3>\r\n        <p>Crimson roses domed over white blossom pillars, with gold tassel curtains. Delhi, 2023.</p>\r\n        <span class=\"tag\">SIGNATURE FLORAL</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- SLIDE 6 -->\r\n    <div class=\"gal-slide\">\r\n      <img src=\"/images/gal-heart.jpg\" alt=\"Heart Arch\">\r\n      <div class=\"gal-meta\">\r\n        <p class=\"num\">PROJECT · 006</p>\r\n        <h3>The <em>Infinity</em> Arch</h3>\r\n        <p>Twin floral loops in lavender and ivory — symbolic, photogenic, unforgettable. Chandigarh, 2024.</p>\r\n        <span class=\"tag\">CONTEMPORARY</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- SLIDE 7 -->\r\n    <div class=\"gal-slide\">\r\n      <img src=\"/images/gal-pink-ocean.jpg\" alt=\"Pink Ocean\">\r\n      <div class=\"gal-meta\">\r\n        <p class=\"num\">PROJECT · 007</p>\r\n        <h3>The <em>Skyline</em> Stage</h3>\r\n        <p>An open-sky pavilion with a cascading floral ceiling and sea-view altar. Mumbai, 2025.</p>\r\n        <span class=\"tag\">ROOFTOP WEDDING</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- =================== SERVICES =================== -->\r\n<section class=\"services\" id=\"services\">\r\n  <p class=\"eyebrow\">OUR CRAFT</p>\r\n  <h2>What We <em>Curate</em></h2>\r\n  <p>Bespoke design across every moment of your celebration</p>\r\n\r\n  <div class=\"svc-grid\">\r\n    <div class=\"svc\">\r\n      <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\">\r\n        <path d=\"M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6\"/>\r\n      </svg>\r\n      <h4>Mandap & Stage Design</h4>\r\n      <p>Custom-built floral structures, from beach pavilions to palace-scale mandaps.</p>\r\n    </div>\r\n    <div class=\"svc\">\r\n      <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\">\r\n        <circle cx=\"12\" cy=\"9\" r=\"6\"/><path d=\"M12 15v6M9 21h6\"/>\r\n      </svg>\r\n      <h4>Floral Architecture</h4>\r\n      <p>Heirloom florals, hand-tied installations, scented walkways and aisle design.</p>\r\n    </div>\r\n    <div class=\"svc\">\r\n      <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\">\r\n        <path d=\"M12 2v6M12 16v6M2 12h6M16 12h6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2\"/>\r\n      </svg>\r\n      <h4>Lighting & Ambience</h4>\r\n      <p>Chandeliers, lanterns, fairy canopies and curated lighting design from dusk to dawn.</p>\r\n    </div>\r\n    <div class=\"svc\">\r\n      <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\">\r\n        <path d=\"M3 7h18M3 12h18M3 17h18\"/>\r\n      </svg>\r\n      <h4>Reception Styling</h4>\r\n      <p>Table-scapes, centerpieces, lounge design and the unforgettable details.</p>\r\n    </div>\r\n    <div class=\"svc\">\r\n      <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\">\r\n        <rect x=\"3\" y=\"6\" width=\"18\" height=\"14\" rx=\"1\"/><path d=\"M3 10h18M8 6V4M16 6V4\"/>\r\n      </svg>\r\n      <h4>Full Event Planning</h4>\r\n      <p>End-to-end planning across multi-day Indian weddings, with logistics handled.</p>\r\n    </div>\r\n    <div class=\"svc\">\r\n      <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\">\r\n        <circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20\"/>\r\n      </svg>\r\n      <h4>Destination Weddings</h4>\r\n      <p>Anywhere in India. Goa, Udaipur, Jaipur, Kerala — we travel with our atelier.</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- FOOTER -->\r\n<footer class=\"footer\">\r\n  <div class=\"brand\">SAANJH<span class=\"dot\">·</span></div>\r\n  <p>Bespoke Wedding Atelier · Jaipur · Estd. 2014</p>\r\n  <div class=\"socials\">\r\n    <a href=\"https://instagram.com\">INSTAGRAM</a>\r\n    <!-- <a href=\"#\">PINTEREST</a> -->\r\n    <a href=\"#\">YOUTUBE</a>\r\n  </div>\r\n</footer>";

export default function Home() {
  useEffect(() => {
    const heroWrap = document.getElementById("heroWrap");
    const heroMark = document.getElementById("heroMark");
    const progress = document.getElementById("progress");
    const scrollCue = document.getElementById("scrollCue");
    const nav = document.getElementById("nav");
    const galleryWrap = document.getElementById("gallery");
    const gNum = document.getElementById("gNum");
    const gTotal = document.getElementById("gTotal");

    if (!heroWrap || !heroMark || !progress || !scrollCue || !nav || !galleryWrap || !gNum || !gTotal) {
      return undefined;
    }

    const cleanupMobileNav = setupMobileNav(nav);
    const layers = [1, 2, 3, 4, 5].map((i) => document.getElementById("L" + i));
    const caps = [1, 2, 3, 4, 5].map((i) => document.getElementById("c" + i));
    const galSlides = document.querySelectorAll(".gal-slide");
    const galDots = document.querySelectorAll("#galDots span");
    const totalSlides = galSlides.length;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const remap = (value, inMin, inMax, outMin, outMax) => (
      outMin + clamp((value - inMin) / (inMax - inMin), 0, 1) * (outMax - outMin)
    );
    const fade = (p, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd) => Math.min(
      remap(p, fadeInStart, fadeInEnd, 0, 1),
      remap(p, fadeOutStart, fadeOutEnd, 1, 0)
    );

    const segments = [
      [0.00, 0.22, 6],
      [0.18, 0.42, 6],
      [0.38, 0.62, 6],
      [0.58, 0.82, 6],
      [0.78, 1.00, 3],
    ];

    function updateHero() {
      const rect = heroWrap.getBoundingClientRect();
      const total = heroWrap.offsetHeight - window.innerHeight;
      if (total <= 0) return;

      const p = clamp(-rect.top / total, 0, 1);
      progress.style.width = (p * 100) + "%";
      heroMark.style.opacity = remap(p, 0, 0.04, 1, 0);
      scrollCue.style.opacity = remap(p, 0, 0.04, 0.7, 0);

      layers.forEach((layer, index) => {
        if (!layer) return;

        const [start, end, maxScale] = segments[index];
        const localP = clamp((p - start) / (end - start), 0, 1);
        const scale = Math.pow(maxScale, localP);
        const img = layer.querySelector("img");
        if (img) img.style.transform = "scale(" + scale.toFixed(3) + ")";

        let opacity;
        if (index === 0) opacity = remap(p, end - 0.04, end, 1, 0);
        else if (index === layers.length - 1) opacity = remap(p, start, start + 0.06, 0, 1);
        else opacity = fade(p, start, start + 0.05, end - 0.04, end);

        layer.style.opacity = opacity;
      });

      if (caps[0]) caps[0].style.opacity = fade(p, 0.04, 0.08, 0.16, 0.20);
      if (caps[1]) caps[1].style.opacity = fade(p, 0.22, 0.27, 0.36, 0.40);
      if (caps[2]) caps[2].style.opacity = fade(p, 0.42, 0.47, 0.56, 0.60);
      if (caps[3]) caps[3].style.opacity = fade(p, 0.62, 0.67, 0.76, 0.80);
      if (caps[4]) caps[4].style.opacity = remap(p, 0.82, 0.90, 0, 1);
    }

    function updateGallery() {
      const rect = galleryWrap.getBoundingClientRect();
      const total = galleryWrap.offsetHeight - window.innerHeight;
      if (total <= 0 || totalSlides === 0) return;

      const p = clamp(-rect.top / total, 0, 1);
      const idx = clamp(Math.floor(p * totalSlides), 0, totalSlides - 1);

      galSlides.forEach((slide, index) => slide.classList.toggle("active", index === idx));
      galDots.forEach((dot, index) => dot.classList.toggle("on", index === idx));
      gNum.textContent = String(idx + 1).padStart(2, "0");
    }

    function updateNav() {
      nav.classList.toggle("scrolled", window.scrollY > 80);
    }

    function onScroll() {
      updateHero();
      updateGallery();
      updateNav();
    }

    gTotal.textContent = String(totalSlides).padStart(2, "0");
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      cleanupMobileNav();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
