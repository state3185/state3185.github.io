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
            'origin': 'https://state3185.github.io', // Matches your domain
            'playsinline': 1,
            'rel': 0,
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
        player.unMute();
        player.setVolume(100);
        player.playVideo();
        
        document.getElementById('overlay').style.display = 'none';
        // Reveal the parallax text
        document.getElementById('parallax').style.display = 'block';
    }
}

function launchRickroll() {
    if (player && typeof player.unMute === 'function') {
        player.unMute();
        player.setVolume(100);
        player.seekTo(0);
        player.playVideo();
    }
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('parallax').style.display = 'block';
}
