export default function reducer(state, action) {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  throw new Error("no such action exist");
}
