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

function setup(){
  createCanvas(displayWidth, displayHeight)
}

function draw(){

}

function touchStarted(){
  background(255);
  text(touches.length, 200,200);
  text(touches[0].x,200,200);
  text(touches[0].y,200,220);
  text(touches[1].x,200,240);
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
