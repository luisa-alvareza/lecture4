document.addEventListener("DOMContentLoaded", () => {

  //----------------- lecture_02 ----------------------------------//
    const cardAdj = [{name: "c1", img: "images/c1.png"}, {name: "cpp", img: "images/cpp.png"}, 
                     {name: "c2", img: "images/c2.png"}, {name: "fortran", img: "images/fortran.png"},
                     {name: "c3", img: "images/c3.png"}, {name: "python", img: "images/python.png"},
                     {name: "c4", img: "images/c4.png"}, {name: "csharp", img: "images/csharp.png"}, 
                     {name: "c5", img: "images/c5.png"}, {name: "fortran", img: "images/fortran.png"},
                     {name: "c6", img: "images/c6.png"}, {name: "python", img: "images/python.png"}];
  
    const cuadricula = document.querySelector(".cuadricula");
    const resultado = document.querySelector("#resultado");
    var cartasEscogidas = [];
    var cartasEscogidasId = [];
    var cartasGanadas = [];
  
  //----------------- lecture_03 ----------------------------------//  
    function crearTablero (){
      for (let i = 0; i < cardAdj.length; i++) { 
        var carta = document.createElement('img');
        carta.setAttribute('src', 'images/reverso.png'); 
        carta.setAttribute('data-id', i); 
        carta.addEventListener('click', voltearCarta); 
        cuadricula.appendChild(carta); 
      }
    }
  });

  function voltearcarta (){
  var cardId =this.getattribute("data-id");
  cartasEscogidas.push (cardAdj[cardId].name);
  cartasEscogidasId.push(cardid);
  this.setattribute("src",cardAdj[cardid].img);
    if (cartasEscogidas.length=== 2){
      setTimeout(verificarpareja, 1000);
    }
  }

  creaetablero();
});