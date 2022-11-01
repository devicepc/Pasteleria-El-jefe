import {ingredientesPasteles1, ingredientesPasteles2, ingredientesPasteles3, ingredientesPasteles4, ingredientesPasteles5, ingredientesPasteles6, decoradosPasteles1, decoradosPasteles2, decoradosPasteles3,decoradosPasteles4,decoradosPasteles5,decoradosPasteles6} from "./database.js"


// lugares de las web
const torta1 = document.getElementById("tortas1");
const torta2 = document.getElementById("tortas2");
const torta3 = document.getElementById("tortas3");
const torta4 = document.getElementById("tortas4");
const torta5 = document.getElementById("tortas5");
const torta6 = document.getElementById("tortas6");





function printInUserPage(){
    torta1.innerHTML = ingredientesPasteles1.nombre;
    torta2.innerHTML = ingredientesPasteles2.nombre;
    torta3.innerHTML = ingredientesPasteles3.nombre;
    torta4.innerHTML = ingredientesPasteles4.nombre;
    torta5.innerHTML = ingredientesPasteles5.nombre;
    torta6.innerHTML = ingredientesPasteles6.nombre;
    precioPastel1.innerHTML = "Precio :   "+ingredientesPasteles1.precio;
    precioPastel2.innerHTML = "Precio :   "+ingredientesPasteles2.precio;
    precioPastel3.innerHTML = "Precio :   "+ingredientesPasteles3.precio;
    precioPastel4.innerHTML = "Precio :   "+ingredientesPasteles4.precio;
    precioPastel5.innerHTML = "Precio :   "+ingredientesPasteles5.precio;
    precioPastel6.innerHTML = "Precio :   "+ingredientesPasteles6.precio;

    // precio de los decorados
    decorados1.innerHTML = decoradosPasteles1.nombre;
    decorados2.innerHTML = decoradosPasteles2.nombre;
    decorados3.innerHTML = decoradosPasteles3.nombre;
    decorados4.innerHTML = decoradosPasteles4.nombre;
    decorados5.innerHTML = decoradosPasteles5.nombre;
    decorados6.innerHTML = decoradosPasteles6.nombre;
    preciodecorados1.innerHTML = "Precio :   "+decoradosPasteles1.precio;
    preciodecorados2.innerHTML = "Precio :   "+decoradosPasteles2.precio;
    preciodecorados3.innerHTML = "Precio :   "+decoradosPasteles3.precio;
    preciodecorados4.innerHTML = "Precio :   "+decoradosPasteles4.precio;
    preciodecorados5.innerHTML = "Precio :   "+decoradosPasteles5.precio;
    preciodecorados6.innerHTML = "Precio :   "+decoradosPasteles6.precio;

    // datos para valores de eleccion de usuario
    optionDecor1.innerHTML = decoradosPasteles5.nombre;
    optionDecor2.innerHTML = decoradosPasteles4.nombre;
    optionDecor3.innerHTML = decoradosPasteles2.nombre;
    optionDecor4.innerHTML = decoradosPasteles3.nombre;
    optionDecor5.innerHTML = decoradosPasteles1.nombre;
    optionDecor6.innerHTML = decoradosPasteles6.nombre;

    optionGusto1.innerHTML = ingredientesPasteles2.nombre;
    optionGusto2.innerHTML = ingredientesPasteles5.nombre;
    optionGusto3.innerHTML = ingredientesPasteles1.nombre;
    optionGusto4.innerHTML = ingredientesPasteles6.nombre;
    optionGusto5.innerHTML = ingredientesPasteles3.nombre;
    optionGusto6.innerHTML = ingredientesPasteles4.nombre;
    
}

printInUserPage();
