const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var maxDrops = 100;

function preload(){
   thunder1 = loadImage("images/1.png");
   thunder2 = loadImage("images/2.png");

}

function setup(){
createCanvas(1800, 600);

engine = Engine.create();
world = engine.world;

drops = new Drops(200, 200, 50, 50);
umbrella = new Umbrella(150, 250, 50, 50);

    
}

function draw(){
    Engine.update(engine);

    for(var i = o; i<maxDrops; i++){
        drops.push(new createDrop(random(0, 400), random(0, 400)));
        
    }

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10, 30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            default:break;
        }
        thunder.scale = random(0.3, 0.6);
    }

    drops.display();
    umbrella.display();
}   

function setPosition(){
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x:random(0, 400), y:random(0,400)});
        
    }
}