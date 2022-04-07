var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudsGroup, cloudImage;
var cacto, ancacto1, ancacto2, ancacto3, ancacto4, ancacto5, ancacto6;
var nome;
var newImage;
var randomico;
var saltos = 0;

function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    trex_collided = loadAnimation("trex_collided.png");
    
    groundImage = loadImage("ground2.png");
    
    cloudImage = loadImage("cloud.png");

    ancacto1 = loadImage("obstacle1.png");
    ancacto2 = loadImage("obstacle2.png");
    ancacto3 = loadImage("obstacle3.png");
    ancacto4 = loadImage("obstacle4.png");
    ancacto5 = loadImage("obstacle5.png");
    ancacto6 = loadImage("obstacle6.png");
 
}

function setup() {
    createCanvas(600, 200);

    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    // trex.adicionarAnimação("colidiu",trex_colidiu)
    trex.scale = 0.5;
    
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;
  
  
}

function draw() {
    background(180);
    pontuacao();
    randomico = Math.round(random(1,6));
    if(keyDown("space") && trex.y>=160) {
        trex.velocityY = -10;
    }
  
    trex.velocityY = trex.velocityY + 0.8
  
    if (ground.x < 0){
        ground.x = ground.width/2;
    }
  
    trex.collide(invisibleGround);
  
    //gerar as nuvens
    spawnClouds();
    spawnCactos();
    drawSprites();
    ver_mouse();

    text("Pontuação: "+saltos, 500,68);
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
    if (frameCount % 150 === 0) {
        cloud = createSprite(610,100,40,10);
        cloud.addImage(cloudImage)
        cloud.y = Math.round(random(10,60))
        cloud.scale = 0.5;
        cloud.velocityX = -1.5;
        cloud.lifetime = 400;    
    }
}

function spawnCactos(){
    if(frameCount % 100 === 0){
        cacto = createSprite(610, 165 ,10,40);
        cacto.scale = 0.5;
        cacto.velocityX = -4;
        cacto.lifetime = 300;

        switch(randomico){
            case 1:
                cacto.addImage(ancacto1);
                break;
            case 2:
                cacto.addImage(ancacto2);
                break;
            case 3:
                cacto.addImage(ancacto3);
                break;
            case 4:
                cacto.addImage(ancacto4);
                break;
            case 5:
                cacto.addImage(ancacto5);
                break;
            case 6:
                cacto.addImage(ancacto6);
                break;
            
            default:
                break;
        }
    }
}

function ver_mouse(){
    text("X:"+mouseX+"|Y:"+mouseY,mouseX,mouseY);
}

function pontuacao(){
    if(frameCount%2===0){
        saltos = saltos+1;
    }

}















function teste(){
    //switch-case
    nome = "sadsaddsaad";
    switch(nome){
        case "Flavia":
            console.log("Raposinha");
            break;
        case "Ryckson":
            console.log("Girafinha");
            break;
        case "Filipe":
            console.log("Lagartinho");
            break;

        default:
            console.log("Nenhum deles.");
            break;
        
    }

}