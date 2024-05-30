document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');

    var audio = document.getElementById('audio');
    var playPauseBtn = document.getElementById('play-pause-btn');
    var playPauseIcon = playPauseBtn.querySelector('i');

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused || audio.ended) {
            audio.play();
            playPauseIcon.className = 'fas fa-pause'; // 更改为暂停图标
        } else {
            audio.pause();
            playPauseIcon.className = 'fas fa-play'; // 更改为播放图标
        }
    });

    // 加载 particles.js 配置文件
    particlesJS.load('particles-js', 'particlesjs-config.json', function() {
        console.log('particles.js config loaded');
    });
});
