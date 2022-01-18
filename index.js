const menuButton = document.getElementById("menu");
const menuList = document.getElementById("menu-list");
let isOpened = false;

menuButton.addEventListener("click", () => {
    isOpened = !isOpened;
    if (isOpened) {
        menuList.classList.add("closed");
    } else {
        menuList.classList.remove("closed");
    }
});