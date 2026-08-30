

console.log("Test to ensure it's up")

// grab element from the page
const btn = document.getElementById("toggle")
// note the button id is toggle

// run function when clicked
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
})

const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // Hide all sections initially
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active");
    });
    
    // Show the section that matches the request
    document.getElementById(link.dataset.target).classList.add("active");

    // Update which nav button is selected
    links.forEach((link) => link.classList.remove("current"));
    link.classList.add("current");

  });
});
