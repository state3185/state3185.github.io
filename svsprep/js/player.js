// 1. DYNAMIC INJECTION (Fixes the "CORS header missing" error)
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var playerReady = false;

// 2. API INITIALIZATION
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'dQw4w9WgXcQ', // Rickroll ID
        playerVars: {
            'autoplay': 1,
            'mute': 1,           // Required to bypass autoplay block
            'controls': 0,
            'enablejsapi': 1,    // Required for JS control
            'origin': 'https://state3185.github.io', // FIXES postMessage error
            'widget_referrer': 'https://state3185.github.io',
            'playsinline': 1,
            'rel': 0,
            'loop': 1,
            'playlist': 'dQw4w9WgXcQ'
        },
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError
        }
    });
}

function onPlayerReady(event) {
    playerReady = true;
    event.target.playVideo();
}

function onPlayerError(e) {
    console.error("YouTube API Error:", e.data);
}

// 3. THE TRAP (Triggered by your Bait Button)
function launchRickroll() {
    // If the player is ready, unmute and show the chaos
    if (playerReady && player && typeof player.unMute === 'function') {
        try {
            player.unMute();
            player.setVolume(100);
            player.seekTo(0);
            player.playVideo();
            
            // UI Transition
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('parallax').style.display = 'block';
        } catch (e) {
            console.error("Unmute failed, forcing UI anyway:", e);
            forceShow();
        }
    } else {
        // If API is being slow/blocked, try again in 200ms
        console.warn("Player not ready, retrying...");
        setTimeout(launchRickroll, 200);
    }
}

function forceShow() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('parallax').style.display = 'block';
}
