// https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-

// import p5.video.js;
// import p5.sound.js;

// var vid = [myMovie];
// vid = myMovie; //Setup array of Video files
var N = 1; //Number of video files
var targetTime = [];
var index = 0;
var currIdx = [];
var XPOS = [0, 260, 520];
// var names = [Title.mp4];

// SoundFile showerSound;

var scene = 0;
var countdown;
var state = 0;
var timer;
var titleTime = 1000;
var rotateTime = 4000;
var creditsY = 576;

var vid;

// PFont mono;

// PImage main;
var Kuleshov = [
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap%201.jpg",
];

// PImage img;
var shower = [
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower%201.jpg"
];
var mnemonic = [
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Memory%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Memory%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Memory%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Memory%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Memory%201.jpg",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Memory%201.jpg"
];

var kuleshovFrames = 10;
var showerFrames = 6;
var mnemonicFrames = 6;

var kuleshovi;
var showeri;
var mnemonici;

var mnemonicCount = 0;

function setup() {
    createCanvas(1920 / 2, 1080 / 2);
    textSize(16);
    textFont('Arial');

    kuleshovi = int(random(kuleshovFrames));
    showeri = int(random(showerFrames));
    mnemonici = int(random(mnemonicFrames));

    timer = millis() + titleTime;

}

function draw() {
    //Title Video
    if (scene == 0) {
        if (scene == 0) {

            vid = createVideo(
      ['data/Opening.mp4'],
                vidLoad
            );

            vid.size(width, height);
        }
    }
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}
