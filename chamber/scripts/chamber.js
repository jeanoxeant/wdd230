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

const message = document.querySelector("#message");
const now = new Date();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
}

else {
    const lastVisitDate = new Date(lastVisit);
    const diffTime = now - lastVisitDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 24));

    if (diffDays === 0) {
        message.textContent = "Back so soon! Awesome!";
        
    }else if (diffDays === 1) {
        message.textContent = "You last visited 1 day ago.";
    }else {
        message.textContent = `You last visited ${diffDays} days ago.`;
    }
}

// store the new visit count total into localStorage
localStorage.setItem("lastVisit", now.toDateString());