const firstAudio = new Audio();

const secondAudio = new Audio();

const thirdAudio = new Audio();

const fourthAudio = new Audio();

firstAudio.src = "./sounds/1.mp3";

secondAudio.src = "./sounds/2.mp3";

thirdAudio.src = "./sounds/3.mp3";

fourthAudio.src = "./sounds/4.mp3";

firstAudio.load();

secondAudio.load();

thirdAudio.load();

fourthAudio.load();

document.getElementsByTagName("a")[0].addEventListener(
  "mousedown",
  function() {
    firstAudio.play();
  },
  false
);

document.getElementsByTagName("a")[1].addEventListener(
  "mousedown",
  function() {
    secondAudio.play();
  },
  false
);

document.getElementsByTagName("a")[2].addEventListener(
  "mousedown",
  function() {
    thirdAudio.play();
  },
  false
);

document.getElementsByTagName("a")[3].addEventListener(
  "mousedown",
  function() {
    fourthAudio.play();
  },
  false
);

function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener("keydown", function(event) {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener("keyup", function(event) {
    pressed.delete(event.code);
  });
}

runOnKeys(() => firstAudio.play(), "KeyQ");

runOnKeys(() => secondAudio.play(), "KeyW");

runOnKeys(() => thirdAudio.play(), "KeyE");

runOnKeys(() => fourthAudio.play(), "KeyR");
