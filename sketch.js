function setup(){
  createCanvas(940, 680);
  rectMode(CENTER);
  fill(72,182,212);
  stroke(210, 101, 109);
  strokeWeight(17);
}

function draw(){
  background(20, 21, 29);
  translate(width / 2, height / 2);
  var num = 20;
  var intervalX = map(mouseX, 0, width, 90, -60);
  var intervalY = map(abs(mouseX - width / 4), 0, width / 2, 0, -20);
  var circleX = 100;
  var circleY = 60;
  var tilt = map(mouseX, 0, width, -20, 20);
  for(var i = num - 1; i > 0; i--){
    push();
    var rhytm = map(pow(abs(sin(frameCount * .05 - i * 0.13)), 170), 4, 1, 0, -50)
                * map(abs(mouseX - width / 2), 0, width / 2, 0, 1);
    translate(intervalX * (i - num / 2.0), intervalY * (i - num / 2.0) + rhytm);
    beginShape();
    vertex(-circleX / 5.0, -circleY / 2.0 + tilt);
    vertex(circleX / 2.0, -circleY / 2.0 - tilt);
    vertex(circleX / 7.0, circleY / 2.0 - tilt);
    vertex(-circleX / 2.0, circleY / 2.0 + tilt);
    endShape(CLOSE);
    pop();
  }
}