// guardar datos de cliente
   




document.getElementById("buttonenviar").addEventListener("click", function(event){
         event.preventDefault()
       let saborPastel =document.getElementById("sabroPastel").value;
    let decoradoPastel1 =document.getElementById("DecorPastel").value;
    // falta poner otro sabor

    let nombreCliente =document.getElementById("nombre").value;
    let telefonoCliente =document.getElementById("Telefono").value;
    let emailCliente =document.getElementById("email").value;
    let direccionCliente =document.getElementById("address").value;
    let notasCliente =document.getElementById("notas").value;

 console.log("los valores son: Nombre de cliente desde la variable "+nombreCliente+"  telefono de cliente "+telefonoCliente +" email de cliente "+emailCliente+ "direccion de cliente "+direccionCliente+ " notas de cliente "+notasCliente
  +"el gusto del pastel "+saborPastel + " y su decorado "+decoradoPastel1);

  pedidoUser =[ { Nombre :nombreCliente, 
     telefono : telefonoCliente,  email :emailCliente, 
     direccion: direccionCliente, 
     notas :notasCliente,
 gustoPastel: saborPastel, decorado: decoradoPastel1
 } ],
    
    
/*  console.log("la variable es: "+pedidoUser.Nombre);
 let pedidoUser2 = pedidoUser.telefono.toString();
 pureba.innerHTML = pedidoUser2;
 console.log(" esto es pedidos a string "+pedidoUser2); */

localStorage.setItem("PedidoUserData", JSON.stringify(pedidoUser));


window.location.href = "./pedido.html";
});






