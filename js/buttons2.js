// botones

const btnvisa2 = document.getElementById('btnPayVisa');

const btnpayPal  = document.getElementById('btnPayPay');

// cajas

const Visa = document.getElementById('Visa');

const payPal  = document.getElementById('payPal');


// funciones en botones
btnvisa2.addEventListener('click', ()=>{
    if( Visa.style.display === "none") {
        Visa.style.display = "block";
        
      } else {
        Visa.style.display = "none";
      }
      });

btnpayPal.addEventListener('click', ()=>{
  if(payPal.style.display==='none'){
    payPal.style.display= "block";
  }
  else{
    payPal.style.display="none";
  }
}); 

   
        

