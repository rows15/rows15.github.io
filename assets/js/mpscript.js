const audio = document.querySelector('audio');
const progressBar = document.querySelector('.progress');

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + '%';
});
