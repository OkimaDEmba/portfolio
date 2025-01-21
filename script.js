let toggle = true;
const img = document.getElementById("dinapic");
cont toggleP = document.getElementById("togglepic");
img.addEventListener("click", function(){
  toggle = !toggle;
  if (toggle === true){
    img.src = 'images\\dina.jpg';
  }
  else {
    img.src = 'images\\curseddina.jpg';
  }
})