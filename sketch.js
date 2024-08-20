// Link do video; https://youtu.be/2eGScmgZytI
// Link do SGDD; https://drive.google.com/file/d/1GaD4kaVMz2FThT2IZCNDian3Dqg4EaPJ/view?usp=sharing

var bg0,
  bg3,
  Bbutton,
  circuloX,
  circuloY,
  colisao,
  som1,
  circulo2X,
  circulo2Y,
  menubutton,
  howto,
  telaf,
  voltar,
  menusong,
  levelsong,
  perdeu,
  venceu,
  songwinwallX,
  wallY,
  wallL,
  wallA,
  wall2X,
  wall2Y,
  wall2L,
  wall2A,
  wall3X,
  wall3Y,
  wall3L,
  wall3A,
  wall4X,
  wall4Y,
  wall4L,
  wall4A,
  wall5X,
  wall5Y,
  wall5L,
  wall5A,
  wall6X,
  wall6Y,
  wall6L,
  wall6A,
  wall7X,
  wall7Y,
  wall7L,
  wall7A,
  wall8X,
  wall8Y,
  wall8L,
  wall8A,
  wall9X,
  wall9Y,
  wall9L,
  wall9A,
  wall0X,
  wall0Y,
  wall0L,
  wall0A,
  wall11X,
  wall11Y,
  wall11L,
  wall11A;
var velzX,
  velzY,
  velz3Y,
  velz4Y,
  velz5X,
  velz6X,
  velz7X,
  velz8X,
  velz9X,
  velz0X,
  velz11X;
var circulo3X, circulo3Y;
var tcX, tcY;
var bateu, bateut, chave;
var natela;
var estado;
var mouseover
var contadorMortes
var estrela
var sm
var sumario
var gif
function preload() {
  bg0 = loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/menu2.png");
  howto = loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/howto.png");
  bg3 = loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/creditos.png");
  Bbutton = loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/stopbutton.png");
  menubutton = loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/menubutton.png");
  telaf = loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/telaf.png");
  voltar = loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/voltar.png");
  menusong = loadSound("https://raw.githubusercontent.com/elBLK/Arquivos/main/menusong.mp3");
  soundFormats("mp3");
  som1 = loadSound("https://raw.githubusercontent.com/elBLK/Arquivos/main/effect0.mp3");
  levelsong = loadSound("https://raw.githubusercontent.com/elBLK/Arquivos/main/levelsong.mp3");
  perdeu = loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/PERDEU.png");
  venceu = loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/GANHOU.png");
  songwin = loadSound("https://raw.githubusercontent.com/elBLK/Arquivos/main/yeee.mp3");
  chave = loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/chave.png");
  estrela=loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/estrela.png");
  sumario=loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/sumario.png")
  gif=loadImage("https://raw.githubusercontent.com/elBLK/Arquivos/main/giphy.gif")
}

