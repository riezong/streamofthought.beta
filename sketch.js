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

var scene = 1;
var savedTime;
var titleTime = 10;
var rotateTime = 40;
var creditsY = 576;

// PFont mono;

// PImage main;
var Kuleshov = [
  "Tap 1.jpg",
  "Tap 1.jpg",
  "Tap 1.jpg",
  "Tap 1.jpg",
  "Tap 1.jpg",
  "Tap 1.jpg",
  "Tap 1.jpg",
  "Tap 1.jpg",
  "Tap 2.jpg",
  "Tap 3.jpg",
];

// PImage img;
var shower = [
  "Shower 1.jpg",
  "Shower 2.jpg",
  "Shower 3.jpg",
  "Shower 4.jpg",
  "Shower 5.jpg",
  "Shower 6.jpg"
];
var mnemonic = [
  "Memory 1.jpg",
  "Memory 2.jpg",
  "Memory 3.jpg",
  "Memory 4.jpg",
  "Memory 5.jpg",
  "Memory 6.jpg"
];

var kuleshovFrames = 10;
var showerFrames = 6;
var mnemonicFrames = 6;

var mnemonicCount = 0;

function setup() {
  createCanvas(1920 / 2, 1080 / 2);
  textSize(16);
  textFont('Arial');
}

function draw() {

  //Titles
  if (scene == 1) {
    background('#FF8800');
    textAlign(CENTER, CENTER);

    var kuleshovi = int(random(kuleshovFrames));
    var showeri = int(random(showerFrames));
    var mnemonici = int(random(mnemonicFrames));

    text("Shower down memory drain", width / 2, height / 2 - 10);
    text("Making sense of moments", width / 2, height / 2 + 10);

    // Countdown timer
    if (frameCount % 60 == 0 && titleTime > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      titleTime--;
    }
    if (titleTime == 0) {
      scene = 15;
    }
  }

  if (scene == 15) {
    background('#000000');
    textAlign(CENTER, CENTER);
    fill(255);
    text("Hypertexts: non-sequential writing", width / 2, height / 2 - 30);
    text("Networked hypertexts do not have any designated beginning", width / 2, height / 2 + 10);
    text("or any designated endings", width / 2, height / 2 + 30);

    // Countdown timer
    if (frameCount % 60 == 0 && titleTime > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      titleTime--;
    }
    if (titleTime == 0) {
      scene = 2;
    }
  }

  //Title Video
  if (scene == 0) {
    for (var i = 0; i < N; i++) {

      var playFlag = (targetTime[i] - millis() > 0);

      if (playFlag) {
        image(myMovie[i], 0, 0, 1024, 576);
      }

      if (i == 0 && playFlag == false) {
        setMovie(0);
      }
    }

    // Countdown timer
    if (frameCount % 60 == 0 && titleTime > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      titleTime--;
    }
    if (titleTime == 0) {
      scene = 2;
    }
  }

  //Main image
  if (scene == 2) {
    main = loadImage(Kuleshov[kuleshovi]);
    main.resize(1024, 576);
    image(main, 0, 0);

    // Countdown timer
    if (frameCount % 60 == 0 && rotateTime > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      rotateTime--;
    }
    if (rotateTime == 0) {
      scene = 3;

      //Generate new frame    
      var j = int(random(kuleshovFrames));
      //println(i, j);
      while (j == kuleshovi) {
        j = int(random(kuleshovFrames));
        //println("match");
      }
      kuleshovi = j;
    }
  }

  //Bathroom
  if (scene == 3) {
    //Loading image
    img = loadImage(shower[showeri]);
    img.resize(1024, 576);
    image(img, 0, 0);

    //Frame counter
    //noStroke();
    //fill(#000000);
    //rect(5, 5, 90, 20);
    //fill(#ff8800);
    //text("frame " + (showeri+1), 10, 20);
    //println(i);

    // Calculate how much time has passed
    var passedTime = millis() - savedTime;
    // Has five seconds passed?
    if (passedTime > rotateTime) {
      savedTime = millis(); // Save the current time to restart the timer!
      scene = 4;

      //Generate new frame    
      var j = int(random(showerFrames));
      //println(i, j);
      while (j == showeri) {
        j = int(random(showerFrames));
        //println("match");
      }
      showeri = j;
    }
    //saveFrame("IS-Kuleshov-##.png");
  }

  //Mnemonic/Memory
  if (scene == 4) {
    //Loading image
    img = loadImage(mnemonic[mnemonici]);
    img.resize(1024, 576);
    image(img, 0, 0);

    //Frame counter
    //noStroke();
    //fill(#000000);
    //rect(5, 5, 90, 20);
    //fill(#ff8800);
    //text("frame " + (mnemonici+1), 10, 20);
    //println(i);

    // Calculate how much time has passed
    var passedTime = millis() - savedTime;
    // Has five seconds passed?
    if (passedTime > rotateTime) {
      savedTime = millis(); // Save the current time to restart the timer!
      scene = 2;

      //Generate new frame    
      var j = int(random(mnemonicFrames));
      //println(i, j);
      while (j == mnemonici) {
        j = int(random(mnemonicFrames));
        //println("match");
      }
      mnemonici = j;
      mnemonicCount++;
      if (mnemonicCount == mnemonicFrames) {
        rotateTime = rotateTime / 3;
      }
      if (mnemonicCount == mnemonicFrames * 3) {
        scene = 5;
      }
    }
    //saveFrame("IS-Kuleshov-##.png");
  }

  //Credits
  if (scene == 5) {
    background('#000000');
    fill(255);
    textAlign(CENTER, CENTER);
    text("Shower down memory drain", width / 2, creditsY);
    text("Andrew Wong", width / 2, creditsY + 40);
    text("2020", width / 2, creditsY + 80);
    creditsY--;
    //println(creditsY);
  }
}

// Called every time a new frame is available to read
// void movieEvent(Movie m) {
//   m.read();
// }

// void setMovie(int idx) {
//   myMovie[idx] = new Movie(this, getMovieName(idx));
//   myMovie[idx].stop();
//   myMovie[idx].play();
//   myMovie[idx].volume(0);
//   targetTime[idx] = millis() + myMovie[idx].duration() * 1000;
// }

// String getMovieName(int pos) {
//   currIdx[pos]=(int)random(N);
//   return names[currIdx[pos]];
// }