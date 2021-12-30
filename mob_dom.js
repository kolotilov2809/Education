//touchstart - касание элемента, аналог клика
//touchmove -    нажали пальцем на экран и начинаем по нему водить
//touchend - когда палец перестает касаться поверхности
// touchenter - когда палец заходит на какой то элемент 
// touchleave - когда палец покинул элемент
// touchcancel -  когда наш палец не регистрируется на территории браузера

//в window.addEventListener помещаем обработчик события DOMContentLoaded, и прописываем callback function
window.addEventListener('DOMContentLoaded', function(){
    //нам нужен элемент, с которым мы будем взаимодействовать - это div, который достаем через класс box
    let box = document.querySelector('.box');

    //назначаем событие box.addEventListener(событие touchstart, далее callback function(event))
  /*   box.addEventListener('touchstart', function(e) {
        //чтобы избавиться от всех негативных влияний поведения браузера e.preventDefault();
        e.preventDefault();
        //для проверки, что наше событие работает выводим в консоль
        console.log("Red box: touchstart");
        //свойства объекта event
        console.log(e.target);//получим тот элемент, в который тыкнули
        console.log(e.touches[0].target);//св-ва мобил устройств
        // console.log(e.touches);
        console.log(e.changedTouches);
        console.log(e.targetTouches);

    }); */

    //touchmove -    нажали пальцем на экран и начинаем по нему водить
    box.addEventListener('touchmove', function(e) {
        //чтобы избавиться от всех негативных влияний поведения браузера e.preventDefault();
        e.preventDefault();
        //для проверки, что наше событие работает выводим в консоль
        // console.log("Red box: touchmove");
        console.log("Red box: " + e.touches[0].pageX);//получим координату по осе Х
    });

    //touchend - когда палец перестает касаться поверхности
    /* box.addEventListener('touchend', function(e) {
        //чтобы избавиться от всех негативных влияний поведения браузера e.preventDefault();
        e.preventDefault();
        //для проверки, что наше событие работает выводим в консоль
        console.log("Red box: touchend");
    }); */


    //регулярные выражения - служат для того, чтобы удобно работать со строками(удалять, заменять части слов,ограничивать ввод определенных знаков). Состоят всегда из 2 частей: 1) паттерн 2) флаги
    //два варианта написания регул выраж
    //1 вар - через конструктор
    // new RegExp('pattern', 'flags');
    //2 вар намного проще
    // /pattern/flags

    //шаблон или паттерн - это то что мы хотим найти(буквы,цифры, различные знаки)
    //флаги - вспомогательные символы
    //i - флаг  регистра - говорит нам, что мы хотим найти что то не зависимо от регистра
    //g - флаг глобальности, то есть ищем не только первое вхождение,а все
    //m - флаг многострочности

    //классы символов
    //  \d - все цифры  \D - искать не число
    //  \w - все буквы  \W - искать не букву
    //  \s - пробелы    \S - искать не пробелы



    // let ans = prompt('Введите ваше имя');

    //создаем регул выраж
    // let reg = /n/ig;

    //метод search. внутри строки ans мы будем искать регул выраж
    //метод search всегда ищет только первое совпадение в строках по регуляр выраж
    // console.log(ans.search(reg));
    //проверка на true или false, есть ли в переменной ans символ n
    // console.log(reg.test(ans));

    //метод match - совпадение
    // console.log(ans.match(reg));

    // let pass = prompt('Vvedite password');

    //в переменной pass.заменить(/. - точка особый символ в регул выраж, он значит , что сейчас мы будем искать или заменять любые символы, которые попадут в нашу строку/g - заменить все символы, вторым аргументом указываем на что заменить *)
    // console.log(pass.replace(/./g, "*"));
    //каждый дефис заменить на :
    // alert('12-34-56'.replace(/-/g, ':'));
    
/*     let ans = prompt('Введите число');

    let reg = /\d/g;

    console.log(ans.match(reg)); */

/*     let str = 'My name is R2D2';

    console.log(str.match(/\w\d\w\d/i)); */

    //для поиска слэша,$ и тому подобных
    let str = 'My name/ is R2D2';

    console.log(str.match(/\//i));

});