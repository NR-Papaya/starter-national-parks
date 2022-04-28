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

// const newElement = document.createElement("div");
// newElement.innerText = `${numberParks} exciting parks to visit`
// newElement.classList.add("header-statement")
// header.appendChild(newElement)

// main.removeChild(park)

//event listeners-----------------------//

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", (event) => {
//     console.log("You clicked the button")
// })

const allBtns = document.querySelectorAll(".rate-button");

allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log(event.target.parentNode)
        const park = event.target.parentNode;
        if (park.style.backgroundColor === "green") {
            park.style.backgroundColor = "white";
        } else {
            park.style.backgroundColor = "green";
        }
        console.log(park.style.backgroundColor)
    })
})

const nameSorter = document.querySelector("#name-sorter")

nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("you clicked name sorter");

    const main = document.querySelector("main")
    const parksList = main.querySelectorAll(".park-display")
    main.innerHTML = ""

    const parksArray = Array.from(parksList);

    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;

        if (parkAName < parkBName) {
            return -1;
        } else if (parkAName > parkBName) {
            return 1
        } else {
            return 0;
        }
    })
    parksArray.forEach((park) => {
        main.appendChild(park)
    })
})

const sortByRating = (parkA, parkB) => {
    let parkARating = parseFloat(parkA.querySelector(".rating-display > .value").innerText);
    const parkBRating = parseFloat(parkB.querySelector(".rating-display > .value").innerText);
    console.log(parkB)
    console.log(parkBRating)
    if (parkARating > parkBRating) {
        return -1;
    } else if (parkARating < parkBRating) {
        return 1;
    } else {
        return 0
    }
}

const ratingSorter = document.querySelector("#rating-sorter")
ratingSorter.addEventListener("click", (event) => {
    event.preventDefault();
    let main = document.querySelector("main")
    const parksList = main.querySelectorAll(".park-display")
    const parksArray = Array.from(parksList)
    main = ""
    parksArray.sort(sortByRating)
    console.log(parksArray)
    parksArray.forEach((park) => {
        main.appendChild(park)
    })

})