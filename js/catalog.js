/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);


// On screen load, we call this method to put all of the product options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  let newOption = document.createElement('option')
  newOption.textContent = 'Select an Item'
  selectElement.appendChild(newOption);
  for (let i in Product.allProducts) {
    let newOption = document.createElement('option')
    newOption.textContent = Product.allProducts[i].name;
    newOption.setAttribute('value', Product.allProducts[i].name)
    selectElement.appendChild(newOption);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  
  
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  let item = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;
  
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
   cart.addItem(item, quantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
 let counter = document.getElementById('itemCount');
  counter.textContent = cart.items.length
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  let previewScreen = document.getElementById('cartContents')
  let item = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;
  let preview = document.createElement('p');
  preview.textContent = `${item}: ${quantity}`
  previewScreen.appendChild(preview);

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
