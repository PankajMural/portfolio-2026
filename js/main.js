function initMarquee() {
  const track = document.querySelector(".marquee__track");
  if (!track) return;

  const content = track.querySelector(".marquee__content");
  if (!content) return;

  const clone = content.cloneNode(true);
  track.appendChild(clone);
}

function initClock() {
  const clockEl = document.getElementById("local-time");
  if (!clockEl || typeof SITE_CONFIG === "undefined") return;

  function update() {
    const now = new Date();
    const formatted = now.toLocaleTimeString("en-GB", {
      timeZone: SITE_CONFIG.timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    clockEl.textContent = formatted;
  }

  update();
  setInterval(update, 1000);
}

function isMobileMenu() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function getCurrentPage() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  return current === "" ? "index.html" : current;
}

function initMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const menuOverlay = document.querySelector(".menu-overlay");
  const closeBtn = document.querySelector(".menu-overlay__close");

  if (!menuBtn || !menuOverlay) return;

  function openMenu() {
    if (!isMobileMenu()) return;
    menuOverlay.classList.add("is-open");
    menuOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    menuOverlay.classList.remove("is-open");
    menuOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  }

  menuBtn.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);

  menuOverlay.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (!isMobileMenu()) closeMenu();
  });
}

function initSiteConfig() {
  if (typeof SITE_CONFIG === "undefined") return;

  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.dataset.config;
    const value = key.split(".").reduce((obj, k) => obj?.[k], SITE_CONFIG);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  const marqueeItems = document.querySelectorAll(".marquee__item");
  marqueeItems.forEach((item) => {
    item.textContent = SITE_CONFIG.marquee;
  });

  const currentPage = getCurrentPage();

  const menuList = document.querySelector(".menu-overlay__list");
  if (menuList) {
    menuList.innerHTML = SITE_CONFIG.pages
      .map(
        (page) => `
      <li class="menu-overlay__item">
        <a href="${page.href}" class="menu-overlay__link${page.href === currentPage ? " is-active" : ""}">
          <span class="menu-overlay__number">${page.num}</span>${page.label}
        </a>
      </li>`
      )
      .join("");
  }

  const siteNavList = document.querySelector(".site-nav__list");
  if (siteNavList) {
    siteNavList.innerHTML = SITE_CONFIG.pages
      .map(
        (page) => `
      <li>
        <a href="${page.href}" class="site-nav__link${page.href === currentPage ? " is-active" : ""}">${page.label}</a>
      </li>`
      )
      .join("");
  }

  const socials = document.querySelector(".page-nav__socials");
  if (socials) {
    socials.innerHTML = `
      <a href="${SITE_CONFIG.socials.instagram}" class="page-nav__social" target="_blank" rel="noopener">Instagram</a>
      <a href="${SITE_CONFIG.socials.linkedin}" class="page-nav__social" target="_blank" rel="noopener">LinkedIn</a>
    `;
  }

  const logo = document.querySelector(".site-header__logo");
  if (logo) {
    logo.textContent = [SITE_CONFIG.name, SITE_CONFIG.nameLine2]
      .filter(Boolean)
      .join(" ");
  }

  const brandName = document.querySelector(".site-header__brand-name");
  if (brandName) {
    brandName.textContent = [SITE_CONFIG.name, SITE_CONFIG.nameLine2]
      .filter(Boolean)
      .join(" ")
      .toUpperCase();
  }

  const brandRole = document.querySelector(".site-header__brand-role");
  if (brandRole) {
    brandRole.textContent = `[${SITE_CONFIG.role}]`;
  }

  const nameLine2 = document.querySelector(".hero__title [data-config='nameLine2']");
  if (nameLine2 && !SITE_CONFIG.nameLine2) {
    nameLine2.style.display = "none";
    nameLine2.previousElementSibling?.remove();
  }

  document.querySelectorAll("[data-config-href]").forEach((el) => {
    const key = el.dataset.configHref;
    const value = key.split(".").reduce((obj, k) => obj?.[k], SITE_CONFIG);
    if (value) el.href = value.startsWith("mailto:") ? value : key === "email" ? `mailto:${value}` : value;
  });

  document.querySelectorAll(".contact-links a[data-config='email']").forEach((el) => {
    el.href = `mailto:${SITE_CONFIG.email}`;
  });

  document.querySelectorAll(".contact-links a").forEach((el) => {
    const text = el.textContent.trim().toLowerCase();
    if (text === "instagram") el.href = SITE_CONFIG.socials.instagram;
    if (text === "linkedin") el.href = SITE_CONFIG.socials.linkedin;
  });
}

function getNextPage() {
  if (typeof SITE_CONFIG === "undefined") return null;
  const pageOrder = ["index.html", ...SITE_CONFIG.pages.map((p) => p.href)];
  const current = window.location.pathname.split("/").pop() || "index.html";
  const normalized = current === "" ? "index.html" : current;
  const idx = pageOrder.indexOf(normalized);
  const nextHref = pageOrder[(idx + 1) % pageOrder.length];
  return { href: nextHref };
}

function initPageNav() {
  const nextLink = document.querySelector(".page-nav__next");
  if (!nextLink) return;

  const next = getNextPage();
  if (next) {
    nextLink.href = next.href;
    nextLink.textContent = "Next Page";
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  if (typeof initUserLocation === "function") {
    await initUserLocation();
  }
  initSiteConfig();
  initMarquee();
  initClock();
  initMenu();
  initPageNav();
});
