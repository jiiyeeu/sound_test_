// 기울기
/*
let button;
let permission = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if(typeof DeviceMotionEvent.requestPermission === "function"){
    background(255,0,0);
    button = createButton("Click to iOS Sensor");
    button.mousePressed(iosAccese);
  }else{
    background(0,255,0);
    text("is not a ios", 100,100);
  }
}

///function deviceMoved(){
///  r = map(accelerationX, -90,90,100,175);
///  g = map(accelerationY, -90,90,100,200);
///  b = map(accelerationZ, -90,90,100,200);
///}


function iosAccese(){
  DeviceMotionEvent.requestPermission().then((response) => {
    if(response === "granted"){
      permission = true;
    }
  }).catch(console.error);
} 

function draw() {
  if(!permission) return;
  background(255,255,255);
  textSize(72);
  text(rotationX, 100, 100);
  } 
  */

// 멀티터치
/*
function setup(){
  createCanvas(displayWidth, displayHeight)
}

function draw(){

}

function touchStarted(){
  background(255);
  text(touches.length, 200,200);
  text(touches[0].x,200,220);
  text(touches[0].y,200,240);
  text(touches[1].x,200,260);
  text(touches[1].y,200,280);
  text(touches[2].x,200,300);
  text(touches[2].y,200,320);
  text(touches[3].x,200,340);
  text(touches[3].y,200,360);
  text(touches[4].x,200,380);
  text(touches[4].y,200,400);
  text(touches[5].x,200,420);
  text(touches[5].y,200,440);
}
*/
//센서 작동 공식
/*
let button;
let permission = false;
let osc;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if(typeof DeviceMotionEvent.requestPermission === "function"){
    background(255,0,0);
    button = createButton("Click to iOS Sensor");
    button.mousePressed(iosAccese);
  }else{
    background(0,255,0);
    text("is not a ios", 100,100);
  }

  osc = new p5.Oscillator("sine");
}

function iosAccese(){
  DeviceMotionEvent.requestPermission().then((response) => {
    if(response === "granted"){
      permission = true;
    }
  }).catch(console.error);
} 

function draw(){
  osc.amp(0.5);
  osc.freq(440);
  osc.start();
  if(!permission) return;
  background(255);
  textSize(72);
  text(rotationX, 100, 100);
}
*/

//아이폰 사운드 공식
/*
let osc;

function setup(){
  background(0,0,0);
  osc = new p5.Oscillator("sine");

  osc.amp(0.5);

  osc.freq(440);
}

function draw(){

}

function touchStarted(){
  getAudioContext().resume();
  osc.start();
}
*/

// 버튼 누르면 폰 각도에 따라서 색 변하는 거
var wave;
var button;
var playing = false;
//var ampValue = 0;

function setup(){
  //createCanvas(displayWidth, displayHeight);
  createCanvas(720,256);

  wave = new p5.Oscillator();
  wave.setType("sine");
  //wave.freq(440);
  wave.amp(0);

  button = createButton('play/pause');
  //button.mousePressed(toggle);
  button.touchStarted(toggle);
}

function draw(){
  //wave.amp(ampValue, 0.1);
  //wave.freq(ampValue);
}

function toggle(){
  if(!playing){
    getAudioContext().resume();
    wave.start();
    //wave.amp(ampValue, 1);
    wave.amp(0.3, 1);
    playing = true;
  }else{
    getAudioContext().resume();
    wave.amp(0,1);
    //ampValue = 0;
    playing=false;
  }
}

function deviceMoved(){
  //ampValue = accelerationX/2;;
  ampValue = accelerationX*1000;
  background(255, 0, 0);
  text(accelerationX/2, 10, 10);
}
