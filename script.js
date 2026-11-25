/* =========================================
   BIRTHDAY DATE
========================================= */
const birthdayDate =
    new Date().getTime() - 1000;


/* =========================================
   GET HTML ELEMENTS
========================================= */

const countdownScreen =
    document.getElementById("countdownScreen");

const openScreen =
    document.getElementById("openScreen");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const finalScreen =
    document.getElementById("finalScreen");

const openButton =
    document.getElementById("openButton");

const finalButton =
    document.getElementById("finalButton");


/* Countdown elements */

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


/* =========================================
   HELPER
========================================= */

function addZero(number) {
    return String(number).padStart(2, "0");
}


/* =========================================
   COUNTDOWN
========================================= */

/*
   IMPORTANT:
   Timer variable ni first declare chestunnam.
*/

let countdownTimer;


/*
   Countdown update function
*/

function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        birthdayDate - now;


    /*
       If birthday time reached
    */

    if (difference <= 0) {

        /*
           Stop countdown
        */

        clearInterval(countdownTimer);


        /*
           Hide countdown
        */

        countdownScreen.classList.add("hidden");


        /*
           Show Open Surprise
        */

        openScreen.classList.remove("hidden");


        return;
    }


    /*
       DAYS
    */

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    /*
       HOURS
    */

    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    /*
       MINUTES
    */

    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    /*
       SECONDS
    */

    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );


    /*
       Display countdown
    */

    daysElement.textContent =
        addZero(days);

    hoursElement.textContent =
        addZero(hours);

    minutesElement.textContent =
        addZero(minutes);

    secondsElement.textContent =
        addZero(seconds);
}


/*
   Start timer
*/

updateCountdown();

countdownTimer =
    setInterval(
        updateCountdown,
        1000
    );



/* =========================================
   OPEN SURPRISE BUTTON
========================================= */

openButton.addEventListener(
    "click",
    function () {

        /*
           Hide Open Screen
        */

        openScreen.classList.add("hidden");


        /*
           Show Birthday Screen
        */

        birthdayScreen.classList.remove("hidden");


        /*
           Start photo slideshow
        */

        startSlideshow();

    }
);


/* =========================================
   PHOTO SLIDESHOW
========================================= */

const photos = [
    "images/friend1.jpeg",
    "images/friend2.jpeg",
    "images/friend3.jpeg"
];

let currentPhoto = 0;
let slideshowStarted = false;

const friendPhoto =
    document.getElementById("friendPhoto");

const dots =
    document.querySelectorAll(".dot");


/* =========================================
   PRELOAD ALL 3 IMAGES
========================================= */

const loadedImages = [];

photos.forEach(function (photoPath) {

    const img = new Image();

    img.src = photoPath;

    loadedImages.push(img);

});


/* =========================================
   UPDATE DOTS
========================================= */

function updateDots() {

    dots.forEach(function (dot, index) {

        if (index === currentPhoto) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    });

}


/* =========================================
   CHANGE PHOTO
========================================= */

function changePhoto() {

    /* Fade out */

    friendPhoto.style.opacity = "0";

    friendPhoto.style.transform =
        "scale(0.92)";


    setTimeout(function () {

        /* Next image */

        currentPhoto++;

        if (currentPhoto >= photos.length) {

            currentPhoto = 0;

        }


        /* Change image */

        friendPhoto.src =
            photos[currentPhoto];


        /* Update dots */

        updateDots();


        /* Fade in */

        setTimeout(function () {

            friendPhoto.style.opacity = "1";

            friendPhoto.style.transform =
                "scale(1)";

        }, 100);

    }, 400);

}


/* =========================================
   START SLIDESHOW
========================================= */

function startSlideshow() {

    if (slideshowStarted) {
        return;
    }

    slideshowStarted = true;

    /*
       Photo changes every 2 seconds
    */

    setInterval(function () {

        changePhoto();

    }, 2000);

}
/* =========================================
   FINAL SURPRISE
========================================= */

finalButton.addEventListener(
    "click",
    function () {

        /*
           Hide birthday screen
        */

        birthdayScreen.classList.add(
            "hidden"
        );


        /*
           Show final message
        */

        finalScreen.classList.remove(
            "hidden"
        );

    }
);