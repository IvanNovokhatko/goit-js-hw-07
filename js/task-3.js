const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const onInput = e => {
    const currentValue = e.currentTarget.value.trim();

    currentValue === "" ?
        span.textContent = "Anonymous" :
        span.textContent = currentValue;
};

input.addEventListener("input", onInput);