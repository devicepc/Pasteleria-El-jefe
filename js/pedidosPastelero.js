window.addEventListener('load', function() {
    // obteren info dela cadena
dataPedido = JSON.parse(localStorage.getItem("PedidoUserData"));
dataPedido.forEach(element => {
    
    let elements = document.getElementById("frontNew");
    let div6front = document.createElement("div6front");
    div6front.innerHTML = "Pastel Gusto a  : "+ element.gustoPastel;
    let div7front = document.createElement("div7front");
    div7front.innerHTML = "Decorado con  : "+element.decorado;
    let div5front = document.createElement("div5front");
    div5front.innerHTML = "Comentarios de cliente : "+ element.notas;

   
    
    elements.appendChild(div6front); 
    elements.appendChild(div7front); 
    elements.appendChild(div5front); 
    
    let elementbacks = document.getElementById("backNew");
    let div = document.createElement("div");
    div.innerHTML = "Cliente : "+ element.Nombre;
    div.style.display ='inline';
    div.style.marginBottom = '40px';
    let div2 = document.createElement("div2");
    div2.innerHTML = "Direccion de envio : "+ element.direccion;
    let div3 = document.createElement("div3");
    div3.innerHTML = "Mail : "+ element.email;
    let div4 = document.createElement("div4");
    div4.innerHTML = "Telefono : "+ element.telefono;
    elementbacks.appendChild(div); 
    elementbacks.appendChild(div2); 
    elementbacks.appendChild(div3); 
    elementbacks.appendChild(div4);
   

    
});
});