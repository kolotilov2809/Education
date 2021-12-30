console.log(document.head);

//получить всю html
console.log(document.documentElement);

//родительский элемент это тот, который объединяет другие, находящиеся внцутри него. Получаем узлы, которые являются детьми у body. childNodes - позволяет получить все ноды, узлы , которые находятся внутри этого родителя
console.log(document.body.childNodes);

//получить первого и последнего ребенка внутри родителя
console.log(document.body.firstChild);
console.log(document.body.lastChild);

//если элемент предполагаем использовать только один раз, то его не нужно помещать в какую то переменную. В данном примере мы получаем элемент с id current. далее чтобы узнать родителя у этого элемента используем parentNode. Мы можем так же получить родителя еще выше, если использовать parentNode еще раз
console.log(document.querySelector('#current').parentNode.parentNode);

//Про data атрибуты. Когда мы прописываем различные скрипты, иногда может не хватать каких то ориентиров. Как получать эти атрибуты
//nextSibling - получить следующий соседа ноды
console.log(document.querySelector('[data-current="3"]').nextSibling);

//получить предыдущего соседа ноды
console.log(document.querySelector('[data-current="3"]').previousSibling);

//для получения элемента
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

console.log(document.querySelector('[data-current="3"]').previousElementSibling);

//для получения родителя элемента
console.log(document.querySelector('#current').parentElement);

//для получения элемента
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

//для получения элементов внутри родителя, но без текстовых нод
for (let node of document.body.childNodes) {
    //если у этой ноды название ноды == '#text'
    if (node.nodeName == '#text') {
        //continue позволит остановить цикл и позволит начать его заново с каким то другим новым элементом
        continue;
    }

    console.log(node);
}