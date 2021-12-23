/*ao carregar a pagina executa a funcao*/
window.onload = function(){
/*atribui o elemento com id stage como valor da variavel stage*/
  var stage = document.getElementById('stage');
/*context recebe o contexto do canvas(var stage), com type 2d pois se trata de uma renderizacao bidimensional*/
  var context = stage.getContext('2d');
/*intervalo (em milisegundos) que a funcao game será executada*/
  setInterval(game, 60);
/*velocidade de movimento da cobrinha, ou quantas casas ela ira andar a cada refresh da funcao game*/
  const velocity = 1;
/*velocidade e posição iniciais da cabeça da cobrinha*/
  var velox = 0;
  var veloy = 0;
  var placex = 10;
  var placey = 10;
/*tamanho do espaco(pixels, 400/20)*/
  var tilelength = 20;
/*quantidade de espacos*/
  var qtile = 20;
/*posição da maçã*/
  var applx = 15;
  var apply = 15;
/*rastro da cobrinha*/
  var trail = [];
  tail = 5;
/**/
  function game(){
    placex += velox;
    placey += veloy;
/*se a cobrinha toca o limite da borda esquerda, ela vai para a borda da direita*/
    if(placex < 0){
      placex = qtile - 1;
    }
/*se a cobrinha toca o limite da borda direita, ela vai para a borda da esquerda*/
    if(placex > qtile - 1){
      placex = 0;
    }
/*se a cobrinha toca o limite da borda superior, ela vai para a borda inferior*/
    if(placey < 0){
      placey = qtile - 1;
    }
/*se a cobrinha toca o limite da borda inferior, ela vai para a borda da superior*/
    if(placey > qtile - 1){
      placey = 0;
    }
/*pinta o stage*/
    context.fillStyle = 'black';
    context.fillRect(0, 0, stage.width, stage.height);
/*pinta a maçã*/
    context.fillStyle = 'red';
    context.fillRect(applx * tilelength, apply * tilelength, tilelength, tilelength);
/*pinta a cabeça e o rastro da cobrinha*/
    context.fillStyle = 'gray';
    for (var i = 0; i < trail.length; i++) {
      context.fillRect(trail[i].x * tilelength, trail[i].y * tilelength, tilelength, tilelength);
/*se alguma posição (eixo x ou y) do rastro for igual a posição da cabeça*/
      if (trail[i].x == placex && trail[i].y == placey){
/*game over, cobrinha congela*/
        velox = 0;
        veloy = 0;
      }
    }
/*objeto que recebe a posição atual (x e y) da cobrinha*/
    trail.push({x:placex, y:placey});
/**/
    while (trail.length > tail) {
      trail.shift();
    }
/*se a posição (x e y) da cabeça da cobrinha for a mesma da posição (x e y) da maçã*/
    if (applx == placex && apply == placey){
/*o rastro da cobrinha é incrementado em 1*/
      tail++;
/*a posição (x e y) da maçã é resetada para uma posição (x e y) aleatória*/
      applx = Math.floor(Math.random() * qtile);
      apply = Math.floor(Math.random() * qtile);
    }
  }


}
