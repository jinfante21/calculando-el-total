document.addEventListener("DOMContentLoaded", function () {

  let cantidad = 0;

  const cantidadElemento = document.getElementById("cantidad");
  const totalPagarElemento = document.getElementById("totalPagar");
  const precioBaseElemento = document.getElementById("precioBase");

  const btnMas = document.getElementById("btnMas");
  const btnMenos = document.getElementById("btnMenos");

  let precioBase = parseInt(precioBaseElemento.textContent);

  function actualizarTotal() {
    let total = precioBase * cantidad;
    cantidadElemento.textContent = cantidad;
    totalPagarElemento.textContent = total;
  }

  btnMas.addEventListener("click", function () {
    cantidad++;
    actualizarTotal();
  });

  btnMenos.addEventListener("click", function () {
    if (cantidad > 0) {
      cantidad--;
      actualizarTotal();
    }
  });

});