document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("applyForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        // Validate Name
        const name = document.getElementById("name");
        const nameError = document.getElementById("nameError");
        if (name.value.trim() === "") {
            nameError.textContent = "Name cannot be empty!";
            name.classList.add("border-red-500");
            isValid = false;
        } else {
            nameError.textContent = "";
            name.classList.remove("border-red-500");
        }

        // Validate Email
        const email = document.getElementById("email");
        const emailError = document.getElementById("emailError");
        if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            emailError.textContent = "Invalid email address!";
            email.classList.add("border-red-500");
            isValid = false;
        } else {
            emailError.textContent = "";
            email.classList.remove("border-red-500");
        }

        // Validate Phone
        const phone = document.getElementById("phone");
        const phoneError = document.getElementById("phoneError");
        if (!phone.value.match(/^\d{10}$/)) {
            phoneError.textContent = "Invalid phone number! Must be 10 digits.";
            phone.classList.add("border-red-500");
            isValid = false;
        } else {
            phoneError.textContent = "";
            phone.classList.remove("border-red-500");
        }

        if (isValid) {
            alert("Form Submitted Successfully ✅");
            form.reset();
        }
    });
});
