import {draw_empleado_info,employees_actives,restar_employees_actives,card_cont,card_cont_more,card_cont_less} from "./variables.js";
export  function new_empleado(data){
   let div = document.createElement("div");
   let div_input = document.createElement("div");
   let input = document.createElement("input");
   input.id = "input"+card_cont;
   input.classList.add("checkbox");
   input.type = "checkbox";
   div_input.appendChild(input);
   div_input.classList.add("div_checkbox");
   div.appendChild(div_input);
   let span = document.createElement("span");
   let ul = document.createElement("ul");
   span.innerHTML = data;
   div.id = "card"+ card_cont;
   ul.id = "card_list"+ card_cont;
   card_cont_more();
   div.classList.add("card");
   span.classList.add("name");
   div.appendChild(span);
   div.appendChild(ul);
    draw_empleado_info.appendChild(div);
}
export function employees_actives_in_draw(){
    let card = document.querySelectorAll('.card>span');
    restar_employees_actives();
    for (let i = 0; i < card.length; i++) {
            employees_actives.push(card[i].textContent);        
    }
}
export function delete_empleado(data){
    let card = document.querySelectorAll('#draw_empleado_info>div>span');
    card_cont_less();
    for (let i = 0; i < card.length; i++) {
        if (card[i].textContent == data) {
            if (card[i].parentNode.classList.contains("card_inactive")) {
        }  
            $(card[i]).parent().remove();  
            
        }
    }
    card = document.querySelectorAll('#draw_empleado_info>div');
    let d = 0;
    for (let i = 0; i < card.length; i++) {
        console.log("nuevo id");
        card[i].id = "card"+d;
    d++;    
    }

    
    }

export function buttons_delete_items(){
    
}