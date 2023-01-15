(function ($) {
  "use strict";

  $(".change_lang").on("click", () => {
      $(".dropdown-list .wrapper, nav .dropdown-list .wrapper").slideToggle(200)
  })
  

  
  var $grid = $('.filter-container').isotope({
    // options
    itemSelector: '.collection-item',
    layoutMode: 'fitRows',
    // hiddenStyle: {
    //   opacity: 0,
    // },
    // visibleStyle: {
    //   opacity: 1
    // },
    transitionDuration: '0.8s',
    isOriginLeft: false


  });
  

  $('.category-item li').on( 'click', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  

})(jQuery);

