var shufle1 = document.getElementById("carta-numero-1")
var shufle2 = document.getElementById("carta-numero-2")
var shufle3 = document.getElementById("carta-numero-3")
var shufle4 = document.getElementById("carta-numero-4")
var shufle5 = document.getElementById("carta-numero-5")
var shufle6 = document.getElementById("carta-numero-6")
var shufle7 = document.getElementById("carta-numero-7")
var shufle8 = document.getElementById("carta-numero-8")
var shufle9 = document.getElementById("carta-numero-9")
var shufle10 = document.getElementById("carta-numero-10")
var shufle11 = document.getElementById("carta-numero-11")
var shufle12 = document.getElementById("carta-numero-12")
var shufle13 = document.getElementById("carta-numero-13")
var shufle14 = document.getElementById("carta-numero-14")

var shufles = document.querySelector(".cartas-tarot")

var tempo = 1;
var tempo2 = 2000

var pararSetInterval;
var voltarInicio;

function embaralhar(){
    shufle1.classList.add("embaralhar")
    shufle2.classList.add("embaralhar")
    shufle3.classList.add("embaralhar")
    shufle4.classList.add("embaralhar")
    shufle5.classList.add("embaralhar")
    shufle6.classList.add("embaralhar")
    shufle7.classList.add("embaralhar")
    shufle8.classList.add("embaralhar")
    shufle9.classList.add("embaralhar")
    shufle10.classList.add("embaralhar")
    shufle11.classList.add("embaralhar")
    shufle12.classList.add("embaralhar")
    shufle13.classList.add("embaralhar")
    shufle14.classList.add("embaralhar")

    shufles.classList.add("embaralhar")
}

function voltarCartas(){
    shufle1.classList.remove("embaralhar")
    shufle2.classList.remove("embaralhar")
    shufle3.classList.remove("embaralhar")
    shufle4.classList.remove("embaralhar")
    shufle5.classList.remove("embaralhar")
    shufle6.classList.remove("embaralhar")
    shufle7.classList.remove("embaralhar")
    shufle8.classList.remove("embaralhar")
    shufle9.classList.remove("embaralhar")
    shufle10.classList.remove("embaralhar")
    shufle11.classList.remove("embaralhar")
    shufle12.classList.remove("embaralhar")
    shufle13.classList.remove("embaralhar")
    shufle14.classList.remove("embaralhar")

    shufles.classList.remove("embaralhar")
}

function juntarCartas(){
    pararSetInterval = setTimeout(embaralhar, tempo)
    voltarInicio = setTimeout(voltarCartas, tempo2)
}

var cartas = [];
var carta1;
var carta2;
var carta14;

var nomeCarta1 = document.getElementById("nome-carta-1");
var descricaoCarta1 = document.getElementById("descricao-carta-1");

function inserirNomeCarta1(tarot){
    nomeCarta1.textContent = tarot.nomeCarta
    descricaoCarta1.textContent = tarot.descriçãoCarta
}

function buscarCarta1(){
    fetch("http://localhost:3000/tarot")
    .then(function(data){
        return data.json()
    }).then(function(data){
        cartas = data
        carta1 = cartas[0]
        inserirNomeCarta1(cartas[0])
    })
    shufle1.classList.add("escolhida")
}

var nomeCarta2 = document.getElementById("nome-carta-2");
var descricaoCarta2 = document.getElementById("descricao-carta-2");

function inserirNomeCarta2(tarot){
    nomeCarta2.textContent = tarot.nomeCarta
    descricaoCarta2.textContent = tarot.descriçãoCarta
}

function buscarCarta2(){
    fetch("http://localhost:3000/tarot")
    .then(function(data){
        return data.json()
    }).then(function(data){
        cartas = data
        carta2 = cartas[0]
        inserirNomeCarta2(cartas[0])
    })
    shufle2.classList.add("escolhida")
    shufle1.classList.remove("escolhida")
    shufle14.classList.remove("escolhida")
    carta1 = ""
    carta14 = ""
    inserirNomeCarta1(carta1)
    inserirNomeCarta14(carta14)
}

var nomeCarta14 = document.getElementById("nome-carta-14");
var descricaoCarta14 = document.getElementById("descricao-carta-14");

function inserirNomeCarta14(tarot){
    nomeCarta14.textContent = tarot.nomeCarta
    descricaoCarta14.textContent = tarot.descriçãoCarta
}

function buscarCarta14(){
    fetch("http://localhost:3000/tarot")
    .then(function(data){
        return data.json()
    }).then(function(data){
        cartas = data
        carta14 = cartas[0]
        inserirNomeCarta14(cartas[0])
    })
    shufle14.classList.add("escolhida")
}

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
    shufle1.classList.remove("escolhida")
    shufle2.classList.remove("escolhida")
    shufle14.classList.remove("escolhida")
    carta1 = ""
    carta2 = ""
    carta14 = ""
    inserirNomeCarta1(carta1)
    inserirNomeCarta2(carta2)
    inserirNomeCarta14(carta14)
  }