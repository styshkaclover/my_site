'use strict';

const anchors = document.querySelectorAll('.goto[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
        if (burger.classList.contains('_menu-active')) {
            burger.classList.remove('_menu-active');
            nav.classList.remove('_menu-active');
            // document.body.classList.remove('_lock')
        }
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        event.preventDefault()
    });
}

let goToTopEl = document.getElementById('goToTop');

window.addEventListener('scroll', (event) => {
    if (window.pageYOffset > 500) {
        goToTopEl.style.display = "block";
    } else {
        goToTopEl.style.display = "none";
    }
});

const burger = document.querySelector('.header__bars');
const nav = document.querySelector('.header__nav');

if (burger) {
    burger.addEventListener('click', (event) => {
        burger.classList.toggle('_menu-active');
        nav.classList.toggle('_menu-active');
        // document.body.classList.toggle('_lock')

    });
}




// const isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     IOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function () {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };

// if (isMobile.any()) {
//     document.body.classList.add('_touch');
// } else {
//     document.body.classList.add('_mouse');
// }
