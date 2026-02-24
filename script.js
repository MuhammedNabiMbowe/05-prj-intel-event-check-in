const form = document.getElementById('checkInForm');
const nameInput = document.getElementById('attendeeName');
const teamSelect = document.getElementById('teamSelect');
// track attendance//
let count = 0;
const maxCount = 50;


form.addEventListener('submit', function(event) {
event.preventDefault();

const name = nameInput.value;
const team = teamSelect.value;
const teamName = teamSelect.selectedOptions[0].text;
//increment count//
count++;
// update progress bar//
const percentage = Math.round((count/maxCount) * 100) + "%";
console.log('progress: ${percentage}');

//update team count//
const teamCounter = document.getElementById(team + "Count");
teamCounter.textContent = parseInt(teamCounter.textContent) + 1;
//show message//
const message = 'Welcome, ${name} from ${teamName}';
form.reset();
});