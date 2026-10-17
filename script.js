// 💜 Birthday Website JavaScript

// Page setup
window.onload = function () {

    document.getElementById("birthday").style.display = "none";
    document.getElementById("memories").style.display = "none";
    document.getElementById("bts").style.display = "none";
    document.getElementById("letter").style.display = "none";
    document.getElementById("final").style.display = "none";

};


// Opening → Birthday
function startSurprise() {

    document.getElementById("opening").style.display = "none";
    document.getElementById("birthday").style.display = "flex";

    window.scrollTo(0, 0);
}


// Birthday → Memories
function showMemories() {

    document.getElementById("birthday").style.display = "none";
    document.getElementById("memories").style.display = "flex";

    window.scrollTo(0, 0);
}


// Memories → BTS
function showBTS() {

    document.getElementById("memories").style.display = "none";
    document.getElementById("bts").style.display = "flex";

    window.scrollTo(0, 0);
}


// BTS → Letter
function showLetter() {

    document.getElementById("bts").style.display = "none";
    document.getElementById("letter").style.display = "flex";

    window.scrollTo(0, 0);
}


// Letter → Final
function showFinal() {

    document.getElementById("letter").style.display = "none";
    document.getElementById("final").style.display = "flex";

    window.scrollTo(0, 0);
}


// 🎵 MUSIC
function toggleMusic() {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (music.paused) {

        music.currentTime = 0;

        music.play().then(function () {
            button.innerHTML = "⏸️ Pause Into the Sun";
        }).catch(function () {
            alert("Music file cannot be played. Please check the music folder.");
        });

    } else {

        music.pause();
        button.innerHTML = "🎵 Play Into the Sun";
    }
}


// 💜 BTS PHOTO POPUP
const cuteMessages = [
    {
        main: "Heyyy Cutie! 🥹💜",
        sub: "Happy Birthdayyy! 🎂✨"
    },
    {
        main: "Hello Birthday Girl! 🎀💜",
        sub: "Today you're officially extra cute! 😭✨"
    },
    {
        main: "Awww look who's here! 👀💜",
        sub: "Our favourite birthday girl! 🎂🦋"
    },
    {
        main: "Stay cute, stay crazy! 😂💜",
        sub: "And keep being you! ✨"
    },
    {
        main: "Borahae, Birthday Girl! 💜✨",
        sub: "Purple hearts & happy memories forever! 🦋"
    }
];


function openBTSPhoto(imagePath) {

    const popup = document.getElementById("btsPopup");
    const image = document.getElementById("btsPopupImage");

    const randomMessage =
        cuteMessages[Math.floor(Math.random() * cuteMessages.length)];

    image.src = imagePath;

    document.getElementById("cuteMessage").innerText =
        randomMessage.main;

    document.getElementById("cuteSubMessage").innerText =
        randomMessage.sub;

    popup.style.display = "flex";
}


function closeBTSPhoto() {

    document.getElementById("btsPopup").style.display = "none";
}


// 🎬 BIRTHDAY VIDEO
function openBirthdayVideo() {

    const popup = document.getElementById("birthdayVideoPopup");
    const video = document.getElementById("birthdayVideo");

    popup.style.display = "flex";

    video.load();

    video.currentTime = 0;

}


function closeBirthdayVideo() {

    const popup = document.getElementById("birthdayVideoPopup");
    const video = document.getElementById("birthdayVideo");

    video.pause();

    popup.style.display = "none";
}