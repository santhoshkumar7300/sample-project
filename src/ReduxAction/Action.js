export const setCart = (data) => {
  return {
    type: "ADD_CART",
    data: data,
  };
};
export const setCartCount = (data) => {
  console.log(data, "cart count data");
  return {
    type: "CART_COUNT",
    data: data,
  };
};
export const signupMsg = (data) => {
  return {
    type: "SIGN_UP",
    data: data,
  };
};
