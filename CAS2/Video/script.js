// Get video player and custom controls elements
const videoPlayer = document.getElementById('custom-video-player');
const playPauseButton = document.getElementById('custom-play-pause-button');
const progressBar = document.getElementById('custom-progress-bar');
const videoContainer = document.querySelector('.custom-video');

// Add event listeners for play/pause button and video time update
playPauseButton.addEventListener('click', togglePlayPause);
videoPlayer.addEventListener('timeupdate', updateProgressBar);

// Function to toggle play/pause
function togglePlayPause() {
    if (videoPlayer.paused || videoPlayer.ended) {
        videoPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        videoPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Function to update the progress bar
function updateProgressBar() {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + '%';
}

// Prevent right-click context menu on the video container
videoContainer.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    displayDownloadNotAllowedMessage();
});

// Function to display a "Download Not Allowed" message
function displayDownloadNotAllowedMessage() {
    const downloadNotAllowedMessage = document.createElement('div');
    downloadNotAllowedMessage.innerHTML = '<p>Downloading not allowed.</p>';
    downloadNotAllowedMessage.style.position = 'absolute';
    downloadNotAllowedMessage.style.top = '50%';
    downloadNotAllowedMessage.style.left = '50%';
    downloadNotAllowedMessage.style.transform = 'translate(-50%, -50%)';
    downloadNotAllowedMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    downloadNotAllowedMessage.style.color = 'white';
    downloadNotAllowedMessage.style.padding = '10px';
    downloadNotAllowedMessage.style.zIndex = '1000'; // Ensure it's above the video
    document.body.appendChild(downloadNotAllowedMessage);

    // Remove the message after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
        document.body.removeChild(downloadNotAllowedMessage);
    }, 3000); // Adjust the duration as needed
}
