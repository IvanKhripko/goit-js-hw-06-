
const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);

const firstItemEl = categoriesList.firstElementChild;
const headerFirstEl = firstItemEl.firstElementChild;
console.log(`Category: ${headerFirstEl.textContent}`);

const firstCategoryElementsLength = firstItemEl.querySelectorAll('li');
console.log(`Elements: ${firstCategoryElementsLength.length}`);


const secondItemEl = categoriesList.children[1];
const headerSecondEl = secondItemEl.firstElementChild;
console.log(`Category: ${headerSecondEl.textContent}`);

const secondCategoryElementsLength = secondItemEl.querySelectorAll('li');
console.log(`Elements: ${secondCategoryElementsLength.length}`);

const lastItemEl = categoriesList.lastElementChild;
const headerLastEl = lastItemEl.firstElementChild;
console.log(`Category: ${headerLastEl.textContent}`);

const lastCategoryElementsLength = lastItemEl.querySelectorAll('li');
console.log(`Elements: ${lastCategoryElementsLength.length}`);

