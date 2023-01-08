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

const enviarIdClickeado = (e) => {
  voltearCarta(e.target.id);
};
$cuadricula.addEventListener("click", enviarIdClickeado);


function voltearCarta(idCarta){
  arrayDeCartas.forEach( elemento => {
    if(elemento.idString === idCarta && elemento.volteada === false && parDeCartas.length != 2){
      document.querySelector("#" + idCarta).className = "col " + elemento.colorFrente;
      compararCartas(idCarta);
    }
  })
  
}


const parDeCartas = [];

function compararCartas( IdCarta ){
    if(parDeCartas.length === 0){
        parDeCartas.unshift(IdCarta);
    }
    
    if(parDeCartas[0] !== IdCarta){
        parDeCartas.unshift(IdCarta);
        if(document.querySelector("#" + IdCarta).className === document.querySelector("#" + parDeCartas[1]).className){
          

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

