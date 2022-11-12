const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const items = document.querySelector(".items");

gridbutton.addEventListener("click", () => {
    items.classList.add(".items");
    items.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    items.classList.add("list");
    items.classList.remove(".items");
})