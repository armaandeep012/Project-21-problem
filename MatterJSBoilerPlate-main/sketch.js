var ball;
var ground1, leftRect, rightRect;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	var ball_options = {
		isStatoc: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(200, 200, 20)


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	display(Ground);
	drawSprites();

}



