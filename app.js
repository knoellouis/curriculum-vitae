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

$('.scrollTo').click(function(){
    var getElement = $(this).attr('href');
    if($(getElement).length) {
        var getOffset = $(getElement).offset().top;
        $('html,body').animate({
            scrollTop: getOffset - 120
        }, 500);
    }
    return false;
})