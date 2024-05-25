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
  if (action.type === "TOTAL_ITEMS") {
    let { amount, total } = state.cart.reduce(
      (totalItems, currItem) => {
        const { amount, price } = currItem;
        const totalPrice = price * amount;
        totalItems.amount += amount;
        totalItems.total += totalPrice;
        return totalItems;
      },
      { amount: 0, total: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, amount, total };
  }

  throw new Error("no such action exist");
}
