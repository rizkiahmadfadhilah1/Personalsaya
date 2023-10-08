

const isiForm = document.querySelector(".isi-form");
let inputs = isiForm.querySelectorAll("input");
let textArea = isiForm.querySelectorAll("textarea");
let button = isiForm.querySelector("button");

let fillCheck = (input) => {
    if (input.value !== "") {
        input.classList.add("filled");
        input.classList.remove("error");
    } else {
        input.classList.remove("filled");
    }
};

let fillCheckTextarea = (textarea) => {
    if (textarea.value !== "") {
        textarea.classList.add("filled");
        textarea.classList.remove("error");
    } else {
        textarea.classList.remove("filled");
    }
};

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        fillCheck(input);
    });

    input.addEventListener("blur", () => {
        fillCheck(input);
    });
});

textArea.forEach((textarea) => {
    textarea.addEventListener("input", () => {
        fillCheckTextarea(textarea);
    });

    textarea.addEventListener("blur", () => {
        fillCheckTextarea(textarea);
    });
});

button.addEventListener("click", () => {
    let error = 0;
    inputs.forEach((input) => {
        if (input.value === "") {
            input.classList.add("error");
            error++;
        }
    });

    if (error === 0) {
        isiForm.classList.add("submit");
    }
});
