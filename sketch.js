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

// 버튼 누르면 소리 나고, 기울기 변하면서 가속도 바뀌면 소리 바뀜 > 성공 헤
/*
var wave;
var button;
var playing = false;
var ampValue = 0;
let permission = false;

function setup(){
  //createCanvas(displayWidth, displayHeight);
  createCanvas(720,256);

  if(typeof DeviceMotionEvent.requestPermission === "function"){
    background(255,0,0);
    button = createButton("Click to iOS Sensor");
    button.mousePressed(iosAccese);
  }else{
    background(0,255,0);
    text("is not a ios", 100,100);
  }

  wave = new p5.Oscillator();
  wave.setType("sine");
  //wave.freq(440);
  wave.amp(0);

  button = createButton('play/pause');
  //button.mousePressed(toggle);
  button.touchStarted(toggle);
}

function iosAccese(){
  DeviceMotionEvent.requestPermission().then((response) => {
    if(response === "granted"){
      permission = true;
    }
  }).catch(console.error);
} 

function draw(){
  if(!permission) return;
  background(255,255,255);
  textSize(72);
  text(accelerationX, 100, 100);

  wave.amp(ampValue, 0.1);
  wave.freq(ampValue);
  
}

function toggle(){
  if(!playing){
    getAudioContext().resume();
    wave.start();
    wave.amp(ampValue, 1);
    //wave.amp(0.3, 1);
    playing = true;
  }else{
    getAudioContext().resume();
    //wave.amp(0,1);
    ampValue = 0;
    playing=false;
  }
}


function deviceMoved(){
  //ampValue = accelerationX/2;;
  ampValue = accelerationX*1000;
  background(255, 0, 0);
  text(accelerationX/2, 10, 10);
}
*/

///////////////////// 기말 과제 > 키보드 만들기 /////////////////////

var wave_C;
var wave_Cs;
var wave_D;
var wave_Ds;
var wave_E;
var wave_F;
var wave_Fs;
var wave_G;
var wave_Gs;
var wave_A;
var wave_As;
var wave_B;
var wave_C2;

var button_C;
var button_Cs;
var button_D;
var button_Ds;
var button_E;
var button_F;
var button_Fs;
var button_G;
var button_Gs;
var button_A;
var button_As;
var button_B;
var button_C2;

var playing_C = false;
var playing_Cs = false;
var playing_D = false;
var playing_Ds = false;
var playing_E = false;
var playing_F = false;
var playing_Fs = false;
var playing_G = false;
var playing_Gs = false;
var playing_A = false;
var playing_As = false;
var playing_B = false;
var playing_C2 = false;

var Plus_button;
var Minus_button;

var ampValue = 0.4;

let permission = false;

var freqValue;

