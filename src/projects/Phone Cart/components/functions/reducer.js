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

  throw new Error("no such action exist");
}
