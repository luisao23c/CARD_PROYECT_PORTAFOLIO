import {card_cont_less} from "./variables.js";

export function delete_checked_inputs_of_card(){
    let checboxs = document.querySelectorAll(".checkbox");
    for (let i = 0; i < checboxs.length; i++) {
        if (checboxs[i].checked) {
            card_cont_less();
            update_select_empleados(checboxs[i].parentNode.nextSibling.textContent);
            $(checboxs[i]).parent().parent().remove();  

        }
        
    }
   let cards = document.querySelectorAll('#draw_empleado_info>div');
    let d = 0;
    for (let i = 0; i < cards.length; i++) {
        cards[i].id = "card"+d;
    d++;    
    }
}

function update_select_empleados(employee){

    $(`#empleados > option[value="${employee}"]`).prop("selected", false);
    $("#empleados").trigger("change"); 

}
