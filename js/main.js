
// Mobile version for the menu to appear once clicking on the burger menu
$('.icon').on('click', function() {
    $('.nav-links').toggle();
  });
  

  // Desktop version - mouseover for Category list for the sub-menu to appear

  $('.category-list').on('mouseover', () => {
    $('.sub-categories-menu-desktop').show()
  })
  
  $('.sub-categories-menu-desktop').on('mouseleave', () => {
    $('.sub-categories-menu-desktop').hide();
  })


  // Textile page 

  $('.artists-list').on('click', function() {
    $('.artists-list-menu').toggle();
  })
  
  