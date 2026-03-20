document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('theme');
  if (!button) return; // In case the HTML/ID doesn't match

  button.addEventListener('click', () => {
    document.body.classList.toggle('theme2');
  });
});
