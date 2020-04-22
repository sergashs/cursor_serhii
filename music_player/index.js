const thumbnail = document.querySelector("#thumbnail"); // album cover
const song = document.querySelector("#song"); // audio object
const songArtist = document.querySelector(".song-artist"); // element where track artist appears
const songTitle = document.querySelector(".song-title"); // element where track title appears
const progressBar = document.querySelector("#progress-bar"); // element where progress bar appears
let pPause = document.querySelector("#play-pause"); // element where play and pause image appears

songIndex = 0;
songs = [
  "./music/lil-nain_-_30.mp3",
  "./music/xxxtentacion_-_look-at-me.mp3",
  "./music/annen.mp3",
  "./music/Oxxxymiron.mp3",
];
thumbnails = [
  "./album_cover/xxx.jpg",
  "./album_cover/xxx2.jpg",
  "./album_cover/annen.jpg",
  "./album_cover/3.jpg",
];
songArtists = [
  "XXXTENTACION",
  "XXXTENTACION",
  "AnnenMayKantereit x Parcels",
  "Oxxxymiron",
];
songTitles = [
  "Jocelyn Flores",
  "Look at me",
  "Can't Get You out of My Head (Cover)",
  "Rap City",
];

let playing = true;
function playPause() {
  if (playing) {
    const song = document.querySelector("#song"),
      thumbnail = document.querySelector("#thumbnail");

    document.getElementById("play").innerHTML =
      '<i class="fa fa-pause" id="play-pause" onclick="playPause()" aria-hidden="true"></i>';

    song.play();
    playing = false;
  } else {
    document.getElementById("play").innerHTML =
      '<i class="fa fa-play" id="play-pause" onclick="playPause()" aria-hidden="true"></i>';

    song.pause();
    playing = true;
  }
}

// automatically play the next song at the end of the audio object's duration
song.addEventListener("ended", function () {
  nextSong();
});

// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track
function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = 0;
  }
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  //   document.querySelector(".song-title").innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  document.querySelector(".currentTime").innerHTML = formatTime(
    Math.floor(song.currentTime)
  );
  if (document.querySelector(".durationTime").innerHTML === "0:00:0:00") {
    document.querySelector(".durationTime").innerHTML = "0:00";
  } else {
    document.querySelector(".durationTime").innerHTML = formatTime(
      Math.floor(song.duration)
    );
  }
}

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
  song.currentTime = progressBar.value;
}

/////////////////////////////////////////////////////

// создаем <link rel="stylesheet" href="light|dark.css">
let head = document.head,
  link = document.createElement("link");
link.rel = "stylesheet";
// проверяем значение из localStorage если dark то темная тема
if (localStorage.getItem("themeStyle") === "dark") {
  link.href = "dark.css"; // ссылка на темный стиль
  document.getElementById("themer").setAttribute("checked", true); // переключаем чекбокс в положение "темная тема"
}

// по умолчанию светлая тема
else {
  link.href = "light.css"; // ссылка на светлый стиль
}
head.appendChild(link); // вставляем <link rel="stylesheet" href="light|dark.css"> в шапку страницы между темаги head

// событие при переключении чекбокса
document.getElementById("themer").addEventListener("change", (ev) => {
  let btn = ev.target;
  // если чекбокс включен
  if (btn.checked) {
    document.querySelector(".icon").innerHTML =
      '<i class="fa fa-sun-o" aria-hidden="true"></i>';

    link.href = "dark.css"; // включаем темную тему
    localStorage.setItem("themeStyle", "dark"); // записываем значение в localStorage
  } else {
    link.href = "light.css"; // включаем светлую тему

    document.querySelector(".icon").innerHTML =
      '<i class="fa fa-moon-o" aria-hidden="true"></i>';

    localStorage.setItem("themeStyle", "light"); // записываем значение в localStorage
  }
});

// var result = [];

// for (let i = 0; i < songArtists.length; i++) {
//   console.log(songArtists[i]);
//   result = result.concat(songArtists[i]);

//   var newDiv = document.createElement("div");
//   newDiv.innerHTML = result.join(" ") + "<br>";
// }

// document.querySelector(".playlist-container").innerHTML = newDiv.outerHTML;

// document.querySelector(".playlist-container").innerHTML = songArtists.join(" ");
