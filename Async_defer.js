"use strict";

/* const p = document.querySelectorAll('p');
console.log(p); */


//defer - этот атрибут сообщает браузеру, что он должен продолжать  обрабатывать страницу и загружать скрипт в фоновом режиме,а затем запустить этот скрипт, когда он загрузится. Скрипты всегда выполняются, когда наше DOM дерево готово

//async - этот атрибут дает: 1) страница не ждет асинхронных скриптов, содержимое просто обрабатывается и отображается. 2) события в DOMContentLoaded и асинхронные скрипты не ждут друг друга. Вывод: если мы ставим атрибут async то этот скрипт начинает загружаться, как только до него доходит страница, он загружается в фоновом режиме, но при этом запускается, как только он был загружен. Вообще никого не ждет.

//поместим тег скрипт
const script = document.createElement('script');
script.src = "Async_defer_test.js";
script.async = false;
document.body.append(script);

function loadScript(src) {
    const script = document.createElement('script');
script.src = src;
script.async = false;
document.body.append(script);
}

loadScript('Async_defer_test.js');
loadScript('some.js');

