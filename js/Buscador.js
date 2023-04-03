import{move_right_carrusel} from "./variables.js";
export function search_cards_employees(value){
    let card = document.querySelectorAll('#draw_empleado_info>div>span');
    if(value==""){
        
        for (let i = 0; i < card.length; i++) {
                if (!card[i].parentNode.classList.contains("card_inactive")) {
                    card[i].parentNode.classList.add("card_inactive");
                }
        }
        for (let i = move_right_carrusel; i < move_right_carrusel+4; i++) { 
           if (document.getElementById("card"+i)) {
            if (document.getElementById("card"+i).classList.contains("card_inactive")) {
                document.getElementById("card"+i).classList.remove("card_inactive");
            }
           }
                   
        }
            
        
    }
    if(value!=""){
        for (let i = 0; i < card.length; i++) {
        let pasa = 1;
            for (let d = 0; d <value.length; d++) {
                if (card[i].textContent[d].toUpperCase().includes(value[d].toUpperCase())) {

                }else{ 
                    pasa = 0;
                }
            }
            console.log(card[i].textContent);

            if (pasa ==1) {
                console.log(card[i].textContent);
                if (card[i].parentNode.classList.contains("card_inactive")) {
                    card[i].parentNode.classList.remove("card_inactive");
                }
                if (!card[i].parentNode.classList.contains("card")) {
                    card[i].parentNode.classList.add("card");
                }
            }
          
            if(pasa==0){
                
                if (!card[i].parentNode.classList.contains('card_inactive')){
                    card[i].parentNode.classList.add('card_inactive');
                }
                    

                
                }
           
           
        }
     
    }
 
    
}
