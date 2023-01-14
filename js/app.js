(function ($) {
  "use strict";

  $(".change_lang").on("click", () => {
      $(".dropdown-list .wrapper, nav .dropdown-list .wrapper").slideToggle(200)
  })
  

  
  var $grid = $('.filter-container').isotope({
    // options
    itemSelector: '.collection-item',
    layoutMode: 'fitRows'

  });
  

  $('.category-item li').on( 'click', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    console.log(filterValue)
  });
  

})(jQuery);

