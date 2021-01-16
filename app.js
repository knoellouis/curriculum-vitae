// $(function (){
//     var $meters = $(".full-skill-bar > span");
//     var $section = $('#skills');

//     function loadBars() {
//         $meters.each(function (){
//             var $el = $(this);
//             var origWidth = $el.width();
//             $el.width(0);

//             $el.animate({width: origWidth}, 1500);
//         });
//     }

//     $(document).bind('scroll', function(ev){
//         var scrollOffset = $(document).scrollTop();
//         var containerOffset = $section.offset().top - window.innerHeight;

//         if(scrollOffset > containerOffset){
//             loadBars();

//             $(document).unbind('scroll');
//         }
//     });
// });

$('.scrollTo').click(function () {
  var getElement = $(this).attr('href');
  if ($(getElement).length) {
    var getOffset = $(getElement).offset().top;
    $('html,body').animate(
      {
        scrollTop: getOffset - 75,
      },
      500
    );
  }
  return false;
});

function hideMenu() {
  let menuOpen = document.querySelector('.navigation__mobile--checkbox').checked;

  if ((menuOpen = true)) {
    document.querySelector('.navigation__mobile--checkbox').checked = false;
  }
}
window.addEventListener('scroll', hideMenu);
