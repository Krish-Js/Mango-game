
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var treeIMG,treeSprite;
var boyIMG,boySprite;
var stone,mango1;
var engine, world;
var lmango, lstone;
var mango;
function preload()
{
	treeIMG=loadImage("sprites/Plucking mangoes/tree.png")
	boyIMG=loadImage("sprites/Plucking mangoes/boy.png")
	
}

function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER)

	treeSprite=createSprite(1100, 300, 10,10);
	treeSprite.addImage(treeIMG)
	treeSprite.scale=0.4

    boySprite=createSprite(500, 470, 10,10);
	boySprite.addImage(boyIMG)
	boySprite.scale=0.10


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create the Bodies Here.

   
	Engine.run(engine);

	stone = new Stone(100,100,50)
	mango1= new Mango(1150,150,50)
	mango2= new Mango(1200,200,50)
	mango3= new Mango(1000,150,50)
	mango4= new Mango(1200,130,50)
	mango5= new Mango(1100,100,50)
	mango6= new Mango(1000,250,50)
	mango7= new Mango(1300,250,60)
	mango8= new Mango(950,200,50)
	mango9= new Mango(1100,250,50)
	mango10= new Mango(1060,170,60)
	
  
	slingshot = new Slingshot(stone.body, {x: 450, y:415});

}

function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 slingshot.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 detectCollition(stone,mango1);
 detectCollition(stone,mango2);
 detectCollition(stone,mango3);
 detectCollition(stone,mango4);
 detectCollition(stone,mango5);
 detectCollition(stone,mango6);
 detectCollition(stone,mango7);
 detectCollition(stone,mango8);
 detectCollition(stone,mango9);
 detectCollition(stone,mango10);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y:mouseY});
}
function mouseReleased(){
   slingshot.fly();
}

 function keyPressed(){
   if(keyCode === 32){
	
	Matter.Body.setPosition(stone.body,{x:450, y:415})
	slingshot.attach(mango.body)
   }
 }

 function detectCollition(mango,stone){
	 mangoBodyPosition = mango.body.position;
	 stoneBodyPosition = stone.body.position;

	 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	 if(distance<=mango.r+stone.r){
		 Matter.Body.setStatic(stone.body,false)
	 }
	
 }


