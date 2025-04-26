// Set the target date to 45 days from now
const targetDate = new Date("2025/06/15");
const form = document.querySelector("form");
const inputEmail = document.querySelector("form.subscribe .email");
const sidebarButton = document.querySelectorAll(".sidebarButton a");


document.getElementById("hamburger").addEventListener("click", function () {
toggleMenu();
});
sidebarButton.forEach(sideButton => {
  sideButton.addEventListener("click", function () {
    toggleMenu();
  });
});

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputEmail.value);
});

// Function to update countdown
function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference < 0) {
    document.querySelector(".countdown").innerHTML = "<h2>We're Live!</h2>";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const timeElements = document.querySelectorAll(".time .timeNumber");
  timeElements[0].textContent = days;
  timeElements[1].textContent = hours;
  timeElements[2].textContent = minutes;
  timeElements[3].textContent = seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
