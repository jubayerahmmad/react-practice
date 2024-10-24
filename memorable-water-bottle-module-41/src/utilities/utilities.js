const getStoredCart = () => {
  const getStored = localStorage.getItem("cart");
  if (getStored) {
    return JSON.parse(getStored);
  }
  return [];
};

const setLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);

  setLocalStorage(cart);
};

const removeFromLocalStorage = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  setLocalStorage(remaining);
};

export { addToLocalStorage, getStoredCart, removeFromLocalStorage };
