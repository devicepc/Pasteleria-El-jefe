// botones
const btnmaster = document.getElementById('btnPayMaster');
const btnvisa = document.getElementById('btnPayVisa');
const btnDeposito = document.getElementById('btnPaydepo');
const btnvisa2 = document.getElementById('btnPayVisa');

const btnpayPal  = document.getElementById('btnPayPay');


// cajas
const master = document.getElementById('master');

const Deposito = document.getElementById('Deposito');



// funciones en botones
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
btnmaster.addEventListener('click', ()=>{
    if( master.style.display === "none") {
        master.style.display = "block";
        
      } else {
        master.style.display = "none";
      }
      });

btnDeposito.addEventListener('click', ()=>{
            if(Deposito.style.display === "none") {
            Deposito.style.display = "block";
            master.style.display="none";
                
              } else {
            Deposito.style.display = "none";
              }
              });


   
        

