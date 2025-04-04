document.addEventListener("DOMContentLoaded", function () {
    // Toggle between Login & Signup pages
    const toggleSignup = document.getElementById("toggle-signup");
    const toggleLogin = document.getElementById("toggle-login");

    if (toggleSignup) {
        toggleSignup.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "signup.html"; // Redirect to signup page
        });
    }

    if (toggleLogin) {
        toggleLogin.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "index.html"; // Redirect to login page
        });
    }

    // Signup Form Validation
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else {
                alert("Signup Successful!");
                window.location.href = "index.html"; // Redirect to login page after signup
            }
        });
    }
});
