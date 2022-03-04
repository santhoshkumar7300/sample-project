export const setCart = (data) => {
  console.log(data);
  return {
    type: "ADD_CART",
    data: data,
  };
};
export const signupMsg = (data) => {
  return {
    type: "SIGN_UP",
    data: data,
  };
};
