window.addEventListener('load', function() {
    // obteren info dela cadena
dataPedido = JSON.parse(localStorage.getItem("PedidoUserData"));
dataPedido.forEach(element => {
    
    let elements = document.getElementById("prueba");
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
    let div5 = document.createElement("div5");
    div5.innerHTML = "Comentarios de cliente : "+ element.notas;
    let div6 = document.createElement("div6");
    div6.innerHTML = "Pastel Gusto a  : "+ element.gustoPastel;

    let div7 = document.createElement("div7");
    div7.innerHTML = "Decorado con  : "+element.decorado;
    
    elements.appendChild(div); 
    elements.appendChild(div2); 
    elements.appendChild(div3); 
    elements.appendChild(div4); 
    elements.appendChild(div5); 
    elements.appendChild(div6); 
    elements.appendChild(div7); 
    

    

    
});
});