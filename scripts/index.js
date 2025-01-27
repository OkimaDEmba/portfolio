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

const chronopic = document.getElementById("videogamedina");
const audio = document.getElementById("windscene")

function musicplay(){
  audio.play();
  audio.volume(0.4);
}
function musicstop(){
  audio.pause();
}

chronopic.addEventListener("mouseover", musicplay);
chronopic.addEventListener("mouseout", musicstop);