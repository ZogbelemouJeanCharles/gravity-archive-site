const items = document.querySelectorAll('.timeline-item');

function showItems() {
  const trigger = window.innerHeight * 0.85;
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showItems);
window.addEventListener('load', showItems);
