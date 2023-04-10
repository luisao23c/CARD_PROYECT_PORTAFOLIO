import {peticiones_requisicion} from "./variables.js";
export async function peticion_enviada(){
let peticiones_enviadas = document.querySelectorAll('#draw_empleado_info>div>ul>li');
for (let i = 0; i < peticiones_enviadas.length; i++) {
       let herramienta = peticiones_enviadas[i].firstElementChild.nextElementSibling.innerHTML;
       peticiones_enviadas[i].innerHTML = herramienta;
       peticiones_enviadas[i].classList.add("peticiones_enviadas");
       
}
}
export async function obtener_requisiciones(){
       let peticiones_enviadas = document.querySelectorAll('#draw_empleado_info>div>span');
       for (let i = 0; i < peticiones_enviadas.length; i++) {
              
             peticiones_requisicion.push(peticiones_enviadas[i].textContent);
       }

}