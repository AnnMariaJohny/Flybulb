/* ========================================
   FLYBULB™
   BRIGHTNESS + GLOW WORKERS + PAYMENT
======================================== */


/* ========================================
   NAVIGATION
======================================== */

function goToServicesHub() {
    const servicesPath = "../FLYBULB/FLYBULB/assets/index.html#services";

    if (document.referrer.includes("/FLYBULB/FLYBULB/assets/index.html")) {
        window.history.back();
        return;
    }

    window.location.href = servicesPath;
}


/* ========================================
   GET ELEMENTS
======================================== */

const slider =
    document.getElementById("brightnessSlider");

const brightnessValue =
    document.getElementById("brightnessValue");

const selectedBrightness =
    document.getElementById("selectedBrightness");

const afterImage =
    document.getElementById("afterImage");

const fireflyName =
    document.getElementById("fireflyName");

const address =
    document.getElementById("address");

const sendGlowButton =
    document.getElementById("sendGlowButton");

const paymentSection =
    document.getElementById("paymentSection");

const confirmPayment =
    document.getElementById("confirmPayment");



/* ========================================
   BRIGHTNESS IMAGES
======================================== */

const brightnessImages = {

    first: "image/first%20image.png",

    second: "image/second%20image.png",

    third: "image/third%20image.png",

    fourth: "image/fourth%20image.png"

};


/* ========================================
   IMAGE ERROR HANDLING
======================================== */

function setImageWithFallback(imgElement, imagePath) {
    const img = new Image();
    
    img.onload = function() {
        imgElement.src = imagePath;
    };
    
    img.onerror = function() {
        console.error("Failed to load image: " + imagePath);
        // Retry with alternate path encoding
        const altPath = imagePath.replace(/%20/g, " ");
        imgElement.src = altPath;
    };
    
    img.src = imagePath;
}


/* ========================================
   BRIGHTNESS SLIDER
======================================== */

slider.addEventListener(
    "input",
    function () {

        const value =
            Number(slider.value);


        /* Show percentage */

        brightnessValue.textContent =
            value + "%";


        selectedBrightness.textContent =
            value + "%";



        /* Change image */

        if (value <= 25) {

            setImageWithFallback(afterImage, brightnessImages.first);

        }

        else if (value <= 50) {

            setImageWithFallback(afterImage, brightnessImages.second);

        }

        else if (value <= 75) {

            setImageWithFallback(afterImage, brightnessImages.third);

        }

        else {

            setImageWithFallback(afterImage, brightnessImages.fourth);

        }

    }
);



/* ========================================
   GENERAL POPUP ELEMENTS
======================================== */

const popupOverlay =
    document.getElementById(
        "popupOverlay"
    );

const popupBox =
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

const popupClose =
    document.getElementById(
        "popupClose"
    );

const popupButton =
    document.getElementById(
        "popupButton"
    );



/* ========================================
   SHOW GENERAL POPUP
======================================== */

function showPopup(
    title,
    message,
    icon,
    type
) {

    popupTitle.textContent =
        title;

    popupMessage.textContent =
        message;

    popupIcon.textContent =
        icon;


    popupBox.classList.remove(
        "success",
        "error"
    );


    popupBox.classList.add(
        type
    );


    popupOverlay.classList.add(
        "active"
    );

}



/* ========================================
   CLOSE GENERAL POPUP
======================================== */

function closePopup() {

    popupOverlay.classList.remove(
        "active"
    );

}


popupClose.addEventListener(
    "click",
    closePopup
);


popupButton.addEventListener(
    "click",
    closePopup
);



/* ========================================
   CLICK OUTSIDE GENERAL POPUP
======================================== */

popupOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            popupOverlay
        ) {

            closePopup();

        }

    }
);



/* ========================================
   SEND TO GLOW WORKERS
======================================== */

sendGlowButton.addEventListener(
    "click",
    function () {


        /* ====================================
           GET VALUES
        ==================================== */

        const name =
            fireflyName.value.trim();

        const userAddress =
            address.value.trim();

        const brightness =
            Number(slider.value);



        /* ====================================
           CHECK BRIGHTNESS
        ==================================== */

        if (brightness === 0) {

            showPopup(

                "Your firefly is still dark! 🌙",

                "Choose a brightness level before sending your little firefly to the Glow Workers. ✨",

                "💡",

                "error"

            );

            return;

        }



        /* ====================================
           CHECK NAME
        ==================================== */

        if (name === "") {

            showPopup(

                "Your firefly needs a name! 🪰",

                "Even the Glow Workers need to know who they're rescuing. 😭\n\nGive your little firefly a name first!",

                "🪰",

                "error"

            );

            return;

        }



        /* ====================================
           CHECK ADDRESS
        ==================================== */

        if (userAddress === "") {

            showPopup(

                "Where's the firefly going? 📍",

                "Our Glow Workers aren't equipped with magical GPS. 😭\n\nPlease give us an address!",

                "📍",

                "error"

            );

            return;

        }



        /* ====================================
           PUT DATA INTO PAYMENT SUMMARY
        ==================================== */

        document.getElementById(
            "summaryName"
        ).textContent =
            name;


        document.getElementById(
            "summaryBrightness"
        ).textContent =
            brightness + "%";



        /* ====================================
           SHOW PAYMENT SECTION
        ==================================== */

        paymentSection.style.display =
            "block";



        /* ====================================
           SMALL DELAY FOR SMOOTH SCROLL
        ==================================== */

        setTimeout(
            function () {

                paymentSection.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            },
            150
        );

    }
);



