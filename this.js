'use strict';

//this(контекст вызова функции) - это то, что окружает функцию и в каких условиях она вызывается

//Функция может вызываться 4 способами

//1)просто вызов нашей функции
//обычная функция: this = window, но если стоит use strict - undefined
function showThis() {
    console.log(this);
}
showThis();


function showThis(a,b) {
    console.log(this);//undefined
    function sum() {
        console.log(this);//undefined
        // return this.a + this.b;
        return a + b;//замыкание функции, 9
    }

    console.log(sum());
}
showThis(4,5);

// 2)контекст у методов объекта - сам объект

const obj = {
    a: 20,
    b: 15,
    sum: function() {//проверяем контекст вызова этой функции
        console.log(this);//получим объект, в котором находится этот метод
    }
};
obj.sum();//вызываем метод

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);//получим undefined, потому что это уже простой вызов функции. Он уже не относится к методу, это функция которая запускается внутри метода, поэтому контекст вызова потеряла
        }
        shout();
    }
};
obj.sum();

// 3)через оператор new

//this в конструкторах и классах - это новый экземпляр объекта

 function User(name,id) {//функция конструктор, когда она будет вызвана, то создаст новый объект
     this.name = name;//прописываем св-ва, которые обращаются к this. чтобы записать какое то св-во мы обращаемся к чему то(this). К какому то объекту и это действительно будет объект. Внутри функции конструктора контекст вызова для всех методов и св-в будет только что созданный новый объект(в данном случае let ivan = new User('Ivan', 23)). this всегда ссылается на этот экземпляр, который был создан в этой строке new User('Ivan', 23). Соответственно когда мы создаем такой новый объект мы записываем ему новое св-во вместо this мы подставляем ему новый объект('Ivan', 23) и в это св-во name уже передаем то значение, которое передали при создании этого объекта
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello" + this.name); //даже если у нас потом появятся какие то методы внутри этого прототипа, то этот this.name опять же ссылается на тот объект. который мы с вами создали. При чем берет его св-во name которое мы записали в 1 строке(this.name = name;)
     };//это все очень удобно, ведь когда мы создаем новые и новые экземпляры мы просто запоминаем то name и id , который был у этого конкретного поль-ля.
 }
 let ivan = new User('Ivan', 23);


// 4)ручное присвоение this любой функции
// Ручная привязка this: call, apply, bind

function sayName() {
    console.log(this);//{name: "John"}
    console.log(this.name);//John
}

const user = {
    name: 'John'
};

// Функция приобретает свой контекст за счет использования методов call и apply
// sayName.call(user);//во внутрь передаем контекст вызова, который мы хотим передать в эту функцию
// sayName.apply(user);//во внутрь передаем контекст вызова, который мы хотим передать в эту функцию

//разница между call и apply
//например когда функция принимает какие то дополнительные аргументы
//передадим surname
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

// Разница: в call аргументы передаются через запятую , а в apply то аргументы должны передать в массиве
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

//3 метод bind - создает новую функцию связанную с определенным контекстом.
function count(num) {
    return this*num;//не хватает аргумента вызова, на которое умножалось бы число
}

// const double = count.bind(2);//в переменную double помещаем новую функцию. Обращаемся к существующей функции count, используем bind с контекстом вызова 2. в итоге 2 переходит в функцию count к this, а num будет передаваться в функцию double
//Должны понимать что double это новая функция, которой есть жестко привязанный контекст(это 2 которая передается в this). и теперь в double мы можем передавать только один аргумент, который всегда будет удваиватсья.Навсегда забиндили такую функцию
// console.log(double(3));

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);//контекстом вызова будет сам элемент, на котором произошло событие

    //Но так работает не всегда. У нас есть стрелочные функции, которые мы можем использоваться в качестве callback функции.
    //ПРАВИЛО: когда у нас обработчик события {function() console.log(this)} идет как callback функция написанная в классическом режиме "function()", вот в таком случае контекст вызова будет сам элемент, на котором произошло событие. По простому this здесь будет равняться тоже самое , что eventTarget, то есть когда мы обращаемся к самому элементу, на котором произошло событие

    //пример
    //тоже самое будет, если будем использовать eventTarget
    this.style.backgroundColor = 'red';

});


//стрелочные функции и как они работают с контекстом вызова
//у стрелочных функций нет своего this. Стрел функ всегда берет его у своего родителя.

//создадим объект
let obj = {
    num: 5,
    sayNumber: function() {//это будет метод, методы у объектов когда мы используем контекст внутри они ссылаются на сам объекты
        const say = () => {//и создадим функцию say. Это будет стрелочная функция 
            //если бы здесь была обычная функция, то this  превратился бы в undefined
            //Но мы используем стрелочную функ, а у нее нет своего this. Она всегда берет контекст у своего родителя. Родителем данной функции является метод sayNumber. У метода всегда this ссылается на объект в котором он существует
             //Соответственно этот this будет ссылаться на сам объект, потому что он берет контекст своего родителя
            console.log(this);//вывод {num: 5, sayNumber: ƒ}
            console.log(this.num);//вывод 5. Потому функция say обратилась к контексту вызова объекту и взяла сво-во num
           

            //say = () => переделать в обычную функцию, то будет ошибка
        };

        say();
    }
};

obj.sayNumber();

//мтрел функ была создана, чтобы укорачивать код. Если теле функции помещается в одну строку, то можно написать без фигурных скобок, return писать уже не надо, оно подставится автоматически.
//Так же если стрел функ принимает только один аргумент, то может быть написана без кргулых скобок const double = (a) => a * 2;
const double = a => a * 2;
console.log(double(4));

const calc = (a,b) => a*b;
console.log(calc(4,2));

//контекст вызова в обработчиках события, если мы используем стрел функ
const btn = document.querySelector('button');

btn.addEventListener('click', () => {//
    this.style.backgroundColor = 'red';//backgroundColor of undefined. Это значит что контекст вызова потерялся. Потому что у стрел функ своего this нет. поэтому она обращается к undefined, а если бы не было 'use strict' то обращалась бы к window. 
    //ПРАВИЛО: в обработчиках событий когда мы используем обычный синтаксис через function мы имеем доступ к this, тк это тот элемент на котором происходит событие., тоже самое что и eventTarget. Но мы используем  () =>, поэтому теряется.
    // Чтобы это сработало, мы долдны передать event(e) и прописать eventTarget
    //btn.addEventListener('click', (e) => {//
    //e.target.style.backgroundColor = 'red';



});