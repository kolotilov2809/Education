/* const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block'); */

//узнаем колво классов у первой кнопки
// console.log(btns[0].classList.length);

//метод item позволяет получить класс, который находится под определенным индексом
// console.log(btns[0].classList.item(1));

//чтобы добавить определенные классы
// console.log(btns[1].classList.add('red', 'trtrtr'));

//удалить ненужные нам классы
// console.log(btns[0].classList.remove('blue'));

//если этот класс сейчас есть на элементе, то класс будет убран. а если его нет, то наоборот добавлен
// console.log(btns[0].classList.toggle('blue'));

//данный метод позволяет проверять наличие класса на определенном элементе определенного класса и возвращает булиновое значение
/* if (btns[1].classList.contains('red')) {
    console.log('red');
} */

//обращаемся к первой кнопке, назаначаем обработчик события, что наш пользователь может кликнуть по первой кнопке. Что если вдруг у нашей второй кнопки  нет класса red, то я буду его добавлять, а если он есть, то я буду его убирать
/* btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
}); */

//через метод toggle
/* btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
}); */

//делегирование событий
// Делеггирование - мы берем элемент, который является родителем для всех этих кнопок и работаем непосредственно с ним. то есть мы назначаем обработчик события клика на родителя, а внутри уже будем проверять , что мы кликнули. То есть мы назначаем функцию на его потомков,если они подходят под какие то определенные параметры. 

//назначим обработчик события. event - объект события, содержит всю информацию о том элементе, с которым происходит событие. в if  - нам надо точно удостоверится, что пользователь кликнул в кнопку. для этого надо определить, что это точно тэг button. if event.target И event.target.tagName равен "BUTTON" (то есть клик произошел именно по кнопке), то вывести в консоль Hello!
/* wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    }
    // console.dir(event.target);
}); */

//если мы динамически создадим кнопку с классом red, то она добавится на страницу и по нажатию на нее, тоже будет выводиться в консоль Hello
/* const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);  */

//выводить в console.log('Hello'), если клик по кнопке с классом blue
/* wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('blue')) {
        console.log('Hello');
    }
    // console.dir(event.target);
}); */

//делегирование, которое любят сотрудники Google
//matches - какой то элемент совпадает с чем то
/* wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }
    // console.dir(event.target);
}); */

//Итог:
//Делегирование событий - это один из самых полезных приемов для работы с DOM деревом. Он отлично подходит если есть много элементов с одинаковыми обработчиками. При чем при динамическом изменении, они точно так же будут применяться к новым элементам. и таким образом мы напишем гораздо меньше кода и сэкономим память браузера.

//задачки на закрепление
//Дан элемент #elem. Добавьте ему класс www.
const elem = document.querySelectorAll('button');
console.log(elem[0].classList.add('www'));

//Дан элемент #elem. Удалите у него класс www.
console.log(elem[8].classList.remove('www'));

// Дан элемент #elem. Проверьте наличие у него класса www.
if (elem[8].classList.contains('www')) {
    console.log('www');
};

//Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
elem[8].addEventListener('click', () => {
    if (!elem[8].classList.contains('www')) {
        elem[8].classList.add('www');
    } else {
        elem[8].classList.remove('www');
    }
});

console.log(elem[8].classList.toggle('www'));

//Дан элемент #elem. Узнайте количество его классов.
console.log(elem[0].classList.length);

// Дан элемент #elem. Выведите последовательно алертом его классы.
for (let i = 0; i < elem.length; i++) { // перечислить классы
    alert( elem[0].classList[i] ); // 
  };

  //Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.
  let elem = document.querySelector('#elem');
  elem.style.cssText = 'color: green; font-size: 30px; border: 5px';

//   Дан элемент #elem. По клику на него выведите название его тега.
let elem = document.getElementById('elem');
elem.onclick = function() {
    alert(elem.tagName);
};

//Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
let elem = document.getElementById('elem');
elem.onclick = function() {
    alert(elem.tagName.toLowerCase());
};

//Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
let elems = document.getElementsByClassName('www');
for(let i = 0; i < elems.length; i++){
elems[i].innerHTML += ' ' + elems[i].tagName.toLowerCase();
}

//Дан ol. Вставьте ему в конец li с текстом 'пункт'
let ol = document.getElementById('ol');//получаем элемент по id
let li = document.createElement('li');//создаем динамически элемент li. Метод createElement позволяет создать новый элемент, передав в параметре имя тега
li.innerHTML = 'пункт';//вставляем в li текст пункт
ol.appendChild(li);//Метод appendChild позволяет вставить в конец какого-либо другой элемент

//Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
let ul = document.getElementById('ul');//получаем элемент по id
let arr = [1, 2, 3, 4, 5, 6, 7];//создаем массив
for(let i = 0; i < arr.length; i++){
//запускаем цикл. 
let li = document.createElement('li');//создаем динамически элемент li. Метод createElement позволяет создать новый элемент, передав в параметре имя тега
li.innerHTML = arr[i];//передаем в li массив
ul.appendChild(li);//в ul вставляем элементы li, которые состоят из эл-ов массива
}

//Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.
let ul = document.getElementById('ul');//получаем элемент по id
let arr = [1, 2, 3, 4, 5, 6, 7];//создаем массив
for(let i = 0; i < arr.length; i++){
//запускаем цикл. 
let li = document.createElement('li');//создаем динамически элемент li. Метод createElement позволяет создать новый элемент, передав в параметре имя тега
li.innerHTML = arr[i];//передаем в li массив
li.addEventListener('click', func);//добавляем событие. при нажатии на li должна запуститься функция
ul.appendChild(li);//в ul вставляем элементы li, которые состоят из эл-ов массива
}

function func () {
alert(this.innerHTML);//вывести сообщение на экран свой текст
}

// Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.
let ul = document.getElementById('ul');
let elem = document.getElementById('elem');

let newLi = document.createElement('li');//Метод insertBefore позволяет вставить элемент перед другим элементом. Чаще всего используется после создания элемента с помощью createElement. Метод применяется к родителю того элемента, перед которым произойдет вставка.
newLi.innerHTML = '!!!';

ul.insertBefore(newLi, elem);

// Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
let elem = document.getElementById('elem');
//Метод insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы.
elem.insertAdjacentHTML('beforeBegin', '<span> !!! </span>')