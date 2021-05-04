function preload() {
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.position(110, 250);
  video = createCapture(VIDEO);


  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
}

function take_snapshot(){    
  save('MY DPFSD-3000');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}



function draw() {

  fill(0, 100, 0);
  stroke(0, 100, 0);
  rect(0, 0, 500, 500);

image(video, 75, 75, 350, 350)

  fill(0, 0, 255);
  stroke(0, 0, 255);
  rect(450, 0, 20, 500);

  fill(0, 0, 255);
  stroke(0, 0, 255);
  rect(30, 0, 20, 500);

  fill(0, 0, 255);
  stroke(0, 0, 255);
  rect(0, 450, 500, 20);

  fill(0, 0, 255);
  stroke(0, 0, 255);
  rect(0, 30, 500, 20);

  fill(0, 255, 255);
  stroke(0, 255, 255);
  circle(460, 40, 80);

  fill(0, 255, 255);
  stroke(0, 255, 255);
  circle(40, 40, 80);

  fill(0, 255, 255);
  stroke(0, 255, 255);
  circle(40, 460, 80);

  fill(0, 255, 255);
  stroke(0, 255, 255);
  circle(460, 460, 80);

}
