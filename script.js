const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-music");

let played = false;

function startMusic() {
  if (!played) {
    music.play().then(() => {
      playBtn.textContent = "⏸️";
      played = true;
    }).catch((err) => {
      console.log("Lecture auto bloquée par le navigateur.");
    });
  }
}

// Essaye de jouer automatiquement
window.addEventListener("load", startMusic);

// Joue dès que l’utilisateur clique n’importe où
window.addEventListener("click", startMusic);
window.addEventListener("scroll", startMusic);

// Bouton manuel reste dispo
playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = "⏸️";
  } else {
    music.pause();
    playBtn.textContent = "🎵";
  }
});
