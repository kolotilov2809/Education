'use strict'; // код здесь обрабатывается в строгом режиме

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0); //Infinity тоже числовой тип данных
console.log('string'*9); //Nan тоже числовой тип данных
let some;
console.log(some); //вывод undefined, с помощью обозначяения переменной let с именем some мы имеем что то, но оно пустое, поэтому вывод undefined
//console.log(vyvod); //ссылка на несуществующую вещь, в коде не существует - null

let persone = {   //создаем объект persone со свойством name
    name: "Jhon",  //ключ: то что хотим поместить , как переменную (помещать можно числа, строки и булевое значение)
    age: 25,     //следующее свойство объекта
    isMarried: false
};

//console.log(persone.name); //достаем значение, прописываем название объекта, далее свойство
console.log(persone["name"]);//второй способ, если надо добраться до свойства заданного любой строкой

let arr = ['plum.png',36,'apple.bmp']; //создаем массив данных из строк. массив может содержать и другие типы данных и не обязательно однородных

console.log(arr[1]); //нумерация начинается с нуля, далее 1 и тд

// alert('Hello'); //общение с пользователем через модальное окно , кнопка ок
// confirm("are you here?") //общение с пользователем через модальное окно , кнопка ок и отмена
// let answer = confirm("are you here?");//зададим переменную answer
// console.log(answer); //тогда в консоль будет выводиться булевые значения true или false

// let answer = prompt("Тебе есть 18 лет?", "Да");//зададим переменную answer, с помощью prompt зададим вопрос польз-лю, далее указываем ответ по умолчанию
// console.log(answer); // вывод ответа польз-ля

/* let answer = +prompt("Тебе есть 18 лет?", "Да");//зададим переменную answer, с помощью prompt зададим вопрос польз-лю, далее указываем ответ по умолчанию
console.log(typeof(answer)); // команда typeof проверяет тип данных пришедших от польз-ля. тип данных всегда string, чтобы не вел пользователь
console.log("arr"+"-object") //конкатенация -сложение строк
console.log(4+"-object")//если сложить число и строку, то все равно будет ответ сложение строк */

// Инкремент и дикремент
// let incr = 10,
//     decr = 10;

// // incr++; //инкремент
// // decr--;//декримент

// console.log(incr++);
// console.log(decr--);

// console.log(++incr);
// console.log(--decr);

// console.log(incr++);
// console.log(decr--);

console.log(5%2);

// = это присваивание
// == это сравнение
// === это строгое сравнение по типам данных

console.log('2' == 2);
console.log('2' === 2);

let isChecked = true,
    isClose = true;

console.log(isChecked || !isClose);
console.log(isChecked && isClose);



