const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);


const makeIngredientItem = elements => {
  return elements.map(ingredient => {
    const ingredientElement = document.createElement('li');
    ingredientElement.classList.add('item')
    ingredientElement.textContent = ingredient;
    
    return ingredientElement;
  });
}

const ingredientItem = makeIngredientItem(ingredients);
ingredientsList.append(...ingredientItem);


// через фор --------------------------------------------------------------

// for (let i = 0; i < ingredients.length; i+= 1) {
//   const ingredient = ingredients[i];
//   // console.log(ingredient);

//   const ingredientItem = document.createElement('li');
//   ingredientItem.classList.add('item')
//   ingredientItem.textContent = ingredient;
//   ingredientItem.append(ingredient);

//   ingredientsList.append(ingredientItem);
// }