function setup() {
  createCanvas(600, 500);
  estado = 0;
  
  contadorMortes=0
  
  circuloX = 140;
  circuloY = 400;

  circulo2X = 140;
  circulo2Y = 450;

  colisao = false;

  strokeWeight(0);

  menusong.play();

  levelsong.setVolume(0.3);
  som1.setVolume(0.3);
  menusong.setVolume(0.3);

  wallX = 200;
  wallY = 20;
  wallL = 10;
  wallA = 50;
  velzX = 3;
  velzY = 3;

  wall2X = 120;
  wall2Y = 300;
  wall2L = 600;
  wall2A = 10;

  wall3X = 165;
  wall3Y = 420;
  wall3L = 10;
  wall3A = 500;
  velz3Y = 3;

  wall4X = 290;
  wall4Y = 400;
  wall4L = 10;
  wall4A = 60;
  velz4Y = 2;

  wall5X = 300;
  wall5Y = 367;
  wall5L = 200;
  wall5A = 10;
  velz5X = 9;

  wall6X = 300;
  wall6Y = 165;
  wall6L = 10;
  wall6A = 55;
  velz6X = 6;

  wall7X = 290;
  wall7Y = 60;
  wall7L = 10;
  wall7A = 50;
  velz7X = 4;

  wall8X = 360;
  wall8Y = 0;
  wall8L = 80;
  wall8A = 10;
  velz8X = 4;

  wall9X = 500;
  wall9Y = 0;
  wall9L = 10;
  wall9A = 157;
  velz9X = 9;

  wall0X = 300;
  wall0Y = 367;
  wall0L = 200;
  wall0A = 10;
  velz0X = 9;

  wall11X = 300;
  wall11Y = 367;
  wall11L = 200;
  wall11A = 10;
  velz11X = 9;
  sm=20

  circulo3X = 52;
  circulo3Y = 465;

  bateu = false;
  bateut = false;
  natela = true;
  contador=0
  mouseOver=false
}
function draw() {
  if (estado == 0) {
    menu();
  } else if (estado == 1) {
    play();
  } else if (estado == 2) {
    howtoplay();
  } else if (estado == 3) {
    credits();
  } else if (estado == 4) {
    jump();
  } else if (estado == 5) {
    level2();
  } else if (estado == 6) {
    happyend();
  } else if (estado == 7) {
    level3();
  }else if(estado==8){
    info();
  }
}
function mouseClicked() {
  if (
    estado == 0 &&
    mouseX > 248 &&
    mouseX < 346 &&
    mouseY > 127 &&
    mouseY < 178
  ) {
    estado = 1;
    menusong.stop();
    levelsong.play();
  } else if (
    estado == 0 &&
    mouseX > 215 &&
    mouseX < 391 &&
    mouseY > 246 &&
    mouseY < 293
  ) {
    estado = 2;
  } else if (
    estado == 0 &&
    mouseX > 233 &&
    mouseX < 366 &&
    mouseY > 365 &&
    mouseY < 412
  ) {
    estado = 3;
  } else if (
    estado == 1 &&
    mouseX > 19 &&
    mouseX < 66 &&
    mouseY > 20 &&
    mouseY < 66
  ) {
    estado = 0;
    menusong.play();
  } else if (
    estado == 2 &&
    mouseX > 19 &&
    mouseX < 66 &&
    mouseY > 20 &&
    mouseY < 66
  ) {
    estado = 0;
  } else if (
    estado == 3 &&
    mouseX > 19 &&
    mouseX < 66 &&
    mouseY > 20 &&
    mouseY < 66
  ) {
    estado = 0;
  } else if (
    estado == 4 &&
    mouseX > 19 &&
    mouseX < 66 &&
    mouseY > 20 &&
    mouseY < 66
  ) {
    estado = 0;
    menusong.play();
  } else if (
    estado == 4 &&
    mouseX > 19 &&
    mouseX < 66 &&
    mouseY > 20 &&
    mouseY < 66
  ) {
    estado = 0;
    menusong.play();
  } else if (
    estado == 6 &&
    mouseX > 19 &&
    mouseX < 66 &&
    mouseY > 20 &&
    mouseY < 66
  ) {
    estado = 0;
    menusong.play();
  } else if (
    estado == 4 &&
    mouseX > 0 &&
    mouseX < 213 &&
    mouseY > 238 &&
    mouseY < 290
  ) {
    estado = 0;
    menusong.play();
  } else if (
    estado == 4 &&
    mouseX > 396 &&
    mouseX < 600 &&
    mouseY > 238 &&
    mouseY < 290
  ) {
    estado = 1;
    som1.stop();
    levelsong.play();
  } else if (
    estado == 6 &&
    mouseX > 0 &&
    mouseX < 600 &&
    mouseY > 249 &&
    mouseY < 302
  ) {
    estado = 0;
    menusong.play();
  } else if (
    estado == 4 &&
    mouseX > 396 &&
    mouseX < 600 &&
    mouseY > 238 &&
    mouseY < 290
  ) {
    som1.stop();
    estado = 1;
    levelsong.play();
    wall2X = 120;
    wall2Y = 300;
    wall2L = 600;
    wall2A = 10;
  }else if(estado==0 && mouseX>517 && mouseX<581 && mouseY>427 && mouseY<488){
    estado=8
    menusong.pause();
  }else if(estado==8 && mouseX>23 && mouseX<68 && mouseY>23 && mouseY<66){
    estado=0
    menusong.play();
  }
}
function menu() {
  background(bg0);
  //fill("grey");
  image(menubutton, 243, 130, 120, 45);
  fill("white");
  
  if(estado==0&&mouseX>243&&mouseX<361&&mouseY>134&&mouseY<167){
    image(menubutton, 233, 130, 140, 50);
    fill("orange")
  }
  text("JOGAR", 300, 160);
  textSize(25);
  textStyle(BOLDITALIC);
  fill("black");
  image(menubutton, 210, 245, 185, 50);
  fill("white");
  if(estado==0&&mouseX>212&&mouseX<394&&mouseY>248&&mouseY<288){
    image(menubutton, 205, 245, 195, 55);
    fill("orange")
  }
  text("COMO JOGAR", 300, 278);
  fill("black");
  image(menubutton, 227, 364, 150, 50);
  fill("white");
  if(estado==0&&mouseX>228&&mouseX<375&&mouseY>369&&mouseY<405){
    image(menubutton, 224, 360, 159, 57);
    fill("orange")
  }
  text(" CRÉDITOS ", 300, 395);
  fill("black");
  textAlign(CENTER)
  som1.stop();
  levelsong.stop();
  if(estado==0){
    contadorMortes=0
  }
  image(sumario,524,433,50,50);
}
function play() {
  background(0);
  fill("green");
  rect(0, 0, 100, 500);
  rect(80, 0, 600, 90);
  rect(180, 150, 500, 500);
  fill("red");
  image(voltar, 20, 20);
  circle(circuloX, circuloY, 30);
  if (circuloX > 600) {
    estado = 5;
    circuloX = 140;
    circuloY = 400;
  }
  if (mouseIsPressed && dist(mouseX, mouseY, circuloX, circuloY) <= 30) {
    circuloX = mouseX;
    circuloY = mouseY;
  }
  colisao =
    collideRectCircle(0, 0, 100, 500, circuloX, circuloY, 30) ||
    collideRectCircle(80, 0, 600, 90, circuloX, circuloY, 30) ||
    collideRectCircle(180, 150, 500, 500, circuloX, circuloY, 30);
  if (colisao == true) {
    estado = 4;
    circuloX = 140;
    circuloY = 400;
    som1.play();
    contadorMortes++
  }
  fill("white")
  textSize(25)
  text("A função mouseIsPressed " + "\n" + " é utilizada para mover a bola,"+"\n"+"assim que o botão do mouse"+"\n"+"é pressionado na bola,"+"\n"+ "as cordenadas da"+"\n"+"bola mudam para as"+"\n"+" cordenadas X e Y do mouse.",400,240);
  textSize(25)
}
function howtoplay() {
  background(howto);
  image(voltar, 20, 20);
}
function credits() {
  background(bg3);
  image(voltar, 20, 20);
}
function jump() {
  background(perdeu);
  image(voltar, 20, 20);
  levelsong.stop();
  textAlign(CENTER)
  textSize(20);
  text("Mortes"+ "\n" +contadorMortes,305,260);
  textSize(20);
  fill("red")
  
}
function level2() {
  background(0);
  menusong.stop();
  fill("green");
  rect(0, 400, 500, 10,10);
  rect(80, 300, 600, 40,10);
  rect(-10, 180, 500, 50,10);
  rect(80, 80, 600, 50,10);
  rect(0, 0, 600, 20,10);
  rect(0, 0, 10, 500,10);
  rect(590, 80, 600, 500,10);
  rect(0, 490, 600, 30,10);
  fill("red");
  circle(circulo2X, circulo2Y, 30);
  if (circulo2X > 600) {
    circulo2X = 140;
    circulo2Y = 450;
    estado = 7;
  }
  if (mouseIsPressed && dist(mouseX, mouseY, circulo2X, circulo2Y) <= 30) {
    circulo2X = mouseX;
    circulo2Y = mouseY;
  }
  colisao =
    collideRectCircle(0, 400, 500, 10, circulo2X, circulo2Y, 30) ||
    collideRectCircle(80, 300, 600, 40, circulo2X, circulo2Y, 30) ||
    collideRectCircle(0, 180, 500, 50, circulo2X, circulo2Y, 30) ||
    collideRectCircle(80, 80, 600, 50, circulo2X, circulo2Y, 30) ||
    collideRectCircle(0, 0, 600, 20, circulo2X, circulo2Y, 30) ||
    collideRectCircle(0, 0, 10, 500, circulo2X, circulo2Y, 30) ||
    collideRectCircle(590, 80, 600, 500, circulo2X, circulo2Y, 30) ||
    collideRectCircle(0, 490, 600, 30, circulo2X, circulo2Y, 30);
  if (colisao == true) {
    som1.play();
    estado = 4;
    circulo2X = 140;
    circulo2Y = 450;
    som1.play();
    colisao = false;
    contadorMortes++
  }
  fill("white")
  textSize(18)
  text("Usando uma variável booleana e a função collideRectCircle",335,113);
  text("é possivel detectar colisões com as paredes",230,210);
  text("e usando if's escolher o que acontece depois da colisão",325,325);
  textSize(18)
}

