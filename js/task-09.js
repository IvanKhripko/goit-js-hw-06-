/*Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}*/

const bodyEl = document.body;
const colorValueEl = bodyEl.querySelector('.color');
const changeColorButtonEl = bodyEl.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorButtonEl.addEventListener('click', onButtonElClick);

function onButtonElClick(event) {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;

  colorValueEl.textContent = color;
}
