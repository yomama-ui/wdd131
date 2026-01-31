const temples = [
  {
    templeName: "St. George Utah Temple",
    location: "St. George, Utah, United States",
    dedicated: "April 6, 1877",
    area: 143969,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st-george-utah-temple-336.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "April 6, 1893",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-337.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "November 27, 1919",
    area: 42100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-339.jpg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah, United States",
    dedicated: "March 20, 2016",
    area: 85084,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-354.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-460.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "May 21, 2017",
    area: 44175,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-446.jpg"
  },
  {
    templeName: "Mesa Arizona Temple",
    location: "Mesa, Arizona, United States",
    dedicated: "October 23, 1927",
    area: 113916,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-341.jpg"
  },
  {
    templeName: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "May 2, 2020",
    area: 6861,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-565.jpg"
  },
  {
    templeName: "Tijuana Mexico Temple",
    location: "Tijuana, Mexico",
    dedicated: "December 13, 2015",
    area: 33367,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-352.jpg"
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, United States",
    dedicated: "May 17, 1884",
    area: 119619,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-342.jpg"
  }
];

const container = document.querySelector("#temple-cards");

function displayTemples(templeList) {
  container.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedication = document.createElement("p");
    dedication.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    card.append(name, location, dedication, area, img);
    container.appendChild(card);
  });
}

displayTemples(temples);

// Filters
document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    switch (filter) {
      case "old":
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
        break;
      case "new":
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
        break;
      case "large":
        displayTemples(temples.filter(t => t.area > 90000));
        break;
      case "small":
        displayTemples(temples.filter(t => t.area < 10000));
        break;
      default:
        displayTemples(temples);
    }
  });
});

// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
