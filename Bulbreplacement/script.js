/* =========================================================
   FLYBULB - SCRIPT.JS
========================================================= */

let selectedService = "";
let selectedPrice = 0;


/* =========================================================   NAVIGATION
========================================================= */

function goToServicesHub() {
    const servicesPath = "../FLYBULB/FLYBULB/assets/index.html#services";

    if (document.referrer.includes("/FLYBULB/FLYBULB/assets/index.html")) {
        window.history.back();
        return;
    }

    window.location.href = servicesPath;
}


/* =========================================================   SCREENS
========================================================= */

const welcomeScreen = document.getElementById("welcomeScreen");
const replacementScreen = document.getElementById("replacementScreen");
const exchangeScreen = document.getElementById("exchangeScreen");
const paymentScreen = document.getElementById("paymentScreen");


/* =========================================================
   SHOW SCREEN
========================================================= */

function showScreen(screen) {

    if (welcomeScreen) {
        welcomeScreen.classList.add("hidden");
    }

    if (replacementScreen) {
        replacementScreen.classList.add("hidden");
    }

    if (exchangeScreen) {
        exchangeScreen.classList.add("hidden");
    }

    if (paymentScreen) {
        paymentScreen.classList.add("hidden");
    }

    if (screen) {
        screen.classList.remove("hidden");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   OPEN REPLACEMENT
========================================================= */

function openReplacement() {

    clearSelection();

    showScreen(replacementScreen);
}


/* =========================================================
   OPEN EXCHANGE
========================================================= */

function openExchange() {

    clearSelection();

    showScreen(exchangeScreen);
}


/* =========================================================
   BACK TO WELCOME
========================================================= */

function goToWelcome() {

    clearSelection();

    showScreen(welcomeScreen);
}


/* =========================================================
   GO TO SERVICES HUB
========================================================= */

function goToServicesHub() {
    
    const servicesPath = "../FLYBULB/FLYBULB/assets/index.html#services";

    if (document.referrer.includes("/FLYBULB/FLYBULB/assets/index.html")) {
        window.history.back();
        return;
    }

    window.location.href = servicesPath;

}


/* =========================================================
   SELECT REPLACEMENT
========================================================= */

function selectReplacement(name, price, card) {

    selectedService = name;
    selectedPrice = price;


    /* Remove previous selection */

    document
        .querySelectorAll(".level-card, .exchange-level-card")
        .forEach(function (item) {

            item.classList.remove("selected");

        });


    /* Add selection */

    if (card) {

        card.classList.add("selected");

    }


    updateReplacementSelection();


    /* =====================================================
       AUTO MOVE TO CONFIRM BUTTON
    ===================================================== */

    setTimeout(function () {

        const continueButton =
            document.getElementById("continueButton");


        if (continueButton) {

            continueButton.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });


            continueButton.focus();


            /* Pulse animation */

            continueButton.classList.add("attention");


            setTimeout(function () {

                continueButton.classList.remove("attention");

            }, 1800);

        }

    }, 250);

}


/* =========================================================
   SELECT EXCHANGE
========================================================= */

function selectExchange(name, price, card) {

    selectedService = name;
    selectedPrice = price;


    document
        .querySelectorAll(".level-card, .exchange-level-card")
        .forEach(function (item) {

            item.classList.remove("selected");

        });


    if (card) {

        card.classList.add("selected");

    }


    updateExchangeSelection();


    /* =====================================================
       AUTO MOVE TO CONFIRM BUTTON
    ===================================================== */

    setTimeout(function () {

        const continueButton =
            document.getElementById("exchangeContinueButton");


        if (continueButton) {

            continueButton.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });


            continueButton.focus();


            continueButton.classList.add("attention");


            setTimeout(function () {

                continueButton.classList.remove("attention");

            }, 1800);

        }

    }, 250);

}


/* =========================================================
   SELECT PLAN SUPPORT
========================================================= */

function selectPlan(name, price, card) {

    selectedService = name;
    selectedPrice = price;


    document
        .querySelectorAll(".level-card, .exchange-level-card")
        .forEach(function (item) {

            item.classList.remove("selected");

        });


    if (card) {

        card.classList.add("selected");

    }


    updateReplacementSelection();

    updateExchangeSelection();

}


/* =========================================================
   UPDATE REPLACEMENT
========================================================= */

function updateReplacementSelection() {

    const serviceText =
        document.getElementById("selectedService");

    const priceText =
        document.getElementById("selectedPrice");

    const continueButton =
        document.getElementById("continueButton");


    if (serviceText) {

        serviceText.textContent =
            selectedService !== ""
                ? selectedService
                : "No service selected";

    }


    if (priceText) {

        priceText.textContent =
            selectedPrice > 0
                ? "₹" + selectedPrice
                : "₹0";

    }


    if (continueButton) {

        continueButton.disabled =
            selectedPrice === 0;

    }

}


/* =========================================================
   UPDATE EXCHANGE
========================================================= */

function updateExchangeSelection() {

    const serviceText =
        document.getElementById("exchangeSelectedService");

    const priceText =
        document.getElementById("exchangeSelectedPrice");

    const continueButton =
        document.getElementById("exchangeContinueButton");


    if (serviceText) {

        serviceText.textContent =
            selectedService !== ""
                ? selectedService
                : "No exchange selected";

    }


    if (priceText) {

        priceText.textContent =
            selectedPrice > 0
                ? "₹" + selectedPrice
                : "₹0";

    }


    if (continueButton) {

        continueButton.disabled =
            selectedPrice === 0;

    }

}


/* =========================================================
   CONTINUE TO PAYMENT
========================================================= */

