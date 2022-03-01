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
