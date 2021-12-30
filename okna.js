const prokrutka = document.querySelector('.prokrutka'),
    btn = document.querySelector('button');

/* const width = prokrutka.clientWidth;
const height = prokrutka.clientHeight; */
/* const width = prokrutka.offsetWidth;
const height = prokrutka.offsetHeight; */
const width = prokrutka.scrollWidth;
const height = prokrutka.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    prokrutka.style.height = prokrutka.scrollHeight + 'px';//раскрыть окно полностью
    console.log(prokrutka.scrollTop);//сколько прочитано
});

//получить все координаты у элемента
console.log(prokrutka.getBoundingClientRect());
//получить конкретное координату
console.log(prokrutka.getBoundingClientRect().top);

const style = window.getComputedStyle(prokrutka);
console.log(style.display);
console.log(style);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);