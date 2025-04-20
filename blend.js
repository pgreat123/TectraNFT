const pages = document.querySelectorAll('.comic-page');
let currentIndex = 0;

// Smooth fade transition handler
const updatePageDisplay = () => {
  pages.forEach((page, index) => {
    if (index === currentIndex) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
};

// Next button
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % pages.length;
  updatePageDisplay();
});

// Previous button
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + pages.length) % pages.length;
  updatePageDisplay();
});

// Fullscreen button
document.getElementById('fullscreen').addEventListener('click', () => {
  const container = document.getElementById('comic-container');
  if (container.requestFullscreen) {
    container.requestFullscreen();
  } else if (container.webkitRequestFullscreen) {
    container.webkitRequestFullscreen();
  } else if (container.msRequestFullscreen) {
    container.msRequestFullscreen();
  }
});

// Optional: swipe gestures (mobile)
let touchStartX = 0;

document.getElementById('comic-container').addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.getElementById('comic-container').addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) {
    currentIndex = (currentIndex + 1) % pages.length;
  } else if (touchEndX > touchStartX + 50) {
    currentIndex = (currentIndex - 1 + pages.length) % pages.length;
  }
  updatePageDisplay();
});
// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % pages.length;
      updatePageDisplay();
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + pages.length) % pages.length;
      updatePageDisplay();
    }
  });
  
