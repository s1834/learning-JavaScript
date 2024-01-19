// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
console.log('Importing module');

// addToCart("bread", 5);
// console.log(price, tq);

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js';
add('pizza', 2);

// console.log("Start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("something");

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return {title: data.at(-1).title, text: data.at(-1).body};
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // lastPost.then((last) => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    {product: 'bread', quantity: 5},
    {product: 'pizza', quantity: 5},
  ],
  useer: {loggedIn: true},
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.useer.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
