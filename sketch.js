const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(930,320,70,70);
    ground1 = new Ground(600,385,1200,10); 
    pig1 = new Pig(815,340);
    log1 = new Log(815,260,310,PI/2);
    box3 = new Box(700,220,70,70);
    box4 = new Box(930,220,70,70);
    pig2 = new Pig(815,200);
    log2 = new Log(815,180,310,PI/2);
    box5 = new Box(815,150,70,70);
    log3 = new Log(870,120,150,-PI/4);
    log4 = new Log(750,120,150,PI/4);
    bird1  = new Bird(300,400);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground1.display();
    pig1.display();
    log1.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}