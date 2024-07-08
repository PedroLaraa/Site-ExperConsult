const menu = document.getElementById('icons-menu');


  document.getElementById('hamburguer').addEventListener('click', () =>{
  
      menu.classList.add('on');
  })
  
  document.getElementById('close').addEventListener('click', () =>{
  
      menu.classList.remove('on');
  })
  
  const links = document.querySelectorAll('ul li a');
  
  for (const link of links){
      link.addEventListener('click', () => {
          menu.classList.remove('on')
      }
      )
  }

const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnail-preview img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    mainImage.src = this.src;
  });
}); 

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:false,
    autoplayTimeout:5000,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
});


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});