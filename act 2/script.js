const message = document.getElementById("message");
const changeMessage = document.getElementById("changeMessage");
const changeBackground = document.getElementById("changeBackground");

const colors = ["#774caf", "#b83838", "#e9872b", "#6dda91", "#e078b3"];

let toggled = false;
let currentColor = "";

changeMessage.addEventListener("click", function () {
    toggled = !toggled;
    message.textContent = toggled
        ? "Hello! Welcome to our webpage."
         : "Our name are Enrico, Jahrome, and Andrei.";
});

changeBackground.addEventListener("click", function () {
    let randomColor;
    do {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    } while (randomColor === currentColor);

    currentColor = randomColor;
    document.body.style.backgroundColor = randomColor;
});