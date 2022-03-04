import axios from "axios";

export function productlist(data) {
  return axios.post(
    "http://cbe.themaestro.in/ksnm/webservice/productlist",
    data
  );
}
export function cartlist(data) {
  return axios.post("http://cbe.themaestro.in/ksnm/webservice/cartlist", data);
}
export function addtocart(data) {
  return axios.post("http://cbe.themaestro.in/ksnm/webservice/addtocart", data);
}
export function signup(data) {
  return axios.post("http://cbe.themaestro.in/ksnm/webservice/signup", data);
}
export function signupotpverify(data) {
  return axios.post(
    "http://cbe.themaestro.in/ksnm/webservice/signupotpverify",
    data
  );
}
export function resendotpverify(data) {
  return axios.post(
    "http://cbe.themaestro.in/ksnm/webservice/signupresendotp",
    data
  );
}

export function viewProduct(data) {
  return axios.post(
    "http://cbe.themaestro.in/ksnm/webservice/productdetails",
    data
  );
}
export function addtowishlist(data) {
  return axios.post(
    "http://cbe.themaestro.in/ksnm/webservice/addtowishlist",
    data
  );
}
export function removewishlist(data) {
  return axios.post(
    "http://cbe.themaestro.in/ksnm/webservice/removefromwishlist",
    data
  );
}
export function removeCart(data) {
  return axios.post(
    "http://cbe.themaestro.in/ksnm/webservice/removefromcart",
    data
  );
}
export function emptyCart(data) {
  return axios.post("http://cbe.themaestro.in/ksnm/webservice/emptycart", data);
}
