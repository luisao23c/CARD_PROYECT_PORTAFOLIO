import {
  empleados_select,
  herramientas_select,
  activadades_select,
  draw_empleado_info,
  carousel_next,
} from "./variables.js";
import { new_empleado, employees_actives_in_draw,delete_empleado } from "./empleados.js";
import {add_herramienta_employes,delete_herramienta_employes} from "./herramientas.js";
import {carrusel_active,Carrusel_next_cards,Carrusel_after_cards} from "./Carrusel.js";
$(document).ready(function () {
  $(".js-example-basic-multiple").select2();
});

let empleados = [
  "Miguel Angel",
  "Miguel Salazar",
  "Jose Jimenez",
  "Alan Mazario",
  "Pedro Alonzo",
  "Vicente Hernandez",
  "Eduardo Herrera",
  "Orlando Belmontes",
  "Cristian Zaragosa",
  "Edgar Perez",
  "Edson Gonzales",
  "Javier Gtz",
  "Juan Perez",
  "Patricia Sinnahi",
  "Ricardo Alonzo",
  "Marcos Rodriguez",
];
let herramientas = [
  "Escalera de extension",
  "Metricas",
  "Pala",
  "Martillo",
  "Elotromartillo",
  "Cincel",
  "Matraca",
  "Caja de Herramientas",
];
let actividades = {
  "LLaves y Dados": [
    "LLave Mixta",
    "LLave española",
    "LLave Allen",
    "LLave perica",
    "LLave Stilson",
  ],
  "Pinzas y Sujecion": [
    "Pinzas de electrisista",
    "Pinzas de presion",
    "Pinza de Etension",
    "Pinza Mecanica",
    "Pinza Checadora",
  ],
  Desarmadores: [
    "Desarmador plano",
    "Desarmador philphs",
    "Desarmador de torque",
    "Desarmador de caja",
  ],
};
for (let i in actividades) {
  let option = document.createElement("option");
  option.textContent = i;
  option.value = i;
  activadades_select.appendChild(option);
}

empleados.forEach((element) => {
  let option = document.createElement("option");
  option.textContent = element;
  option.value = element;
  empleados_select.appendChild(option);
});
herramientas.forEach((element) => {
  let option = document.createElement("option");
  option.textContent = element;
  option.value = element;
  herramientas_select.appendChild(option);
});
$("#empleados").on("select2:select", function (e) {
  let data = e.params.data.text;
  new_empleado(data);
});
$("#empleados").on("select2:unselect", function (e) {
    let data = e.params.data.text;
  delete_empleado(data);
});

$("#actividades").on("select2:select", function (e) {
});

$("#actividades").on("select2:unselect", function (e) {});
$("#herramientas").on("select2:select", function (e) {
    let data = e.params.data.text;
    add_herramienta_employes(data);
});
$("#herramientas").on("select2:unselect", function (e) {
    let data = e.params.data.text;
    delete_herramienta_employes(data);   
});

draw_empleado_info.addEventListener("DOMSubtreeModified", (e) => {
 employees_actives_in_draw();
carrusel_active();
});
carousel_next.addEventListener("click",(e)=>{
Carrusel_next_cards();
});
carousel_after.addEventListener("click",(e)=>{
    Carrusel_after_cards();
})