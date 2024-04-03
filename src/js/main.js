//Footer year

let yearHTML = document.querySelector(".year");

// Get Date/Year

let date = new Date();
let year = date.getFullYear();

// Insert actual year in footer element
yearHTML.innerHTML = year;
