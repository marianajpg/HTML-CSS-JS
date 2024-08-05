
let cont=0;
let ativarfuncao=true;
let squares = document.querySelectorAll('.square');

function marcarX(square){
  if(ativarfuncao){
    let imagem=document.createElement('img');
    imagem.src ='https://img.icons8.com/ios/80/783636/multiply.png';
    square.appendChild(imagem);
    square.classList.add('marcadoX');
    vencedor('X');
  }
}

function marcarO(square){
  if(ativarfuncao){
    let imagem=document.createElement('img');
    imagem.src ='https://img.icons8.com/ios/70/a26a28/circled.png';
    square.appendChild(imagem); 
    square.classList.add('marcadoO');
    vencedor('O');
  }
}

function vencedor(jogador){
  let linhaVitoria=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(let linha of linhaVitoria){
    if(linha.every(i => squares[i].classList.contains(`marcado${jogador}`))){
      document.getElementById('result-text').innerHTML=`Jogador ${jogador} venceu!`;
      destaque(linha, 2);
      ativarfuncao=false;
      return;
    }
  }
  
  if(cont>=8){
    document.getElementById('result-text').innerHTML='Empate!';
    destaque(null, 1);
    ativarfuncao=false;
  }
}


function destaque(indices, caso){
  if(caso==1){
    for (let i = 0; i < squares.length; i++){
      if (!squares[i].querySelector('img')) {
        squares[i].style.animation = 'borda-div 150ms 4';
        setTimeout(() => {
          squares[i].style.animation = '';
        }, 200);
      } else if(indices==null){
        squares[i].style.animation = 'borda-div 200ms infinite';
      }
    } 
  } 
  if (caso ==2 ){
    for (let posicao of indices){
      squares[posicao].style.animation = 'borda-div 200ms infinite';
    }
  }
}


function reiniciar(){
  let imagens=document.querySelectorAll('img');
  cont=0;
  ativarfuncao=true;
  imagens.forEach(imagem => imagem.remove());
  document.querySelector('#result-text').innerHTML='';
  squares.forEach(square => {
    square.innerHTML='';
    square.classList.remove('marcadoX');
    square.classList.remove('marcadoO');
    square.style.animation = '';
  });
}



squares.forEach( function(square){
  square.onclick = function(){
    if (!square.querySelector('img')) {
      if(cont%2==0){
        marcarX(square);
      }else{
        marcarO(square);
      }
      cont++;
      } else if (ativarfuncao){
        destaque(squares, 1);
      }
    }
  }
);

document.querySelector('#restart').onclick = reiniciar;



