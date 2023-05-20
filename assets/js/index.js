const icon_hamburguer = document.getElementById('icon-nav');

icon_hamburguer.addEventListener('click', function() {

    if (icon_hamburguer.getAttribute('name') == 'reorder-four-outline') {
        icon_hamburguer.setAttribute('name', 'close-outline');
    }else{
        icon_hamburguer.setAttribute('name', 'reorder-four-outline');
    }
});
