/* =====================================================
   FLYBULB™ - MAIN SCRIPT.JS
===================================================== */


/* =====================================================
   PAGE ELEMENTS
===================================================== */

const welcomePage = document.getElementById("welcomePage");
const loginPage = document.getElementById("loginPage");
const registerPage = document.getElementById("registerPage");
const websitePage = document.getElementById("websitePage");


/* =====================================================
   PAGE SWITCHING
===================================================== */

function showPage(page) {

    if (welcomePage) {
        welcomePage.classList.add("hidden");
    }

    if (loginPage) {
        loginPage.classList.add("hidden");
    }

    if (registerPage) {
        registerPage.classList.add("hidden");
    }

    if (websitePage) {
        websitePage.classList.add("hidden");
    }

    if (page) {
        page.classList.remove("hidden");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   WELCOME → LOGIN
===================================================== */

function goToLogin() {

    showPage(loginPage);

}


/* =====================================================
   WELCOME → REGISTER
===================================================== */

function goToRegister() {

    showPage(registerPage);

}


/* =====================================================
   BACK TO WELCOME
===================================================== */

function goToWelcome() {

    showPage(welcomePage);

}


/* =====================================================
   LOGIN
===================================================== */

function loginUser() {

    const nameInput =
        document.getElementById("loginName");

    const idInput =
        document.getElementById("loginId");


    if (!nameInput || !idInput) {
        return;
    }


    const name =
        nameInput.value.trim();

    const id =
        idInput.value.trim();


    /* -----------------------------
       CHECK NAME
    ----------------------------- */

    if (name === "") {

        showPopup(
            "Name Missing 🪰",
            "Please enter your name before entering FLYBULB™.",
            "👋",
            "error"
        );

        return;
    }


    /* -----------------------------
       CHECK ID
    ----------------------------- */

    if (id === "") {

        showPopup(
            "ID Missing 🪪",
            "Please enter your Firefly ID.",
            "🪪",
            "error"
        );

        return;
    }


    /* -----------------------------
       SAVE USER
    ----------------------------- */

    localStorage.setItem(
        "flybulbUserName",
        name
    );

    localStorage.setItem(
        "flybulbUserId",
        id
    );


    /* -----------------------------
       ENTER WEBSITE
    ----------------------------- */

    enterWebsite(name);
}


/* =====================================================
   REGISTER
===================================================== */

function registerUser() {

    const nameInput =
        document.getElementById("registerName");

    const idInput =
        document.getElementById("registerId");


    if (!nameInput || !idInput) {
        return;
    }


    const name =
        nameInput.value.trim();

    const id =
        idInput.value.trim();


    /* -----------------------------
       CHECK NAME
    ----------------------------- */

    if (name === "") {

        showPopup(
            "Give Your Firefly a Name! 🪰",
            "Every firefly deserves a name before joining the Glow Zone.",
            "🪰",
            "error"
        );

        return;
    }


    /* -----------------------------
       CHECK ID
    ----------------------------- */

    if (id === "") {

        showPopup(
            "Create Your Firefly ID 🪪",
            "Please enter an ID to create your FLYBULB™ account.",
            "✨",
            "error"
        );

        return;
    }


    /* -----------------------------
       SAVE USER
    ----------------------------- */

    localStorage.setItem(
        "flybulbUserName",
        name
    );

    localStorage.setItem(
        "flybulbUserId",
        id
    );


    /* -----------------------------
       ENTER WEBSITE
    ----------------------------- */

    enterWebsite(name);
}


/* =====================================================
   ENTER MAIN WEBSITE
===================================================== */

function enterWebsite(name) {

    showPage(websitePage);


    const userName =
        document.getElementById("userName");


    if (userName) {

        userName.textContent =
            name;
    }


    const welcomeUser =
        document.getElementById("welcomeUser");


    if (welcomeUser) {

        welcomeUser.textContent =
            "Welcome, " + name + " ✨";
    }
}


/* =====================================================
   CHECK SAVED USER
===================================================== */

function checkSavedUser() {

    const savedName =
        localStorage.getItem(
            "flybulbUserName"
        );


    if (!savedName) {
        return;
    }


    const userName =
        document.getElementById("userName");


    if (userName) {

        userName.textContent =
            savedName;
    }


    const welcomeUser =
        document.getElementById("welcomeUser");


    if (welcomeUser) {

        welcomeUser.textContent =
            "Welcome, " +
            savedName +
            " ✨";
    }
}


/* =====================================================
   LOGOUT
===================================================== */

function logoutUser() {

    showPopup(
        "Leaving the Glow Zone? 🥺",
        "Your little firefly will be waiting when you return.",
        "🪰",
        "success"
    );


    setTimeout(function () {

        localStorage.removeItem(
            "flybulbUserName"
        );

        localStorage.removeItem(
            "flybulbUserId"
        );

        closePopup();

        showPage(welcomePage);

    }, 1500);
}


/* =====================================================
   SERVICE 1
   BULB REPLACEMENT
===================================================== */

function openBulbReplacement() {

    window.location.href =
        "Bulbreplacement/index.html";

}


/* =====================================================
   SERVICE 2
   BRIGHTNESS ADJUSTMENT
===================================================== */

function openBrightnessAdjustment() {

    window.location.href =
        "brightnessadjustment/index.html";

}


/* =====================================================
   SERVICE 3
   COLOR CHANGE
===================================================== */

function openColorChange() {

    window.location.href =
        "colourchange/index.html";

}


/* =====================================================
   CUSTOM POPUP
===================================================== */

function showPopup(
    title,
    message,
    icon = "✨",
    type = "success"
) {

    const overlay =
        document.getElementById(
            "popupOverlay"
        );

    const box =
        document.getElementById(
            "popupBox"
        );

    const popupTitle =
        document.getElementById(
            "popupTitle"
        );

    const popupMessage =
        document.getElementById(
            "popupMessage"
        );

    const popupIcon =
        document.getElementById(
            "popupIcon"
        );


    /* -----------------------------
       IF POPUP IS NOT IN HTML
    ----------------------------- */

    if (!overlay) {

        console.log(message);

        return;
    }


    /* -----------------------------
       POPUP CONTENT
    ----------------------------- */

    if (popupTitle) {

        popupTitle.textContent =
            title;
    }


    if (popupMessage) {

        popupMessage.textContent =
            message;
    }


    if (popupIcon) {

        popupIcon.textContent =
            icon;
    }


    /* -----------------------------
       POPUP TYPE
    ----------------------------- */

    if (box) {

        box.classList.remove(
            "success",
            "error"
        );

        box.classList.add(type);
    }


    /* -----------------------------
       SHOW
    ----------------------------- */

    overlay.classList.add(
        "active"
    );
}


/* =====================================================
   CLOSE POPUP
===================================================== */

function closePopup() {

    const overlay =
        document.getElementById(
            "popupOverlay"
        );


    if (overlay) {

        overlay.classList.remove(
            "active"
        );
    }
}


/* =====================================================
   CLICK OUTSIDE POPUP
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const overlay =
            document.getElementById(
                "popupOverlay"
            );


        if (!overlay) {
            return;
        }


        if (
            event.target === overlay
        ) {

            closePopup();

        }

    }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closePopup();

        }

    }
);


/* =====================================================
   ENTER KEY — LOGIN
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key !== "Enter"
        ) {
            return;
        }


        if (
            loginPage &&
            !loginPage.classList.contains("hidden")
        ) {

            loginUser();

        }

    }
);


/* =====================================================
   ENTER KEY — REGISTER
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key !== "Enter"
        ) {
            return;
        }


        if (
            registerPage &&
            !registerPage.classList.contains("hidden")
        ) {

            registerUser();

        }

    }
);


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
         * Always start at the welcome page.
         */

        showPage(welcomePage);

        checkSavedUser();

    }
);