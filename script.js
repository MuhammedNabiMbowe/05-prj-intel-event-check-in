const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

// Track attendance
let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  count++;

  // Calculate progress from current count and max goal
  const percentage = Math.round((count / maxCount) * 100);
  attendeeCount.textContent = count;
  progressBar.style.width = `${percentage}%`;

  const teamCounter = document.getElementById(`${team}Count`);
  teamCounter.textContent = parseInt(teamCounter.textContent, 10) + 1;

  greeting.textContent = `Welcome, ${name} from ${teamName}.`;
  greeting.classList.add("success-message");
  greeting.style.display = "block";

  form.reset();
});
