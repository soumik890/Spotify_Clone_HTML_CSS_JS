console.log("welcome to spotify");

let playIndex = 1;
let play = document.getElementById("play");
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSong = document.getElementById("masterSongName");

console.log(masterSong);

let songs = [
  { name: "No Copyrights track", path: "songs/1.mp3", imgpath: "covers/1.jpg" },
  {
    name: "Beautiful music track",
    path: "songs/2.mp3",
    imgpath: "covers/2.jpg",
  },
  {
    name: "Electronic music track",
    path: "songs/3.mp3",
    imgpath: "covers/3.jpg",
  },
  {
    name: "Superb motivation  music track",
    path: "songs/4.mp3",
    imgpath: "covers/4.jpg",
  },
  {
    name: "Feel good Motivation music",
    path: "songs/5.mp3",
    imgpath: "covers/5.jpg",
  },
  {
    name: "State of the art motivation track",
    path: "songs/6.mp3",
    imgpath: "covers/6.jpg",
  },
  {
    name: "Just do it motivational track",
    path: "songs/7.mp3",
    imgpath: "covers/7.jpg",
  },
  {
    name: "Be good do good track ",
    path: "songs/8.mp3",
    imgpath: "covers/8.jpg",
  },
  {
    name: "Best nostalgic misic track",
    path: "songs/9.mp3",
    imgpath: "covers/9.jpg",
  },
  {
    name: "Best music track ever",
    path: "songs/10.mp3",
    imgpath: "covers/10.jpg",
  },
];

// masterSong.innerHTML = songs[0].name;

let audio = new Audio("songs/1.mp3");

songItems.forEach((item, i) => {
  // console.log(item, i);
  item.getElementsByTagName("img")[0].src = songs[i].imgpath;
  // item.getElementsByClassName("player")[0].id = songs[i].path;
  item.getElementsByClassName("songName")[0].innerHTML = songs[i].name;
});

play.addEventListener("click", () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    // document.getElementById("play").remove();
    document.getElementsByClassName("playing").remove();
    gif.style.opacity = 1;
  } else {
    audio.pause();
    gif.style.opacity = 0;
  }
});

audio.addEventListener("timeupdate", () => {
  let progress = parseInt((audio.currentTime / audio.duration) * 100);
  //   console.log("hello", progress);
  progressbar.value = progress;
});

progressbar.addEventListener("change", () => {
  audio.currentTime = (progressbar.value * audio.duration) / 100;
});

let playArray = Array.from(document.getElementsByClassName("songItem"));

playArray.forEach((item) => {
  item.addEventListener("click", (i) => {
    console.log(i.target.id);
    playIndex = i.target.id;
    audio.src = `songs/${i.target.id}.mp3`;
    audio.currentTime = 0;
    audio.play();
  });
});

document.getElementById("prev").addEventListener("click", (e) => {
  if (playIndex == 1) {
    playIndex = 1;
    audio.src = `songs/${playIndex}.mp3`;
    audio.currentTime = 0;
    masterSong.innerHTML = songs[playIndex - 1].name;
    audio.play();
  } else {
    playIndex = parseInt(playIndex) - 1;
    console.log("else fired", playIndex);
    audio.src = `songs/${playIndex}.mp3`;
    masterSong.innerHTML = songs[playIndex - 1].name;
    audio.currentTime = 0;
    audio.play();
  }
});

document.getElementById("next").addEventListener("click", (e) => {
  console.log(e);

  if (playIndex == songs.length) {
    playIndex = 1;
    audio.src = `songs/${playIndex}.mp3`;
    audio.currentTime = 0;
    masterSong.innerHTML = songs[playIndex - 1].name;

    audio.play();
  } else {
    playIndex = parseInt(playIndex) + 1;
    audio.src = `songs/${playIndex}.mp3`;
    audio.currentTime = 0;
    masterSong.innerHTML = songs[playIndex - 1].name;
    audio.play();
  }
});

// console.log(playArray);
