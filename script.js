// Theme toggle
const themeToggle = document.getElementById('themeToggle');
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}
// Initialize theme
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (savedTheme) {
  setTheme(savedTheme);
} else if (prefersDark) {
  setTheme('dark');
} else {
  setTheme('light');
}
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  setTheme(isDark ? 'light' : 'dark');
});

// Fancy form animation
document.querySelectorAll('.input-group input').forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value) this.classList.add('filled');
    else this.classList.remove('filled');
  });
});

// Fake login handler for demo
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if (!email || !password) {
    alert('Please fill in both fields.');
    return;
  }
  // Demo: show success
  this.querySelector('.login-btn').textContent = 'Logging in...';
  setTimeout(() => {
    alert(`Welcome, ${email}! (This is a demo)`);
    this.querySelector('.login-btn').textContent = 'Log In';
    this.reset();
  }, 1200);
});
c