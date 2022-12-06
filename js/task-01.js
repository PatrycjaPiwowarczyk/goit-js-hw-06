const itemCategories = document.querySelectorAll(".item");
console.log("Number of categories:", itemCategories.length);
("");

const itemList = document.querySelectorAll(".item");

itemList.forEach((el) => {
  console.log("Category:", el.querySelector("h2").textContent), console.log("Elements:", el.querySelector("ul").childElementCount);
});
