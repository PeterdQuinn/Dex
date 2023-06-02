// JavaScript code goes here

// Example: Add an event listener to the toggle switch for dark and light mode
const toggleSwitch = document.querySelector('.toggle');
toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});
