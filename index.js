//let $carta1 = document.querySelector("#carta1");
//let $carta2 = document.querySelector("#carta2");
//let $carta3 = document.querySelector("#carta3");
//let $carta4 = document.querySelector("#carta4");

const arrayDeCartas = [
carta1 = {
  //id: $carta1,
  idString: "carta1",
  colorDorso: "gris",
  colorFrente: "",
  volteada: false,
},
carta2 = {
  //id: $carta2,
  idString: "carta2",
  colorDorso: "gris",
  colorFrente: "",
  volteada: false,
},
carta3 = {
  //id: $carta3,
  idString: "carta3",
  colorDorso: "gris",
  colorFrente: "",
  volteada: false,
},
carta4 = {
  //id: $carta4,
  idString: "carta4",
  colorDorso: "gris",
  colorFrente: "",
  volteada: false,
},
carta5 = {
    //id: $carta5,
    idString: "carta5",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta6 = {
    //id: $carta6,
    idString: "carta6",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta7 = {
    //id: $carta7,
    idString: "carta7",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta8 = {
    //id: $carta8,
    idString: "carta8",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta9 = {
    //id: $carta9,
    idString: "carta9",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta10 = {
    //id: $carta10,
    idString: "carta10",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta11 = {
    //id: $carta11,
    idString: "carta11",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta12 = {
    //id: $carta12,
    idString: "carta12",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
];

const colores = ["violeta", "violeta", "azul", "azul", "verde", "verde", "amarillo", "amarillo", "naranja", "naranja", "rojo", "rojo"];

//La siguiente funcion la saque de internet
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(colores);

carta1.colorFrente = colores[0];
carta2.colorFrente = colores[1];
carta3.colorFrente = colores[2];
carta4.colorFrente = colores[3];
carta5.colorFrente = colores[4];
carta6.colorFrente = colores[5];
carta7.colorFrente = colores[6];
carta8.colorFrente = colores[7];
carta9.colorFrente = colores[8];
carta10.colorFrente = colores[9];
carta11.colorFrente = colores[10];
carta12.colorFrente = colores[11];

const $cuadricula = document.getElementById("cuadricula");
var cuentaCartas = "";

const devolverIdClickeado = (e) => {
  console.log(e.target.id);
  voltearCarta(e.target.id);
};
$cuadricula.addEventListener("click", devolverIdClickeado);

function voltearCarta(IdCarta) {
  if (IdCarta === "carta1" && carta1.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta1.colorFrente;
      //carta1.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta2" && carta2.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta2.colorFrente;
      //carta2.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta3" && carta3.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta3.colorFrente;
      //carta3.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta4" && carta4.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta4.colorFrente;
      //carta4.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta5" && carta5.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta5.colorFrente;
      //carta4.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta6" && carta6.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta6.colorFrente;
      //carta4.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta7" && carta7.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta7.colorFrente;
      //carta4.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta8" && carta8.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta8.colorFrente;
      //carta4.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta9" && carta9.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta9.colorFrente;
      //carta4.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta10" && carta10.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta10.colorFrente;
      //carta4.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta11" && carta11.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta11.colorFrente;
      //carta4.volteada = true;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta12" && carta12.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta12.colorFrente;
      //carta4.volteada = true;
      compararCartas(IdCarta);
  }

  //compararCartas(IdCarta);

}

const parDeCartas = [];

function compararCartas( IdCarta ){
    if(parDeCartas.length === 0){
        parDeCartas.unshift(IdCarta);
    }
    if(parDeCartas[0] === IdCarta){
        //no hacer nada
    }
    if(parDeCartas[0] !== IdCarta){
        parDeCartas.unshift(IdCarta);
        if(document.querySelector("#" + IdCarta).className === document.querySelector("#" + parDeCartas[1]).className){
            console.log("bien");

            for(let i = 0; i < 12; i++){
                if( arrayDeCartas[i].idString === IdCarta ){
                    arrayDeCartas[i].volteada = true;
                }
                if( arrayDeCartas[i].idString === parDeCartas[1] ){
                    arrayDeCartas[i].volteada = true;
                }
            }

            parDeCartas.pop();
            parDeCartas.pop();
        }
        else{
            setTimeout(() => {
                document.querySelector("#" + IdCarta).className = "col gris";
                document.querySelector("#" + parDeCartas[1]).className = "col gris";
                parDeCartas.pop();
                parDeCartas.pop();
              }, 3000)
            
        }
    }
}

/*
function darColorACarta( nombreCarta, color){
    //document.getElementById('mydiv').className = 'newclass';
    //document.getElementById()
    nombreCarta.className = "col " + color;
}


darColorACarta( $carta1, "rojo");
*/