function setup(){
  //createCanvas(displayWidth, displayHeight);
  //createCanvas(windowWidth, windowHeight);

  createCanvas(1050,600);

  if(typeof DeviceMotionEvent.requestPermission === "function"){
    //background(255,0,0);
    button = createButton("수정Click to iOS Sensor");
    button.size(535,60);
    button.position(125,80);
    button.style('font-size', '15px');
    button.mousePressed(iosAccese);
  }else{
    background(0,255,0);
    text("is not a ios", 100,100);
  }

  wave_C = new p5.Oscillator();
  wave_C.setType("sine");
  //wave.freq(440);
  wave_C.amp(0);

  wave_Cs = new p5.Oscillator();
  wave_Cs.setType("sine");
  wave_Cs.amp(0);

  wave_D = new p5.Oscillator();
  wave_D.setType("sine");
  wave_D.amp(0);

  wave_Ds = new p5.Oscillator();
  wave_Ds.setType("sine");
  wave_Ds.amp(0);

  wave_E = new p5.Oscillator();
  wave_E.setType("sine");
  wave_E.amp(0);

  wave_F = new p5.Oscillator();
  wave_F.setType("sine");
  wave_F.amp(0);

  wave_Fs = new p5.Oscillator();
  wave_Fs.setType("sine");
  wave_Fs.amp(0);

  wave_G = new p5.Oscillator();
  wave_G.setType("sine");
  wave_G.amp(0);

  wave_Gs = new p5.Oscillator();
  wave_Gs.setType("sine");
  wave_Gs.amp(0);

  wave_A = new p5.Oscillator();
  wave_A.setType("sine");
  wave_A.amp(0);

  wave_As = new p5.Oscillator();
  wave_As.setType("sine");
  wave_As.amp(0);

  wave_B = new p5.Oscillator();
  wave_B.setType("sine");
  wave_B.amp(0);

  wave_C2 = new p5.Oscillator();
  wave_C2.setType("sine");
  wave_C2.amp(0);

  button_C = createButton('도');
  button_C.touchStarted(toggle_C);
  button_C.touchEnded(toggle_C);
  button_C.size(100,400);
  button_C.position(125,180);
  button_C.style('color', '#FFFFFF');
  button_C.style('border-color', '#000000');
  button_C.style('background-color', '#FFFFFF');


  // button_Cs = createButton('도#');
  // button_Cs.touchStarted(toggle_Cs);
  // button_Cs.touchEnded(toggle_Cs);
  // button_Cs.size(200,300);
  // button_Cs.position(300,300);
  // button_Cs.style('background-color', '#000000');

  button_D = createButton('레');
  button_D.touchStarted(toggle_D);
  button_D.touchEnded(toggle_D);
  button_D.size(100,400);
  button_D.position(225,180);
  button_D.style('color', '#FFFFFF');
  button_D.style('border-color', '#000000');
  button_D.style('background-color', '#FFFFFF');

  // button_Ds = createButton('레#');
  // button_Ds.touchStarted(toggle_Ds);
  // button_Ds.touchEnded(toggle_Ds);
  // button_Ds.size(200,300);
  // button_Ds.position(500,300);
  // button_Ds.style('background-color', '#000000');

  button_E = createButton('미');
  button_E.touchStarted(toggle_E);
  button_E.touchEnded(toggle_E);
  button_E.size(100,400);
  button_E.position(325,180);
  button_E.style('color', '#FFFFFF');
  button_E.style('border-color', '#000000');
  button_E.style('background-color', '#FFFFFF');

  button_F = createButton('파');
  button_F.touchStarted(toggle_F);
  button_F.touchEnded(toggle_F);
  button_F.size(100,400);
  button_F.position(425,180);
  button_F.style('color', '#FFFFFF');
  button_F.style('border-color', '#000000');
  button_F.style('background-color', '#FFFFFF');

  // button_Fs = createButton('파#');
  // button_Fs.touchStarted(toggle_Fs);
  // button_Fs.touchEnded(toggle_Fs);
  // button_Fs.size(200,300);
  // button_Fs.position(900,300);
  // button_Fs.style('background-color', '#000000');

  button_G = createButton('솔');
  button_G.touchStarted(toggle_G);
  button_G.touchEnded(toggle_G);
  button_G.size(100,400);
  button_G.position(525,180);
  button_G.style('color', '#FFFFFF');
  button_G.style('border-color', '#000000');
  button_G.style('background-color', '#FFFFFF');

  // button_Gs = createButton('솔#');
  // button_Gs.touchStarted(toggle_Gs);
  // button_Gs.touchEnded(toggle_Gs);
  // button_Gs.size(200,300);
  // button_Gs.position(1100,300);
  // button_Gs.style('background-color', '#000000');

  button_A = createButton('라');
  button_A.touchStarted(toggle_A);
  button_A.touchEnded(toggle_A);
  button_A.size(100,400);
  button_A.position(625,180);
  button_A.style('color', '#FFFFFF');
  button_A.style('border-color', '#000000');
  button_A.style('background-color', '#FFFFFF');

  // button_As = createButton('라#');
  // button_As.touchStarted(toggle_As);
  // button_As.touchEnded(toggle_As);
  // button_As.size(200,300);
  // button_As.position(1300,300);
  // button_As.style('background-color', '#000000');

  button_B = createButton('시');
  button_B.touchStarted(toggle_B);
  button_B.touchEnded(toggle_B);
  button_B.size(100,400);
  button_B.position(725,180);
  button_B.style('color', '#FFFFFF');
  button_B.style('border-color', '#000000');
  button_B.style('background-color', '#FFFFFF');

  button_C2 = createButton('도');
  button_C2.touchStarted(toggle_C2);
  button_C2.touchEnded(toggle_C2);
  button_C2.size(100,400);
  button_C2.position(825,180);
  button_C2.style('color', '#FFFFFF');
  button_C2.style('border-color', '#000000');
  button_C2.style('background-color', '#FFFFFF');

  button_Cs = createButton('도#');
  button_Cs.touchStarted(toggle_Cs);
  button_Cs.touchEnded(toggle_Cs);
  button_Cs.size(70,200);
  button_Cs.position(190,180);
  button_Cs.style('color', '#000000');
  button_Cs.style('background-color', '#000000');

  button_Ds = createButton('레#');
  button_Ds.touchStarted(toggle_Ds);
  button_Ds.touchEnded(toggle_Ds);
  button_Ds.size(70,200);
  button_Ds.position(290,200);
  button_Ds.style('color', '#000000');
  button_Ds.style('background-color', '#000000');

  button_Fs = createButton('파#');
  button_Fs.touchStarted(toggle_Fs);
  button_Fs.touchEnded(toggle_Fs);
  button_Fs.size(70,200);
  button_Fs.position(490,200);
  button_Fs.style('color', '#000000');
  button_Fs.style('background-color', '#000000');

  button_Gs = createButton('솔#');
  button_Gs.touchStarted(toggle_Gs);
  button_Gs.touchEnded(toggle_Gs);
  button_Gs.size(70,200);
  button_Gs.position(590,200);
  button_Gs.style('color', '#000000');
  button_Gs.style('background-color', '#000000');

  button_As = createButton('라#');
  button_As.touchStarted(toggle_As);
  button_As.touchEnded(toggle_As);
  button_As.size(70,200);
  button_As.position(690,200);
  button_As.style('color', '#000000');
  button_As.style('background-color', '#000000');

  Plus_button = createButton('+');
  Plus_button.size(90,60);
  Plus_button.position(705,80);
  Plus_button.style('font-size', '70px');
  Plus_button.mousePressed(Plus_amp);

  Minus_button = createButton('-');
  Minus_button.size(90,60);
  Minus_button.position(835,80);
  Minus_button.style('font-size', '70px');
  Minus_button.mousePressed(Minus_amp);

}

