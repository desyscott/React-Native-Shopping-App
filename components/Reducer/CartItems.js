const CartItems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      //appending the items we adding into the existing items state
      return [...state, action.payLoad];

    case "REMOVE_TO_CARD":
      //remove if the cartItem id is not equal to payload id
      return state.filter((cartItem) => cartItem.id !== action.payLoad.id);
  }
  return state;
};

export default CartItems;
