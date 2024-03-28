function scroll() {
  const nav = document.querySelector(".nav");

  document.addEventListener("scroll", () => {
    let scrollFromTop = window.scrollY;

    if (scrollFromTop > 100) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  });
}

export default scroll;
