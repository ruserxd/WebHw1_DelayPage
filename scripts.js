document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');

    let audio = document.getElementById('audio');
    let playPauseBtn = document.getElementById('play-pause-btn');
    let playPauseIcon = playPauseBtn.querySelector('i');

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused || audio.ended) {
            audio.play();
            playPauseIcon.className = 'fas fa-pause';
        } else {
            audio.pause();
            playPauseIcon.className = 'fas fa-play';
        }
    });

    // 加載 particles.js 配置文件
    particlesJS.load('particles-js', 'particlesjs-config.json', function() {
        console.log('particles.js config loaded');
    });
});
