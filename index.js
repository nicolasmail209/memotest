const arrayDeCartas = [
carta1 = {
  idString: "carta1",
  colorDorso: "gris",
  colorFrente: "",
  volteada: false,
},
carta2 = {
  idString: "carta2",
  colorDorso: "gris",
  colorFrente: "",
  volteada: false,
},
carta3 = {
  idString: "carta3",
  colorDorso: "gris",
  colorFrente: "",
  volteada: false,
},
carta4 = {
  idString: "carta4",
  colorDorso: "gris",
  colorFrente: "",
  volteada: false,
},
carta5 = {

    idString: "carta5",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta6 = {

    idString: "carta6",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta7 = {

    idString: "carta7",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta8 = {
    idString: "carta8",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta9 = {
    idString: "carta9",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta10 = {
    idString: "carta10",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta11 = {
    idString: "carta11",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
carta12 = {
    idString: "carta12",
    colorDorso: "gris",
    colorFrente: "",
    volteada: false,
},
];

const colores = ["violeta", "violeta", "azul", "azul", "verde", "verde", "amarillo", "amarillo", "naranja", "naranja", "rojo", "rojo"];


function mezclarArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

mezclarArray(colores);
let posicionColores = 0;

arrayDeCartas.forEach(elemento => {
  elemento.colorFrente = colores[posicionColores];
  posicionColores++;
})


const $cuadricula = document.getElementById("cuadricula");

const devolverIdClickeado = (e) => {
  console.log(e.target.id);
  voltearCarta(e.target.id);
};
$cuadricula.addEventListener("click", devolverIdClickeado);

function voltearCarta(IdCarta) {
  if (IdCarta === "carta1" && carta1.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta1.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta2" && carta2.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta2.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta3" && carta3.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta3.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta4" && carta4.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta4.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta5" && carta5.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta5.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta6" && carta6.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta6.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta7" && carta7.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta7.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta8" && carta8.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta8.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta9" && carta9.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta9.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta10" && carta10.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta10.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta11" && carta11.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta11.colorFrente;
      compararCartas(IdCarta);
  }
  if (IdCarta === "carta12" && carta12.volteada === false && parDeCartas.length != 2) {
    document.querySelector("#" + IdCarta).className =
      "col " + carta12.colorFrente;
      compararCartas(IdCarta);
  }


}

const parDeCartas = [];

function compararCartas( IdCarta ){
    if(parDeCartas.length === 0){
        parDeCartas.unshift(IdCarta);
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

