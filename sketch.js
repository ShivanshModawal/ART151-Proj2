let t = 0; // time variable
saveCount = 0; //number of screenshots

function setup() {
 
  createCanvas(800, 800);
  noStroke();  
}
//-----------------------
function draw() {

  background(10,10);//translcent background to see the trail

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 40) {
    for (let y = 0; y <= height; y = y + 60) {
      // starting point depends on mouse position
      const xAngle = map(mouseX, 0, width, -10 * PI, 5 * PI, true);
      const yAngle = map(mouseY, 0, height, -10 * PI, 5 * PI, true);
      // position also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves back and forth in a line
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * cos(2 * PI * t + angle);
      Myx = myX+100

      let b = color(400, 200, 400);
      fill(b);
      ellipse(myX, myY, 25); // draw particle

      let c = color('#0f0');
      fill(c); 
      ellipse(myY, myX, 5); // draw particle

      let d = color(204,153,0);
      fill(d); 
      ellipse(Myx, myY, 3); // draw particle
    }
  }
  t += 0.002; // update time
}
//------------------------
function keyPressed() {

  if (key == 'x') {
    save("screeshot" + saveCount + ".png");
    saveCount++; //update count
  }
}