import { card_cont_less } from "./variables.js";
// INPUT QUANTITY
export function delete_checked_inputs_of_card() {
  let checboxs = document.querySelectorAll(".checkbox");
  for (let i = 0; i < checboxs.length; i++) {
    if (checboxs[i].checked) {
      card_cont_less();
      update_select_empleados(checboxs[i].parentNode.nextSibling.textContent);
      $(checboxs[i]).parent().parent().remove();
    }
  }
  let cards = document.querySelectorAll("#draw_empleado_info>div");
  let d = 0;
  for (let i = 0; i < cards.length; i++) {
    cards[i].id = "card" + d;
    d++;
  }
}

function update_select_empleados(employee) {
  $(`#empleados > option[value="${employee}"]`).prop("selected", false);
  $("#empleados").trigger("change");
}
export function write_inputs_text(text, id) {
  let inputs = document.querySelectorAll(`#${id}`);
  for (let i = 0; i < inputs.length; i++) {
    if (
      inputs[i].parentNode.parentNode.parentNode.parentNode.firstChild
        .firstChild.checked
    ) {
      inputs[i].value = text;
    }
  }
}
// INPUT OPTIONS OF RANGE
export function select_range(input){

    if (input.value == 0) {
         input.style.background ="#d0e0eb";
    }
    if (input.value == 1) {
         input.style.background ="#f4ff5e";
    }
    if (input.value == 2) {
         input.style.background ="#73ff91";
    }
}