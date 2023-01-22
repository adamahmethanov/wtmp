'use strict';

let menu = [  {name: 'Lingonberry jam', price: 4.00},
                {name: 'Mushroom and bean casserole', price: 5.50},
                {name: 'Chili-flavoured wheat', price: 3.00},
                {name: 'Vegetarian soup', price: 4.80},
                {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}];

const menuJson = JSON.stringify(menu);
console.log(menuJson);
console.log("---")



function isValidMealName(name) {
  const regex = /^[A-Z][A-Za-z0-9\s\-\/,\(\)]{3,63}$/;
  return regex.test(name);
}

menu = menu.sort((a, b) => {
  if (a.price > b.price) {
    return -1;
  }
});
console.log(menu);
console.log("---")
////////


for (let i = 0; i < menu.length; i++) {
  const meal = menu[i];
  if (isValidMealName(meal.name)) {
    console.log(`Meal name "${meal.name}" is valid.`);
  } else {
    console.log(`Meal name "${meal.name}" is not valid.`);
  }
}

console.log("---")

for (let i = 0; i < menu.length; i++) {
  const meal = menu[i];
  if ((meal.price) < 5) {
    console.log(`${meal.name} price is less than 5. Price: ${meal.price} `);
  }
}
console.log("---")

let totalPrice = menu.map(bill => bill.price).reduce((acc, amount) => acc + amount);
console.log("Total Price of the food is: " + totalPrice)
