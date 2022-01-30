'use strict';

//promise - обещание. Для работы с асинхронными операциями(например в таймаутах) или при запросах на сервер. 

//синхронный код
/* console.log('Запрос данных...');//выполнится первым

//создание promise
//создаем переменную req и во внутрь при помощи конструктора  помещаем new Promise
//во внутрь помещаем callback функцию. Обычно когда создаем Promise, эта callback функция принимает у напс 2 аргумента function(resolve, reject).
const req = new Promise(function(resolve, reject){//resolve - что то выполнилось правильно, reject - что то не выполнилось, что то пошло не так. Эти два аргумента обозначают функции. которые мы можем передавать. 
    
    //асинхронный
    //Логика: у нас запускается setTimeout и выполняются действия:
    //1) console.log('Подготовка данных...');
    //2) const product = {name: 'TV',price: 2000};
    //если они правильно выполнились, у нас запускается след setTimeout:product.status = 'order';console.log(product);. Если где то выше будет ошибка, то у нас этот setTimeout не запустится. Поэтому эту часть мы можем заменить функцией resolve()
setTimeout(() => {//закидываем callback функцию
    console.log('Подготовка данных...');//выполнится вторым 

    //далее есть объект с товаром
    const product = {
        name: 'TV',
        price: 2000
    };

    resolve(product);//в resolve мы должны передавать какой то data. в данном случае это product
}, 2000);//выполнится через 2 сек
});

//Promise создан и помещен в переменную req
//метод then выполняется на Promise в случае положительного исхода, те это функция resolve
//для обработки положительных результатов. есть метод then(). Он внутри себя как раз принимает, тот аргумент с функцией, который называется resolve.
//и функция resolve будет принимать в кач-ве аргумента product, который вернулся к нам из предыдущего этапа
req.then((product) => {//Эту функцию заменили  console.log('Данные получены');
    //console.log('Данные получены');
    //после получения данных, мы хотим с ними выполнить тоже какие то операции и сделать это асинхронно
    //setTimeout(() => {
        //product.status = 'order';// к объекту добавили св-во  status = 'order'. Товар заказан, после получения данных о нем 
        //console.log(product);//выводим в консоль что лежит в этой переменной
   // }, 2000);//выполнится должен через 2 сек

   //допустим что после манипуляций надо сделать еще какие то действия, поэтому придется обернуть эту^^ конструкцию в promise
   //создадим новый Promise
   //const req2 = new Promise((resolve, reject) => {
           //setTimeout(() => {//опять же идет модификация данных
       // product.status = 'order';// к объекту добавили св-во  status = 'order'. Товар заказан, после получения данных о нем 
       // resolve(product);//успешное выполнение операций и передаем наши данные в кач-ве продукта, нашего объекта
  // }, 2000);//выполнится должен через 2 сек
  // });
   //далее чтобы использовать наш Promise, говорим что нам пришли какие то данные и запустить функцию, которая является resolve. Мы в resolve поместили product, он придет в кач-ве data и выведим их в консоль
  // req2.then(data => {
       // console.log(data);
  // })

  //лучший вариант. Возвращаем новый Promise. Выше идет первый then. внутри у него есть callback функция, которая принимает определ данные(product), пришедшие от сервера 
  return new Promise((resolve, reject) => {//мы здесь внутри возвращаем новый промис, 
      setTimeout(() => {//который тоже выполняет какую то асинхронную операцию
          product.status = 'order';
          resolve(product);//в итоге когда у нас тут все успешно, мы используем resolve и возвращаем те данные (product),который должен дальше пойти куда то по операциям
          //на случай если не получилось что то
          //reject();
      }, 2000);
  });
//и вот здесь в игру вступает цепочка(chaining js). Так как в предыдущем варианте мы вернули Promise, мы можем дальше его обработать при помощи then
}).then(data => {//вот эти данные data, придут из предыдущей функции resolve
    data.modify = true;//возвращать можно не только promise. например данные мы получили выше. теперь их еще модифицируем. Добавим св-во modify
    return data;//теперь вернем data
}).then(data => {//и далее по этой же цепочке можем их опять обработать. 
    console.log(data);//и далее обрабатываем их любым методом
}).catch(() => {//для reject используют catch и как правило он пишется в самом конце
    console.error('Произошла ошибка');
}).finally(() => {//используется всегда в конце, после всех взаимодействий и ошибок. Выполняет действие при любом исходе Promise
    console.log('Finally');
}); */

//мы создаем обещание, которое помещаем во внутрь переменной req = new Promise. Когда создаем обещание. мы преполагаем, что оно может завершиться, как положительно , так и отрицательно. Но в данный момент мы не знаем, как оно завершиться. У нас есть определ промежуток времени до того как мы получим результат.
//Внутри этого Promise у нас есть 2 аргумента resolve, reject. По факту это аргументы. вместо которых будут подставляться функции. Если все пошло правильно, то вызываем функцию resolve. Если что то пошло не так, то вызываем reject.
//Далее внутри идет имитация асинхронного кода:
//допустим сделали запрос на сервер
/* setTimeout(() => {//запускаем setTimeout
    console.log('Подготовка данных...');//сервер нам вернул такое сообщение
    //сервер вернул вот такие данные
    const product = {
        name: 'TV',
        price: 2000
    };
    //мы эти данные получаем, значит все в порядке и мы должны вызвать функцию resolve, которая говорит, что все ОК.
    resolve();
}, 2000);//и это все произойдет через 2 секунды */

//когда мы начинаем использовать эти Promise мы должны обработать все варианты как resolve, так и reject.
//для обработки положительных результатов. есть метод then(). Он внутри себя как раз принимает, тот аргумент с функцией, который называется resolve.
//Эту функцию заменили  console.log('Данные получены');

//методы all и race

//создаем новую переменную test, она будет функция, принимать аргумент time
const test = time => {
    return new Promise(resolve => {//внутри возвращаем новый Promise. Наш промис принимает один аргумент resolve. reject не используем, но такое бывает очень редко
        setTimeout(() => resolve(), time);//запускаем setTimeout, как асинхронную версию кода, здесь будет выполняться resolve через time
    });
};



//тестирование поведения test
/* test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms')); */

//метод all.  принимает в себя массив промисов. Служит для того чтобы мы убедились, что все наши промисы выполнены. Например мы делаем несколько запросы на разные сервера, чтобы получить определ изображ. эти сервера по разному отвечают(с разным промежутком времени). Но мы хотим чтобы на сайте использовались все изображ , когда они все загрузятся. То есть мы ждем загрузки всех наших промисов и только потом что то делать. Promise.all этим и занимается. Он ждет окончания всех промисов, которые были переданы в массив и только потом будет что то выполнять. В нашем примере код должен выполниться через 2 секунды
//test(1000), test(2000) это две функции, которые содержат промисы и которые вернут нам результат. Обрабатываем их then
/* Promise.all([test(1000), test(2000)]).then(() =>{
    console.log('ALL');
}); */

//race - гонка. Какой из промисов выполнится первым и в таком случае мы выполняем определенную операцию дальше
Promise.race([test(1000), test(2000)]).then(() =>{
    console.log('ALL');
});