function iosAccese(){
  DeviceMotionEvent.requestPermission().then((response) => {
    if(response === "granted"){
      permission = true;
    }
  }).catch(console.error);
} 

function deviceMoved(){
  //ampValue = accelerationX/2;;
  freqValue = rotationX*10;
  //background(255, 0, 0);
  text(rotationX*10, 10, 10);
}

function draw(){

  if(rotationX>10 || rotationX<-10){
    wave_C.freq(freqValue);
    wave_Cs.freq(freqValue);
    wave_D.freq(freqValue);
    wave_Ds.freq(freqValue);
    wave_E.freq(freqValue);
    wave_F.freq(freqValue);
    wave_Fs.freq(freqValue);
    wave_G.freq(freqValue);
    wave_Gs.freq(freqValue);
    wave_A.freq(freqValue);
    wave_As.freq(freqValue);
    wave_B.freq(freqValue);
    wave_C2.freq(freqValue);
  }else{
    wave_C.freq(261);
    wave_Cs.freq(277);
    wave_D.freq(293);
    wave_Ds.freq(311);
    wave_E.freq(329);
    wave_F.freq(349);
    wave_Fs.freq(369);
    wave_G.freq(391);
    wave_Gs.freq(415);
    wave_A.freq(440);
    wave_As.freq(466);
    wave_B.freq(493);
    wave_C2.freq(523);
  }
}

function Plus_amp(){
    ampValue += 0.2;
}

function Minus_amp(){
  if(ampValue>0){
    ampValue -= 0.2;
  }
  else if(ampValue<=0){
    ampValue = 0;
  }
}

function toggle_C(){
  if(!playing_C){
    getAudioContext().resume();
    wave_C.start();
    //wave_C.amp(1);
    wave_C.amp(ampValue);
    //wave_C.freq(261);
    // if(rotationX !==0){
    //   wave_C.freq(freqValue);
    // }
    playing_C = true;
  }else{
    getAudioContext().resume();
    wave_C.amp(0,0.3);
    playing_C=false;
  }
}

