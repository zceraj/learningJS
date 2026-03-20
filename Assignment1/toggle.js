function initThemeToggle() {
  const button = document.getElementById('theme');
  if (!button) return; // In case the HTML/ID doesn't match

  button.addEventListener('click', () => {
    document.body.classList.toggle('theme2');
  });
}

// Handle both cases: script runs before vs after DOM is ready.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
  initThemeToggle();
}
