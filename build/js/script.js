let controlButton1 = document.querySelector('.slider__controls-item--1');
let controlButton2 = document.querySelector('.slider__controls-item--2');
let controlButton3 = document.querySelector('.slider__controls-item--3');

let slide1 = document.querySelector('.slider__slide--1');
let slide2 = document.querySelector('.slider__slide--2');
let slide3 = document.querySelector('.slider__slide--3');

let bodyColor = document.querySelector('.body');

let enter = document.querySelector('.page-header__button--enter');
let search = document.querySelector('.page-header__button--search');
let modalEnter = document.querySelector('.layout--enter');
let modalSearch = document.querySelector('.layout--search');

search.onclick = function () {
    modalSearch.classList.toggle('layout--shown');
    modalEnter.classList.remove('layout--shown');
}

enter.onclick = function () {
    modalEnter.classList.toggle('layout--shown');
    modalSearch.classList.remove('layout--shown');
}

controlButton1.onclick = function () {
    slide1.classList.add('slider__slide--current');
    slide2.classList.remove('slider__slide--current');
    slide3.classList.remove('slider__slide--current');

    controlButton1.classList.add('slider__controls-item--current');
    controlButton2.classList.remove('slider__controls-item--current');
    controlButton3.classList.remove('slider__controls-item--current');

    bodyColor.classList.add('body--grey');
    bodyColor.classList.remove('body--violet');
    bodyColor.classList.remove('body--pink');
};

controlButton2.onclick = function () {
    slide1.classList.remove('slider__slide--current');
    slide2.classList.add('slider__slide--current');
    slide3.classList.remove('slider__slide--current');
    controlButton1.classList.remove('slider__controls-item--current');
    controlButton2.classList.add('slider__controls-item--current');
    controlButton3.classList.remove('slider__controls-item--current');

    bodyColor.classList.remove('body--grey');
    bodyColor.classList.add('body--violet');
    bodyColor.classList.remove('body--pink');
};

controlButton3.onclick = function () {
    slide1.classList.remove('slider__slide--current');
    slide2.classList.remove('slider__slide--current');
    slide3.classList.add('slider__slide--current');
    controlButton1.classList.remove('slider__controls-item--current');
    controlButton2.classList.remove('slider__controls-item--current');
    controlButton3.classList.add('slider__controls-item--current');

    bodyColor.classList.remove('body--grey');
    bodyColor.classList.remove('body--violet');
    bodyColor.classList.add('body--pink');
};

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');


    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item){

        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function(e) {

            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
               Нужно подстраховаться. */
            e.preventDefault();

            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
               и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach


    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready