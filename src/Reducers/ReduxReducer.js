const initialValues = {
  cardDetails: [],
};

export default function ReduxReducer(state = initialValues, action) {
  switch (action.type) {
    case "ADD_CART": {
      return {
        ...state,
        cardDetails: [...state.cardDetails, action.data],
      };
    }
  }
  return state;
}
