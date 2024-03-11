document.addEventListener("DOMContentLoaded", function() {
  const phrases = ["HI! Welcome to my Personal Portfolio...", "Go, have a look around!...", "Enjoy your visit..."];
  const typewriterElement = document.getElementById("typewriter");
  const delay = 150;
  const links = document.querySelectorAll('.nav-link'); // Select all nav links

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = setInterval(() => {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    if (phraseIndex === phrases.length && charIndex === 0) {
      clearInterval(typeEffect);
    }
  }, delay);

  // Add event listeners to each nav link
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      links.forEach(function(l) {
        l.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});
