const rating = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");
const buttons = document.querySelectorAll("button");
const score = document.querySelector(".result");
const submit = document.querySelector(".decide");
const content = document.querySelector(".content");

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
    if (score.innerText < 3) {
        content.innerText = `Sorry you have such a low evaluation of our service. What can we do to improve your experience in the future?`;
    }
}



