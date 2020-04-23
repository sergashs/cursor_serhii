const thumbnail = document.querySelector("#thumbnail");
const song = document.querySelector("#song");
const songArtist = document.querySelector(".song-artist");
const songTitle = document.querySelector(".song-title");
const progressBar = document.querySelector("#progress-bar");
let pPause = document.querySelector("#play-pause");

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
      '<i class="fa fa-pause" id="play-pause" onclick="playPause()"   title="pause" aria-hidden="true"></i>';

    song.play();
    playing = false;
  } else {
    document.getElementById("play").innerHTML =
      '<i class="fa fa-play" id="play-pause" onclick="playPause()"   title="play" aria-hidden="true"></i>';

    song.pause();
    playing = true;
  }
}

song.addEventListener("ended", function () {
  nextSong();
});

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

function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

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

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

setInterval(updateProgressValue, 500);

function changeProgressBar() {
  song.currentTime = progressBar.value;
}

/////////////////////////////////////////////////////

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

// playlist in progress...

// const getsoundItem = (songArtists, songTitles) => {
//   const soundItem = [];
//   for (let i = 0; i < songArtists.length; i++) {
//     soundItem.push([songArtists[i], songTitles[i]]);
//   }
//   return soundItem;
// };
// console.log(getsoundItem(songArtists, songTitles));

// const completeitemsound = getsoundItem(songArtists, songTitles);

// function playlist() {
//   const songsListArtist = completeitemsound.map(
//     (
//       el
//     ) => `<div class="song-item" src="./music/Oxxxymiron.mp3 id="song" onclick="playPause()"
//    >${el}</div>`
//   );

//   return (document.querySelector(
//     ".playlist-container"
//   ).innerHTML = songsListArtist.join(" "));
// }

// playlist();

// let menuElem = document.querySelector(".playlist-container");
// let titleElem = document.getElementById("playlist-icon");

// titleElem.onclick = function () {
//   menuElem.classList.toggle("open");
// };
