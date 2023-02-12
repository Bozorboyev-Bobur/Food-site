const openPopUp = document.getElementById('open-pop-up')
const closePopUp = document.getElementById('pop-up-close')
const popUp = document.getElementById('pop-up')
const popUpButton = document.getElementById('pop-up__button')
const burgerMenu = document.getElementById('header-menu')
const burgerMenuBtn = document.getElementById('header-menu-btn')
const popUpBg = document.getElementById('pop-up__bg')
const infoBtn = document.getElementById('info-btn')
const infoList = document.getElementById('info-list')
const productCard = document.getElementById('product-card')
const bigCardRightText = document.getElementById('big-card-right__text')


openPopUp.addEventListener('click', function (e) {
    e.preventDefault()
    popUp.classList.add('active')
    document.body.classList.add('lock')
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
    document.body.classList.remove('lock')
})

popUpButton.addEventListener('click', () => {
    popUp.classList.remove('active')
    document.body.classList.remove('lock')
    burgerMenu.classList.remove('active')
    burgerMenuBtn.classList.remove('active')
})

popUpBg.addEventListener('click', function (e) {
    e.preventDefault()
    popUp.classList.remove('active')
    document.body.classList.remove('lock')
})


infoBtn.addEventListener('click', function (e) {
    e.preventDefault()
    infoList.classList.toggle('active')
})


// productCard.addEventListener('click', function (e) {
//     e.preventDefault()
//     infoList.classList.remove('active')
// })


var i;
var divs = document.getElementsByTagName('div');
for (i = 0; i < divs.length; i++) {
    if (divs[i].className == 'big-card-right__text') {
        divs[i].innerHTML = divs[i].innerHTML.substring(0, 220) + '...';
    }
}