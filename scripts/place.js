// FOOTER: current year + last modified
const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

currentYearSpan.textContent = new Date().getFullYear();
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;

// WEATHER / WIND CHILL
const tempElement = document.querySelector("#temp");
const windSpeedElement = document.querySelector("#wind-speed");
const windChillElement = document.querySelector("#wind-chill");

const temperature = parseFloat(tempElement.textContent); // °F
const windSpeed = parseFloat(windSpeedElement.textContent); // mph

// One-line function using the standard NOAA wind chill formula (°F)
function calculateWindChill(t, s) {
  return Math.round(
    35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)
  );
}

// Only calculate if conditions are viable:
// temp <= 50°F and wind speed > 3 mph
if (temperature <= 50 && windSpeed > 3) {
  const chill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `${chill} °F`;
} else {
  windChillElement.textContent = "N/A";
}
