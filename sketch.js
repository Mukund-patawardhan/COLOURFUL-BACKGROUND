
var r=0;
var g=0;
var b=0;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b

function setup(){

  createCanvas(1000,800);
}


function draw(){
 background(r,g,b);
  

  // change the value of Red based on the mouse movement about the X axis
  r=map(mouseX,0,1000,0,1000,true);
  // change the value of Green based on the mouse movement about the X axis
  g=map(mouseX+mouseY,0,1000,0,1000,true);
  // change the value of Blue based on the mouse movement about the X axis
  b=map(mouseY,0,1000,0,240,true);
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  fill("white");
  ellipse(mouseX,mouseY,40,30);

  console.log(mouseY);

  drawSprites();
}