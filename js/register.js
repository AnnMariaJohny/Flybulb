// ==========================================
// FLYBULB™ REGISTRATION
// ==========================================

const registerForm = document.getElementById("registerForm");


// ==========================================
// GENERATE FIREFLY ID
// ==========================================

function generateFireflyID() {

    const number = Math.floor(10000 + Math.random() * 90000);

    return "FF-" + number;
}


// ==========================================
// REGISTRATION FORM
// ==========================================

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values

    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const password = document.getElementById("userPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const fireflyName = document.getElementById("fireflyName").value.trim();
    const glowPolicy = document.getElementById("glowPolicy").checked;


    // ==========================================
    // VALIDATION
    // ==========================================

    if (name === "") {

        alert("Please enter your name!");

        return;
    }


    if (email === "") {

        alert("Please enter your email address!");

        return;
    }


    if (password.length < 6) {

        alert("Your glow code must contain at least 6 characters!");

        return;
    }


    if (password !== confirmPassword) {

        alert("Your glow codes don't match!");

        return;
    }


    if (fireflyName === "") {

        alert("Your firefly needs a name!");

        return;
    }


    if (!glowPolicy) {

        alert("Please agree to the FLYBULB™ Glow Policy.");

        return;
    }


    // ==========================================
    // GENERATE FIREFLY ID
    // ==========================================

    const fireflyID = generateFireflyID();


    // Display ID

    document.getElementById("fireflyID").textContent = fireflyID;


    // ==========================================
    // SAVE ACCOUNT
    // ==========================================

    const user = {

        name: name,

        email: email,

        password: password,

        fireflyName: fireflyName,

        fireflyID: fireflyID

    };


    localStorage.setItem(
        "flybulbUser",
        JSON.stringify(user)
    );


    // ==========================================
    // SUCCESS MESSAGE
    // ==========================================

    alert(
        "✨ Registration successful!\n\n" +
        "Welcome, " + name + "!\n\n" +
        "Your Firefly ID is: " + fireflyID
    );


    // ==========================================
    // GO TO LOGIN
    // ==========================================

    window.location.href = "login.html";

});

const registerPassword = document.getElementById("registerPassword");
const toggleRegisterPassword = document.getElementById("toggleRegisterPassword");

toggleRegisterPassword.addEventListener("click", function () {

    if (registerPassword.type === "password") {
        registerPassword.type = "text";
        toggleRegisterPassword.textContent = "🙈";
    } else {
        registerPassword.type = "password";
        toggleRegisterPassword.textContent = "👁";
    }

});


const confirmPassword = document.getElementById("confirmPassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirmPassword.textContent = "🙈";
    } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.textContent = "👁";
    }

});