document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";
  const storageKey = "fukoi_lang";

  function getMessages(lang) {
    const common = window.SITE_CONTENT?.common?.[lang] || {};
    const pageSpecific = window.SITE_CONTENT?.[page]?.[lang] || {};
    return { ...common, ...pageSpecific };
  }

  function applyLanguage(lang) {
    const messages = getMessages(lang);
    document.documentElement.lang = lang;
    localStorage.setItem(storageKey, lang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (messages[key] !== undefined) {
        element.innerHTML = messages[key];
      }
    });

    const titleKey = document.body.dataset.i18nTitle;
    if (titleKey && messages[titleKey]) {
      document.title = messages[titleKey];
    }

    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === lang);
    });
  }

  const savedLang = localStorage.getItem(storageKey) || "ja";
  applyLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
    });
  });

  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetUrl = new URL(anchor.href, window.location.href);
      if (targetUrl.pathname !== window.location.pathname || !targetUrl.hash) {
        return;
      }

      const target = document.querySelector(targetUrl.hash);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", targetUrl.hash);
    });
  });

  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
});
