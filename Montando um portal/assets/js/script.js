var slideItem = 0;
window.onload = function() {
   setInterval(passarSlide, 5000);    

    var slidewidth = document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    for(var i in objs) {
    	objs[i].style.width = slidewidth +'px';

    	//objs[i].style.width = slidewidth; nao funciona mais 
    }
}
function passarSlide() { // chamando o "passarSlide" nome declarado do evento onClick no HTML
      var slidewidth = document.getElementById("slideshow").offsetWidth; //aplica automaticamente a passagem de cada slide
      if (slideItem >= 3) {
      	slideItem = 0;
      }
      else {
      	 slideItem++;
      }
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
function mudarSlide(pos) {
      slideItem = pos;
      var slidewidth = document.getElementById("slideshow").offsetWidth;
      document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

// mudança no menu responsivo para mobile

function toggleMenu() {   //nome do evendo onclick desejado no HTML
     
     var menu = document.getElementById("menu");
     
     if (menu.style.display == 'none' || menu.style.display == '') {  // se o menu estiver invisivel ou estiver vazio
         menu.style.display = "block";    // o menu fica visivel
     } 
     else {                           //senão
         menu.style.display = "none";   //ele fica invisivel
     }
}