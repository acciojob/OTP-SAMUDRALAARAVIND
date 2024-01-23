
const codeContainer = document.querySelector(".code-container");
const numberOfInputs = 6;
let lastEnteredInputElement = null;

function onInput(event) {
    const currentElement = event.target;
    console.log("event triggered");
    if (currentElement.value) {
        // for doing a click/focus just call the methods click() , and focus() on that HTML element object
        // console.log("Next element", currentElement.nextElementSibling);
        // console.log("Previous Element", currentElement.previousElementSibling);
        lastEnteredInputElement = currentElement;
        currentElement.nextElementSibling && currentElement.nextElementSibling.focus();
    }
}

function onBackSpace(e) {
    // i need to know last entered input element ?
    // lastEnteredInputElement.value = "";
    // if (lastEnteredInputElement.previousElementSibling) {
    //     lastEnteredInputElement.previousElementSibling.focus();
    //     lastEnteredInputElement = lastEnteredInputElement.previousElementSibling;
    // }
    // else {
    //     lastEnteredInputElement = null;
    // }
    e.target.value = "";
    e.target.previousElementSibling && e.target.previousElementSibling.focus();
}

function onEnter(e) {
    if (e.target.value) {
        e.target.nextElementSibling && e.target.nextElementSibling.focus();
    }
}

function onKeyUp(e) {
    if (e.key === "Enter") {
        onEnter(e);
    }
    else if (e.key === "Backspace") {
        onBackSpace(e);
    }
}

for (let i = 1; i <= numberOfInputs; i++) {
    const input = document.createElement("input");
    input.className = "code";
    input.maxLength = 1;
	input.id = `code-${i}`

    input.addEventListener("input", onInput);
    input.addEventListener("keyup", onKeyUp);

    codeContainer.appendChild(input);
}
