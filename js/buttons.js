// botones
const btnmaster = document.getElementById('btnPayMaster');
const btnvisa = document.getElementById('btnPayVisa');
const btnDeposito = document.getElementById('btnPaydepo');


// cajas
const master = document.getElementById('master');

const Deposito = document.getElementById('Deposito');



// funciones en botones
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


   
        

