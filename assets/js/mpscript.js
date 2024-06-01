const audio = document.querySelector('audio');
const coverImage = document.querySelector('.cover img');

// Function to toggle spinning animation
function toggleSpin() {
    coverImage.style.animationPlayState = (audio.paused) ? 'paused' : 'running';
}

audio.addEventListener('play', toggleSpin);
audio.addEventListener('pause', toggleSpin);

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + '%';
});
