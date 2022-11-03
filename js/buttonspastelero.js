

function removeCancel(){
    
    localStorage.removeItem("PedidoUserData")
}

const pagospatelero = document.getElementById("pagosPastelero");
function mostarPagos(){
    pagospatelero.style.display="block";
    console.log("apretado");
}