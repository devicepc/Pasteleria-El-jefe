import {ingredientesPasteles1, ingredientesPasteles2, ingredientesPasteles3, ingredientesPasteles4, ingredientesPasteles5, ingredientesPasteles6, decoradosPasteles1, decoradosPasteles2, decoradosPasteles3,decoradosPasteles4,decoradosPasteles5,decoradosPasteles6} from "./database.js"



// envio de datos al stock
function printInpasteleroPage(){
    tipotorta1.innerHTML = ingredientesPasteles2.nombre;
    tipotorta2.innerHTML = ingredientesPasteles5.nombre;
    tipotorta3.innerHTML = ingredientesPasteles1.nombre;
    tipotorta4.innerHTML = ingredientesPasteles6.nombre;
    tipotorta5.innerHTML = ingredientesPasteles3.nombre;
    tipotorta6.innerHTML = ingredientesPasteles4.nombre;
    marcaPastel1.innerHTML = ingredientesPasteles2.marca;
    marcaPastel2.innerHTML = ingredientesPasteles5.marca;
    marcaPastel3.innerHTML = ingredientesPasteles1.marca;
    marcaPastel4.innerHTML = ingredientesPasteles6.marca;
    marcaPastel5.innerHTML = ingredientesPasteles3.marca;
    marcaPastel6.innerHTML = ingredientesPasteles4.marca;
    stockPastel1.innerHTML = ingredientesPasteles2.stock;
    stockPastel2.innerHTML = ingredientesPasteles5.stock;
    stockPastel3.innerHTML = ingredientesPasteles1.stock;
    stockPastel4.innerHTML = ingredientesPasteles6.stock;
    stockPastel5.innerHTML = ingredientesPasteles3.stock;
    stockPastel6.innerHTML = ingredientesPasteles4.stock;

    // precio de los decorados
    decorados1.innerHTML = decoradosPasteles5.nombre;
    decorados2.innerHTML = decoradosPasteles4.nombre;
    decorados3.innerHTML = decoradosPasteles2.nombre;
    decorados4.innerHTML = decoradosPasteles3.nombre;
    decorados5.innerHTML = decoradosPasteles1.nombre;
    decorados6.innerHTML = decoradosPasteles6.nombre;
    
    stockdecorados1.innerHTML = decoradosPasteles5.stock;
    stockdecorados2.innerHTML = decoradosPasteles4.stock;
    stockdecorados3.innerHTML = decoradosPasteles2.stock;
    stockdecorados4.innerHTML = decoradosPasteles3.stock;
    stockdecorados5.innerHTML = decoradosPasteles1.stock;
    stockdecorados6.innerHTML = decoradosPasteles6.stock;
}

printInpasteleroPage();