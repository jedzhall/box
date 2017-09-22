var isPlaying;
var y=0;


// setup function is called only once at the beginning

function setup() {

	createCanvas(1000, 700);

isPlaying=false;
}


// draw function is called every frame

function draw() {

	background ('#23FF03');

	  if ( y != 0 ) {
    y = y + 1;
  }
  
  if (isPlaying && y==0) {
    y=int(random(-500,-10));
  }

  translate(0, y);

  //head
  fill('#CE8B1F');
  rect(300, 100, 500, 500);

  //eyes
  fill('#FFFFFF');
  ellipse(450, 231, 210, 210);
  ellipse(666, 231, 210, 210);



  //innereyes
  fill('#1A0412');
  ellipse(450, 230, 150, 150);
  ellipse(660, 230, 150, 150);

  //arms
  rect(800, 300, 90, 40);
  rect(211, 300, 90, 40);

  //hands
  ellipse(900, 300, 90, 90);
  ellipse(200, 300, 90, 90);

  //legs
  rect(700, 600, 50, 89);
  rect(400, 600, 50, 89);

  //feet
  fill('#FF5E00');
  arc(400, 700, 150, 150, PI, 2*PI, PIE);
  arc(700, 700, 150, 150, PI, 2*PI, PIE);

  //moth
  noStroke();
  fill('#F55D45');
  //ellipse(600,400,500,200);
//  triangle(900, 300, 830, 500, 500, 400);
  arc(550, 340, 500, 500, 0, PI, PIE);



  //triangle(900,300,830,500,500,400);
  //arc(600,360,500,500,0,PI,PIE)

  //teeth
  //stroke(#B24CFC);
  fill('#FAF8F7');
  //triangle(480,350,500,360,490,390);
  //triangle(550,350,600,360,570,390);
  arc(450, 340, 210, 300, 0, PI, PIE);
  arc(600, 340, 210, 300, 0, PI, PIE);

	// if (mouseIsPressed) {
 //    	fill(0);
 //  	} 
 //  	else {
 //    	fill(255);
 //  	}

	// ellipse(50, 50, 80, 80);
}