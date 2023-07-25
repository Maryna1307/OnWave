const screenWidth = window.screen.availWidth
let container = document.querySelector('.footer__container');
let logo = document.querySelector('.logo_white');
if (screenWidth <= 992) {
    logo.remove();
    container.insertAdjacentHTML('afterbegin', `<div class="logo_white">
    <img src="./assets/svg/logo_white.svg" alt="logo_white" class="log__img_white">
    </div>`)
}