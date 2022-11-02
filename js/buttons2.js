
    
    const stock  = document.getElementById('stock');
    const stockbtn = document.getElementById('stockbtn'); 
    const pagosPastelero  = document.getElementById('pagosPastelero');
    const pagosbtn = document.getElementById('pagosbtn');

    stockbtn.addEventListener('click', ()=>{
        if( stock.style.display === "block") {
            stock.style.display = "none";
            
          } else {
            stock.style.display = "block";
            window.location.href = "#stock";
          }
          });

          
        
          pagosbtn.addEventListener('click', ()=>{
            
              if( pagosPastelero.style.display === "none") {
                  pagosPastelero.style.display = "block";
                  
                } else {
                  pagosPastelero.style.display = "none";
                  window.location.href = "#pagos";
                }
                });
                  
                

  

    
        
    

