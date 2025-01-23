let checkbox = document.getElementById("togglepic");
const img = document.getElementById("dinapic");

checkbox.addEventListener("change", e =>{
  if (e.target.checked){
    img.src = "images\\curseddina.jpg";
  }
  else {
    img.src = "images\\dina.jpg";
  }
})