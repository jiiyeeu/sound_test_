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
  
function deviceMoved(){
  r = map(accelerationX, -90,90,100,175);
  g = map(accelerationY, -90,90,100,200);
  b = map(accelerationZ, -90,90,100,200);
}

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

