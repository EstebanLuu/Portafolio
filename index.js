//funcion que me aplica a la opcion seleccionada en el menu y quita la previamente selecionada
function seleccionar(link) {
  let opciones = document.querySelectorAll("#links a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  opciones[5].className = "";
  link.className = "seleccionado";
  let x = document.getElementById("nav");
}

//responsive menu function

function responsiveMenu() {
  let i = document.getElementById("nav");
  if (i.className === "") {
    i.className = "responsive";
  } else {
    i.className = "";
  }
}
