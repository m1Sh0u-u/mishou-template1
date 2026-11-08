const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector("#setting-menu");

dropdownToggle.addEventListener("click", () => {
  const isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
  dropdownToggle.setAttribute("aria-expanded", String(!isExpanded));
  dropdownMenu.hidden = isExpanded;
});