$(document).ready(() => {
    //Scroll to section id
    $('.header__navigation-link').mPageScroll2id({
        offset:10
    });

    // Interactive buttons in a survey
    $('.survey__question-answer').on('click', function(e) {
        $('.survey__question-answer').removeClass('survey__question-answer_active');
        $(e.currentTarget).addClass('survey__question-answer_active');
    })
    // Toggle faqs
    $('.faq').on('click', function(e) {
       let answer = $(e.currentTarget).children()[0].lastElementChild;
       let arrow = $(e.currentTarget).children()[1];
       $(arrow).toggleClass('faq__img_active');
       $(answer).toggle(300);
    })
    // Slider in partners section
    $(function(){
        let $slider = $('#slider');
        function loopImg(){
           let $first = $slider.find('.partners__slider-container img:first-child');
           $first.animate({
           'marginLeft': '-='+ $first.outerWidth(true) +'px'
           }, 5000, 'linear', function(){
           $first.clone().removeAttr('style').appendTo($first.parent());
           $first.remove();
          loopImg();
         });
        }
        loopImg();
       }) 
});