// Mobile version for the menu to appear once clicking on the burger menu
$('.icon').on('click', function () {
  $('.nav-links').toggle();
});


// Desktop version - mouseover for Category / VWhere on the navbar

$('.category-list').on('mouseover', () => {
  $('.sub-categories-menu-desktop').show()
})

$('.sub-categories-menu-desktop').on('mouseleave', () => {
  $('.sub-categories-menu-desktop').hide();
})

$('.where-list').on('mouseover', () => {
  $('.sub-categories-where').show()
})

$('.sub-categories-where').on('mouseleave', () => {
  $('.sub-categories-where').hide();
})


// Textile page 

$('.artists-list').on('click', function () {
  $('.artists-list-menu').toggle();
})


// artist textile page - read more/less for both desktop and mobile
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}