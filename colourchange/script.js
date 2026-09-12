/* =========================================
   FLYBULB - COLOR CHANGE SERVICE
========================================= */


/* =========================================
   VARIABLES
========================================= */

let selectedColor = null;
let selectedPrice = 0;
let selectedWarranty = "";
let selectedPayment = null;


/* =========================================
   SELECT COLOR
========================================= */

function selectColor(card) {

    // Remove selection from all cards
    const cards = document.querySelectorAll(".color-card");

    cards.forEach(function(item) {
        item.classList.remove("selected");
    });


    // Select clicked card
    card.classList.add("selected");


    // Get information from card
    selectedColor = card.dataset.color;
    selectedPrice = Number(card.dataset.price);
    selectedWarranty = card.dataset.warranty;


    // Enable Continue button
    const continueBtn = document.getElementById("continueBtn");

    if (continueBtn) {
        continueBtn.disabled = false;
    }

}


/* =========================================
   GO TO ORDER SUMMARY
========================================= */

function goToSummary() {

    // Don't continue if no color is selected
    if (!selectedColor) {
        return;
    }


    const isCustom = selectedColor.includes("Custom");


    /* Selected Color / Combination */

    const summaryLabel =
        document.getElementById("summaryLabel");

    const summaryColor =
        document.getElementById("summaryColor");


    if (isCustom) {

        summaryLabel.textContent =
            "Selected Combination";

        summaryColor.textContent =
            "❤️💙💚 Custom";

    } else {

        summaryLabel.textContent =
            "Selected Color";

        summaryColor.textContent =
            selectedColor;

    }


    /* Service */

    document.getElementById("summaryService").textContent =
        isCustom
            ? "Custom Color Change"
            : "Firefly Color Change";


    /* Price */

    document.getElementById("summaryAmount").textContent =
        "₹" + selectedPrice.toLocaleString("en-IN");


    /* Warranty */

    document.getElementById("summaryWarranty").textContent =
        selectedWarranty;


    // Go to page 2
    showPage(2);

}


/* =========================================
   GO TO PAYMENT
========================================= */

function goToPayment() {

    const amount =
        "₹" + selectedPrice.toLocaleString("en-IN");


    // Update payment amount

    const paymentAmount =
        document.getElementById("paymentAmount");

    if (paymentAmount) {
        paymentAmount.textContent = amount;
    }


    // Update payment button

    const payBtn =
        document.getElementById("payBtn");

    if (payBtn) {

        payBtn.textContent =
            "Pay " + amount + " →";

        payBtn.disabled = true;

    }


    // Reset payment selection

    selectedPayment = null;


    document
        .querySelectorAll(".payment-card")
        .forEach(function(card) {

            card.classList.remove("selected");

        });


    // Go to page 3

    showPage(3);

}


/* =========================================
   SELECT PAYMENT METHOD
========================================= */

function selectPayment(card) {

    // Remove previous selection

    document
        .querySelectorAll(".payment-card")
        .forEach(function(item) {

            item.classList.remove("selected");

        });


    // Select current payment method

    card.classList.add("selected");


    // Store selected payment

    const paymentName =
        card.querySelector("h3");

    if (paymentName) {

        selectedPayment =
            paymentName.textContent;

    }


    // Enable Pay button

    const payBtn =
        document.getElementById("payBtn");

    if (payBtn) {

        payBtn.disabled = false;

    }

}


/* =========================================
   COMPLETE PAYMENT
========================================= */

function completePayment() {

    // Don't continue without payment method

    if (!selectedPayment) {
        return;
    }


    const isCustom =
        selectedColor.includes("Custom");


    /* Final color */

    const finalColor =
        document.getElementById("finalColor");


    if (finalColor) {

        finalColor.textContent =
            isCustom
                ? "❤️💙💚 Custom Combination"
                : selectedColor;

    }


    /* Final amount */

    const finalAmount =
        document.getElementById("finalAmount");


    if (finalAmount) {

        finalAmount.textContent =
            "₹" + selectedPrice.toLocaleString("en-IN");

    }


    /* Final warranty */

    const finalWarranty =
        document.getElementById("finalWarranty");


    if (finalWarranty) {

        finalWarranty.textContent =
            selectedWarranty;

    }


    // Show success page

    showPage(4);

}


/* =========================================
   PAGE SWITCHING
========================================= */

function showPage(pageNumber) {

    // Hide every page

    document
        .querySelectorAll(".screen")
        .forEach(function(screen) {

            screen.classList.remove("active");

        });


    // Show requested page

    const selectedPage =
        document.getElementById(
            "page" + pageNumber
        );


    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    // Update step indicator

    document
        .querySelectorAll(".step")
        .forEach(function(step) {

            step.classList.remove("active");

        });


    const currentStep =
        document.getElementById(
            "step" + pageNumber
        );


    if (currentStep) {

        currentStep.classList.add("active");

    }


    // Scroll to top

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   BACK TO HOME
========================================= */

function goHome() {

    /*
       Change this filename if your main
       FLYBULB homepage has another name.
    */

    window.location.href = "/assets/index.html";

}
