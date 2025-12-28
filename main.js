const cards = document.querySelectorAll(".feature-card");

function reveal() {
  const h = window.innerHeight;
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < h - 100) {
      card.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
