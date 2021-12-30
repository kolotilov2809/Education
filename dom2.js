

/* let btn = document.querySelectorAll('button');
let wrap = document.querySelector('.wrapper');
let link = document.querySelector('a'); */

/* btn[0].onclick = function() {
    alert('You nazali first button');
};

btn[0].onclick = function() {
    alert('Вы нажали опять first button');
}; */

// btn[0].addEventListener('click', function(event) {
//     /* console.log(event);
//     let target = event.target;
//     target.style.display = 'none'; */
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
    
// });

// wrap.addEventListener('click', function() {
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

/* link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Вышли');
    })
});
 */
/* btn[0].addEventListener('click', function() {
    
    alert('Вы нажали опять first button');
}); */

/* btn[0].addEventListener('mouseenter', function() {
    alert('Вы навели на первую кнопку');
}); */

//Изменение текста в инпуте
/* function buttonClick() {
	let input = document.getElementById('input');
	input.value = '!!!';
}
 */
//Вывод содержимого инпута
/* function buttonClicck() {
	lethdrf input = document.getElementById('input');
	alert(input.value);
} */

//Квадрат содержимого инпута
/* function buttonClicksqr() {
	let input = document.getElementById('input');
	let number = Number(input.value);
	let square = number*number;
	alert(square);
} */

//Обмен содержимым между инпутами
/* function buttonClick() {
	let input1 = document.getElementById('input1');//создаем переменную, чтобы найти инпут 
	let input2 = document.getElementById('input2');//создаем переменную, чтобы найти инпут 
	let input1Value = input1.value;//считываем значение инпута
	let input2Value = input2.value;//считываем значение инпута
	input1.value = input2Value;//присваиваем значение инпуту 1 из инпута 2
	input2.value = input1Value;//присваиваем значение инпуту 2 из инпута 1
} */

//По нажатию на кнопку меняется ее текст
/* в данной задаче воспользуемся кнопкой, созданной через input с атрибутом type в значении button, чтобы легко можно было сменить ее текст, обратившись к атрибуту value (в кнопке через тег button текст меняется через innerHTML, это тема следующего урока).
Решим задачу через this: */
/* function buttonClick(elem) {
	elem.value = 'Новый текст кнопки';
} */

//кнопки по нажатию на нее (она меняет цвет текста в инпуте):
//вар 1
/* function buttonClick() {
	var input = document.getElementById('input');
	input.style.color = 'red';
} */

//вар 2
/* function buttonClick() {
	document.getElementById('input').style.color = 'red';
} */

//кнопок по нажатию на них (одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует):
//Заблокирует элемент
/* function button1Click() {
	var input = document.getElementById('input');
	input.disabled = true;
} */

//Отблокирует элемент
/* function button2Click() {
	var input = document.getElementById('input');
	input.disabled = false;
} */

/* function buttonClick() {
	alert('Hello!');
} */

/* function buttonClick() {
	alert('Hello!');
} */

//алерт содержимого инпута
// function go(){
// 	elem = document.getElementById('test');
// 	alert(elem.value);
// }

//замена текста в инпуте
// function buttonClick() {
// 	let input = document.getElementById('test');
// 	input.value = '!!!';
// }

//замена картинки по нажатию кнопки
// function buttonClick() {
// 	let elem = document.getElementById('test');
// 	elem.src = '2.jpg';
// }

//при нажатии на инпут происходит алерт с текстом из инпута
// function go(elem){
// 	alert(elem.value);
// }

//фокус на инпуте с заменой текста
// function go(elem){
// 	elem.value = 'Ой, я поменял текст!';
// }

//замена текста в инпуте и обратно
// function go(elem){
// 	elem.value = 'Ой, я поменял текст!';
// }
// function stop(elem){
// 	elem.value = 'Ой, а теперь еще раз поменял!';
// }

//замена текста в инпуте
// function go(elem){
// 		elem.value = 'Ку - ку!';
// 	}

// замена названия и блокировка
// function go(elem){
// 		elem.value = 'Ку - ку!';
// 		elem.disabled = true;
// 	}

//замена картинки по наведению
/* function over(elem) {
	elem.src = '2.jpg';
}*/

//по нажатию на кнопку смена цвета текста в инпуте
/* function go() {
	elem = document.getElementById('test').style.color = 'red';
	elem.style.width = '300px';
}
 */


//скрывает и показывает инпут
/* function hide(){
	elem = document.getElementById('test');
	elem.style.display = 'none';
}
function show(){
	elem = document.getElementById('test');
	elem.style.display = 'inline-block';
} */

