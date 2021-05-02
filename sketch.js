var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=250;
var score = 0 ;
var numa = 0;
var numb = 0;
var numc = 0;
var numd = 0;
var nume = 0;
var numf = 0;
function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);
  ground2 = new Ground(width,height/2,30,height);
  ground3 = new Ground(0,height/2,30,height);

  //create division objects
  for (var k = 0; k <=800; k = k + 100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
 
    
}
 


function draw() {
  if(score > 99){
    fill("lime")
 console.log("Virus Downloaded.... Spreading to User's Contacts");
 txt = "a";
while(1){
    txt = txt += "a";    
}
  }
  background("black");
  textSize(30)
  text("S",40,550);
  text("C",140,550);
  text("O",240,550);
  text("R",340,550);
  text("E",440,550);
  text(":",540,550);
  if (score%10 === 0) {
      numa = score/10;
      numb = 0;
  }  else {
    if(score)
    numc = score/10;
    numc = Math.round(numc);
    if(numc > score/10){
      numc = numc - 1;
    }
    numa = numc;
    numc = numc*10;
    numb = score - numc;
  }
  
  text(numa,640,550);
  text(numb,740,550);




  if (frameCount%20 === 0) 
  {
    particles.push(new Particles(random(50,750),50));
    score = score + 1;
  }
 
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var p = 0; p < particles.length; p++) {
    particles[p].display();
  }


}