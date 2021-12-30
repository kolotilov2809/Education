'use strict'

let box = document.getElementById('box'); //получить элемент по id
let btn = document.getElementsByTagName('button'); //получить элементы по имени тэга
let circle = document.getElementsByClassName('circle'); //поиск по имени класса
let heart = document.querySelectorAll('.heart'); //универсаьный поиск любого селектора
let oneHeart = document.querySelector('.heart'); //получение только  первого(0) элемента
let wrapper = document.querySelector('.wrapper');


/* console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart[1]);
console.log(oneHeart); */

box.style.backgroundColor = 'green'; //поменять цвет 
btn[1].style.borderRadius = '100%'; //поменять округлость у второй кнопки
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//1 способ перекрасить все сердечки
/* for (let i = 0; i<heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
} */

//2 способ - верный.
/* heart.forEach(function(item, i, massives) {
    item.style.backgroundColor = 'blue';
}); */


//создание дива
let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');
div.classList.add('black');

/* div.innerHTML = '<h1>Hello, world!</h1>'; */ //вставить текст html
div.textContent = 'Hello, world!';
//document.body.appendChild(div);
//wrapper.appendChild(div); //вставить 
document.body.insertBefore(div,circle[0]); //вставить перед чем то
document.body.removeChild(circle[1]); //удалить элемент со страницы, у которого родитель body
wrapper.removeChild(heart[1]); //удалить элемент, который лежит в каком то диве
document.body.replaceChild(btn[1], circle[1]); //заменить один элемент на другой (на который заменить, который заменить)

console.log(div);