/* ========================================
   PAYMENT SUCCESS POPUP
======================================== */

const paymentSuccessOverlay =
    document.getElementById(
        "paymentSuccessOverlay"
    );

const successFireflyName =
    document.getElementById(
        "successFireflyName"
    );

const successBrightness =
    document.getElementById(
        "successBrightness"
    );

const successPayment =
    document.getElementById(
        "successPayment"
    );

const paymentDone =
    document.getElementById(
        "paymentDone"
    );



/* ========================================
   CONFIRM PAYMENT
======================================== */

confirmPayment.addEventListener(
    "click",
    function () {


        /* ====================================
           GET SELECTED PAYMENT
        ==================================== */

        const selectedPayment =
            document.querySelector(
                'input[name="payment"]:checked'
            );



        /* ====================================
           CHECK PAYMENT
        ==================================== */

        if (!selectedPayment) {

            showPopup(

                "Bro forgot the payment! 😭",

                "The Glow Workers are ready...\n\nBut nobody told them how we're paying. 💳",

                "💳",

                "error"

            );

            return;

        }



        /* ====================================
           GET DATA
        ==================================== */

        const name =
            fireflyName.value.trim();

        const brightness =
            slider.value;

        const paymentMethod =
            selectedPayment.value;



        /* ====================================
           UPDATE SUCCESS POPUP
        ==================================== */

        successFireflyName.textContent =
            name;

        successBrightness.textContent =
            brightness + "%";

        successPayment.textContent =
            paymentMethod;



        /* ====================================
           CLOSE GENERAL POPUP
        ==================================== */

        popupOverlay.classList.remove(
            "active"
        );



        /* ====================================
           SHOW PAYMENT SUCCESS
        ==================================== */

        paymentSuccessOverlay.classList.add(
            "active"
        );



        /* ====================================
           LITTLE SUCCESS SOUND EFFECT
           Using Web Audio API
        ==================================== */

        try {

            const audioContext =
                new (
                    window.AudioContext ||
                    window.webkitAudioContext
                )();

            const oscillator =
                audioContext.createOscillator();

            const gainNode =
                audioContext.createGain();


            oscillator.type =
                "sine";


            oscillator.frequency.setValueAtTime(
                500,
                audioContext.currentTime
            );


            oscillator.frequency.exponentialRampToValueAtTime(
                900,
                audioContext.currentTime + 0.25
            );


            gainNode.gain.setValueAtTime(
                0.12,
                audioContext.currentTime
            );


            gainNode.gain.exponentialRampToValueAtTime(
                0.001,
                audioContext.currentTime + 0.6
            );


            oscillator.connect(
                gainNode
            );

            gainNode.connect(
                audioContext.destination
            );


            oscillator.start();

            oscillator.stop(
                audioContext.currentTime + 0.6
            );

        }

        catch (error) {

            console.log(
                "Audio unavailable"
            );

        }

    }
);



/* ========================================
   PAYMENT DONE BUTTON
======================================== */

paymentDone.addEventListener(
    "click",
    function () {

        paymentSuccessOverlay.classList.remove(
            "active"
        );


        /* ====================================
           RESET PAGE
        ==================================== */

        slider.value = 0;

        brightnessValue.textContent =
            "0%";

        selectedBrightness.textContent =
            "0%";

        afterImage.src =
            brightnessImages.first;


        fireflyName.value =
            "";

        address.value =
            "";


        /* Unselect payment */

        const paymentOptions =
            document.querySelectorAll(
                'input[name="payment"]'
            );


        paymentOptions.forEach(
            function (option) {

                option.checked =
                    false;

            }
        );


        /* Hide payment section */

        paymentSection.style.display =
            "none";


        /* Go back to top */

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* ========================================
   CLOSE PAYMENT POPUP
   WHEN CLICKING OUTSIDE
======================================== */

paymentSuccessOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            paymentSuccessOverlay
        ) {

            paymentSuccessOverlay.classList.remove(
                "active"
            );

        }

    }
);