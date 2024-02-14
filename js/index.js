// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((el) => {
    if (state.mushrooms) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((el) => {
    if (state.greenPeppers) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((el) => {
    if (state.whiteSauce) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((el) => {
    if (state.glutenFreeCrust) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((button) => {
    const secondClass = button.classList[1];

    let buttonState = false;
    if (secondClass === 'btn-pepperoni') {
      buttonState = state.pepperoni;
    } else if (secondClass === 'btn-mushrooms') {
      buttonState = state.mushrooms;
    } else if (secondClass === 'btn-green-peppers') {
      buttonState = state.greenPeppers;
    } else if (secondClass === 'btn-sauce') {
      buttonState = state.whiteSauce;
    } else if (secondClass === 'btn-crust') {
      buttonState = state.glutenFreeCrust;
    }

    if (buttonState === true) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}
// WRONG !!!!!!!!!!!!!!!!!!!

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pepPrice = document.getElementsByClassName('price-pepperoni')[0];
  const mushPrice = document.getElementsByClassName('price-mushrooms')[0];
  const greenPeperPrice = document.getElementsByClassName(
    'price-green-peppers'
  )[0];
  const whiteSaucePrice =
    document.getElementsByClassName('price-white-sauce')[0];
  const crustPrice = document.getElementsByClassName(
    'price-gluten-free-crust'
  )[0];
  const totalPriceElement = document.getElementsByClassName('total-price')[0];
  let totalPrice = basePrice;

  if (state.pepperoni) {
    pepPrice.style.display = 'block';
    totalPrice += ingredients.pepperoni.price;
  } else {
    pepPrice.style.display = 'none';
  }
  if (state.mushrooms) {
    mushPrice.style.display = 'block';
    totalPrice += ingredients.mushrooms.price;
  } else {
    mushPrice.style.display = 'none';
  }
  if (state.greenPeppers) {
    greenPeperPrice.style.display = 'block';
    totalPrice += ingredients.greenPeppers.price;
  } else {
    greenPeperPrice.style.display = 'none';
  }
  if (state.whiteSauce) {
    whiteSaucePrice.style.display = 'block';
    totalPrice += ingredients.whiteSauce.price;
  } else {
    whiteSaucePrice.style.display = 'none';
  }
  if (state.glutenFreeCrust) {
    crustPrice.style.display = 'block';
    totalPrice += ingredients.glutenFreeCrust.price;
  } else {
    crustPrice.style.display = 'none';
  }

  totalPriceElement.textContent = `\$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
    // console.log('lala', state.pepperoni);
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
