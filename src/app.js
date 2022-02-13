// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");


var button = document.getElementById('button-burger');

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Function burger
function burgerFunction() {
  var x = document.getElementById("burger-list");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
