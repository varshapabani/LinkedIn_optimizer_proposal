
document.addEventListener("DOMContentLoaded", function () {

    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        const accountData = {
            fullName: fullName,
            email: email,
            contact: contact,
            username: username,
            password: password
        };

        localStorage.setItem("signupData", JSON.stringify(accountData));

        alert("Account created successfully! Please sign in.");

        window.location.href = "index.html";

    });

});
