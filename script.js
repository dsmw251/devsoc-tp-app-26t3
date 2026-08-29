

console.log("Test to ensure it's up")
// grab element from the page
const btn = document.getElementById("toggle")
// note the button id is toggle

// run function when clicked
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
})