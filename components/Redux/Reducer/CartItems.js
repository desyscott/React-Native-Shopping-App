//The reducer modifies the state and return a new state
const CartItems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      //appending the items we adding into the existing items state
      return [...state, action.payLoad];

    case "REMOVE_FROM_CARD":
      //we will filter the cartItems that was click and check for cartItem.id and get the
      //ones that don't match the ones that was click
      return state.filter((cartItem) => cartItem.id !== action.payLoad.id);
  }
  return state;
};

export default CartItems;
