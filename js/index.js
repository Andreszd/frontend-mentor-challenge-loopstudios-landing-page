const $iconMenu = window.document.getElementById('icon-menu')
const $navbar = window.document.getElementById('navbar')
const $topBar = window.document.getElementById('top-bar')


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


window.addEventListener('scroll', evt => {
    const currentPositionScrollY = window.scrollY + 1
    const vh = window.document.documentElement.clientHeight
    if (currentPositionScrollY > vh){
        if (!$topBar.classList.contains('top-bar--bg-black-10')){
            $topBar.classList.add('top-bar--bg-black-10')
        }
    }else{
        if ($topBar.classList.contains('top-bar--bg-black-10')){
            $topBar.classList.remove('top-bar--bg-black-10')
        }
    }
})