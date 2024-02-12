let para = document.querySelector("p");
let button = document.querySelector("button");

para.addEventListener("mousedown", (event => {
    console.log('Paragpraph clicked');
}));

button.addEventListener('mousedown', (event) => {
    console.log('Button clicked');
    if (event.button === 2) event.stopPropagation();
});

window.addEventListener("keydown", event => {
    console.log(event.key);
    if (event.key == "v") {
        document.body.style.background = "violet";
    }
});
window.addEventListener("keyup", event => {
    if (event.key == "v") {
        document.body.style.background = "";
    }
});

const link = document.querySelector('a');
link.addEventListener("click", (event) => {
    console.log(event);
    event.preventDefault();
});