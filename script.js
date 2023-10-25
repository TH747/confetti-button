// Button on hover > rainbow

const button = document.getElementById("myButton");

button.addEventListener("mouseover", function () {
  this.style.backgroundColor = "#e74c3c"; // Change the background color on mouseover
});

button.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#3498db"; // Restore the original background color on mouseout
});
