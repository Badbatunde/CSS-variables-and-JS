// Accessing the inputs in the controls div in the DOM.
const inputs = document.querySelectorAll('.controls input');

// Modifies the input as suggested by user.
function modifier() {
    // create variable for the data-sizing.
    const suffix = this.dataset.sizing || "";

    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}

// Adds eventListener to each input.
inputs.forEach((input) => {
    input.addEventListener('change', modifier);
    input.addEventListener('mouseover', modifier);
})

// Gets the date and time.
const today = document.querySelector('.today')
const now = new Date();
today.innerHTML = now.toDateString();
