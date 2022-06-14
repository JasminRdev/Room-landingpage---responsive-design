const mySlide = document.querySelectorAll('.mySlider')

let counter = 1;
slideFun(counter);



function plusSlides(n) {
  counter += n;
  slideFun(counter);
}



function slideFun(n) {
  let i;
  for(i = 0; i < mySlide.length; i++){
    mySlide[i].style.display = "none";
  }
  
  
  if(n > mySlide.length){
    counter=1;
  }
  if(n < 1){
    counter = mySlide.length;
  }
  
  mySlide[counter -1 ].style.display = "grid";
  
}






function toggleMenu(){
  let menuBtn = document.getElementById("menu-btn");
  let navLinks = document.getElementById("nav-links");
  let nav = document.getElementById("nav");
  let backgroundMenu = document.getElementById("background-for-menu");
  
  if(menuBtn.classList.contains("menu-btn-open")){
    menuBtn.classList.remove("menu-btn-open");
    navLinks.classList.remove("nav-links-open");
    nav.classList.remove("background-color-bright");
    backgroundMenu.classList.remove("background-color-dark");
    
  } else {
    menuBtn.classList.add("menu-btn-open");
    navLinks.classList.add("nav-links-open");
    nav.classList.add("background-color-bright");
    backgroundMenu.classList.add("background-color-dark");
  }
}