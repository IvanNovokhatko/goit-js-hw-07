const form = document.querySelector(".login-form");
const email = form.elements.email;
const password = form.elements.password;

const handleFormSubmit = e => {
    e.preventDefault();

    const currentValues = {
        email: email.value.trim(),
        password: password.value.trim(),
    };

    return password.value.trim() === "" || email.value.trim() === "" ?
        alert("All form fields must be filled in") :
        console.log(currentValues),
        form.reset();
};

form.addEventListener("submit", handleFormSubmit)