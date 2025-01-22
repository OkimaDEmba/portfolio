let toggle = true;
const img = document.getElementById("dinapic");
let checkbox = document.getElementById("test");


checkbox.addEventListener("change", function(){
  if (this.checked){
    document.getElementById("dinapic").src = 'images\\curseddina.jpg';
  }
})