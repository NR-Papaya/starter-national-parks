const descriptions = document.querySelectorAll(".description-display");
const ratings = document.querySelectorAll(".rating-display .value");
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const header = document.querySelector("header")
const main = document.querySelector("main")
const park = main.querySelector(".park-display")

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    if (content.length > 250) {
        content = content.slice(0, 250);
        content += "<a href='#'>...</a>";
    }
    desc.innerHTML = content
}

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    if (ratingValue > 4.7) {
        // rating.style.fontWeight="bold"
        // rating.style.color = "green";
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
}

const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`
newElement.classList.add("header-statement")
header.appendChild(newElement)

main.removeChild(park)