const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const DARK_CLASS = 'dark-theme';
const STORAGE_KEY = 'preferred-theme';

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme === 'dark') {
    body.classList.add(DARK_CLASS);
    toggleBtn.setAttribute('aria-pressed', 'true');
    toggleBtn.textContent = '🌚 Toggle Theme';
  }
});

// Toggle theme on click
toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle(DARK_CLASS);
  localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  toggleBtn.setAttribute('aria-pressed', isDark);
  toggleBtn.textContent = isDark ? '🌚 Toggle Theme' : '🌞 Toggle Theme';
});
