// the cart section of the UI
var modal = document.getElementById("modalContent");
// keep track of which items are in the cart in memory
// so that we can manage them in JS as objects rather
// than as HTML

const itemsInCart = [];

// maps the ID of the item to the HTML content
// you can do this with anything, e.g.
// the colors for the stoplight.
// this allows you to have one function for all items
// instead of one function per item
// which means less code to add/remove if items change
const items = {
  item1: "<p>Goddess Blend</p>",
  item2: "<p>God Blend</p>",
  item3: "<p>Royalty Blend</p>"
};
// takes all of the items in the cart and converts them to HTML
// this pattern makes removing items from the cart easier,
// because you can edit the list rather than trying to
// edit the HTML.

const updateCart = () => {
  modalContent.innerHTML = itemsInCart.map((item) => items[item]).join("");
};

// add an item to the list of items, then update the UI
const addItemToCart = (item) => {
  itemsInCart.push(item);
  updateCart();
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

