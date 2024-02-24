// Inital data
const slides = document.querySelectorAll(".slide");
const circles = document.querySelectorAll(".circle");
const buttonMobile = document.querySelector("#menu");
const mobileNav = document.querySelector("nav");
let currentSlide = 1;
let intervalID;

// --------------------------- events ---------------------------

// start the slide area
startInterval();

// Activate the first slide initially
slides[0].classList.add("active");
circles[0].classList.add("active");

circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {

        // clear the active class selection and restarts the slide change interval
        clearActive();
        // Add active class to the selected slide
        slides[index].classList.add("active");
        // Add active class to the clicked circle
        circle.classList.add("active");
        resetInterval(index);
    });
});

// open the menu on the mobile
buttonMobile.addEventListener("click", () => {
    // to close the nav if its oppened
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
});

// disable page reload for the links
document.querySelectorAll("a").forEach((item) => item.addEventListener("click", (event) => event.preventDefault()));

// --------------------------- functions ---------------------------

// clear the active class of the slides
function clearActive() {
    // Remove the 'active' class from all slides
    slides.forEach(slide => slide.classList.remove("active"));
    // Remove the 'active' class from all circles
    circles.forEach(c => c.classList.remove("active"));
}

// declare the interval of the slide change
function startInterval() {
     intervalID = setInterval(() => {

        clearActive();
        slides[currentSlide].classList.add("active");
        circles[currentSlide].classList.add("active");
    
        currentSlide++;
        // reset the slide variabel
        if (currentSlide === 3) {
            currentSlide = 0;
        }
    }, 5000)
}

// resets the interval
function resetInterval(index) {
    // indicates the slide changed to
    currentSlide = index;
    clearInterval(intervalID);
    startInterval();
}