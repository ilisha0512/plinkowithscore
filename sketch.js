var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particles = [];
var particle;
var turn = 0;
var gamestate;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  gamestate = "play";

  if (gamestate = "play"){

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
  }
    
}
 
if (gamestate = "end"){
  particle = null;
  textSize(30);
  textFont = "Courier New";
  text("GAME OVER", 400, 400);
}

if (particle!== null){
  particle.display();

  if (particle.body.position.y>760){
    if (particle.body.position.x<300){
      score = score + 500;
      particle=null;
      if (score >= 5) {
        gamestate = "end";
      }
    }
  }
  if (particle.body.position.y>301){
    if (particle.body.position.x<600){
      score = score + 100;
      particle=null;
      if (score >= 5) {
        gamestate = "end";
      }
    }
  }

  if (particle.body.position.y>601){
    if (particle.body.position.x<900){
      score = score + 200;
      particle=null;
      if (score >= 5) {
        gamestate = "end";
      }
    }
  }
}

if (turn = 5){
  gamestate = "end";
}

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  textSize(12);
  textFont ("Courier New");
  //stroke(3);
  fill ("Lime");
  text("Score:" + score, 745, 15);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if (gamestate !== "end"){
    score++
    particle = new Particle(MouseX, 10, 10, 10);
  }
}