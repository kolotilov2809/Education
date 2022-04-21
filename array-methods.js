'use strict';

// filter
//фильтрует элементы в массиве  через функцию
//надо задать правило, как фильтровать

/* const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames); */

/* const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(name => name.length<5);//получить все имена, которые короче 5 символов

console.log(shortNames); */

//map
//используется для трансформации массива

/* const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLowerCase());//трансформировать все элементы массива в нижний регистр

console.log(result); */

/* let answers = ['IvAn', 'AnnA', 'Hello'];

answers = answers.map(item => item.toLowerCase());

console.log(answers); */

//every/some
//every - для каждого элемента массива
//some - для какого-нибудь элемента массива

/* const some = [4, 'qwq', 'sststs'];

console.log(some.some(item => typeof(item) === 'number'));//вернет true, потому что хотя бы один элемент подходит под условие

console.log(some.every(item => typeof(item) === 'number')); ////вернет falce, потому что не все элементы массива подходят под условие
*/

//reduce
//используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата
//используется для вычисления на основе массива какого-либо единого значения, иначе говорят «для свёртки массива»
//Он применяет функцию callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат

/* const arr = [4,5,1,3,2,6]
                        //0       4
                        //4       5
                        //9       1
                        //10      3
const res = arr.reduce((sum, current) => sum + current, 3);//если добавить 3, то получим, что массив будет считать сумму от 3, а не от 0  
console.log(res); */

/* const arr = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res); */

//Программирование на JavaScript поддерживает удобный паттерн чейнинг (chaining) – объединение нескольких функций в одну цепочку с последовательной передачей результата
//вывести имена только людей
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
//возвращает массив пар [ключ, значение]
const newArr = Object.entries(obj)//к глобальному объекту вызываем метод entries для obj, чтобы из объекта получить массив [ivan', 'persone'], [ 'ann', 'persone' ],   [ 'dog', 'animal' ], [ 'cat', 'animal' ]
.filter(item => item[1] === 'persone')//фильтруем элементы массива, выбираем только те элементы, где второй элемент(item[1]) равен persone
.map(item => item[0]);//трансформируем массив, чтобы получить только первый элемент (item[0])

console.log(newArr);

//Задачи на закрепление
//Перепишите цикл через map
var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}
console.log( arrLength ); // 4,5,2,5

//через map
const arr = ["Есть", "жизнь", "на", "Марсе"];
const res = arr.map(item => item.length);
console.log(res);

//Массив частичных сумм
/* На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
То есть:
для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
Ещё пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].
    Функция не должна модифицировать входной массив.
    В решении используйте метод arr.reduce. */
    function getSums(arr) {
        var result = [];
        if (!arr.length) return result;
      
        var totalSum = arr.reduce(function(sum, item) {
          result.push(sum);
          return sum + item;
        });
        result.push(totalSum);
      
        return result;
      }
      
      console.log(getSums([1,2,3,4,5])); // 1,3,6,10,15
      console.log(getSums([-2,-1,0,1])); // -2,-3,-3,-2

      function getSums(arr) {
        var result = [];
        if (!arr.length) return result;
      
        var totalSum = arr.reduce(function(sum, item) {
          result.push(sum);
          return sum + item;
        });
        result.push(totalSum);
      
        return result;
      }

      console.log(getSums([1,2,3,4,5])); // 1,3,6,10,15
      console.log(getSums([-2,-1,0,1])); // -2,-3,-3,-2