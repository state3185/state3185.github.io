// 1. Create a debug logger on screen
const debugDiv = document.createElement('div');
debugDiv.style = "position:fixed;bottom:10px;left:10px;color:lime;background:black;z-index:10000;font-family:monospace;padding:10px;font-size:12px;pointer-events:none;";
document.body.appendChild(debugDiv);
function log(msg) { debugDiv.innerHTML += "> " + msg + "<br>"; console.log(msg); }

log("Script started...");

// 2. Standard Injection
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
log("API Script injected...");

var player;
var playerReady = false;

// 3. Handshake Check
function onYouTubeIframeAPIReady() {
    log("API Ready signal received...");
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'dQw4w9WgXcQ',
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'enablejsapi': 1,
            'origin': location.origin, // Dynamic origin check
            'widget_referrer': location.origin,
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onError': (e) => log("PLAYER ERROR: " + e.data)
        }
    });
}

function onPlayerReady(event) {
    playerReady = true;
    log("YouTube Player is FULLY LOADED.");
    event.target.playVideo();
}

// 4. The Trigger
function launchRickroll() {
    console.log("Click detected!"); // Check your F12 console for this!
    
    // 1. IMMEDIATELY hide the overlay (even if YT fails)
    const overlay = document.getElementById('overlay');
    if (overlay) overlay.style.setProperty('display', 'none', 'important');

    // 2. Show the parallax
    const parallax = document.getElementById('parallax');
    if (parallax) parallax.style.display = 'block';

    // 3. Try the Audio
    if (player && typeof player.unMute === 'function') {
        try {
            player.unMute();
            player.setVolume(100);
            player.playVideo();
            console.log("Rickroll audio initiated.");
        } catch (err) {
            console.error("Audio failed but visuals are running:", err);
        }
    }
}

function revealChaos() {
    document.getElementById('overlay').style.display = 'none';
    const parallax = document.getElementById('parallax');
    if(parallax) parallax.style.display = 'block';
    log("Chaos revealed.");
}

