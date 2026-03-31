// script.js
// Button click feature
document.getElementById("orderBtn").onclick = function() {
  alert("Order feature coming soon!");
};
// Scroll animation for menu cards
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});
//Cards animate only when you scroll
window.onload = () => {
  window.dispatchEvent(new Event('scroll'));
};