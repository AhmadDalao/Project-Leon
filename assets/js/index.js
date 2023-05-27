
var list_icon = document.querySelector(".list-icon");
var unordered_list = document.querySelector(".unordered-list");
var list_links = document.querySelectorAll(".list-link");
var close_window = document.querySelector(".close-window");

function showList() {
    unordered_list.classList.toggle("show");
}

list_links.forEach((element) => {
    element.addEventListener("click", function () {
        showList();
    });
});

close_window.addEventListener("click", showList);
list_icon.addEventListener("click", showList);
