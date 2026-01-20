// This part injects the API without triggering the CORS "read" block
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'dQw4w9WgXcQ',
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'controls': 0,
            'enablejsapi': 1,
            // Use the exact origin the error message complained about:
            'origin': 'https://state3185.github.io', 
            'widget_referrer': 'https://state3185.github.io',
            'playsinline': 1,
            'loop': 1,
            'playlist': 'dQw4w9WgXcQ'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}

function launchRickroll() {
    if (player && typeof player.unMute === 'function') {
        // 1. Force Unmute and Max Volume
        player.unMute();
        player.setVolume(100);
        
        // 2. Restart from 0 to catch the first beat
        player.seekTo(0);
        player.playVideo();

        // 3. UI Changes
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('parallax').style.display = 'block';
    } else {
        console.error("YouTube Player not ready yet!");
        // Optional: If player isn't ready, try to force it anyway
        document.getElementById('overlay').style.display = 'none';
    }
}
