import axios from "axios";
const addToCart = (product, token) => {
  axios
    .post("https://atoovis-be.herokuapp.com/cart", product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => alert(response.data.msg))
    .catch((error) => console.log(error));
};
export default addToCart;
