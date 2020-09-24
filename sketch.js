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
var countdown;
var state = 0;
var timer;
var titleTime = 1000;
var rotateTime = 4000;
var creditsY = 576;

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

  //Titles
  if (scene == 1) {
    background('#FF8800');
    textAlign(CENTER, CENTER);

    text("Shower down memory drain", width / 2, height / 2 - 10);
    text("Making sense of moments", width / 2, height / 2 + 10);

    // Start countdown timer { 
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {
      text(countdown, 100, 100);
    } else if (state == 1) {
      text("score: 12", 100, 100);
      scene = 15;
      state = 0;
    }
    if (timer < millis()) {
      timer = millis() + titleTime;
      state = 1;
    }
    // }

  }

  if (scene == 15) {
    background('#000000');
    textAlign(CENTER, CENTER);
    fill(255);
    text("Hypertexts: non-sequential writing", width / 2, height / 2 - 30);
    text("Networked hypertexts do not have any designated beginning", width / 2, height / 2 + 10);
    text("or any designated endings", width / 2, height / 2 + 30);

    // Start countdown timer { 
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {
      text(countdown, 100, 100);
    } else if (state == 1) {
      text("score: 12", 100, 100);
      scene = 2;
      state = 0;
    }
    if (timer < millis()) {
      timer = millis() + titleTime;
      state = 1;
    }
    // }
  }

  //Title Video
  if (scene == 0) {
    
    fingers = createVideo(['data/opening.mp4', ""]);
    fingers.loop();
//     for (var i = 0; i < N; i++) {

//       var playFlag = (targetTime[i] - millis() > 0);

//       if (playFlag) {
//         image(myMovie[i], 0, 0, 1024, 576);
//       }

//       if (i == 0 && playFlag == false) {
//         setMovie(0);
//       }
//     }

    // Start countdown timer { 
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {
      text(countdown, 100, 100);
    } else if (state == 1) {
      text("score: 12", 100, 100);
      scene = 2;
      state = 0;
    }
    if (timer < millis()) {
      timer = millis() + titleTime;
      state = 1;
    }
    // }
  }

  //Main image
  if (scene == 2) {
    background(0);
    main = createImg(Kuleshov[kuleshovi], "");
    image(main, 0, 0, width, height);
    main.hide();


    // Start countdown timer { 
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {
      text(countdown, 100, 100);
    } else if (state == 1) {
      text("score: 12", 100, 100);
      scene = 3;
      state = 0;
    }
    if (timer < millis()) {
      timer = millis() + rotateTime;

      // //Generate new frame    
      // var j = int(random(kuleshovFrames));
      // //println(i, j);
      // while (j == kuleshovi) {
      //   j = int(random(kuleshovFrames));
      //   //println("match");
      // }
      // kuleshovi = j;
      state = 1;
    }
    // }

  }

  //Bathroom
  if (scene == 3) {
    //Loading image
    img = createImg(shower[showeri], "");
    image(img, 0, 0, width, height);
    img.hide();

    //Frame counter
    //noStroke();
    //fill(#000000);
    //rect(5, 5, 90, 20);
    //fill(#ff8800);
    //text("frame " + (showeri+1), 10, 20);
    //println(i);

    //     // Calculate how much time has passed
    //     var passedTime = millis() - savedTime;
    //     // Has five seconds passed?
    //     if (passedTime > rotateTime) {
    //       savedTime = millis(); // Save the current time to restart the timer!
    //       scene = 4;

    //       //Generate new frame    
    //       var j = int(random(showerFrames));
    //       //println(i, j);
    //       while (j == showeri) {
    //         j = int(random(showerFrames));
    //         //println("match");
    //       }
    //       showeri = j;
    //     }
  }

  //Mnemonic/Memory
  if (scene == 4) {
    //Loading image
    img = createImg(mnemonic[mnemonici]);
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