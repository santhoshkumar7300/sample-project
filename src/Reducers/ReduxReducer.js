const initialValues = {
  cardDetails: [],
  cartCount: 0,
  signup: "",
};

export default function ReduxReducer(state = initialValues, action) {
  switch (action.type) {
    case "ADD_CART": {
      return {
        ...state,
        cardDetails: [...state.cardDetails, action.data],
      };
    }
    case "CART_COUNT": {
      return {
        ...state,
        cartCount: state.cartCount + action.data,
      };
    }
    case "SIGN_UP": {
      return {
        ...state,
        signup: action.data,
      };
    }
  }
  return state;
}
