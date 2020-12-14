var botao1
var largura=200
var altura=50
//botãoX
var altura1=30
var largura1=100
var xmenu=150
var ymenu1=100
var ymenu2=200
var ymenu3=15
var xmenu2=480
var tela= 0
var cont=0
var lixo_img=[]
//botoesfase1
var largurabotao=55
var alturabotao=55
var pontos=0
var ybotoes=338
var ponto=0
var status1=true
var ymenu3=300
var ymenu4=15
var ymenu5=15
var ymenu6=20

function preload() {
  imga= loadImage('Fundo-menu (1).png');
  imgb  = loadImage('country-32248_640.png');
  imgc  = loadImage('lixeiras.png');
  imgd=loadImage('fundo_fase.png')
  imge=loadImage('lixo_fim (1).png')
  lixo_img[0]=loadImage('METAL-ConversImagem.png')
  lixo_img[1]=loadImage('ORGANICOS-ConversImagem.png')
  lixo_img[2]=loadImage('PAPEL-ConversImagem.png')
  lixo_img[3]=loadImage('plastico (2).png')
  lixo_img[4]=loadImage('VIDRO-ConversImagem.png') 
  lixo_img[5]=loadImage('organico2.png')
  lixo_img[6]=loadImage('metal2.png')
  lixo_img[7]=loadImage('papel3.png')
  lixo_img[8]=loadImage('Vidro2.png')
  lixo_img[9]=loadImage('plastico2.png') 
  
}
function setup() {
  createCanvas(600,400)}

function mousePressed()
{   
  if(mouseX >90 && mouseX<90+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao){
    cont=cont+1
  }
  if(mouseX >180 && mouseX<180+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao){
    cont=cont+1
  }
  if(mouseX >270 && mouseX<270+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao){
    cont=cont+1
  }
  if(mouseX >360 && mouseX<360+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao){
    cont=cont+1
  }
  if(mouseX >450 && mouseX<450+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao){
    cont=cont+1
  }
  if(cont==10){
    tela=4
    cont=0
  } 
  if(status1==false){
    status1=true
  }
}

