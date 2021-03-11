import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      nwt: data.nwt,
      brand: data.brand,
      price: data.price,
      size: data.size,
      description: data.description,
      sex: data.sex,
      category: data.category,
      subCategory: data.subCategory,
      color: data.color,
      subColor: data.subColor,
      countInStock: data.countInStock,
      images: data.images,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().getCartItems));
};
