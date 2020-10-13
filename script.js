const toggleButton = document.getElementById('toggle');
const body = document.body;

toggleButton.onclick = () => {
  toggleButton.classList.toggle('off');
  if (body.classList.contains('dark-theme')) {
    body.classList.replace('dark-theme', 'light-theme');
  } else {
    body.classList.replace('light-theme', 'dark-theme');
  }
};
