const icon_hamburguer = document.getElementById('icon-nav');

icon_hamburguer.addEventListener('click', function() {
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenu.style.left == '-260px') {
        icon_hamburguer.setAttribute('name', 'close-outline');
        mobileMenu.style.left = '0px';
    }else{
        icon_hamburguer.setAttribute('name', 'reorder-four-outline');
        mobileMenu.style.left = '-260px';
    }
});

ScrollReveal().reveal('.info');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
