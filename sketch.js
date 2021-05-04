var frect,mrect ;
var jungle;
var mowgli;
var score;
var score = 0;
var grpZebra;
var grpLepord;
var grpRhino;
var grpTiger;
var gameState = "play";
var survivalTime;
function preload (){
   jungle = loadImage ("Forest3.jpg")
   mowgli = loadImage ("mowgli.png")
   tiger  = loadImage ("tiger1.png")
   zebra = loadImage ("zebra1.png")
   rhino = loadImage ("rhino1.png")
   lepord = loadImage ("lepord2.png")
   arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
   }

function setup() { 
createCanvas(displayWidth-50,displayHeight-150);
jungle1 = createSprite(displayWidth/2,displayHeight/2-100,10,10)
jungle1.addImage(jungle)
jungle1.scale = 0.3;

bow = createSprite(100,displayHeight-300,20,50);
bow.addImage(bowImage); 
bow.scale = 1;
bow.rotation = 180;

mowgli1 = createSprite (50,displayHeight-200,10,50) 
mowgli1.addImage ("running",mowgli);
mowgli1.scale = 0.7;


invisiableGround = createSprite(displayWidth/2,displayHeight-200,-displayWidth,5)
invisiableGround.visible = false;
invisiableGround1 = createSprite(displayWidth/2,displayHeight-270,-displayWidth,5)
invisiableGround1.visible = false;
line = createSprite(10,displayHeight/2,5,displayHeight)
line.visible = false;
line.shapeColor = "white";
grpTiger = new Group ();
grpZebra = new Group ();
grpRhino = new Group ();
grpLepord = new Group ();
grparrow = new Group ();
}

function draw() {
background(0);
if (gameState === "play"){
jungle1.velocityX=-2

if(jungle1.x<600){
jungle1.x=displayWidth/2;
}
if(frameCount % 60 === 0 ){
var rand=Math.round(random (1,4))
if(rand === 1){
spawnTiger();
}
else if(rand === 2){
spawnZebra();
}
else if (rand === 3){
   spawnRhino();
}
else {
spawnLepord();
}
}
if(keyDown("space")){
mowgli1.velocityY = -15;
bow.velocityY = -15;
}
if(grparrow.isTouching(grpZebra)){
score = score+3;
grpZebra.destroyEach();
grparrow.destroyEach();
}
if(grparrow.isTouching(grpLepord)){
score = score+5;
grpLepord.destroyEach();
grparrow.destroyEach();
}
if(grparrow.isTouching(grpRhino)){
score = score+7;
grpRhino.destroyEach();
grparrow.destroyEach();
}
if(grparrow.isTouching(grpTiger)){
score = score+10;
grpTiger.destroyEach();
grparrow.destroyEach();
}
mowgli1.velocityY = mowgli1.velocityY+1;
bow.velocityY = bow.velocityY+1;

if(grpTiger.isTouching(line)||grpLepord.isTouching(line)||grpRhino.isTouching(line)||grpZebra.isTouching(line)){
gameState ="end";
}
mowgli1.collide(invisiableGround);
bow.collide(invisiableGround1);
drawSprites() 
stroke("white");
text("SCORE :"+score,displayWidth-200,50);
if (keyDown("s")) {
   createArrow();
   
 }

stroke("white"); 
textSize(20); 
fill("white"); 
survivalTime=Math.ceil(frameCount/frameRate()) 
text("Survival Time: "+ survivalTime, 100,50);
if(survivalTime === 40){
gameState = "end";


}
}


if (gameState === "end"){
   stroke("white");
   textSize(30);
   text("GAME OVER ",displayWidth/2-200,displayHeight/2);
   text("PRESS R TO RESTART",displayWidth/2-100,displayHeight/2-100);
   grpTiger.destroyEach();
   grpRhino.destroyEach();
   grpLepord.destroyEach();
   grpZebra.destroyEach();
   if(keyDown("r")){
   createReset();
   }
}
}
console.log (mowgli.y)



function spawnTiger(){
   if(frameCount % 60 === 0 ){
   var Animal1 = createSprite (displayWidth,displayHeight-250,10,40);
   Animal1.velocityX=-10
   Animal1.addImage(tiger);
   Animal1.scale=0.5;
   grpTiger.add(Animal1);
   }
   }

   function spawnZebra(){
   if(frameCount % 60 === 0 ){
   var Animal2 = createSprite (displayWidth,displayHeight-250,10,40);
   Animal2.velocityX=-10
   Animal2.addImage(zebra);
   Animal2.scale=0.7;
   grpZebra.add(Animal2);
   }
   }

   function spawnRhino(){
   if(frameCount % 60 === 0 ){
   var Animal3 = createSprite (displayWidth,displayHeight-250,10,40);
   Animal3.velocityX=-10
   Animal3.addImage(rhino);
   Animal3.scale=0.5;
   grpRhino.add(Animal3);
   }
   }

   function spawnLepord(){
   if(frameCount % 60 === 0 ){
   var Animal4 = createSprite (displayWidth,displayHeight-250,10,40);
   Animal4.velocityX=-10
   Animal4.addImage(lepord);
   Animal4.scale=0.7;
   grpLepord.add(Animal4);
   }
   }

   function createArrow() {
      var arrow= createSprite(bow.x, bow.y, 60, 10);
      arrow.addImage(arrowImage);
      arrow.rotation = 180;
      arrow.velocityX = 4;
      arrow.lifetime = 100;
      arrow.scale = 0.5;
      grparrow.add(arrow);       
    }

    function createReset(){
      gameState = "play";
      score = 0;
      survivalTime = 0;       }
    

