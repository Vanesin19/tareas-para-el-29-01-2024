// creador de nombres de bandas aleatorias

//generamos dentro de variables los nombres:
let primera = ["perro", "zorro", "jaguar", "jirafa", "gato", "caballo", "puerco", "mono", "pinguino", "oveja", "cabra", "pato", "elefante", "gallo", "ganso", "vaca"];
let segunda = ["verde", "rojo", "azul", "rosado", "amarillo", "naranja", "violeta", "blanco", "negro", "gris", "dorado", "bordo", "fucsia"];

function bandasRandom() {

  //math.random genera un numero de elemento aleatorio (se lo redondea con math ceil) del primer array:
  let generarPrimerNombre = Math.floor(Math.random() * primera.length);
  let generarSegundoNombre = Math.floor(Math.random() * segunda.length);  

  let primerNombreAleatorio = primera[generarPrimerNombre];
  let segundoNombreAleatorio = segunda[generarSegundoNombre];

  //se genera al resultado:
  return primerNombreAleatorio + ' ' + segundoNombreAleatorio;
};
console.log(bandasRandom());

// Generador de historias absurdas

let primeraParte = ["Un perro lanudo", "Un zorro curioso", "Un jaguar travieso", "Una jirafa petisa", "Un gato con 3 patas", "Un caballo mudo", "Un puerco muy flaco", "Un mono coplor negro", "Un pinguino rosado", "Una oveja negra", "Una cabra muda", "Un pato muy grande", "Una vaca verde"];
let segundaParte = ["Come pasto tranquila", "Hornea un pastel", "juega un partido de futbol", "se tiñe el cabello", "mira televisión", "cocina un pollo al horno", "estudia javascript", "se tira un chapuzón", "va de compras", "toma mates", "se hace un café", "hace ejercico", "sale a correr"];
let terceraParte = ["y luego se ira de fiesta", "por que despues saldra con amigos", "y luego se ira a dormir", "y luego trabajará", "por que se va de vacaciones", "por que no tiene trabajo", "y quiere ser modelo"];

function historiasRaras() {

  let generarPrimeraParte = primeraParte[Math.floor(Math.random() * primeraParte.length)];
  let generarSegundaParte = segundaParte[Math.floor(Math.random() * segundaParte.length)];  // no tienen un numero limite???
  let generarTerceraParte = terceraParte[Math.floor(Math.random() * terceraParte.length)];

  return generarPrimeraParte + ' ' + generarSegundaParte + ' ' + generarTerceraParte;
};
console.log(historiasRaras());


// Viaje en el tiempo musical
//variables:
var año2018 = "Criminal, de Natti Natasha ft. Ozuna"
var año2019 = "Adán y Eva, de Paulo Londra"
var año2020 = "Señorita, de Shawn Mendes ft. Camila Cabello"
var año2021 = "Mienteme de Tini Stoessel y María Becerra"
var año2022 = "Session 52 de BZRP con Quevedo"
var año2023 = "Un Finde de Big One, FMK y Ke Personaje"

function masEscuchada(año) {
//Condiciones:
  if (año < 2018) {
    return 'Disculpá, no tenemos datos de este año';
  };
  if (año === 2018) {
    return 'la cancion más escuchada en Argentina ese año fué: ' + año2018;
  };
  if (año === 2019) {
    return 'la cancion más escuchada en Argentina ese año fué: ' + año2019;
  };
  if (año === 2020) {
    return 'la cancion más escuchada en Argentina ese año fué: ' + año2020;
  }
  if (año === 2021) {
    return 'la cancion más escuchada en Argentina ese año fué: ' + año2021;
  }
  if (año === 2022) {
    return 'la cancion más escuchada en Argentina ese año fué: ' + año2022;
  }
  if (año === 2023) {
    return 'la cancion más escuchada en Argentina ese año fué: ' + año2023;
  }
  else {
    return '¿Cuál será la canción más escuchada este año?'
  }
};
console.log(masEscuchada(2020));

//conversor de Emociones a emojis:
//variables:
var feliz = '😄';
var enojado = '😑';
var enamorado = '😍';
var desconcertado = '🙃';
var genial = '😎';
var desorientado = '🥴';

function emojis(emocion) {
//Condiciones:
  if (emocion === feliz) {
    return 'tu estado es: ' + feliz;
  };
  if (emocion === enojado) {
    return 'tu estado es: ' + enojado;
  };
  if (emocion === enamorado) {
    return 'tu estado es: ' + enamorado;
  };
  if (emocion === desconcertado) {
    return 'tu estado es: ' + desconcertado;
  }
  if (emocion === genial) {
    return 'tu estado es: ' + genial;
  }
  if (emocion === desorientado) {
    return 'tu estado es: ' + desorientado;
  }
  else {
    return 'Aún no tenemos emoji para esa emoción, lo siento'
  }
};
console.log(emojis(enamorado));

//Creador de recetas culinarias

function generarRecetaFuturista() {
  // variable con ingredientes 
  let ingredientesInusuales = ["Pez espada", "Pata de gigante", "Huevo de dinosaurio", "Champiñon transgénico", "Pechuga de dodo"];
  // Variable de técnicas de cocina 
  let tecnicasCocina = ["al vapor", "salteado", "frito", "asado", "al horno"];
  //Variable con guarniciones
  let guarniciones = ['ensalada de algas', 'revuelto de caracoles', 'salsa de ceso de alien', 'puré de babosas', 'aceite de sudor de cíclope', 'arroz de impresora 3D'];
 
  let recetaFuturista = 'receta Futurista';

  //Combinación de ingredientes, técnicas y guarniciones:
  for (let i = 0; i < [Math.floor(Math.random() * ingredientesInusuales.length)]; i++) {
    for (let j = 0; j < [Math.floor(Math.random() * tecnicasCocina.length)]; j++) {
      for (let k = 0; k < [Math.floor(Math.random() * guarniciones.length)]; k++) {
       recetaFuturista = `La receta consta de ${ingredientesInusuales[i]} ${tecnicasCocina[j]} con ${guarniciones[k]}.`;
      }
    }
  }

  return recetaFuturista;
}

console.log(generarRecetaFuturista())

//Planetas fantásticos:

function planetasFantasticos() {
  // nombres
  let nombresPlanetas = ["Monzón", "Giganton", "Pequeño", "Mate", "Nami"];
  // colores
  let colorPlaneta = ["rojo", "verde", "amarillo", "azul", "gris"];
  //caracteristicas
  let caracteristicasPlaneta = ["hidrógeno", "helio", "fósforo", "uranio", "platino", "carbono"];
  
  let planetas = 'El planeta se llama ';

  //Combinación:
  for (let l = 0; l < [Math.floor(Math.random() * nombresPlanetas.length)]; l++) {
    for (let m = 0; m < [Math.floor(Math.random() * colorPlaneta.length)]; m++) {
      for (let n = 0; n < [Math.floor(Math.random() * caracteristicasPlaneta.length)]; n++) {
       planetas = `El planeta se llama ${nombresPlanetas[l]} y es de color ${colorPlaneta[m]} ya que está formado por ${caracteristicasPlaneta[n]}.`;
      }
    }
  }

  return planetas;
}

console.log(planetasFantasticos())
