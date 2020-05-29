var sun,mercury,venus,mars,earth,jupiter,saturn,uranus,neptune,pluto
var sunImg,mercuryImg,venusImg,marsImg,earthImg,jupiterImg,saturnImg,uranusImg,neptuneImg,plutoImg
var background,backgroundImg
function preload(){
  backgroundImg=loadImage("solarImages/galaxy.png")
  sunImg=loadImage("solarImages/sun.png")
  mecuryImg=loadImage("solarImages/mercury.png")
  venusImg=loadImage("solarImages/venus.png")
  marsImg=loadImage("solarImages/mars.png")
  earthImg=loadImage("solarImages/earth.png")
  jupiterImg=loadImage("solarImages/jupiter.png")
  saturnImg=loadImage("solarImages/saturn.png")
  uranusImg=loadImage("solarImages/uranus.png")
  neptuneImg=loadImage("solarImages/neptune.png")
  plutoImg=loadImage("solarImages/pluto.png")

}
function setup(){
  createCanvas(1200,800)
  sun=createSprite(10,10,200,200)
  sun.addImage("sun",sunImg)
  sun.scale=0.2
  sun.setCollider("circle",0,0,200)
  sun.debug=true
  mercury=createSprite(200,250,45,40)
  mercury.addImage("mercury",mercuryImg)
  mercury.scale=0.14
  venus=createSprite(250,200,35,30)
  venus.addImage("venus",venusImg)
  venus.scale=0.15
  earth=createSprite(350,250,40,40)
  earth.addImage("earth",earthImg)
  earth.scale=0.15
  mars=createSprite(450,350,40,40)
  mars.addImage("mars",marsImg)
  mars.scale=0.15
  jupiter=createSprite(550,420,30,30)
  jupiter.addImage("jupiter",jupiterImg)
  jupiter.scale=0.15
  saturn=createSprite(670,520,40,40)
  saturn.addImage("saturn",saturnImg)
  saturn.scale=0.14
  uranus=createSprite(850,600,30,30)
  uranus.addImage("uranus",uranusImg)
  uranus.scale=0.14
  neptune=createSprite(970,650,40,40)
  neptune.addImage("neptune",neptuneImg)
  neptune.scale=0.14
  pluto=createSprite(1100,700,30,30)
  pluto.addImage("pluto",plutoImg)
  pluto.scale=0.14
}
function draw() {
background(backgroundImg);
drawSprites();
text(mouseX+','+mouseY,10,15);
if(frameCount%50===0){
  sun.scale=sun.scale+0.1;
}
if(sun.collide(mercury)){
  mercury.destroy();
}
if(sun.collide(venus)){
  venus.destroy();
}
if(sun.collide(earth)){
  earth.destroy();
}
if(sun.collide(mars)){
  mars.destroy();

}
if(sun.collide(jupiter)){
  jupiter.destroy();
}
if(sun.collide(saturn)){
  saturn.destroy();
}
if(sun.collide(uranus)){
  uranus.destroy();
}
if(sun.collide(neptune)){
neptune.destroy();
}
if(sun.collide(pluto)){
  pluto.destroy();
}
}