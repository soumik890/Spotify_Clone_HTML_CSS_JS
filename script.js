console.log("welcome to spotify");

let playIndex = 0;
let play = document.getElementById("play");
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  { name: "track 1", path: "songs/1.mp3", imgpath: "covers/1.jpg" },
  { name: "track 2", path: "songs/2.mp3", imgpath: "covers/2.jpg" },
  { name: "track 3", path: "songs/3.mp3", imgpath: "covers/3.jpg" },
  { name: "track 4", path: "songs/4.mp3", imgpath: "covers/4.jpg" },
  { name: "track 5", path: "songs/5.mp3", imgpath: "covers/5.jpg" },
  { name: "track 6", path: "songs/6.mp3", imgpath: "covers/6.jpg" },
  { name: "track 7", path: "songs/7.mp3", imgpath: "covers/7.jpg" },
  { name: "track 8", path: "songs/8.mp3", imgpath: "covers/8.jpg" },
  { name: "track 9", path: "songs/9.mp3", imgpath: "covers/9.jpg" },
  { name: "track 10", path: "songs/10.mp3", imgpath: "covers/10.jpg" },
];

let audio = new Audio("songs/2.mp3");

songItems.forEach((item, i) => {
  console.log(item, i);
  item.getElementsByTagName("img")[0].src = songs[i].imgpath;
});

play.addEventListener("click", () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    // document.getElementById("play").remove();
    document.getElementById("play").classList.add("test");
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
