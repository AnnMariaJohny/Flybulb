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


    // Get entered details

    const email = document
        .getElementById("loginEmail")
        .value
        .trim();

    const password = document
        .getElementById("loginPassword")
        .value;


    // ==========================================
    // EMPTY FIELD CHECK
    // ==========================================

    if (email === "" || password === "") {

        alert(
            "✨ Please enter your Email / Firefly ID and glow code!"
        );

        return;
    }


    // ==========================================
    // PASSWORD LENGTH CHECK
    // ==========================================

    if (password.length < 6) {

        alert(
            "🪲 Your glow code must contain at least 6 characters!"
        );

        return;
    }


    // ==========================================
    // GET REGISTERED USER
    // ==========================================

    const savedUser = localStorage.getItem("flybulbUser");


    // No account registered

    if (!savedUser) {

        alert(
            "🪲 No glow account found!\n\n" +
            "Please register your firefly first."
        );

        return;
    }


    // Convert saved data back into object

    const user = JSON.parse(savedUser);


    // ==========================================
    // CHECK LOGIN
    // ==========================================

    const emailMatches =
        email.toLowerCase() === user.email.toLowerCase();

    const fireflyIDMatches =
        email.toUpperCase() === user.fireflyID.toUpperCase();

    const passwordMatches =
        password === user.password;


    // ==========================================
    // SUCCESSFUL LOGIN
    // ==========================================

    if ((emailMatches || fireflyIDMatches) && passwordMatches) {

        // Save login status

        localStorage.setItem(
            "flybulbLoggedIn",
            "true"
        );


        // Save current user's name

        localStorage.setItem(
            "flybulbCurrentUser",
            user.name
        );


        alert(
            "✨ Welcome back, " +
            user.name +
            "!\n\n" +
            "Your firefly '" +
            user.fireflyName +
            "' is ready to glow! ✨"
        );


        // Go to services page

        window.location.href = "services.html";

    }


    // ==========================================
    // WRONG LOGIN
    // ==========================================

    else {

        alert(
            "Oops! We couldn't verify your glow credentials.\n\n" +
            "Please check your Email / Firefly ID and password."
        );

    }

});