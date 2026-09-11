// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

const passwordInput = document.getElementById("loginPassword");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "👁";

    }

});


// ==========================================
// LOGIN FORM
// ==========================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();


    // Check empty fields

    if (email === "" || password === "") {

        alert("Please enter your Email / Firefly ID and glow code!");

        return;
    }


    // Basic password length check

    if (password.length < 6) {

        alert("Your glow code must contain at least 6 characters!");

        return;
    }


    // Successful login

    alert("Welcome back, Glowkeeper! Your firefly is ready to glow!");

});