import{move_right_carrusel,move_right_carrusel_more,move_left_carrusel_more} from "./variables.js";
export  function carrusel_active(){
let cards = document.querySelectorAll(".card");
console.clear();
for (let i = 0; i < cards.length; i++) {
    if (i <=3){
        if (cards[i].classList.contains("card_inactive")) {
            cards[i].classList.remove("card_inactive");
        }
    }else{

        cards[i].classList.add("card_inactive");
    }

}
}
export function Carrusel_next_cards(){
let cards = document.querySelectorAll("#draw_empleado_info>div");
if (cards.length >=move_right_carrusel+5){
    move_right_carrusel_more();
for (let i = 0; i < cards.length; i++) {
 if (move_right_carrusel<=i && i<move_right_carrusel+4) {
        if (cards[i].classList.contains("card_inactive")){
            cards[i].classList.remove("card_inactive");
        }
        cards[i].classList.add("card");
    }
 else{
    if (cards[i].classList.contains("card")){
        cards[i].classList.remove("card");
    }
    cards[i].classList.add("card_inactive");
 }
}
}
}
export function Carrusel_after_cards(){
    let cards = document.querySelectorAll("#draw_empleado_info>div");
    let pasa = 0;
    if (cards.length >4){
        if (move_right_carrusel <=-2) {
            return  move_right_carrusel = 0;
          }
        for (let i = 0; i < cards.length; i++) {
                   if (cards[i].classList.contains("card")){
                    
                       cards[i].classList.remove("car");
                   }
                   cards[i].classList.add("card_inactive");
        }
        
        for (let i = move_right_carrusel-4; i < move_right_carrusel;i++) {
            if (document.getElementById("card"+i)) {
                if (document.getElementById("card"+i).classList.contains("card_inactive")){
                    document.getElementById("card"+i).classList.remove("card_inactive")
                    pasa ++;
                }
               document.getElementById("card"+i).classList.add("card");
              
            }
            
        } 
        console.clear();
        console.log(pasa);
        if (pasa<4){
            let cantidad_faltante = 0;
            while (pasa!=4){
                pasa++;
                cantidad_faltante ++;
            }
            console.log(cantidad_faltante);
    
            for (let i = move_right_carrusel; i <move_right_carrusel+cantidad_faltante; i++) {
                if (document.getElementById("card"+i)) {
                    if (document.getElementById("card"+i).classList.contains("card_inactive")){
                        document.getElementById("card"+i).classList.remove("card_inactive")
                    }
                   document.getElementById("card"+i).classList.add("card");
                  
                }
            }
        }
        move_left_carrusel_more();

    }
}