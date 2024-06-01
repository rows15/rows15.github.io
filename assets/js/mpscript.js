const audio = document.querySelector('audio');
const coverImage = document.querySelector('.cover img');

// Function to toggle spinning animation and glowing effect
function toggleSpinAndGlow() {
    if (audio.paused) {
        coverImage.style.animationPlayState = 'paused';
        coverImage.style.boxShadow = 'none';
    } else {
        coverImage.style.animationPlayState = 'running';
        coverImage.style.boxShadow = 
            '0 0 10px rgba(255, 255, 255, 0.9), ' + /* inner cyan */
            '0 0 20px rgba(255, 255, 255, 0.3), ' + /* middle cyan */
            '0 0 30px rgba(255, 255, 255, 0.3), ' + /* outer white */
            '0 0 40px rgba(255, 255, 255, 0.3)';    /* outer white */
    }
}

audio.addEventListener('play', toggleSpinAndGlow);
audio.addEventListener('pause', toggleSpinAndGlow);

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + '%';
});
