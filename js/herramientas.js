import {card_ul_item_cont,card_ul_item_cont_more,add_new_herramienta} from "./variables.js";
import {write_inputs_text} from "./input.js";

export function add_herramienta_employes(data){
    let cards_employees = document.querySelectorAll("#draw_empleado_info>div>ul");
    for (let i = 0; i < cards_employees.length; i++){
     let li = document.createElement("li");
     li.id = "card_list_item"+ card_ul_item_cont;
     let div_quantity = document.createElement("div");
     let div_herramienta = document.createElement("div");
     let div_delete_item = document.createElement("div");
     div_herramienta.innerHTML =data;
     let input_quantity = document.createElement("input");
     input_quantity.type = "text";
     input_quantity.classList.add("quantity");
     input_quantity.id ="quantity"+add_new_herramienta;
     input_quantity.addEventListener("input",(e)=>{
        write_inputs_text(input_quantity.value,input_quantity.id);
     })
     div_quantity.appendChild(input_quantity);
     let button_delete = document.createElement("button");
     button_delete.innerHTML = `<svg onclick="document.getElementById('card_list_item${card_ul_item_cont}').remove()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
   </svg>`;
   button_delete.id = "card_list_item_delete" +card_ul_item_cont;
   div_delete_item.appendChild(button_delete);
     li.appendChild(div_quantity);
     li.appendChild(div_herramienta);
     li.appendChild(div_delete_item);
     cards_employees[i].appendChild(li);
     card_ul_item_cont_more();
    }
}
export function delete_herramienta_employes(data){
    let cards_employees_list_items = document.querySelectorAll("#draw_empleado_info>div>ul>li>div");
    for (let i = 0; i < cards_employees_list_items.length; i++){
        if (cards_employees_list_items[i].textContent == data) {
            $(cards_employees_list_items[i]).parent().remove();  
        }
       }
}

