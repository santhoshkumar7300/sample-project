import axios from "axios";

export default function ApiGet() {
  return axios
    .get("")
    .then((e) => {})
    .catch((error) => console.log(error));
}
export function ApiPost() {
  return axios
    .post("")
    .then((e) => {})
    .catch((error) => console.log(error));
}
