var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
path=createSprite(200,200);
path.addImage(pathImg);
//dar velocidade ao chão

// mudar o tamanho do chão


//criando menino que corre

// mudar o tamanho do chão

// daruma animaçãoao menino

  
// crie Boundary (Limite) esquerdo
leftBoundary=createSprite(0,0,100,800);
//criando borda esquerda invisivel

//crie Boundary direito (limite)

// criando borda invisivel direita

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // menino se movendo no eixe X com o mouse
  
  //criando as bordas
 
  //fazendo o menino colidir com as bordas no indice 3

  // fazendo o menino colidir com a borda invisivel esquerda
  boy.collide(leftBoundary);
  // fazendo o menino colidir com a borda invisivel direita
 
  
  //código para reiniciar o fundo
  
  
  drawSprites();
}
