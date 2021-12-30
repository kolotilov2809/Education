//передача по ссылке или по значению
"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

/* const copy = obj;//передает ссылку

copy.a = 10;

console.log(copy);
console.log(obj);  */

//для создания копий
// 1) через функцию
function copy(mainObj) {//функция внутри себя принимает аргумент mainObj
    //эта функция занимается тем, что при помощи цикла она создаст новый объект уже перебирая старые свойства,которые были в нашем объекте
    
    //создаем копию
    let objCopy = {};

    //создаем переменную key
    let key;
    //у нас есть key ключи  внутри объекта mainObj
    for (key in mainObj) {
        objCopy[key] = mainObj[key];//копирование наших свойств
    }
    //возвращаем наружу
    return objCopy;
}

//на конкретном примере , как работает функция
//создаем объект numbers, с вложенным объектом
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

//скопируем через функцию copy 
const newNumbers = copy(numbers);
//поменяем значение a. в объекте numbers a  не поменялась и равна 2, в объекте newNumbers а равна 10 стала
newNumbers.a = 10;

//в данном случае с.х стала равна 10 и у numbers и у newNumbers. Когда вот так мы клонируем объекты, то есть два главных понятия: 1) глубокие и 2) повехностные копии объектов. Сейчас мы создали поверхностную копию. Потому что она берет все обычные свойства, которые были в родителе и создает как бы независимые структуры(a,b). Но как только у нас здесь появляется вложенная структура, например массив или объект (с{x,y}). То это свойство опять же будет иметь ссылочный тип данных.
newNumbers.c.x = 10;

//сравнение двух объектов
console.log(newNumbers);
console.log(numbers);

// 2) Object.assign - у глобального типа данных object есть метод assign, который позволяет соединить несколько объектов.
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));//assign(1 в который соединяем, 2 что соединяем)

//пример создания копии. в clone лежит поверхностная копия объекта
const clone = Object.assign({},add);
clone.d = 20;
console.log(add);
console.log(clone);

// 3) для создания копии массива
const oldArray = ['a','b','c'];
const newArray = oldArray.slice();//скопировать весь массив
newArray[1] = 'asdasdsd';
console.log(newArray);
console.log(oldArray);

// 4) использование оператора разворота - spread
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
// internet = [...video, ...blogs, 'vk', 'facebook'] - ... позволяет сработать оператору spread
console.log(internet);

//еще один пример
function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
//допустим что этот массив мог прийти с сервера. Но функция не принимает массив. 
const num = [2,5,7];
//и тогда мы используем spread оператор и этот массив разложится на три отдельных элемента
log(...num);

//на примере massiva
const array = ['a','b'];

const newAarray = [...array];
console.log(newAarray);

//на примере объекта
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);