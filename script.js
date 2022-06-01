function init() {
    const burgerIcon = document.querySelector('.burger-icon');
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelector('.nav-links');
    // const mobileNav = document.querySelector('.mobile-nav');
    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('closemobilemenu');
        navLinks.classList.toggle('active');
        // mobileNav.classList.toggle('mobile-nav-hide');
        // burgerIcon.classList.toggle('burger');
        // burgerIcon.classList.toggle('closemobilemenu');
    }); 
    
}

async function getSanity() {
    const clientId = '7cjl1phd';
    const url = `https://${clientId}.api.sanity.io/v2021-10-21/data/query/production?query=*[_type=='project']`;
    const response = await fetch(url);
    const results = await response.json()
    console.log(results.result)

        
}


init();
//getSanity();
const windowWidth = $(document).width()

    console.log('kjør')
    $(document).on('mousemove', function(e){

        $('.cursor').css({
            left: e.pageX - $('.cursor').width() / 2,
            top: e.pageY - $('.cursor').height() / 2
        })
    
        $(e.target).css('cursor', 'none')
    })
    
    $('a').on('mouseenter', function(){
        $('.cursor').addClass('cursorExpand')
    })
    $('a').on('mouseleave', function(){
        $('.cursor').removeClass('cursorExpand')
    })


var transitionSpeed = 1;
function animateContent() {          
    TweenMax.set('.borderAdjustment', {width: 0});
    TweenMax.set('.borderAdjustment-bottom', {width: 0});
    TweenMax.set('.bodytextParagraphOne, .bodytextParagraphTwo, .footerContainer, #digital, #designer, .outlined, #developer', {opacity: 0});
    TweenMax.set('.main-menu, #digital, #designer, .outlined, #developer ', {opacity: 0, y:25 });
    TweenMax.set('.footerContainer ', {opacity: 0, y:-25 });
    TweenMax.set('.day-nightElem', {opacity: 0, scale:0 });



    TweenMax.to('.borderAdjustment', transitionSpeed, {width: '100%', delay: .5})
    TweenMax.to('.borderAdjustment-bottom', transitionSpeed, {width: '85%', delay: .5})
    TweenMax.to('.main-menu', transitionSpeed / 2, {opacity: 1, y: 0, delay: 2})
    TweenMax.to('.projectGrid', transitionSpeed / 3, {opacity: 1, delay: 2.5})
    TweenMax.to('.day-nightElem', transitionSpeed / 2, {opacity: 1, scale: 1, delay: 1.5})
    
    TweenMax.to('.day-nightElem', transitionSpeed / 2, {opacity: 1, scale: 1, delay: 1.5})

    TweenMax.to('.footerContainer', transitionSpeed, {opacity: 1, y: 0, delay: 2})
    TweenMax.to('#digital', transitionSpeed / 2, {opacity: 1, delay: .6})
    TweenMax.to('#designer', transitionSpeed / 2, {opacity: 1, delay: .8})
    TweenMax.to('.outlined', transitionSpeed / 2, {opacity: 1, delay: 1})
    TweenMax.to('#developer', transitionSpeed / 2, {opacity: 1, delay: 1.2})
    // TweenMax.to('.bodytextParagraphOne, .bodytextParagraphTwo', transitionSpeed, {opacity: 1, delay: 2.5})
}
animateContent();