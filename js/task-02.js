const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientList = document.querySelector("#ingredients");

ingredients.forEach((el, index) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = ingredients[index];
  ingredient.classList.add("item");
  ingredientList.append(ingredient);
});
