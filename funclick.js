const botaoAnimarP = document.getElementById("BtAn");
const caixaP = document.querySelector(".Perfil");

botaoAnimarP.addEventListener("click", () => {
  caixaP.style.animation = "";
  setTimeout(() => caixaP.style.animation = "fadeOut 1s linear", 5);
});

const botaoAnimarT = document.getElementById("BtMt");

const caixaT = document.querySelector(".Trabalhos");
botaoAnimarT.addEventListener("click", () => {
  caixaT.style.animation = "";
  setTimeout(() => caixaT.style.animation = "fadeIn 1s linear", 5);
});

function setTopo(){
    $(window).scrollLeft(0);
}
$(window).bind('scroll', setTopo);

function mostra(){
  document.getElementById('johns').style.visibility="visible";
}

function esconde(){
  document.getElementById('johns').style.visibility="hidden";
}

function mostraH(){
  document.getElementById('harvard').style.visibility="visible";
}

function escondeH(){
  document.getElementById('harvard').style.visibility="hidden";
}