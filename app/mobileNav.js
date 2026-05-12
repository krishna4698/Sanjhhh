export function setupMobileNav(nav) {
  if (!nav) return () => {};

  const toggle = nav.querySelector(".nav-toggle");
  const links = nav.querySelectorAll(".nav-links a");

  function setOpen(isOpen) {
    nav.classList.toggle("menu-open", isOpen);
    toggle?.setAttribute("aria-expanded", String(isOpen));
    toggle?.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  function toggleMenu() {
    setOpen(!nav.classList.contains("menu-open"));
  }

  function closeMenu() {
    setOpen(false);
  }

  function closeOnEscape(event) {
    if (event.key === "Escape") closeMenu();
  }

  toggle?.addEventListener("click", toggleMenu);
  links.forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", closeMenu);
  document.addEventListener("keydown", closeOnEscape);

  return () => {
    toggle?.removeEventListener("click", toggleMenu);
    links.forEach((link) => link.removeEventListener("click", closeMenu));
    window.removeEventListener("resize", closeMenu);
    document.removeEventListener("keydown", closeOnEscape);
  };
}
