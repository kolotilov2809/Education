'use strict'

//JSON - JS object notation. Является текстовым форматом обмена данных. Используется не только для передачи, но и хранения данных
//JSON это набор пар ключ:значение, как и в объекте, главным правилом будет , что все строки должны быть в двойных кавычках
//В качестве значений могут быть объекты, массивы, числа, строки, логические значения или NULL.

//объект persone. Данный объект надо передать на сервер
const persone = {
    name: 'Alex',
    tel: '+744444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
//stringify - превращает объекты JS в нужный формат для передачи
console.log(JSON.stringify(persone));//{"name":"Alex","tel":"+744444"} по факту получаем объект, все наши сущности записаны в двойные кавычки

//когда с сервера приходит JSON. для превращения в обычный объект используется метод parse
console.log(JSON.parse(JSON.stringify(persone)));//{ name: 'Alex', tel: '+744444' }

//глубокое клонирование - создаются при помощи json. 
const clone = JSON.parse(JSON.stringify(persone));// JSON.stringify(persone) - превратит существующий объект в формат json. JSON.parse - распарсит его обратно в объект JS и поместит его в объект clone. При этом будет создан глубокий клон, который не зависит от первоначального объекта

//проверка, что  изменения в клоне не повлияли на родителя
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);