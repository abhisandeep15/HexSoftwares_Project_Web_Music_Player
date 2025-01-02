let songName = document.querySelector("#song-name");
let songSinger = document.querySelector("#song-singer");
let songImage = document.querySelector("#song-img");
let playPauseBtn = document.querySelector("#play-pause");

let index = 0;
let playingSong = false;
let track = document.createElement("audio");

let songs = [
  {
    name: "Pareshanura",
    path: "songs/Pareshanura.mp3",
    image: "images/rc.jpg",
    singer: "Hip Hop Tamizha",
  },
  {
    name: "Aaradugula Bullettu",
    path: "songs/Aaradugula Bullettu.mp3",
    image: "images/pspk.jpg",
    singer: "Vijay Prakash",
  },
  {
    name: "Daakko Daakko Meka",
    path: "songs/Daakko Daakko Meka.mp3",
    image: "images/AA.jpg",
    singer: "Devi Sri Prasad",
  },
  {
    name: "Dhooram",
    path: "songs/Dhooram - SenSongsMp3.Co.mp3",
    image: "images/vd.jpg",
    singer: "Nikitha Gandhi",
  },
  {
    name: "MCA",
    path: "songs/MCA.mp3",
    image: "images/Na.jpg",
    singer: "Devi Sri Prasad",
  },
  {
    name: "Undipo",
    path: "songs/Undipo - SenSongsMp3.Co.mp3",
    image: "images/ram.jpg",
    singer: "Anurag",
  },
  {
    name: "Pilla Puli",
    path: "songs/Pilla Puli.mp3",
    image: "images/su.jpg",
    singer: "Anurag",
  },
  {
    name: "Melikalu",
    path: "songs/Melikalu.mp3",
    image: "images/pspk2.jpg",
    singer: "Pawan Kalyan",
  },
  {
    name: "Rise Of Sulthan",
    path: "songs/Rise Of Sultan.mp3",
    image: "images/sal.jpg",
    singer: "Shekar",
  },
  {
    name: "Aaradugula Bullettu",
    path: "songs/Aaradugula Bullettu.mp3",
    image: "images/pspk.jpg",
    singer: "Vijay Prakash",
  },
  
];

function loadTrack(index) {
  track.src = songs[index].path;
  songName.innerHTML = songs[index].name;
  songSinger.innerHTML = songs[index].singer;
  songImage.src = songs[index].image;
  track.load();
}

loadTrack(index);

function playPause() {
  if (!playingSong) {
    playSong();
  } else {
    pauseSong();
  }
}

function playSong() {
  track.play();
  playingSong = true;
  playPauseBtn.classList.remove("fa-play");
  playPauseBtn.classList.add("fa-pause");
}

function pauseSong() {
  track.pause();
  playingSong = false;
  playPauseBtn.classList.remove("fa-pause");
  playPauseBtn.classList.add("fa-play");
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadTrack(index);
  if (playingSong) playSong();
}

function previousSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadTrack(index);
  if (playingSong) playSong();
}

// Volume control
let volumeRange = document.querySelector("#volume-range");
volumeRange.addEventListener("input", () => {
  track.volume = volumeRange.value / 100;
});

// Update song duration slider
track.addEventListener("timeupdate", () => {
  let duration = document.querySelector("#song-duration");
  duration.value = (track.currentTime / track.duration) * 100 || 0;
});

// Seek in the song
let songDurationSlider = document.querySelector("#song-duration");
songDurationSlider.addEventListener("input", () => {
  track.currentTime = (songDurationSlider.value / 100) * track.duration;
});


document.addEventListener("DOMContentLoaded", () => {
  const playlistToggle = document.getElementById("playlist-toggle");
  const playlistContainer = document.getElementById("playlist-container");

  playlistToggle.addEventListener("click", () => {
    playlistContainer.classList.toggle("active");
  });
});
