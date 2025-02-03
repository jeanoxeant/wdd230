const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${oLastModif.toLocaleDateString()} ${oLastModif.toLocaleTimeString()}</span>`;

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Visit Count
// ********* Page Visits Counter *********
function updatePageVisitsCounter() {
    const msToDays = 84600000;
    let lastVisit = window.localStorage.getItem("numDiscoverPage");
    const visitsDisplay = document.querySelector(".latest-visit");

    // Calculate the time difference between visits
    var currentTime = new Date();
    var previousVisit = new Date(lastVisit);
    var timeDifference = currentTime.getTime() - previousVisit.getTime();
    var daysDifference = timeDifference / msToDays;

    // Display message based on time difference
    if (lastVisit != null) {
        if (daysDifference > 0 && daysDifference < 1) {
            visitsDisplay.textContent = `Back so soon! Awesome!`;
        } else if (Math.floor(daysDifference) === 1) {
            visitsDisplay.textContent = `You last visited 1 day ago.`;
        } else {
            visitsDisplay.textContent = `You last visited ${Math.floor(daysDifference)} days ago.`;
        }
    } else {
        visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
    }
    // store the new visit count total into localStorage
    localStorage.setItem("numDiscoverPage", new Date());

    // console.log("Current Time: " + currentTime);
    // console.log("Previous Visit: " + previousVisit);
    // console.log("Time Difference: " + timeDifference);
    // console.log("Days Difference: " + daysDifference);
}

