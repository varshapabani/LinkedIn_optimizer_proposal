
document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.querySelector(".login-box form");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        const savedData = localStorage.getItem("signupData");

        if (!savedData) {
            alert("No account found. Please create an account first.");
            return;
        }

        const account = JSON.parse(savedData);

        if (
            username === account.username &&
            password === account.password
        ) {

            alert("Login successful!");

            window.location.href = "profile.html";

        } else {

            alert("Incorrect username or password. Please try again.");

        }

    });

});
