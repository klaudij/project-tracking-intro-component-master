console.log('hello');



// CODE FOR MENU 
var menuButton = document.getElementById('menu');
var menuIcon = document.getElementById('mIcon');
var menuSee = document.querySelector("header nav ul");

function menuverschijnt(){

  if(menuSee.classList.toggle("terug"))
  menuIcon.src = "images/icon-close.svg";
  else{
    menuIcon.src = "images/icon-hamburger.svg";
  }

}

menuButton.addEventListener("click", menuverschijnt);