$(document).ready(function() {


   var menuBtn = $('.top-nav-btn');
      var menu = $('.nav__menu');
      menuBtn.on('click', function(event){
          event.preventDefault();
          menu.toggleClass('menu__activ');
      });


      $('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: 300
	

  
});


});
