const counterEl = document.querySelector('#counter');
const valueOfCounterEl = document.querySelector('#value');

const decrementBtnEl = counterEl.firstElementChild;
decrementBtnEl.classList.add('decrement-btn');
const incrementBtnEl = counterEl.lastElementChild;
incrementBtnEl.classList.add('increment-btn');

let counterValue = 0;

decrementBtnEl.addEventListener('click', onDecrementButtonClick);

function onDecrementButtonClick(event) {
  counterValue -= 1;
  valueOfCounterEl.textContent = counterValue;
}

incrementBtnEl.addEventListener('click', onIncrementButtonClick);

function onIncrementButtonClick(event) {
  counterValue += 1;
  valueOfCounterEl.textContent = counterValue;
}
