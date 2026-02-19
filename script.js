console.log("%cPortfólio da Janaína carregado com sucesso 🚀", "color: #22c55e; font-size: 16px; font-weight: bold;");
const videoThumb = document.getElementById('videoThumb');
const modal = document.getElementById ('videoModal');
const videoFullscreen = document.getElementById('videoFullscreen');
const closeBtn = document.querySelector('.close');

videoThumb.addEventListener('click', () => {
  modal.style.display = 'flex';
  // força reflow para a transição de zoom
  setTimeout(() => {
    modal.classList.add('show');
    videoFullscreen.play();
  }, 10);
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
    videoFullscreen.pause();
    videoFullscreen.currentTime = 0;
  }, 500); // aguarda o tempo da transição
}
