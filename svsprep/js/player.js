var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'dQw4w9WgXcQ',
        playerVars: {
            'autoplay': 1,
            'mute': 1,           // Start muted to ensure load
            'controls': 0,
            'enablejsapi': 1,
            'origin': window.location.origin, // Crucial for security clearance
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
        player.seekTo(0);
        player.playVideo();
    }
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('parallax').style.display = 'block';
}
