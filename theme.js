// Selectează butonul
const toggleButton = document.getElementById('theme-toggle');

// Când se apasă butonul, schimbă tema
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Schimbă textul butonului în funcție de mod
  if (document.body.classList.contains('light-mode')) {
    toggleButton.textContent = '🌙 Mod Întunecat';
  } else {
    toggleButton.textContent = '☀️ Mod Luminos';
  }
});
