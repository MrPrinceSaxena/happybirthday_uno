window.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById("bgMusic");

  function tryPlayMusic() {
    bgMusic.volume = 0.6;
    bgMusic.loop = true;
    bgMusic.muted = false;
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.warn("Autoplay blocked. Waiting for interaction...");
      });
    }
  }

  window.addEventListener("click", tryPlayMusic);
  tryPlayMusic();

  // Progress bar
  bgMusic.addEventListener('timeupdate', () => {
    const progress = document.querySelector('.progress');
    const width = (bgMusic.currentTime / bgMusic.duration) * 100;
    progress.style.width = `${width}%`;
  });

  // UNO Cards
  const compliments = [
    "You light up every room 💡",
    "Your smile is my favorite view 😍",
    "You’re effortlessly amazing 🃏",
    "You glow differently ❤️",
    "You're magic in human form ✨",
    "Beautiful inside & out 💖",
    "Your vibe is unmatched 🌟",
    "You turn ordinary into extraordinary 🌟",
    "Confidence looks good on you ☀️",
    "Forever grateful for you 🙏"
  ];

  const colors = ['red', 'blue', 'green', 'yellow', 'wild'];
  const unoCards = document.getElementById("unoCards");

  function createCard(color, message) {
    const card = document.createElement('div');
    card.classList.add('card');

    const inner = document.createElement('div');
    inner.classList.add('card-inner');

    const front = document.createElement('div');
    front.classList.add('card-front');
    front.textContent = "UNO";

    const back = document.createElement('div');
    back.classList.add('card-back', color);
    back.textContent = message;

    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    return card;
  }

  function generateCards() {
    const shuffled = compliments.sort(() => Math.random() - 0.5);
    shuffled.forEach(msg => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      unoCards.appendChild(createCard(color, msg));
    });
  }

  generateCards();
});
bgMusic.addEventListener('timeupdate', () => {
  const progress = document.querySelector('.progress');
  if (bgMusic.duration > 0) {
    const width = (bgMusic.currentTime / bgMusic.duration) * 100;
    progress.style.width = `${width}%`;
  }
});

