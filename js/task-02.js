const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");

ingredients.forEach((element, index) => {
  const item = document.createElement("li");

  item.textContent = element;
  item.classList.add("item");

  listIngredients.append(item);
})