function level3() {
  background(0);
  menusong.stop();
  //paredes
  noStroke();
  fill("green");
  rect(0, 0, 10, 500, 20);
  rect(0, 0, 600, 10, 20);
  rect(590, 70, 600, 500, 20);
  rect(0, 490, 600, 500, 20);
  rect(0, 420, 500, 10, 20);
  rect(400, 367, 350, 10, 20);
  rect(100, 367, 200, 10, 20);
  rect(0, 300, 200, 10, 20);
  rect(250, 300, 600, 10, 20);
  rect(200, 220, 10, 90, 20);
  rect(200, 220, 300, 10, 20);
  rect(100, 160, 600, 10, 20);
  rect(100, 160, 10, 90, 20);
  rect(100, 80, 10, 160, 20);
  rect(200, 0, 10, 100, 20);
  rect(290, 370, 10, 50, 20);

  //redball
  fill("red");
  circle(circulo3X, circulo3Y, 30);
  if (mouseIsPressed && dist(mouseX, mouseY, circulo3X, circulo3Y) <= 30) {
    circulo3X = mouseX;
    circulo3Y = mouseY;
  }
  fill("green");
  //paredes que se movem
  rect(wallX, wallY, wallL, wallA,sm);
  wallY += velzY;
  if (wallY <= 0 || wallY >= 100) {
    velzY *= -1;
  }

  rect(wall2X, wall2Y, wall2L, wall2A);
  // wall2X+=velzX
  // if(wall2X<=0||wall2X>=width){
  //   velzX*= -1
  //  }

  rect(wall3X, wall3Y, wall3L, wall3A,sm);
  wall3Y += velz3Y;
  if (wall3Y <= 421 || wall3Y >= 500) {
    velz3Y *= -1;
  }
  rect(wall4X, wall4Y, wall4L, wall4A,sm);
  wall4Y += velz4Y;
  if (wall4Y <= 370 || wall4Y >= 430) {
    velz4Y *= -1;
  }

  rect(wall5X, wall5Y, wall5L, wall5A,sm);
  wall5X += velz5X;
  if (wall5X <= 209 || wall5X >= width) {
    velz5X *= -1;
  }
  rect(wall6X, wall6Y, wall6L, wall6A,sm);
  wall6X += velz6X;
  if (wall6X <= 103 || wall6X >= 650) {
    velz6X *= -1;
  }
  rect(wall7X, wall7Y, wall7L, wall7A,sm);
  wall7Y += velz7X;
  if (wall7Y <= 0 || wall7Y >= 120) {
    velz7X *= -1;
  }
  rect(wall8X, wall8Y, wall8L, wall8A,sm);
  wall8Y += velz8X;
  if (wall8Y <= 0 || wall8Y >= 157) {
    velz8X *= -1;
  }
  if (natela == true) {
    image(chave, 236, 386, 30, 30);
  }
  bateut = collideRectCircle(236, 386, 30, 30, circulo3X, circulo3Y, 30);
  if (bateut == true) {
    wall2X = 0;
    wall2Y = 0;
    wall2L = 0;
    natela = false;
  }
  bateu =
    collideRectCircle(
      wall2X,
      wall2Y,
      wall2L,
      wall2A,
      circulo3X,
      circulo3Y,
      30
    ) ||
    collideRectCircle(wallX, wallY, wallL, wallA, circulo3X, circulo3Y, 30) ||
    collideRectCircle(
      wall3X,
      wall3Y,
      wall3L,
      wall3A,
      circulo3X,
      circulo3Y,
      30
    ) ||
    collideRectCircle(
      wall4X,
      wall4Y,
      wall4L,
      wall4A,
      circulo3X,
      circulo3Y,
      30
    ) ||
    collideRectCircle(
      wall5X,
      wall5Y,
      wall5L,
      wall5A,
      circulo3X,
      circulo3Y,
      30
    ) ||
    collideRectCircle(0, 0, 10, 500, circulo3X, circulo3Y, 30) ||
    collideRectCircle(0, 0, 600, 10, circulo3X, circulo3Y, 30) ||
    collideRectCircle(590, 70, 600, 500, circulo3X, circulo3Y, 30) ||
    collideRectCircle(0, 490, 600, 500, circulo3X, circulo3Y, 30) ||
    collideRectCircle(0, 420, 500, 10, circulo3X, circulo3Y, 30) ||
    collideRectCircle(400, 367, 350, 10, circulo3X, circulo3Y, 30) ||
    collideRectCircle(100, 367, 200, 10, circulo3X, circulo3Y, 30) ||
    collideRectCircle(0, 300, 200, 10, circulo3X, circulo3Y, 30) ||
    collideRectCircle(250, 300, 600, 10, circulo3X, circulo3Y, 30) ||
    collideRectCircle(200, 220, 10, 90, circulo3X, circulo3Y, 30) ||
    collideRectCircle(200, 220, 300, 10, circulo3X, circulo3Y, 30) ||
    collideRectCircle(100, 160, 600, 10, circulo3X, circulo3Y, 30) ||
    collideRectCircle(100, 160, 10, 90, circulo3X, circulo3Y, 30) ||
    collideRectCircle(100, 80, 10, 160, circulo3X, circulo3Y, 30) ||
    collideRectCircle(200, 0, 10, 100, circulo3X, circulo3Y, 30) ||
    collideRectCircle(290, 370, 10, 50, circulo3X, circulo3Y, 30) ||
    collideRectCircle(
      wall6X,
      wall6Y,
      wall6L,
      wall6A,
      circulo3X,
      circulo3Y,
      30
    ) ||
    collideRectCircle(
      wall7X,
      wall7Y,
      wall7L,
      wall7A,
      circulo3X,
      circulo3Y,
      30
    ) ||
    collideRectCircle(wall8X, wall8Y, wall8L, wall8A, circulo3X, circulo3Y, 30);
  if (bateu == true) {
    som1.play();
    estado = 4;
    circulo3X = 52;
    circulo3Y = 465;
    som1.play();
    bateu = false;
    natela=true
    wall2X = 120;
    wall2Y = 300;
    wall2L = 600;
    wall2A = 10
    contadorMortes++
  }
  if (circulo3X > 600) {
    circulo3X = 140;
    circulo3Y = 450;
    estado = 6;
    levelsong.stop();
    songwin.play();
  }
}

