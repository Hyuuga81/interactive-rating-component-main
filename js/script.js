const rating = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");
const buttons = document.querySelectorAll("button");
const score = document.querySelector(".result");
const submit = document.querySelector(".decide");

buttons.forEach(function (button) {
    button.addEventListener("click", function() {
        if (!button.classList.contains("chosen")) {
            button.classList.add("chosen");
            insertItem(button);
        } else {
            button.classList.remove("chosen");
        }
    });
});

submit.addEventListener("click", function() {
    rating.classList.add("hide");
    thankYou.classList.remove("hide");
});

const insertItem = function (button) {
    score.innerText = button.innerText;
}



