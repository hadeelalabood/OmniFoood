console.log("hello world");

const myName = "Jonas Schemed";
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (ents) {
    const ent = ents[0];
    console.log(ents);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);
observer.observe(sectionHeroEl);