function draw() {
  background(250);
  image(imga,300,200)
  imageMode(CENTER)
  textStyle(ITALIC)
  textSize(40)
  fill(33)
  text("CIDADANIZE",250,50)
   if (tela==0){
        
  textAlign(CENTER)
  textSize(26)
          
   if (mouseX >xmenu && mouseX<xmenu+ largura && mouseY >ymenu1 && mouseY < ymenu1 + altura){
  stroke(200);
  fill(20);  
  rect(xmenu,ymenu1,largura,altura,15)
   if(mouseIsPressed){
        cont = 0;
        tela=1;
        pontos = 0;
         }
    }
  fill(240)
  noStroke()
  text('Início', 250,130)
  
     //*Créditos
      if (mouseX >xmenu && mouseX<xmenu+ largura && mouseY >ymenu3 && mouseY < ymenu3 + altura){
  stroke(200);
  fill(20);  
  rect(xmenu,ymenu3,largura,altura,15)
   if(mouseIsPressed){
       tela=3
         }
    }
  fill(240)
  noStroke()
  text('créditos', 250,330)
     
     
     
      //*Instruções
   if (mouseX >xmenu && mouseX<xmenu+ largura && mouseY >ymenu2 && mouseY < ymenu2 + altura){
         
  stroke(200);
  fill(20);  
  rect(xmenu,ymenu2,largura,altura,15)
   if(mouseIsPressed){
            tela=2
            }
       }
  fill(240)
  noStroke()
  text('Instruções', 250,230)
             }
  
  //* Fase um
  if(tela==1){ 
    {
    background(102,205,170)
    fill(35,0,0)
    textSize(20)
    text("Qual é a lixeira para o descarte correto?",280,40)
    text("Pontos:"+ pontos,50,50)
    fill(255,255,255)
    rect(130,80,300,250)
    fill(0, 200, 480);
    image(lixo_img[cont],275,200)
    imageMode(CENTER)
    fill(255,255,0)
    rect(90 ,ybotoes, 55, 55,10)
    fill(0,128,0)
    rect(180,ybotoes, 55, 55,10)
    fill(255,0,0)
    rect(270,ybotoes, 55, 55,10)
    fill(0,0,230)
    rect(360,ybotoes, 55, 55,10)
    fill(139,69,19)
    rect(450,ybotoes, 55, 55,10)
  fill(220,220,220)
      //amarelo
      
         
          if(mouseX >90 && mouseX<90+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao){
             if(mouseIsPressed&&status1==true){
               if(cont==1 || cont==7){
                  pontos++
                  }
              rect(90 ,ybotoes, 55, 55,10)
               status1=false
         }
            
          }
         
          if(mouseX >180 && mouseX<180+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao){ if(mouseIsPressed&&status1==true){
        if(cont==5 || cont==9){
                  pontos++
                  }
        rect(180,ybotoes, 55, 55,10)
        botao=2
            status1=false
      }                                                                 }
      if(mouseX >270 && mouseX<270+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao){ if(mouseIsPressed&&status1==true){
        if(cont==4 || cont==10){
                  pontos++
                  }
        
        rect(270,ybotoes, 55, 55,10)
        botao=3
        status1=false
      }                                                                 }
      if(mouseX >360 && mouseX<360+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao){ if(mouseIsPressed&&status1==true){
        if(cont==3 || cont==8){
                  pontos++
                  }
        rect(360,ybotoes, 55, 55,10)
        botao=4
        status1=false
      }                                                                 }
      if(mouseX >450 && mouseX<450+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao){ if(mouseIsPressed&&status1==true){
        if(cont==2 || cont==6){
                  pontos++
                  }
        rect(450,ybotoes, 55, 55,10)
        status1=false
      }                                                                               }                                                  
    }                                                       }
         /*else(mouseX >180 && mouseX<180+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao||mouseX >270 && mouseX<270+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao||mouseX >30 && mouseX<360+ largurabotao && mouseY >ybotoes && mouseY < ybotoes + alturabotao) 
           { if(mouseIsPressed){
             pontos=0
           }
                
                }*/
    
    
   // if (mouseX >xmenu && mouseX<xmenu+ largura && mouseY >ymenu1 && mouseY < ymenu1 + altura){}  
    //rect(xmenu,ymenu1,largura,altura,15)
  
   //* instruções
  if(tela==2){
    createCanvas(600,400)
    background(255)
    image(imgc, 300,325) 
    imageMode(CENTER)
    fill(58,110,71)
    rect(0,0,750,160)
    textSize(20)
    fill(255,255,255)
    textStyle(ITALIC)
    text("COMO USAR AS LIXEIRAS?",250,20)
    textSize(20)
    fill(255,255,255)
    text("A vermelha é destinada para os plásticos;",188,50)
    text("A azul é destinada para os papéis;",155,70)
    text("A verde para vidros;",88,90)
    text("A marrom para os orgânicos, ou seja lixos não recicláveis;",258,110)
    text("A amarela para os metais;",115,130)    
    
  //voltar
    if (mouseX > xmenu2 && mouseX < xmenu2 + largura1 && mouseY >           ymenu6 && mouseY < ymenu6 + altura1){
     stroke(200);
     fill(58,110,71);
     rect(xmenu2, ymenu6, largura1, altura1, 15);
    if (mouseIsPressed){
        tela = 0
      }
    }
    fill(255,255,255)
    noStroke()
    text("Voltar", 530,40);
}
  
  //* creditos
  if(tela==3){
    background(255,250,100)
    fill(250,250,210)
    rect(140,100,350,200)
    textSize(22)
    fill(20)
    text('Criador: Joana Augusta Duarte', 320,150)
    text('Orientadora: Ana Karerine Siqueira', 320,200) 
  
   if (mouseX > xmenu2 && mouseX < xmenu2 + largura1 && mouseY >           ymenu6 && mouseY < ymenu6 + altura1){
     stroke(200);
     fill(0,0,0);
     rect(xmenu2,ymenu6, largura1, altura1, 15);
    if (mouseIsPressed){
        tela = 0
      }
  }
    fill(255,255,255)
    noStroke()
    text("Voltar", 530,40);
}
  
  //Vitoria
  if(tela==4){
    background(0,0,0)
    image(imge,280,180)
    imageMode(CENTER)
    textStyle(BOLDITALIC)
    textSize(40)
    fill(255,255,255)
    text("PARABÉNS!!",280,70)
    textSize(25)
    textStyle(BOLDITALIC)
    fill(255,255,255)
    text("Você aprendeu mais sobre reciclagem ;)",300,300)
    fill(255,255,255)
    text("Total:"+pontos+"/9",277,350)
    
  if (mouseX > xmenu2 && mouseX < xmenu2 + largura1 && mouseY >           ymenu5 && mouseY < ymenu5 + altura1){
    stroke(200);
    fill(0,0,0);
    rect(xmenu2, ymenu5, largura1, altura1, 15);
 if (mouseIsPressed){
        tela = 0
      }
    }
    fill(255,255,255)
    noStroke()
    text("X", 530,40);
  } 
}