//смена цвета и текста в инпуте по нажатию на кнпоку
/* function go() {
	elem = document.getElementById('test');
	elem.style.color = 'red';
	elem.value = 'Поменял цвет и текст';
} */

//заблокировать инпут + появление инпута для разблокировки
/* function block() {
	let block = document.getElementById('block');
	let unblock = document.getElementById('unblock');
	block.value = 'Тепперь не нажать';
	block.disabled = true;
	unblock.style.display = 'block';
}

function unblock() {
	let block = document.getElementById('block');
	let unblock = document.getElementById('unblock');
	block.value = 'Снова можно нажать';
	block.disabled = false;
	unblock.style.display = 'none';
} */

// кнопка считает количество нажатий по ней
/* function go(elem) {
	elem.value = parseInt(elem.value) + 1;
} */

//по нажатию кнопки инпут слева исчезает и появляется справа
/* function go(){
	elem = document.getElementById('test');
	elem.value = 'Теперь я плаваю справа!';
	elem.style.cssFloat = 'right';
}*/

//показывает имя класса инпута
/* function go(){
	elem = document.getElementById('test');
	elem.value = 'Мои css классы: '+elem.className;
} */

// По нажатию на кнопку в нижнем инпуте появится квадрат числа из верхнего инпута.
/* function go(){
	var test = document.getElementById('test');
	var value = test.value;
	var result = document.getElementById('result');
	result.value =  value*value;
} */

//По нажатию на кнопку в нижнем инпуте появится квадрат числа из верхнего инпута. Если введено не число - должна показаться ошибка
/* function go(){
	let test = document.getElementById('test');
	let value = test.value;
	if(!isNaN(value)){
		let result = document.getElementById('result');
		result.value =  value*value;
	} else {
		alert('Введено не число!')
	}
} */

// курсор в различных состояниях
/* function go(elem){
	elem.disabled = true;
	elem.style.cursor = 'not-allowed';
} */

/* function add(text){
	let input = document.getElementById('input');
	input.value = input.value + text;
} */

//Работа с innerHTML, outerHTML
//Функция func срабатывает по клику на кнопку input:
/* function func() {
	var elem = document.getElementById('test'); //получаем наш абзац
	elem.innerHTML = '!'; //записываем в него новый текст
} */

// Можно записывать не только текст, но и теги и они будут работать (в нашем случае текст станет жирным)
/* function func() {
	let elem = document.getElementById('test');
	elem.innerHTML = '<b>!</b>';
} */

// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src
/* let elems = document.getElementsByTagName('img'); //получаем элементы img 
for (let i = 0; i < elems.length; i++) {//запускаем цикл, пока i меньше колва элементов, ищем их 
	elems[i].onclick = func;//каждому элементу img вешаем событие onclick = func
}

function func() {
	alert(this.getAttribute('src'));//вывести через alert с помощью this атрибут src
} */

//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст
/* let elems = document.getElementsByTagName('a');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('mouseover', func);
}

function func() {
	this.title = this.innerHTML;
} */

// Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках
/* let elems = document.getElementsByTagName('a');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('mouseover', func);
}

function func() {
	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
} */

//Дополните предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текст
/* let elems = document.getElementsByTagName('a');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('mouseover', func);
}

function func() {
	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
	this.removeEventListener('mouseover', func);
} */

// Привяжите всем инпутам следующее событие - по потери фокуса каждый инпут выводит свое value в абзац с id="test"
/* let elems = document.getElementsByTagName('input');
let parag = document.getElementById('test');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('blur', func);
}

function func() {
	parag.innerHTML = this.value;
} */

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции.
/* let elems = document.getElementsByTagName('input');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', func);
}

function func() {
	// alert(this.getAttribute('value'));
	alert(this.value);
	this.removeEventListener('click', func);
} */

// Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит
/* let elems = document.getElementsByTagName('p');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', func);
}

function func() {
	this.innerHTML = this.innerHTML * this.innerHTML;
} */

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.
/* let elems = document.getElementsByTagName('input');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('blur', func);
}

function func() {
	let correctLength = this.dataset.length; //правильное количество
	let inputDataLength = this.value.length; //вбитое в инпут количество
	if(correctLength == inputDataLength){
		this.style.borderColor = 'green';
	} else {
		this.style.borderColor = 'red';
	}
} */

// Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener
let elems = document.getElementsByTagName('div');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', setRed);
}

function setRed() {
	this.style.background = 'red';
	this.removeEventListener('click', setRed);
	this.addEventListener('click', setGreen);
}

function setGreen() {
	this.style.background = 'green';
	this.removeEventListener('click', setGreen);
	this.addEventListener('click', setRed);
}