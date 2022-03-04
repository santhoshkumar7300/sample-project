const initialValues = {
  cardDetails: [],
  signup: "",
};

// const handleCart = (state, action) => {
//   // console.log(action);
//   // console.log({
//   //   ...state,
//   //   cardDetails: [...state.cardDetails, action.data],
//   // });
//   return {
//     ...state,
//     cardDetails: [...state.cardDetails, action.data],
//   };
// };

export default function ReduxReducer(state = initialValues, action) {
  switch (action.type) {
    case "ADD_CART": {
      console.log(action.data);
      return {
        ...state,
        cardDetails: [...action.data],
      };
    }

    default:
      return state;
  }
}
