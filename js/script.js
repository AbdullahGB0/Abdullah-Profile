
const menu = document.getElementById("menu");
const actions = document.getElementById("actions");

menu.addEventListener("click", () => {
    handleMenu();
});

function handleMenu() {

    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});