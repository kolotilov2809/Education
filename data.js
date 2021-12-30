'use strict';

/* const now = new Date('2020-05-01');

console.log(now);

const now = new Date(2000, 5, 1, 20);

console.log(now);

const now = new Date(0);

console.log(now); */

const now = new Date();

/* console.log(now.getFullYear());//метод получения текущего года
console.log(now.getMonth());//месяц(0 - январь)
console.log(now.getDate());//день число
console.log(now.getDay());//день по счету недели(0 - воскресенье)
console.log(now.getHours());//получение местного времени
console.log(now.getUTCHours());//получение UTC 

console.log(now.getTimezoneOffset());//разница во времени между местным и UTC

console.log(now.getTime());//получить колво миллисекунд сколько прошло с 01.01.1970 */

console.log(now.setHours(18, 40));//установить часы, если дописать, то установим минуты
console.log(now);

new Date.parse('2021-12-21');//метод установки времени

//таймстамп. Чтобы засечь время
let start = new Date();

for (let i = 0, i < 100000, i++) {
    let some = i **3;
}

let end = new Date();

//интерполяция. С помощью интерполяции в строку можно поместить результат выполнения любого выражения
alert(`Цикл отработал за ${end - start} миллисекунд`);