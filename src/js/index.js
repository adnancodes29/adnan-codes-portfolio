import style from "../css/style.css";

const projects = [
  {
    year: 2022,
    name: "Forwwwards Studios",
    description: "This is web agency website",
    url: "https://forwwwardstudios.000webhostapp.com/",
    git: "https://github.com/adnancodes29/Forwwward-Studios",
  },

  {
    year: 2024,
    name: "Tailwind and Webpack",
    description: "How to use tailwind and webpack",
    url: "#",
    git: "https://github.com/adnancodes29/TailwindCss-and-WebPack5",
  },

  {
    year: 2021,
    name: "AdnanCodes VSC Theme",
    description: "A modern clean theme created for Visual Studio Code",
    url: "https://marketplace.visualstudio.com/items?itemName=AdnanCodes.adnancodes",
    git: "#",
  },
];

const projectWrapper = document.querySelector(".card__container");

projects.forEach((project) => {
  const el = document.createElement("div");
  el.className = "card";

  el.innerHTML = `
  <span>${project.year}</span>
  <h4>${project.name}</h4>
  <p>${project.description}</p>
  <a href="${project.url}" target="_blank" class="btn">Demo</a>
  <a href="${project.git}" target="_blank" class="btn">Code</a>`;

  projectWrapper.insertAdjacentElement("beforeend", el);
});

const btn = document.querySelectorAll(".btn");
console.log(btn);

btn.forEach((button) => {
  const hrefContent = button.getAttribute("href");
  console.log(hrefContent);
  if (hrefContent === "#") {
    button.remove();
  }
});

const nav = document.querySelector(".nav");

document.addEventListener("scroll", () => {
  let scrollFromTop = window.scrollY;

  if (scrollFromTop > 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
