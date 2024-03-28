function projects() {
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
      description: "A modern clean theme created for VSC",
      url: "https://marketplace.visualstudio.com/items?itemName=AdnanCodes.adnancodes",
      git: "#",
    },
  ];

  const projectWrapper = document.querySelector(".card__container");

  projects.forEach((project) => {
    const el = document.createElement("div");
    el.className = "card";

    el.innerHTML = `
        <div class="card__top">
        <p class="card--year">${project.year}</p>
        <h4 class="card--title">${project.name}</h4>
        <p class="card--description">${project.description}</p>
        </div>
        <div class="card__bottom">
        <a href="${project.url}" target="_blank" class="btn">Demo</a>
        <a href="${project.git}" target="_blank" class="btn">Code</a>
        </div>`;

    projectWrapper.insertAdjacentElement("beforeend", el);
  });

  const btn = document.querySelectorAll(".btn");

  btn.forEach((button) => {
    const hrefContent = button.getAttribute("href");
    if (hrefContent === "#") {
      button.remove();
    }
  });
}

export default projects;
