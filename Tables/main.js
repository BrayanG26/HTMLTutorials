var tabla = document.getElementsByClassName("tabla-frutas");
var caja = document.getElementById("visible");
console.log(caja);
console.log(tabla);
var celdas = document.getElementsByClassName("price");
// console.log(celdas);
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener("click", function (event) {
        // console.log(event);
        precio = document.getElementById("precioFruta");
        nombre = document.getElementById("nombreFruta");
        nombre.innerHTML = event.target.previousElementSibling.innerHTML;
        precio.innerHTML = event.target.textContent;
        caja.style.display = "inline-block";
    }, false);
}