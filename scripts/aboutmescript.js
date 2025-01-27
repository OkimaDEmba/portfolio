const chronopic = document.getElementById("videogamedina");
const audio = document.getElementById("windscene")

chronopic.addEventListener("mouseover", function(){
  audio.play();
  audio.volume = 0.4;
});
chronopic.addEventListener("mouseout", function(){
  audio.pause();
});