function toggle_Cs(){
  if(!playing_Cs){
    getAudioContext().resume();
    wave_Cs.start();
    //wave_Cs.amp(1);
    wave_Cs.amp(ampValue);
    //wave_Cs.freq(277);
    playing_Cs = true;
  }else{
    getAudioContext().resume();
    wave_Cs.amp(0,0.3);
    playing_Cs=false;
  }
}

function toggle_D(){
  if(!playing_D){
    getAudioContext().resume();
    wave_D.start();
    //wave_D.amp(1);
    wave_D.amp(ampValue);
    // wave_D.freq(293);
    playing_D = true;
  }else{
    getAudioContext().resume();
    wave_D.amp(0,0.3);
    playing_D=false;
  }
}

function toggle_Ds(){
  if(!playing_Ds){
    getAudioContext().resume();
    wave_Ds.start();
    //wave_Ds.amp(1);
    wave_Ds.amp(ampValue);
    // wave_Ds.freq(311);
    playing_Ds = true;
  }else{
    getAudioContext().resume();
    wave_Ds.amp(0,0.3);
    playing_Ds=false;
  }
}

function toggle_E(){
  if(!playing_E){
    getAudioContext().resume();
    wave_E.start();
    //wave_E.amp(1);
    wave_E.amp(ampValue);
    // wave_E.freq(329);
    playing_E = true;
  }else{
    getAudioContext().resume();
    wave_E.amp(0,0.3);
    playing_E=false;
  }
}

function toggle_F(){
  if(!playing_F){
    getAudioContext().resume();
    wave_F.start();
    //wave_F.amp(1);
    wave_F.amp(ampValue);
    // wave_F.freq(349);
    playing_F = true;
  }else{
    getAudioContext().resume();
    wave_F.amp(0,0.3);
    playing_F=false;
  }
}

function toggle_Fs(){
  if(!playing_Fs){
    getAudioContext().resume();
    wave_Fs.start();
    //wave_Fs.amp(1);
    wave_Fs.amp(ampValue);
    // wave_Fs.freq(369);
    playing_Fs = true;
  }else{
    getAudioContext().resume();
    wave_Fs.amp(0,0.3);
    playing_Fs=false;
  }
}

function toggle_G(){
  if(!playing_G){
    getAudioContext().resume();
    wave_G.start();
    //wave_G.amp(1);
    wave_G.amp(ampValue);
    // wave_G.freq(391);
    playing_G = true;
  }else{
    getAudioContext().resume();
    wave_G.amp(0,0.3);
    playing_G=false;
  }
}

function toggle_Gs(){
  if(!playing_Gs){
    getAudioContext().resume();
    wave_Gs.start();
    //wave_Gs.amp(1);
    wave_Gs.amp(ampValue);
    // wave_Gs.freq(415);
    playing_Gs = true;
  }else{
    getAudioContext().resume();
    wave_Gs.amp(0,0.3);
    playing_Gs=false;
  }
}

function toggle_A(){
  if(!playing_A){
    getAudioContext().resume();
    wave_A.start();
    //wave_A.amp(1);
    wave_A.amp(ampValue);
    // wave_A.freq(440);
    playing_A = true;
  }else{
    getAudioContext().resume();
    wave_A.amp(0,0.3);
    playing_A=false;
  }
}

function toggle_As(){
  if(!playing_As){
    getAudioContext().resume();
    wave_As.start();
    //wave_As.amp(1);
    wave_As.amp(ampValue);
    // wave_As.freq(466);
    playing_As = true;
  }else{
    getAudioContext().resume();
    wave_As.amp(0,0.3);
    playing_As=false;
  }
}

function toggle_B(){
  if(!playing_B){
    getAudioContext().resume();
    wave_B.start();
    //wave_B.amp(1);
    wave_B.amp(ampValue);
    // wave_B.freq(493);
    playing_B = true;
  }else{
    getAudioContext().resume();
    wave_B.amp(0,0.3);
    playing_B=false;
  }
}

function toggle_C2(){
  if(!playing_C2){
    getAudioContext().resume();
    wave_C2.start();
    //wave_C2.amp(1);
    wave_C2.amp(ampValue);
    // wave_C2.freq(523);
    playing_C2 = true;
  }else{
    getAudioContext().resume();
    wave_C2.amp(0,0.3);
    playing_C2=false;
  }
}
