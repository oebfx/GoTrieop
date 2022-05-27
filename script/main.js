const screenWidth = window.screen.width;
const availableScreenWidth = window.screen.availWidth;
const windowOuterWidth = window.outerWidth;
const windowInnerWidth = window.innerWidth;
const windowInnerWidth2 = document.documentElement.clientWidth;
const pageWidth = document.documentElement.scrollWidth;
console.log(screenWidth);
console.log(availableScreenWidth);
console.log(windowOuterWidth);
console.log(windowInnerWidth);
console.log(windowInnerWidth2);
console.log(pageWidth);


//меню 
const mobile_menu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.nav-items');
const toggleMenu = function () {
    menu.classList.toggle('active');
}


mobile_menu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
});


document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == mobile_menu;
    const menu_is_active = menu.classList.contains('active');

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }


});


// //соцсети
// const footer_social_mobile = document.querySelector('.footer-social-mobile');
// const social = document.querySelector('.footer-social__items');
// const toggleSocial = function () {
//     social.classList.toggle('active');
//     footer_social_mobile.classList.toggle('active');
// }


// footer_social_mobile.addEventListener('click', function (e) {
//     e.stopPropagation();
//     toggleSocial();
// });

// document.addEventListener('click', function (e) {
//     const targets = e.target;
//     const its_social = targets == social || social.contains(targets);
//     const its_footer_social = targets == footer_social_mobile;
//     const footer_social_is_active = social.classList.contains('active');

//     if (!its_social && !its_footer_social && footer_social_is_active) {
//         toggleSocial();
//     }
// });




//слайдер

const swiper = new Swiper('.swiper', {
    spaceBetween: 50,

    loop: true,
    slidesPerView: 1,

    breakpoints: {
        533: {
            slidesPerView: 1,
            
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 30,

        },
        1050: {
            slidesPerView: 3,

        }

    },



    // стрелки навигации
    navigation: {

        prevEl: '.swipe-btn-prev',
        nextEl: '.swipe-btn-next',
        

    },

});