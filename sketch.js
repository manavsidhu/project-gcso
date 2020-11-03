var car;
var stop;


var speed, weight;



function setup() {

 createCanvas(1600,400);



speed=random(55, 90);

weight=random(400, 1500);

stop=createSprite(1200, 50, 30, 40);

stop=createSprite(1200, 100, 30, 40);

stop=createSprite(1200, 150, 30, 40);

stop=createSprite(1200, 200, 30, 40);

car4=createSprite(50, 50, 30, 40);

car1=createSprite(50,100,30, 40);

car3=createSprite(50, 150, 30, 40);

car2=createSprite(50, 200, 30, 40);

wall=createSprite(1500, 200, 60, height/2);

car4.velocityX=speed;

car1.velocityX=speed;

car3.velocityX=speed;

car2.velocityX=speed;



 

}



function draw() {

 background('black'); 

 drawSprites();

 car4.display();

 car1.display();

 car3.display();

 car2.display();

 wall.display();

 

 if(stop.x-car4.x < (car4.width+stop.width)/2)

 {

  car4.velocityX=0;

  var deformation=0.5 * weight * speed* speed/22509;

  if(deformation>180)

  {

  car4.shapColor=color(255,0,0);

  }



  if(deformation<180 && deformation>100)

  {

   car4.shapecolor=color(230, 230, 0);

  }





 if(deformation<100)

{

 car4.shapeColor=color(0,255,0);

}

 }





 if(stop.x-car1.x < (car1.width+stop.width)/2)

 {

  car1.velocityX=0;

  var deformation=0.5 * weight * speed* speed/22509;

  if(deformation>180)

  {

  car1.shapColor=color(255,0,0);

  }



  if(deformation<180 && deformation>100)

  {

   car1.shapeColor=color(230, 230, 0);

  }





 if(deformation<100)

{

 car1.shapeColor=color(0,255,0);

}

 }

}





if(stop.x-car3.x < (car3.width+stop.width)/2)

{

 car3.velocityX=0;

 var deformation=0.5 * weight * speed* speed/22509;

 if(deformation>180)

 {

 car3.shapColor=color(255,0,0);

 }



 if(deformation<180 && deformation>100)

 {

  car3.shapeColor=color(230, 230, 0);

 }





if(deformation<100)

{

car3.shapeColor=color(0,255,0);

}

}





if(stop.x-car2.x < (car2.width+stop.width)/2)

{

 car2.velocityX=0;

 var deformation=0.5 * weight * speed* speed/22509;

 if(deformation>180)

 {

 car2.shapColor=color(255,0,0);

 }



 if(deformation<180 && deformation>100)

 {

  car2.shapeColor=color(230, 230, 0);

 }





if(deformation<100)

{

car2.shapeColor=color(0,255,0);

}

}