function happyend() {
  background(venceu);
  image(voltar, 20, 20);
  wall2X = 120;
  wall2Y = 300;
  wall2L = 600;
  wall2A = 10;
  natela=true
  if(contadorMortes<=5){
    image(estrela,278,60,70,70);
    image(estrela,210,70,70,70);
     image(estrela,348,70,70,70);
    fill("red")
    textSize(20);
    text(contadorMortes+" "+"Mortes",275,155);
    textSize(20);
  }else if(contadorMortes>5&&contadorMortes<15){
    image(estrela,240,60,70,70);
    image(estrela,318,60,70,70);
    fill("red")
    textSize(20)
    text(contadorMortes+" "+"Mortes",275,155);
    textSize(20);
  }else if(contadorMortes>=15){
    image(estrela,278,60,70,70);
     fill("red")
    textSize(20)
    text(contadorMortes+" "+"Mortes",275,155);
    textSize(20);
  }
}
function info(){
  background(gif)
  image(voltar,20,20,50,50);
  textSize(25)
  fill("white")
  text("Funções centrais do código",320,50);
  textSize(18)
  text("Preload(); - Carrega recursos préviamente"+"\n"+ "(sons,imagens e outros arquivos.)",320,150);
  text("setup(); - Configura o ambiente inicial.",320,230);
  text("Draw(); - Atualiza a tela continuamente e cria animações.",320,290)
  text("mouseClicked(); - Identifica quando o botão do mouse foi clicado.",300,350)
}