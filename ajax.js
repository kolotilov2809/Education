//асинхронное выполнение задач и общение с сервером
'use strict'

//AJAX - асинхронный JS и XML

//получаем доступ к инпутам на странице с id rub и usd
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

//Реализуем поведение: мы вводим в инпут rub, далее после обработки на сервере, в инпут usd будет приходить результат

//назначаем обработчик события input, используем callback функцию
inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();//далее нам надо сделать запрос на сервер. Мы воспоьзуемся встроенным объектом XMLHttpRequest

    request.open('GET', 'js/current.json');//метод open - собирает настройки, которые в будущем помогут сделать запрос. Принимает в себя несколько аргументов: (method - используется для запроса(get,post), url-путь к нашему серверу, async-асинхронность чтобы код продолжал выполняться, пока идет запрос на сервер, login-логин, pass-пароль).

    //Теперь надо донастроить наш запрос. Когда отправляем запрос, надо так же сказать, что именно мы отправляем.Для всего этого существуют HTTP заголовки. В данном случае будем использовать заголовок для передачи JSON файла
    //Для этого мы используем все тот же объект request  и используем метод setRequestHeader, в нем мы должны указать значения: Сontent-type тип контента, далее указываем какой тип, для нашего json файла это будет application/json и указываем кодировку charset=utf-8, которую будем использовать 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //теперь отправляем запрос
    request.send();//метод send, может отличаться в зависимости от типа запроса. GET - просто запрашиваем информацию с сервера. POST - значит что мы еще отправляем информацию на сервер и тогда записыаается send(body). body - данные отправляемые на сервер


    //св-ва
    //status - показывает статус нашего запроса(201,404 и тд)
    //statusText - текстовое описание ответа от сервера(ок,accepted и тд)
    //response - ответ 
    //readyState - содержит текущее состояние нашего запроса


    //события
    //readystatechange - это событие отслеживает статус готовности нашего запроса в данный текущий момент
    //это первое событие readystatechange, оно используется довольно редко

/*     request.addEventListener('readystatechange', () => {
        //если request статус готовности равен 4 и request статус будет равен 200(запрос успешно завершен)
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);//тогда вывести в консоль ответ
            
            //в переменную data   мы будем парсить(переводить в какой то понятный формат). в итог в data мы получаем JS объект, который можем использовать
            const data = JSON.parse(request.response);

            //далее рассчитываем курс валют = значение из inputRub / значение current.usd(74)
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {//на случай если что то пошло не так
            inputUsd.value = 'Что то пошло не так';
        }
    });

 */

//чаще всего когда используют XMLHttpRequest используют событие load. Оно проще, срабатывает только один раз, когда запрос полностью готов

request.addEventListener('load', () => {
    //если request статус готовности равен 4 и request статус будет равен 200(запрос успешно завершен)
    if (request.status === 200) {
        const data = JSON.parse(request.response);

        //далее рассчитываем курс валют = значение из inputRub / значение current.usd(74)
        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {//на случай если что то пошло не так
        inputUsd.value = 'Что то пошло не так';
    }
});

});