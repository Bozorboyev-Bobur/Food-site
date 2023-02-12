const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    headerMenu.classList.toggle('active')
    document.body.classList.toggle('lock')
})

document.querySelectorAll('.header-menu__link').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    headerMenu.classList.remove('active')
    document.body.classList.remove('lock')

}))