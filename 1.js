'use strict'

//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
let a = 4,
    b = 4;

function func(a,b) {
    if (a>b) {
        return 1;
    } else if (a<b) {
        return -1;
    }
    return 0
}
console.log(func(a,b));

//Написать функцию, которая вычисляет факториал переданного ей числа.
let a = 3, fak = 1;
function fakt(a) {
    for (i = 1; i <= a; i++) {
        fak *= i;
    }
    return fak;
}
console.log(fakt(a));

//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149
let a = 1, b = 4, c = 9;
function concat (a, b, c) {
    if (a >= 0 && b >= 0 && c >= 0) {
        return Number( `${a}${b}${c}` );//Для вставки переменных в строку
    }
    return 'Error. Enter positive numbers';
}
console.log(concat(a,b,c));

//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function square (a, b = a) { //на случай если параметр b не передан, то b принимает значение а и будет вычислена площадь квадрата
    if ( a >= 0 && b >= 0 ) {
        return a * b;
    } 

    return 'Error. Enter positive numbers';
}

console.log(square(7));

//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function isPerfectNumber(num) {        
    let sum = 0;

    for(i = 1; i < num; i++) { 
        if (num % i === 0) { //если остаток от деления числа на i(делитель)  равен 0
            sum += i; //то суммируем все i
        }
    } 
    
    if (sum === num) { //если сумма всех i равна сумме числа
        return true; // вернуть true
    }
    
    return false; //иначе вернуть false           
}; 
console.log(isPerfectNumber(120)); 
console.log(isPerfectNumber(496)); 
console.log(isPerfectNumber(8128));

//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
function isPerfectNumberInRange (min, max) {
    let perfectNumbers = '';

    for (min; min <= max; min++) {
        if (isPerfectNumber(min)) {
            perfectNumbers = perfectNumbers + min.toString() + ',';
        }
    }

    if (perfectNumbers !== '') {
        return perfectNumbers;
    }

    return false;
};

console.log(isPerfectNumberInRange (3, 15000));

//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function showTime (h, m = 0, s = 0) {
    if(h[0] !== 0 && h < 10) {
        // h = '0' + h;
        h = `0${h}`;
    } else if (h == '') {
        h = '00';
    }
    if(m[0] != 0 && m < 10) {
        m = `0${m}`;
    } else if (m == '') {
        m = '00';
    }
    if(s[0] != 0 && s < 10) {
        s = `0${s}`;
    } else if (s == '') {
        s = '00';
    }

    return (`${h}:${m}:${s}`);
}

console.log(showTime (9, 5, 45));

let time_ = {
    h: 5,
    s: 7
};

function addZero(n) {
    if( !isNaN(n) ) {
      return n > 9 ? n : "0" + n;
    }
  }

function timeStr(obj) {
  return [
    ( addZero( obj.h ) || "00" ),
    ( addZero( obj.m ) || "00" ),
    ( addZero( obj.s ) || "00" ),
  ].join(":");
}

time_ = {
    h: 4,
    m: 5
};

console.log( timeStr( time_ ) );

//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function showTimeInSeconds (h, m = 0, s = 0) {
    h *= 3600;
    m *= 60;
    let result = h + m + s;

    return result;
}

console.log( showTimeInSeconds (2) );

//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
let time = (n) => {
    let hoursFloat = n / 3600;
        // console.log(hoursFloat);
    let hours = Math.floor(hoursFloat);
        // console.log(hours);
    let minutes = Math.floor((hoursFloat - hours) * 60);
        // console.log(minutes);
    let seconds  = n - ((minutes * 60) + (hours * 3600));

    function addZero (num){
        return num > 9 ? num : `0${num}`;
    }

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
    }

console.log( time(851) );

//Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».
let dateDifference = (h, m = 0, s = 0, h1, m1 = 0, s1 = 0) => {
    if (h == 0) {
        h = 24;
    }
    let seconds = h * 3600 + m * 60 + s;
    let seconds1 = h1 * 3600 + m1 * 60 + s1;
    let secDifference = Math.abs(seconds1 - seconds);

    function Time(n) {
        let hoursFloat = n / 3600;
        let hours = Math.floor(hoursFloat);
        let minutes = Math.floor((hoursFloat - hours) * 60);
        let seconds  = n - ((minutes * 60) + (hours * 3600));
        function addZero (num){
            return num > 9 ? num : `0${num}`;
        }
        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
    }
    return Time(secDifference);
};

console.log(dateDifference(0, 10, 0, 10, 9, 0));


//callback
function first() {
    setTimeout( function() {
        console.log(1);
    }, 500
    );
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log('Я прошел третий урок!')
}

learnJS('JavaScript', done)

learnJS('Javascript', function() {
    console.log('Я прошел третий урок!')
})

//object array
let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
};

delete options.bool;
console.log(options);

for (let key in options) {
    console.log('Свойства ' + key + ' имет значение ' + options[key]);
}
console.log(Object.keys(options).length);

//У нас есть объект, в котором хранятся зарплаты нашей команды:Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
sum = 0;
function summa() {
    if (salaries !== null) {
        for (let key in salaries) {
            sum += salaries[key];
        };
    return sum;
    } else if (salaries == null) {
        return 0;
    }
};
console.log(summa(salaries));

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2. Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект. P.S. Используйте typeof для проверки, что значение свойства числовое.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(menu) {
    for (let key in menu) {
      if (typeof menu[key] == 'number') {
        menu[key] *= 2;
      }
    }
  }
  multiplyNumeric(menu);
  console.log(menu);

//Написать объект ladder - объект, который позволяет подниматься вверх и спускаться. Пример работы должен быть таким:
/* ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
ladder.up(); 
ladder.up();
ladder.showStep(); // 2
ladder.down();
ladder.showStep(); // 1 */

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log( this.step );
      return this;
    }
  }
  
  ladder.up().up().down().up().down().showStep(); // 1

let arr = [1,2,3,4,5];
/* arr[99] = 99;
console.log(arr.length);
console.log(arr); */
/* arr.pop(); //delete last element
arr.push('5');//add last element
arr.shift();//delete first element
arr.unshift('1');//add first element */
/* for (let i = 0; i<arr.length; i++) { //каждый раз когда наш цикл запущен, у него вызывается команда console.log, мы берем наш массив и достукиваемся до каждого элемента [i]
    console.log(arr[i]);
} */
let arr = ['first',2,3,'four',5];
//метод перебора forEach
//пишем имя массива для которого применить, далее метод forEach(). здесь будем использовать понятие callback ФУНКции.  Мы берем каждый элемент из массива и применяем к нему эту функцию. item - каждый элемент в нашем массиве.  i - номер нашего элемента. третий аргумент, который можем передать - это сам массив (mass). 
arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + '(массив: ' + mass + ')');//вывести в консоль номер элемента, который перебирается + переменная item, которая сюда будет попадать номер, который здесь задан. далее используем наш массив mass
});
console.log(arr);

//метод перебора forof
let mass = [1,2,3,6,7];

//выведет номера элементов
for (let key in mass) {
    console.log(key);
}

//выведет значения элементов
for (let key of mass) {
    console.log(key);
}

//practice
//записать элементы в массив, через запятую
let ans = prompt('', '');
let arr = [];
arr = ans.split(',');
console.log(arr);

//забираем элементы из массива через запятую. тип данных string будет
let arr = ["aawe", "zzz", 'pp', 'rqa'];
let i = arr.join(', ');
console.log(i);

//сортировка по алфавиту
let arr = ["aawe", "zzz", 'pp', 'rqa'];
let i = arr.sort();
console.log(arr);

//сортирорвка чисел
let arr = [1,15,4];
let i = arr.sort(compareNum);
function compareNum(a,b) {
    return a-b;
}
console.log(arr);

//ООП
let solder = {
    health: 400,
    armor: 200
};
let john = {
    health: 100
};
john.__proto__ = solder;
console.log(john);
console.log(john.armor);


//Динамическая типизация