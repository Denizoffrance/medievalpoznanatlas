document.addEventListener("DOMContentLoaded", () => {
    const audioElement = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');
    const musicFolder = 'music/'; // Path to your music folder
    const musicFiles = [
        'song1.mp3',
        'song2.ogg',
        'song3.mp3',
        'song4.ogg' // Add the filenames of your music files
    ];

    let currentTrack = 0;

    function playTrack(trackIndex) {
        console.log(`Attempting to play track: ${musicFiles[trackIndex]}`);
        audioElement.src = musicFolder + musicFiles[trackIndex];
        audioElement.play().then(() => {
            console.log(`Playing track: ${musicFiles[trackIndex]}`);
        }).catch(error => {
            console.error('Error playing audio:', error);
        });
    }

    function nextTrack() {
        currentTrack = (currentTrack + 1) % musicFiles.length;
        playTrack(currentTrack);
    }

    // Event listener for play button
    playButton.addEventListener('click', () => {
        playTrack(currentTrack);
        playButton.style.display = 'none'; // Hide the play button after starting
    });

    // Event listener for track end
    audioElement.addEventListener('ended', () => {
        console.log('Track ended. Moving to next track.');
        nextTrack();
    });
});