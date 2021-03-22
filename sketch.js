var bg;

var hrAngle,mnAngle, scAngle;

function setup() {
angleMode(DEGREES);


  createCanvas(1200,700);
  
  bg = createSprite(400,300,500,500);
  bg.shapeColor = "black";
}

function draw() {
  var hr = hour();
  var mn = minute();
  var sc = second();
  background(0);
  translate(500,300);
  rotate(-90);
  strokeWeight(7);
 
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,1,12,0,360);
  arc(500,300,)
push();
  rotate(scAngle);
  stroke("red");
  line(0,0,200,0);
  pop();
  push();
  rotate(mnAngle);
  stroke("green");
  line(0,0,100,0);
  pop();
  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,70,0);
  pop();

  
}
