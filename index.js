//responsive menu function

function responsiveMenu() {
  let i = document.getElementById("nav");
  if (i.className === "") {
    i.className = "responsive";
  } else {
    i.className = "";
  }
}
