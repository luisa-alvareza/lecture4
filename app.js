document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
    { name: "c1", img: "images/c1.png" },
    { name: "c2", img: "images/c2.png" },
    { name: "c3", img: "images/c3.png" },
    { name: "c4", img: "images/c4.png" },
    { name: "c5", img: "images/c5.png" },
    { name: "c6", img: "images/c6.png" },
    { name: "c1", img: "images/c1.png" },
    { name: "c2", img: "images/c2.png" },
    { name: "c3", img: "images/c3.png" },
    { name: "c4", img: "images/c4.png" },
    { name: "c5", img: "images/c5.png" },
    { name: "c6", img: "images/c6.png" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getattribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setattribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }

  crearTablero();
});
