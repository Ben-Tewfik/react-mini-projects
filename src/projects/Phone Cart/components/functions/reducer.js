export default function reducer(state, action) {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    const filteredCart = state.cart.filter(
      cartItem => cartItem.id !== action.payload
    );
    return { ...state, cart: filteredCart };
  }
  if (action.type === "INCREASE") {
    const tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    const tempCart = state.cart.map(cartItem => {
      if (cartItem.amount <= 1) {
        return { ...cartItem, amount: 1 };
      }
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  throw new Error("no such action exist");
}
