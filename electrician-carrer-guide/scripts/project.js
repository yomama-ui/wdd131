document.getElementById("year").textContent = new Date().getFullYear();

// Object + Array
const tools = [
  { name: "Multimeter", use: "Measure voltage and current" },
  { name: "Wire Stripper", use: "Remove insulation from wires" },
  { name: "Voltage Tester", use: "Check live circuits" }
];

// Function 1
function displayTools() {
  const container = document.getElementById("tools-container");
  if (!container) return;

  container.innerHTML = tools.map(tool =>
    `<div class="card">
      <h3>${tool.name}</h3>
      <p>${tool.use}</p>
    </div>`
  ).join("");
}

displayTools();

// Function 2
function displayCareers() {
  const careers = ["Residential", "Commercial", "Industrial"];
  const list = document.getElementById("career-list");
  if (!list) return;

  careers.forEach(type => {
    list.innerHTML += `<li>${type} Electrician</li>`;
  });
}

displayCareers();

// DOM + event + conditionals + localStorage
const form = document.getElementById("interest-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const level = document.getElementById("experience").value;
    const message = document.getElementById("form-message");

    let response = "";

    if (level === "beginner") {
      response = `Start with a trade school or apprenticeship.`;
    } else if (level === "apprentice") {
      response = `You're on the right path. Keep building hours.`;
    } else {
      response = `You're ready for leadership roles.`;
    }

    message.textContent = `${response}`;

    let submissions = Number(localStorage.getItem("submissions")) || 0;
    submissions++;
    localStorage.setItem("submissions", submissions);
  });
}
