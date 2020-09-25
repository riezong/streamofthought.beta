https: //editor.p5js.org/rustyrobison/sketches/Cknh4rum8

    // var vid = [myMovie];
    // vid = myMovie; //Setup array of Video files
    var N = 1; //Number of video files
var targetTime = [];
var index = 0;
var currIdx = [];
var XPOS = [0, 260, 520];
// var names = [Title.mp4];

// SoundFile showerSound;

// var scene = 1;
var countdown;
var state = 0;
var timer;
var titleTime = 20000;
var rotateTime = 5000;
var creditsY = 576;

var vid;

// PFont mono;

// Declare video files

var title = [
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Opening.gif"
];

var Kuleshov = [
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap_Running_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap_Running_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap_Running_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap_Running_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap_Running_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Tap_Running_Render.gif",
];

var shower = [
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower_Running_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower_Running_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower_Running_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower_Running_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower_Running_Render.gif",
  "https://raw.githubusercontent.com/riezong/streamofthought/master/data/Shower_Running_Render.gif",
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

function preload() {

}

function setup() {
    // createCanvas(1920 / 2, 1080 / 2);
    createCanvas(800, 450);
    textSize(16);
    textFont('Arial');

    kuleshovi = int(random(kuleshovFrames));
    showeri = int(random(showerFrames));
    mnemonici = int(random(mnemonicFrames));

    timer = millis() + titleTime;

    // Load video {
    vid = createVideo("https://riezong.github.io/streamofthought/data/Opening.mp4");
    vid.position(0, 0)
    vid.size(width, height);
    vid.loop();
    vid.speed(3);
    // vid.hide();
    // }

}

function draw() {

    //Titles
    if (scene == 1) {
        background(255);
        // background('#FF8800');
        // textAlign(CENTER, CENTER);

        // main = createImg("https://raw.githubusercontent.com/riezong/streamofthought/master/data/Opening.gif", "");
        Title = createImg(title[0], "");
        Title.position(0, 0);
        // gif_createImg.hide();

        // text("Shower down memory drain", width / 2, height / 2 - 10);
        // text("Making sense of moments", width / 2, height / 2 + 10);

        // Start countdown timer { 
        countdown = ceil((timer - millis()) / 1000);
        if (state == 0) {
            text(countdown, 100, 100);
            print(countdown);
        } else if (state == 1) {
            text("score: 12", 100, 100);
            Title.hide();
            scene = 2;
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

        // Start countdown timer { 
        countdown = ceil((timer - millis()) / 1000);
        if (state == 0) {
            print(countdown);
            // Load video {
            vid = createVideo("https://riezong.github.io/streamofthought/data/Opening.mp4");
            vid.position(0, 0)
            vid.size(width, height);
            vid.play();
            vid.speed(1);
            noLoop();
            // }

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
        background(255);
        main = createImg(Kuleshov[kuleshovi], "");
        main.position(0, 0);


        // Start countdown timer { 
        countdown = ceil((timer - millis()) / 1000);
        if (state == 0) {
            text(countdown, 100, 100);
        } else if (state == 1) {
            text("score: 12", 100, 100);
            main.hide();
            scene = 3;
            state = 0;
        }
        if (timer < millis()) {
            timer = millis() + rotateTime;

            //Generate new frame    
            var j = int(random(kuleshovFrames));
            //println(i, j);
            while (j == kuleshovi) {
                j = int(random(kuleshovFrames));
                //println("match");
            }
            kuleshovi = j;
            state = 1;
        }
        // }

    }

    //Bathroom
    if (scene == 3) {
        background(255);
        //Loading image
        img = createImg(shower[showeri], "");
        img.position(0, 0);

        // Start countdown timer { 
        countdown = ceil((timer - millis()) / 1000);
        if (state == 0) {
            text(countdown, 100, 100);
        } else if (state == 1) {
            text("score: 12", 100, 100);
            img.hide();
            scene = 2;
            state = 0;
        }
        if (timer < millis()) {
            timer = millis() + rotateTime;

            //Generate new frame    
            var j = int(random(showerFrames));
            //println(i, j);
            while (j == kuleshovi) {
                j = int(random(showerFrames));
                //println("match");
            }
            showeri = j;
            state = 1;
        }
        // }
    }

    //Mnemonic/Memory
    if (scene == 4) {
        background(255);
        //Loading image
        img = createImg(mnemonic[mnemonici], "");
        image(img, 0, 0, width, height);
        img.hide();

        // Start countdown timer { 
        countdown = ceil((timer - millis()) / 1000);
        if (state == 0) {
            text(countdown, 100, 100);
        } else if (state == 1) {
            text("score: 12", 100, 100);
            img.hide();
            scene = 2;
            state = 0;
        }
        if (timer < millis()) {
            timer = millis() + rotateTime;

            //Generate new frame    
            var j = int(random(mnemonicFrames));
            //println(i, j);
            while (j == kuleshovi) {
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
            showeri = j;
            state = 1;
        }
        // }
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

function sayDone(elt) {
    vid.stop();
    vid.hide();
    scene = 2;
}
