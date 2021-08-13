const $iconMenu = window.document.getElementById('icon-menu')
const $navbar = window.document.getElementById('navbar')


$iconMenu.addEventListener('click', evt => {
    const hamburgerIcon = "/assets/icons/icon-hamburger.svg" 
    const closeIcon = "/assets/icons/icon-close.svg" 

    $iconMenu.classList.toggle('tob-bar__icon-menu--is-active')

    if ($iconMenu.classList.contains('tob-bar__icon-menu--is-active')){
        $iconMenu.src = closeIcon
    } else {
        $iconMenu.src = hamburgerIcon
    }
    $navbar.classList.toggle('navbar--is-active')
})