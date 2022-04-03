/*
    Be creative and draw a selfie of yourself in p5.js. 
    The selfie can be abstract, be creative! Use everything 
    you learned so far, for example variables, comments and 
    translation, rotation and scale.
*/

//Background

background(255, 255, 255);
strokeWeight(2);

//Hair
push();

noStroke();
fill(92, 51, 23);
ellipse(150, 150, 250, 300);
rect(29, 181, 244, 140);

pop();

//Clothes
push();

push();
noStroke();
fill(59, 131, 189);
rect(100, 250, 100, 50);
rect(50, 280, 200, 50);
pop();

x1 = 90;
y1 = 310;
y2 = y1 + 20;
x2 = x1 + 120;

line(x1, y1, x1, y2);
line(x2, y1, x2, y2);

pop();

//Shape of the face
push();

noStroke();
fill(252, 208, 180);
ellipse(150, 150, 200, 230);

pop();

//Eyes
push();
//Left eyeball
translate(55, 80);

fill(255, 255, 255);
ellipse(50, 50, 50, 25);

//Right eyeball
fill(255, 255, 255);
ellipse(140, 50, 50, 25);

//Left iris
push();
noStroke();

//Brown
fill(159, 85, 41);
ellipse(50, 50, 23, 25);

//Black
fill(0, 0, 0);
ellipse(50, 50, 10, 15);

//Right iris

//Brown
fill(159, 85, 41);
ellipse(140, 50, 23, 25);

//Black
fill(0, 0, 0);
ellipse(140, 50, 10, 15);

pop();
pop();

//Fixing hair

push();

noStroke();

fill(92, 51, 23);
ellipse(150, 50, 175, 40);

push();
translate(150, 150);
rotate(-0.5);
rect(-70, -100, 100, 20);
pop();

push();
translate(150, 150);
rotate(0.5);
rect(-20, -100, 100, 20);
pop();

push();
translate(70, -70);

push();
rotate(0.5);
ellipse(180, 50, 110, 30);
pop();

push();
rotate(2.4);
ellipse(90, -110, 100, 25);
pop();

pop();

pop();

//Mouth

push();

fill(234, 137, 154);
//ellipse(150,205,70,20);
arc(150, 195, 70, 50, 0, -3.14, PIE);

//Teeths
noStroke();
fill(255, 255, 255);
rect(116, 195, 68, 5);

pop();

//Nose
push();

push();
fill(252, 208, 180);
arc(150, 160, 30, 20, 0, PI, PIE);

x1 = 135;
y = 160;
x2 = x1 + 30;

stroke(252, 208, 180);
line(x1, y, x2, y);
pop();

pop();

//Eyebrows
push();

noStroke();
translate(200, 215);
rotate(-3.15);
fill(92, 51, 23);
arc(96, 105, 60, 20, 0, 3.14);
arc(0, 105, 60, 20, 0, 3.14);

pop();
