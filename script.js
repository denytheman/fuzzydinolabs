// Fuzzy Dino Labs - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(9, 13, 22, 0.95)';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      }
    });
  }

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Interactive Grid Preview Animation (Simulating Color Flood)
  const gridCells = document.querySelectorAll('.grid-cell');
  const colors = ['#ff4757', '#2ed573', '#1e90ff', '#ffa502', '#9b59b6'];

  if (gridCells.length > 0) {
    setInterval(() => {
      const randomCell = gridCells[Math.floor(Math.random() * gridCells.length)];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      randomCell.style.backgroundColor = randomColor;
      randomCell.style.transform = 'scale(1.1)';
      setTimeout(() => {
        randomCell.style.transform = 'scale(1)';
      }, 300);
    }, 800);
  }
});
