Groundclass
    
var stand = new Stand(400,165,40,50);

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  //level one
  block1 = new Block(320,265,30,40);
  block2 = new Block(350,265,30,40);
  block3 = new Block(380,265,30,40);
  block4 = new Block(410,265,30,40);
  block5 = new Block(440,265,30,40);
  block6 = new Block(470,265,30,40);
  block7 = new Block(500,265,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //Top
  block16 = new Block(390,155,30,40);
}

function draw() {
  background(255,255,255);
  
  //polygon holder with slings
  polygon = Bodies,circle(50,200,20);
  World.add(world,polygon);


  SlingShot = new Slingshot(this.ploygon,{x:100,y:200});

  imageMode(CENTER)
  image(polygon,img,polygon.position.x,polygon.position.y,40,40);

  
  drawSprites();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: pirametX , y: pirametY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

fly()
  {
    this.bodyA = null;
  }