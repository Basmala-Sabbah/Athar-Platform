$(document).ready(function(){
    $('.carousel-01').owlCarousel({
         loop:true,
         margin:10,
         nav:true,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:2
             },
             1000:{
                 items:4
             }
         }
   });
 
   $('.carousel-02').owlCarousel({
     loop:true,
     margin:10,
     nav:true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:2
         },
         1000:{
             items:3
         }
     }
 });
 
 })
 
 


 
  const text = "Educational computer courses ";
    const typeText = document.getElementById("type-text");
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        typeText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
      }
    }

    window.onload = function () {
      setTimeout(typeWriter, 1000); // Start typing after animation
    };