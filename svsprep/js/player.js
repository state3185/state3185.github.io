var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '405',
        width: '720',
        videoId: 'dQw4w9WgXcQ', // The real Rickroll ID
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'mute': 1,       // MUST start muted to preload
            'enablejsapi': 1,
            'playsinline': 1,
            'loop': 1,
            'playlist': 'dQw4w9WgXcQ' // Required for looping
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

// THIS is the magic function triggered by the click
function launchRickroll() {
    if (player) {
        player.unMute();
        player.setVolume(100);
        player.seekTo(0); // Start from the beginning for max impact
        player.playVideo();
    }
    // Hide the overlay to reveal the parallax and video
    document.getElementById('overlay').style.display = 'none';
}
