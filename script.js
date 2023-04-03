const cards = document.querySelectorAll('.iconCard');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(card => card.classList.remove("clicked"));
    card.classList.add("clicked");
  });
});