const body = document.querySelector("body");
const icon = document.querySelector("#dl-icon");

const toggleTheme = () => {
  const isLightTheme = body.getAttribute("data-bs-theme") === "light";
  body.setAttribute("data-bs-theme", isLightTheme ? "dark" : "light");
  icon.setAttribute(
    "class",
    isLightTheme ? "bi bi-sun-fill" : "bi bi-moon-fill"
  );
};
