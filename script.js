let speech = new SpeechSynthesisUtterance();
let btn = document.querySelector(".btn");
let btnClear = document.querySelector(".clear");
let colorChange = document.querySelector(".bgcolor");
let textArea = document.querySelector("textarea");
let UpperCase = document.querySelector(".uppercase");
let LowerCase = document.querySelector(".lowercase");
// let btnClear = document.querySelector("clear");

// let voiceName = new RegExp("日本語","i");

// for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
//   if (window.speechSynthesis.getVoices()[i].voiceURI.search(voiceName) != -1) {
//     speech.voice = window.speechSynthesis.getVoices()[i];

//   }
// }

let voices = [];

let voiceSelect = document.querySelector("select");

const getVoices = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

getVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = getVoices;
}
// setTimeout(function () {
//   for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
//     if (
//       window.speechSynthesis.getVoices()[i].voiceURI.search(voiceName) != -1
//     ) {
//       speech.voice = window.speechSynthesis.getVoices()[i];
//     }
//   }
// }, 1000);

//Color picker//

const Input = document.querySelector("input");
Input.oninput = () => {
  document.body.style.background = Input.value;
};

//Select color function//

const PickColor2 = prompt("Enter textbox-Color Name");
textArea.style.background = PickColor2;

// CHANGING BACKGROUND-COLOR//

// const changeBackground = () => {
//   const hexValue = Math.floor(Math.random() * 0xffffff).toString(16);
//   console.log(hexValue);
//   textArea.style.background = `#${hexValue}`;
// };

// colorChange.addEventListener("click", changeBackground);

// DARK THEME //
// let icon = document.querySelector(".icon");

// function Mode() {
//   document.body.classList.toggle("dark-theme");
//   if (document.body.classList.contains("dark-theme")) {
//     icon.src = "img/sun.png";
//   } else {
//     icon.src = "img/moon.png";
//   }
//   console.log("dark-theme");
// }

// icon.addEventListener("click", Mode);

//SPEAK//
btn.addEventListener("click", () => {
  speech.text = textArea.value;
  // speech.text = text;
  window.speechSynthesis.speak(speech);
});

//RESET//
btnClear.addEventListener("click", () => {
  textArea.value = "";
});

//UPPERCASE//
function uppercase() {
  textArea.value = textArea.value.toUpperCase();
}

UpperCase.addEventListener("click", uppercase);

//LOWERCASE//

function lowercase() {
  textArea.value = textArea.value.toLowerCase();
}

LowerCase.addEventListener("click", lowercase);

function firstlettercapitlize() {
  textArea.value =
    textArea.value.charAt(0).toUpperCase() + textArea.value.slice(1);
}