function continueToPayment() {

    if (
        selectedService === "" ||
        selectedPrice === 0
    ) {

        showFlybulbAlert(
            "✨ Please select a replacement plan first!"
        );

        return;

    }


    updatePaymentDetails();

    showScreen(paymentScreen);

}


/* =========================================================
   CONTINUE EXCHANGE TO PAYMENT
========================================================= */

function continueExchangeToPayment() {

    if (
        selectedService === "" ||
        selectedPrice === 0
    ) {

        showFlybulbAlert(
            "✨ Please select an exchange option first!"
        );

        return;

    }


    updatePaymentDetails();

    showScreen(paymentScreen);

}


/* =========================================================
   UPDATE PAYMENT DETAILS
========================================================= */

function updatePaymentDetails() {

    const paymentService =
        document.getElementById("paymentService");

    const paymentPrice =
        document.getElementById("paymentPrice");


    if (paymentService) {

        paymentService.textContent =
            selectedService;

    }


    if (paymentPrice) {

        paymentPrice.textContent =
            "₹" + selectedPrice;

    }

}


/* =========================================================
   BACK FROM PAYMENT
========================================================= */

function backFromPayment() {

    if (
        selectedService.includes("Old Bulb Exchange")
    ) {

        showScreen(exchangeScreen);

    } else {

        showScreen(replacementScreen);

    }

}


/* =========================================================
   MAKE PAYMENT
========================================================= */

function makePayment() {

    if (
        selectedService === "" ||
        selectedPrice === 0
    ) {

        showFlybulbAlert(
            "Please select a service first."
        );

        return;

    }


    /* Get success popup */

    const successModal =
        document.getElementById("successModal");

    const successService =
        document.getElementById("successService");

    const successAmount =
        document.getElementById("successAmount");


    /* Update popup information */

    if (successService) {

        successService.textContent =
            selectedService;

    }


    if (successAmount) {

        successAmount.textContent =
            "₹" + selectedPrice;

    }


    /* Show popup */

    if (successModal) {

        successModal.classList.add("show");

        document.body.classList.add("modal-open");

    }

}


/* =========================================================
   CLOSE SUCCESS POPUP
========================================================= */

function closeSuccessModal() {

    const successModal =
        document.getElementById("successModal");


    if (successModal) {

        successModal.classList.remove("show");

    }


    document.body.classList.remove("modal-open");


    clearSelection();


    showScreen(welcomeScreen);

}


/* =========================================================
   CUSTOM FLYBULB ALERT
========================================================= */

function showFlybulbAlert(message) {

    const existing =
        document.getElementById("flybulbAlert");


    if (existing) {

        existing.remove();

    }


    const alertBox =
        document.createElement("div");


    alertBox.id = "flybulbAlert";

    alertBox.className = "flybulb-alert";


    alertBox.innerHTML = `

        <div class="flybulb-alert-icon">
            ✨
        </div>

        <div class="flybulb-alert-content">

            <strong>
                FLYBULB
            </strong>

            <p>
                ${message}
            </p>

        </div>

        <button
            onclick="this.parentElement.remove()"
            aria-label="Close">

            ×

        </button>

    `;


    document.body.appendChild(alertBox);


    setTimeout(function () {

        alertBox.classList.add("show");

    }, 20);


    setTimeout(function () {

        alertBox.classList.remove("show");


        setTimeout(function () {

            if (alertBox.parentElement) {

                alertBox.remove();

            }

        }, 400);

    }, 3500);

}


/* =========================================================
   CLEAR SELECTION
========================================================= */

function clearSelection() {

    selectedService = "";
    selectedPrice = 0;


    /* Remove selected cards */

    document
        .querySelectorAll(".level-card, .exchange-level-card")
        .forEach(function (card) {

            card.classList.remove("selected");

        });


    /* Replacement */

    const replacementService =
        document.getElementById("selectedService");

    if (replacementService) {

        replacementService.textContent =
            "No service selected";

    }


    const replacementPrice =
        document.getElementById("selectedPrice");

    if (replacementPrice) {

        replacementPrice.textContent =
            "₹0";

    }


    const replacementButton =
        document.getElementById("continueButton");

    if (replacementButton) {

        replacementButton.disabled = true;

        replacementButton.classList.remove("attention");

    }


    /* Exchange */

    const exchangeService =
        document.getElementById("exchangeSelectedService");

    if (exchangeService) {

        exchangeService.textContent =
            "No exchange selected";

    }


    const exchangePrice =
        document.getElementById("exchangeSelectedPrice");

    if (exchangePrice) {

        exchangePrice.textContent =
            "₹0";

    }


    const exchangeButton =
        document.getElementById("exchangeContinueButton");

    if (exchangeButton) {

        exchangeButton.disabled = true;

        exchangeButton.classList.remove("attention");

    }


    /* Payment */

    const paymentService =
        document.getElementById("paymentService");

    if (paymentService) {

        paymentService.textContent =
            "No service selected";

    }


    const paymentPrice =
        document.getElementById("paymentPrice");

    if (paymentPrice) {

        paymentPrice.textContent =
            "₹0";

    }

}


/* =========================================================
   LOGIN
========================================================= */

function login() {

    showFlybulbAlert(
        "✨ FLYBULB Login is coming soon!"
    );

}


/* =========================================================
   REGISTER
========================================================= */

function register() {

    showFlybulbAlert(
        "✨ FLYBULB Registration is coming soon!"
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            const successModal =
                document.getElementById("successModal");


            if (
                successModal &&
                successModal.classList.contains("show")
            ) {

                closeSuccessModal();

            }

        }

    }
);


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        showScreen(welcomeScreen);

        clearSelection();

    }
);