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
            'mute': 1,           // Required to bypass autoplay block
            'controls': 0,
            'enablejsapi': 1,
            'origin': 'https://state3185.github.io', // Fixes postMessage error
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
    // Video starts playing muted in the background immediately
    event.target.playVideo();
}

function revealChaos() {
    // 1. Check if player exists and the API is actually attached to it
    if (player && typeof player.unMute === 'function') {
        player.unMute();
        player.setVolume(100);
        player.seekTo(0);
        player.playVideo();
        
        // 2. Hide the bait and show the madness
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('parallax').style.display = 'block';
    } else {
        // Fallback: If API isn't ready, just show the screen anyway
        console.log("Player not fully initialized, forcing reveal.");
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('parallax').style.display = 'block';
    }
}
