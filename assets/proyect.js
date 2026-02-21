document.addEventListener("DOMContentLoaded", function () {

  let cantidad = 0;
  let totalGeneral = 0;

  const cantidadElemento = document.getElementById("cantidad");
  const totalGeneralElemento = document.getElementById("totalGeneral");
  const precioBaseElemento = document.getElementById("precioBase");

  const btnMas = document.getElementById("btnMas");
  const btnMenos = document.getElementById("btnMenos");
  const btnAgregar = document.getElementById("btnAgregar");

  let precioBase = parseInt(precioBaseElemento.textContent);

  function actualizarCantidad() {
    cantidadElemento.textContent = cantidad;
  }

  btnMas.addEventListener("click", function () {
    cantidad++;
    actualizarCantidad();
  });

  btnMenos.addEventListener("click", function () {
    if (cantidad > 0) {
      cantidad--;
      actualizarCantidad();
    }
  });

  btnAgregar.addEventListener("click", function () {

    if (cantidad > 0) {

      let subtotal = precioBase * cantidad;

      totalGeneral += subtotal;

      totalGeneralElemento.textContent =
        totalGeneral.toLocaleString("es-CL");

      cantidad = 0;
      actualizarCantidad();
    }

  });

});