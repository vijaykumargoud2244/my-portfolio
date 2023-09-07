let ButtonEl = document.getElementById("Button");
let span = document.getElementById("span");

function Change() {
    ButtonEl.classList.toggle("bi bi-x");
}

ButtonEl.addEventListener("click", Change());