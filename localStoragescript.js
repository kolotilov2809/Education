'use strict';

// localStorage - Свойство глобального объекта window. объект, который встроен в браузер и может хранить данные до 5 мб. 

/* localStorage.setItem('number', 5);//сохранить пару ключ/значение. setItem(key, value)

// localStorage.removeItem('number');//removeItem(key) – удалить данные с ключом key.
// localStorage.clear();//clear() – удалить всё.

localStorage.getItem('number');//getItem(key) – получить данные по ключу key.
console.log(localStorage.getItem('number')); */

// Пример работы
// получаем элементы со страницы
const checkbox = document.querySelector('#checkbox'),//id
        form = document.querySelector('form'),
        change = document.querySelector('#color');//id кнопки

if (localStorage.getItem('isChecked')) {//если в локалсторадж есть item с именем isChecked
    checkbox.checked = true;//то обращаемся к checkbox и его свойтсву checked и устанавливаем его в true. 
};

if (localStorage.getItem('bg') === 'changed') {//если в локал сторадж есть метка bg в значении changed
    form.style.backgroundColor = 'red';//то покрасить форму в красный цвет

//для чекбокса вешаем событие change-изменение
checkbox.addEventListener('change', ()=> {
    localStorage.setItem('isChecked', true);//обращаемся к локал хранилищу. при изменении чекбокса будм изменять, что там находится
}
    )};

// обращаемся к кнопке, вешаем событие при клике
change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {//если в локалсторадж, есть ключ bg и он строго в значении changed
        localStorage.removeItem('bg');//то тогда удалить 
        form.style.backgroundColor = '#fff';//поменять цвет формы на белый
    } else {
        localStorage.setItem('bg', 'changed');//если у нас нет ничего в локалсторадж,то устанавливаем ключ bg в позицию changed.
        form.style.backgroundColor = 'red';//окрашиваем форму в красный цвет
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));