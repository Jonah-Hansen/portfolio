const fs = require("fs");
const path = require("path");

//* run with node to regenerate the starField.svg image

// Set the viewBox size
const viewBoxSize = 320;

// Set the size of the pattern
const patternSize = 640;

// Create an empty string to hold the circle elements
let circles = "";

// Generate how many circles with random positions, sizes, and colors
for (let i = 0; i < 100; i++) {
  // Generate random position and size values
  const cx = Math.floor(Math.random() * viewBoxSize);
  const cy = Math.floor(Math.random() * viewBoxSize);
  const r = Math.random() * 0.9 + 0.1; // random size between 0.1 and 1

  // Generate random lightness value between 50% and 95%
  const l = Math.floor(Math.random() * 46) + 50;

  // Add the circle element to the string
  circles += "<circle cx=\"" + cx + "\" cy=\"" + cy + "\" r=\"" + r + "\" fill=\"hsl(197, 100%, " + l + "%)\" />";
}

// Create the SVG code with the pattern
const svg = "\n  <svg viewBox=\"0 0 " + viewBoxSize + " " + viewBoxSize + "\" xmlns=\"http://www.w3.org/2000/svg\">\n    <filter id=\"blur\">\n      <feGaussianBlur stdDeviation=\".1\" />\n    </filter>\n    <pattern id=\"pattern\" width=\"" + patternSize + "\" height=\"" + patternSize + "\" patternUnits=\"userSpaceOnUse\">\n      " + circles + "\n    </pattern>\n    <rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#pattern)\" filter=\"url(#blur)\" />\n  </svg>\n";

// write to file then log confirmation in green, then reset console color
fs.writeFile(path.join(__dirname, "/public/images/starField.svg"), svg,
  () => console.log("\x1b[32m", '\n generated new starField \n', "\x1b[0m")
)
