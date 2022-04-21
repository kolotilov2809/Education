'use strict'

//Function Declaration
/* function showFirstMessage(text) {
    alert(text);
    let num = 20;
}

showFirstMessage('Hello, world!');
console.log(num); */

/* 
console.log(calc(3,4));
console.log(calc(8,4));

function calc(a,b) {
    return(a+b);
}

 */

/* function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum); */

//Function Expression
/* let calc = function(a,b) {
    return(a+b);
}

console.log(calc(3,4));
console.log(calc(8,4)); */

//Стрелочные функции
let calc = (a,b) => a+b

console.log(calc(3,4));
console.log(calc(8,4));

//Методы и свойства
let str = 'test';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

//Решение задач
//Задачи на математические функции JavaScript
//Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
function calc(a,b) {
    return (a%b);
}
console.log(calc(10,3));

// Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
let result;
function calc(a,b) {
    if (a%b == 0) {
        console.log('Делится, result ravno ', result=a/b);
    } else (a%b > 0) {
        console.log('Делится с остатком, ostatok ravno ', result=a%b);
    }
}
console.log(calc(5,5));

/* var a = 10;
var b = 3;
var rest = a % b;
if (rest != 0) {
	alert('Делится с остатком ' + rest);
} else {
	alert('Делится, результат деления: ' + (a / b));
} */

//Возведите 2 в 10 степень. Результат запишите в переменную st.
let st = 2;
console.log(Math.pow(st,10));

//Найдите квадратный корень из 245
let st = 245;
console.log(Math.sqrt(st));

//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (i = 0; i<arr.length; i++) {
    sum += Math.pow(arr[i], 3)
}
console.log(Math.sqrt(sum));

//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let a = Math.sqrt(379);
console.log(Math.round(a), a.toFixed(1), a.toFixed(2));

//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
let a = Math.sqrt(587);
let obj = {
    floor: 0,
    ceil: 0
};
console.log(obj.floor= Math.floor(a), obj.ceil= Math.ceil(a), obj);

//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
let arr = [4, -2, 5, 19, -130, 0, 10];
console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10), Math.min(4, -2, 5, 19, -130, 0, 10));

// Выведите на экран случайное целое число от 1 до 100.
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

//Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while)
let arr = [];
for (i = 0; i<10; i++) {
    arr[i] = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
}
console.log(arr);

//Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
let a = 5,
    b = 10;
console.log(Math.abs(a-b));

//Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
let a = 3,
    b = 5,
    c;
console.log(c = Math.abs(a-b));

var dd = [27, 03, 98];
var DD=(new Date(Date.parse(dd.join("")))).toString()
console.log(DD)

//Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
let arr = [12, 15, 20, 25, 59, 79];
let sum = 0;
let sr;
for (i = 0; i<arr.length; i++) {
    sum += arr[i];
    sr = sum / arr.length;
}
console.log(sr);

//Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
let a = 3, fak = 1;
for (i = 1; i <=a; i++) {
    fak *= i;
}
console.log(fak);

//Задачи на функции работы со строками
//Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
let text = 'aaa@bbb@ccc';
console.log(text.replace(/@/g, "!"));

//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
let str = 'aaa bbb ccc';
console.log(str.substr(4,3), str.substring(4,7), str.slice(4,7));

//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
let date = '2025-12-31';
let arr = date.split('-');
console.log(arr[2] + '/' + arr[1] + '/'+arr[0]);

//Дана строка 'js'. Сделайте из нее строку 'JS'.Дана строка 'JS'. Сделайте из нее строку 'js'.
let str = 'js';
let rts = 'JS';
console.log(str.toUpperCase(), str.toLowerCase());

//Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
let str = 'я учу javascript!';
console.log(str.length);

//Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str = 'я учу javascript!';
console.log(str.substr(2, 3));
console.log(str.substring(2, 5));
console.log(str.slice(2, 5));
console.log(str.substr(6, 10));
console.log(str.substring(6, str.length - 1));
console.log(str.slice(6, - 1));

//Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
let str = 'я учу javascript!';
console.log(str.indexOf('учу'));

//Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
let str = 'я учу javascript!';
let n = 10;
let result;
if (str.length>n) {
    console.log(result = str.substr(0,9) + '...');
} else {
     console.log(result = str);
}

//Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
let str = 'Я-учу-javascript!';
console.log(str.replace(/-/g, "!"))

//Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива
let str = 'я учу javascript!';
let arr = str.split(' ');
console.log(arr);

//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
let date = '2025-12-31';
let arr = date.split('-');
console.log(arr[2] + '.' + arr[1] + '.'+arr[0]);

//Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'
let arr = ['я', 'учу', 'javascript', '!'];
console.log(arr.join('+'));

//Преобразуйте первую букву строки в верхний регистр.
let str = 'я учу javascript!';
console.log(str.substr(0,1).toUpperCase()+str.substr(1));

//Преобразуйте первую букву каждого слова строки в верхний регистр.
let str='я учу javascript!';
let arr=str.split(' ');
for (i=0; i<arr.length; arr[i]=arr[i].substr(0,1).toUpperCase()+arr[i].substr(1), i++);
console.log(arr);

//Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
let str='var_test_text';
let arr=str.split('_');
for (i=1; i<arr.length; arr[i]=arr[i].substr(0,1).toUpperCase()+arr[i].substr(1), i++);
console.log(arr.join(''));

//Задачи на функции работы с массивами
//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
let a = ['a', 'b', 'c'];
let b = [1, 2, 3];
console.log(a.concat(b));

//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let arr = ['a', 'b', 'c'];
arr.push(1,2,3);
console.log(arr);

//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a.concat(b));

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arr = [1, 2, 3];
console.log(arr.reverse());

//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let arr  = ['js', 'css', 'jq'];
let elem = arr.shift();
console.log(elem);

//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let arr  = ['js', 'css', 'jq'];
let elem = arr.pop();
console.log(elem);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
let arr  = [1, 2, 3, 4, 5];
let newArr = arr.slice(0,3);
console.log(newArr);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
let arr  = [1, 2, 3, 4, 5];
let newArr = arr.slice(3);
console.log(newArr);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
let arr  = [1, 2, 3, 4, 5];
arr.splice(1,2);
console.log(arr);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]
let arr  = [1, 2, 3, 4, 5];
let newArr = arr.splice(1,3);
console.log(newArr);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr  = [1, 2, 3, 4, 5];
arr.splice(3,0,'a','b','c');
console.log(arr);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr  = [1, 2, 3, 4, 5];
arr.splice(1,0,'a','b');
arr.splice(6,0,'c');
arr.splice(8,0,'e');
console.log(arr);

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let arr  = [3, 4, 1, 2, 7];
console.log(arr.sort());

//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
let obj = {js:'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj));

//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения
let str = 'я учу javascript!';
console.log(str.substr(0,1).toUpperCase()+str.substr(1));

let str = 'hello';
str = str[0].toUpperCase() + str.substr(1);
console.log(str);

let str = 'hello';
str = str.split('');
str[0] = str[0].toUpperCase();
let result = str.join('');
console.log(result);

// Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл
let str = '123456';
console.log(str.split('').reverse().join(''));

//Проверьте, что строка начинается на http://
let str = 'http://vk.abc';
if (str.substr(0,7) == 'http://') {
    console.log('Yes');
} else {
    console.log('No');
}

//Проверьте, что строка заканчивается на .html
let str = 'index.html';
if (str.substr(-5) == '.html') {
    console.log('Yes');
} else {
    console.log('No');
}

//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function kvad(a) {
    return(a*a);
}
console.log(kvad(2));

//Сделайте функцию, которая возвращает сумму двух чисел
function kvad(a,b) {
    return(a+b);
}
console.log(kvad(2,3));

//Сделайте функцию, которая отнимает от первого числа второе и делит на третье
function kvad(a,b,c) {
    return((a-b)/c);
}
console.log(kvad(5,3,2));

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке
function dayOfWeek(a) {
    let day = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
    return day[(a-1)];
    }
console.log(dayOfWeek(3));


//пример с флагами
function hasElem(arr) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == 'c') {
			return true;
		}
	}

	return false; //элемент 'c' не найден
}
let arr = ['a', 'b', 'c', 'd', 'с'];
console.log(hasElem(arr));

//Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'
function hasElem(arr) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == 5) {
			return true;
		}
	}

	return false; //элемент 5 не найден
}
let arr = [3, 4, 1, 2, 7];
console.log(hasElem(arr));

//Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
function delite(num) {
    for (i = 2; i<num; i++) {
        if (num%i == 0) {
            return true;
        }
    }
    return false;
}
console.log(delite(31));

//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
let arr = [1,3,5,9,9,8,2,7];
function odinak(arr) {
    for (i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i-1]) {
            return true;
        }
    }
    return false;
}
console.log(odinak(arr));

//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
function checkNum(a,b) {
    if (a == b) {
        return true;
    }
    return false;
}
console.log(checkNum(5,5));

//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
function checkNum(a,b) {
    if (a + b > 10) {
        return true;
    }
    return false;
}
console.log(checkNum(5,54));

//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
function checkNum(a) {
    if (a < 0) {
        return true;
    }
    return false;
}
console.log(checkNum(-5));

//С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str
let str = '';
for (let i = 1; i<10; i++) {
    str += i;
}
console.log(str);

//С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
let str = '';
for (let i = 9; i>0; i--) {
    str += i;
}
console.log(str);

//С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
let str = '';
for (let i = 1; i<10; i++) {
    str += i + '-';
}
console.log('-' + str);

//Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
let str = '';
for (i = 1; i<21; i++) {
    str += 'x';
    console.log(str + '<br>');
}

//С помощью двух вложенных циклов нарисуйте следующую пирамидку
for (i = 1; i <10 ; i++) {
    for (j = 1; j < i+1; j++) {
        console.log(i);
    }
    console.log('<br>');
    }

//Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for
let str = '';
for (i = 0; i<5; i++) {
    str += 'xx';
    console.log(str + '<br>');
}

//Задачи на приемы работы с массивами 
//Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее
let arr = [];
let str = '';
for (i = 0; i<21; i++) {
    str += 'x';
    arr[i]=str;
}
console.log(arr);

//Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее
let arr = [];
for(i = 1; i < 10; i++) {
let str = '';
for (j = 0; j < i; j++)
{
str += i;
arr[i-1]=str;
}
}
console.log(arr);

//Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function arrayFill(value, length) { 
	let arr = [];
	for (i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

console.log(arrayFill('x', 5));

//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (i=0; i<arr.length; i++) {
sum += arr[i];
if (sum > 10) {
break;
}
}
console.log(i+1);

//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке
function arr(a) {
    let b = [];
    for (i=a.length-1; i>=0; i--) {
    b.push(a[i]);
    }
    return b;
    }
    console.log(arr([1, 5, 6, 7]));

//Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (i = 0; i < arr.length; i++) {
	for (j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	}
}
console.log(sum);

//Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (i = 0; i < arr.length; i++) {
	for (j = 0; j < arr[i].length; j++) {
  		for (k = 0; k < arr[i][j].length; k++) {
			sum += arr[i][j][k];
   		}
	}
}
console.log(sum);

//Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
let arr = [1, 2, 3, -1, -2, -3];

function isPositive(num) {
	if (num >=0) {
		return true;
	} else {
		return false;
	}
}

let newArr = [];
for (i = 0; i <= arr.length; i++) {
	if (isPositive(arr[i])) {
		newArr.push(arr[i]);
	}
}

console.log(newArr);

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(num) {
    if (num > 0 && num < 10) {
        return true;
    } else {
        return false;
    }
}
console.log(isNumberInRange(-5));

//Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
let arr = [1,2,3,-1,-2,-3];
function isNumberInRange(num) {
    if (num > 0 && num < 10) {
        return true;
    } else {
        return false;
    }
}

let newArr = [];
for (i = 0; i <= arr.length; i++) {
	if (isNumberInRange(arr[i])) {
		newArr.push(arr[i]);
	}
}

console.log(newArr);

//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum (n) {
    let n = String(n);
    let s = 0;
    for (i = 0; i < n.length; i++) {
    s += Number(n[i]);
    }
    return s;
    }
    
    console.log(getDigitsSum(123));
